import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";
import {$} from "@core/dom";

export class Table extends ExcelComponent {
  static className = "excel__table"
  constructor($root) {
    super($root, {
      name: "Table",
      listeners: ["mousedown"]
    }
    );
  }
  // onClick(ev) {
  //   console.log("click")
  // }
  onMousedown(ev) {
    let value
    console.log(value);
    if (ev.target.dataset.resize) {
      const $resizer = $(ev.target)
      const type = $resizer.data.resize
      // // const $parent = $resizer.$element.parentNode // bad!
      // eslint-disable-next-line max-len
      // // const $parent = $resizer.$element.closest(".column")//betterbutnotbest
      const $parent = $resizer.closest("[data-type = \"resizable\"]")
      const cords = $parent.getCords()
      $resizer.css({
        opacity: 1,
        zIndex: 1000,
        bottom: "-500px"
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
        // } else {
        //   const delta = ev.pageY - cords.bottom
        //   value = cords.height + delta
        //   // $parent.css({
        //   //   height: value + "px"
        //   // })
        }
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
        if (type === "column") {
          $parent.css({
            width: value + "px"
          })
          // eslint-disable-next-line max-len
          this.$root.findAll(`[data-col = "${$parent.data.col}"]`).forEach(element => element.style.width = value + "px")
          $resizer.css({
            opacity: 0,
            bottom: 0,
            right: 0
          })
        } else {

        }
      }
    }
  }
  // onMouseup(ev) {
  //   console.log("mouse up")
  // }
  // onMousemove(ev) {
  //   console.log("mouse Move")
  // }
  toHTML() {
    return createTable()
  }
}
