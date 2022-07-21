import {$} from "@core/dom";

export const resizeEvents = ($root, ev) => {
  let value
  const $resizer = $(ev.target)
  const type = $resizer.data.resize
  // // const $parent = $resizer.$element.parentNode // bad!
  // eslint-disable-next-line max-len
  // // const $parent = $resizer.$element.closest(".column")//betterbutnotbest
  const $parent = $resizer.closest("[data-type = \"resizable\"]")
  const cords = $parent.getCords()
  const propsSide = type === "column" ? "bottom" : "right"
  $resizer.css({
    opacity: 1,
    zIndex: 1000,
    [propsSide]: "-500px"
  })
  document.onmousemove = ev => {
    if (type === "column") {
      const delta = ev.pageX - cords.right
      value = cords.width + delta
      $resizer.css({
        right: `${-delta}px`
      })
      // // $parent.$element.style.width = value + "px"
      // $parent.css({
      //   width: value + "px"
      // })
      // cells.forEach(element => element.style.width = value + "px")
    } else {
      const delta = ev.pageY - cords.bottom
      value = cords.height + delta
      $resizer.css({
        bottom: `${-delta}px`
      })
    }
  }
  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null
    $resizer.css({
      opacity: 0,
      bottom: 0,
      right: 0
    })
    if (type === "column") {
      $root.findAll(`[data-col = "${$parent.data.col}"]`)
          .forEach(element => element.style.width = value + "px")
    } else {
      $parent.css({
        height: value + "px"
      })
    }
  }
}
