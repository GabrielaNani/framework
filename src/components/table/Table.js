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
    if (ev.target.dataset.resize) {
      const $resizer = $(ev.target)
      const type = $resizer.data.resize
      console.log(type);
      // const $parent = $resizer.$element.parentNode // bad!
      // const $parent = $resizer.$element.closest(".column")//betterbutnotbest
      const $parent = $resizer.closest("[data-type = \"resizable\"]")
      const cells = this.$root.findAll(`[data-col = "${$parent.data.col}"]`)
      const cords = $parent.getCords()
      console.log(cords)
      document.onmousemove = ev => {
        if (type === "column") {
          const delta = ev.pageX - cords.right
          const value = cords.width + delta
          // $parent.$element.style.width = value + "px"
          $parent.css({
            width: value + "px"
          })
          cells.forEach(element => element.style.width = value + "px")
        } else {
          const delta = ev.pageY - cords.bottom
          const value = cords.height + delta
          $parent.css({
            height: value + "px",
          })
        }
      }
      document.onmouseup = () => {
        document.onmousemove = null
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
