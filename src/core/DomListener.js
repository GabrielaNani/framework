import {capitalize} from "@core/utils";

const getMethodName = (eventName) => {
  return "on" + capitalize(eventName)
}

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
      const onListener = getMethodName(listener)
      console.log("listener:", "on" + onListener)
      // this.$root.addEventListener(listener, onInput)
      if (!this[onListener]) {
        const name = this.name || ""
        throw new Error(`Method ${onListener} is not implemented ${name}`)
      }
      this.$root.on(listener, this[onListener].bind(this) )
    })
    console.log("listeners:", this.listeners)
    console.log("root:", this.$root)
  }
  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const removeListener = getMethodName(listener)
      console.log("remove: ", removeListener)
      this.$root.off(listener, this[removeListener].bind(this))
    })
  }
}
