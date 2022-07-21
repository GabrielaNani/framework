// import {$} from "@core/dom"

export class TableSelection {
  static className = "selected"
  constructor() {
    this.group = []
  }
  select($element) {
    $element.classList.add("selected")
    this.group.push($element)
  }
  selectGroup() {

  }
}
