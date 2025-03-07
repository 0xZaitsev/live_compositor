import type {
  ApiRequest,
  MultipartRequest,
  SmelterManager,
  SetupInstanceOptions,
} from '@swmansion/smelter-core';

import { sendRequest, sendMultipartRequest } from '../fetch';
import { retry, sleep } from '../utils';
import { WebSocketConnection } from '../ws';

type CreateInstanceOptions = {
  port: number;
  ip: string;
  protocol: 'http' | 'https';
};

/**
 * SmelterManager that will connect to existing instance
 */
class ExistingInstanceManager implements SmelterManager {
  private ip: string;
  private port: number;
  private protocol: 'http' | 'https';
  private wsConnection: WebSocketConnection;

  constructor(opts: CreateInstanceOptions) {
    this.port = opts.port;
    this.ip = opts.ip;
    this.protocol = opts.protocol ?? 'http';
    const wsProtocol = this.protocol === 'https' ? 'wss' : 'ws';
    this.wsConnection = new WebSocketConnection(`${wsProtocol}://${this.ip}:${this.port}/ws`);
  }

  public async setupInstance(opts: SetupInstanceOptions): Promise<void> {
    // TODO: verify if options match
    // https://github.com/software-mansion/smelter/issues/877
    await retry(async () => {
      await sleep(500);
      return await this.sendRequest({
        method: 'GET',
        route: '/status',
      });
    }, 10);
    await this.wsConnection.connect(opts.logger);
  }

  public async sendRequest(request: ApiRequest): Promise<object> {
    return await sendRequest(`${this.protocol}://${this.ip}:${this.port}`, request);
  }

  async sendMultipartRequest(request: MultipartRequest): Promise<object> {
    return await sendMultipartRequest(`${this.protocol}://${this.ip}:${this.port}`, request);
  }

  public registerEventListener(cb: (event: object) => void): void {
    this.wsConnection.registerEventListener(cb);
  }

  public async terminate(): Promise<void> {
    await this.wsConnection.close();
  }
}

export default ExistingInstanceManager;
