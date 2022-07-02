import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";

export class Table extends ExcelComponent {
  static className = "excel__table"
  constructor($root) {
    super($root, {
      name: "Table",
      listeners: ["click", "mousedown", "mouseup", "mousemove"]
    }
    );
  }
  onClick(ev) {
    console.log("click")
  }
  onMousedown(ev) {
    console.log("mouse down")
  }
  onMouseup(ev) {
    console.log("mouse up")
  }
  onMousemove(ev) {
    console.log("mouse Move")
  }
  toHTML() {
    return createTable()
  }
}
