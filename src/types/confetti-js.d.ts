declare module 'confetti-js' {
  interface ConfettiSettings {
    target: string | HTMLCanvasElement;
    max?: number;
    size?: number;
    animate?: boolean;
    respawn?: boolean;
    clock?: number;
    props?: string[];
    colors?: number[][];
    width?: number;
    height?: number;
  }

  class ConfettiGenerator {
    constructor(settings: ConfettiSettings);
    render(): void;
    clear(): void;
  }

  export default ConfettiGenerator;
}

