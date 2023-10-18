export class Observable<DataType> {
  #events: Array<[string, (data: DataType) => void]>

  constructor() {
    this.#events = []
  }

  subscribe(name: string, callback: (data: DataType) => void) {
    this.#events.push([name, callback])
  }

  unsubscribe(name: string, callback: (data: DataType) => void) {
    this.#events = this.#events.filter(
      (event) => event[0] !== name && event[1] !== callback
    )
  }

  notify(name: string, data: DataType) {
    this.#events
      .filter(([eventName]) => eventName === name)
      .forEach(([, callback]) => callback(data))
  }
}
