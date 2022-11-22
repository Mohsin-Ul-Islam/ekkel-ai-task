class DataBus {
  private handlers: Array<(data: number) => void>;

  constructor() {
    this.handlers = new Array();
  }

  publish(data: number) {
    this.handlers.forEach((handler) => handler(data));
  }

  onData(callback: (data: number) => void) {
    this.handlers.push(callback);
  }
}

export default new DataBus();
