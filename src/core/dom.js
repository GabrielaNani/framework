class Dom {
  constructor(selector) {
    this.$element = typeof selector === "string"?
        document.querySelector(selector) : selector
  }
  html(html) {
    if (typeof html === "string") {
      this.$element.innerHTML = html
      return this
    }
    return this.$element.outerHTML.trim()
  }
  clear() {
    this.html("")
    return this
  }
}

export function $() {
  return new Dom()
}

$.create = (tagName, classes = "") => {
  const element = document.createElement(tagName)
  if (classes) {
    element.classList.add(classes)
  }
  return element
}
