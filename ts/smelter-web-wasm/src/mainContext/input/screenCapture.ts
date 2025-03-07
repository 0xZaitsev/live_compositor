import type { Input, RegisterInputResult } from '../input';

export class ScreenCaptureInput implements Input {
  private mediaStream: MediaStream;

  constructor(mediaStream: MediaStream) {
    this.mediaStream = mediaStream;
  }

  public get audioTrack(): MediaStreamTrack | undefined {
    return this.mediaStream.getAudioTracks()[0];
  }

  public async terminate(): Promise<void> {
    this.mediaStream.getTracks().forEach(track => track.stop());
  }
}

export async function handleRegisterScreenCaptureInput(
  inputId: string
): Promise<RegisterInputResult> {
  const mediaStream = await navigator.mediaDevices.getDisplayMedia({
    audio: true,
    video: {
      width: { max: 2048 },
      height: { max: 2048 },
    },
  });
  const videoTrack = mediaStream.getVideoTracks()[0];
  const transferable = [];

  // @ts-ignore
  let videoTrackProcessor: MediaStreamTrackProcessor | undefined;
  if (videoTrack) {
    // @ts-ignore
    videoTrackProcessor = new MediaStreamTrackProcessor({ track: videoTrack });
    transferable.push(videoTrackProcessor.readable);
  }

  return {
    input: new ScreenCaptureInput(mediaStream),
    workerMessage: [
      {
        type: 'registerInput',
        inputId,
        input: {
          type: 'stream',
          videoStream: videoTrackProcessor.readable,
        },
      },
      transferable,
    ],
  };
}
