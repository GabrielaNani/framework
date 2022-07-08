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
      // const $parent = $resizer.$element.parentNode // bad!
      // eslint-disable-next-line max-len
      // const $parent = $resizer.$element.closest(".column") // better but not best
      const $parent = $resizer.closest("[data-type = \"resizable\"]")
      const cords = $parent.getCords()
      document.onmousemove = ev => {
        const delta = ev.pageX - cords.right
        const value = cords.width + delta
        $parent.$element.style.width = value + "px"
      }
      document.onmouseup = () => {
        document.onmousemove = null
      }
      console.log(ev.target.dataset.resize)
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
