import {$} from "@core/dom";

export class Excel {
  constructor(selector, options) {
    this.element = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    // const $root = document.createElement("div")
    const $root = $.create("div", "excel")
    // $root.classList.add("excel")
    this.components.forEach(Component => {
      const $element = $.create("div", Component.className);
      // const $element = document.createElement("div")
      // $element.classList.add(Component.className)
      const component = new Component($element)
      // $element.innerHTML = component.toHTML()
      $element.html(component.toHTML())
      $root.append($element)
    })
    return $root
  }

  render() {
    // this.element.insertAdjacentHTML("afterbegin", "<h1> Eu pot </h1>")
    // const node = document.createElement("h1")
    // this.element.append(node)
    // node.textContent = "Eu pot"
    this.element.append(this.getRoot())
  }
}
