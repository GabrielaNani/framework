import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";
import {resizeEvents} from "@/components/table/table.resize";
import {shouldResize} from "@/components/table/table.functions";
import {TableSelection} from "@/components/table/tableSelection";


export class Table extends ExcelComponent {
  static className = "excel__table"
  constructor($root) {
    super($root, {
      name: "Table",
      listeners: ["mousedown"]
    }
    )
  }
  onMousedown(ev) {
    if (shouldResize(ev)) {
      resizeEvents(this.$root, ev)
    }
  }
  prepare() {
  }

  init() {
    super.init()
    this.selection = new TableSelection()
    const $cell = this.$root.find("[data-id = '1:0']")
    this.selection.select($cell)
  }
  toHTML() {
    return createTable()
  }
}
