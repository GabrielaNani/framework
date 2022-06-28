export class DomListener {
  constructor($root, listeners = []) {
    // if (!$root) {
    //   throw new Error(`No ${$root} provided in DOM Listener`)
    // }
    this.$root = $root
    this.listeners = listeners
  }
  initDOMListeners() {
    this.listeners.forEach(listener => {
      console.log("listener:", "on" + listener)
      // this.$root.addEventListener(listener, onInput)
      // this.$root.on(listener, "on" + listener)
    })
    console.log("listeners:", this.listeners)
    console.log("root:", this.$root)
  }
  removeDOMListeners() {
  }
}
