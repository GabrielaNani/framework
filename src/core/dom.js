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
  on(eventType, callback) {
    this.$element.addEventListener(eventType, callback)
  }
  off(eventType, callback) {
    this.$element.removeEventListener(eventType, callback)
  }
  closest(selector) {
    return $(this.$element.closest(selector))
  }
  getCords() {
    return this.$element.getBoundingClientRect()
  }
  get data() {
    return this.$element.dataset
  }
  findAll(selector) {
    return this.$element.querySelectorAll(selector)
  }
  css(styles = {}) {
    // for (const stylesKey in styles) {
    //   if (styles.hasOwnProperty(stylesKey)) {
    //     console.log(stylesKey, "stylesKey")
    //     console.log(styles[stylesKey], "styles");
    //   }
    // }
    Object
        .keys(styles)
        .forEach(key =>{
          this.$element.style[key] = styles[key]
        })
  }
  append(node) {
    if (node instanceof Dom) {
      node = node.$element
      if (Element.prototype.append) {
        this.$element.append(node)
      } else {
        this.$element.appendChild(node)
      }
    }
    return this
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = "") => {
  const element = document.createElement(tagName)
  if (classes) {
    element.classList.add(classes)
  }
  return $(element)
}
