import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";
import {resizeEvents} from "@/components/table/table.resize";
import {shouldResize} from "@/components/table/table.functions";

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
    if (shouldResize(ev)) {
      resizeEvents(this.$root, ev)
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
