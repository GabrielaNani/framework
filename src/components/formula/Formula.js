import {ExcelComponent} from "@core/ExcelComponent";

export class Formula extends ExcelComponent {
  static className = "excel__formula"
  constructor($root) {
    super($root, {
      name: "Formula",
      listeners: ["input", "click"],
    });
  }
  onInput(ev) {
    // console.log("formula", ev)
    console.log(ev.target.textContent);
  }
  onClick(ev) {
    console.log("Formula has been clicked")
  }
  toHTML() {
    return `
    <div class="info">
            fx
        </div>
        <div class="input" contenteditable spellcheck="false">

        </div>`
  }
}
