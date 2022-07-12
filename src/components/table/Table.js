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
      // const $parent = $resizer.$element.closest(".column")//betterbutnotbest
      const $parent = $resizer.closest("[data-type = \"resizable\"]")
      const cords = $parent.getCords()
      document.onmousemove = ev => {
        console.log($parent.data)
        const delta = ev.pageX - cords.right
        const value = cords.width + delta
        $parent.$element.style.width = value + "px"
        document.querySelectorAll(`[data-col = "${$parent.data.col}"]`)
            .forEach(element =>{
              element.style.width = value + "px"
            })
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
