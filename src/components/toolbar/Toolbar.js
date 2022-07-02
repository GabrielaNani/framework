import {ExcelComponent} from "@core/ExcelComponent";

export class Toolbar extends ExcelComponent {
  static className = "excel__toolbar"
  constructor($root) {
    super($root, {
      name: "Toolbar",
      listeners: ["click"],
    });
  }
  onClick(ev) {
    console.log(ev.target)
  }
  toHTML() {
    return `
       <div class="btn">
                <span class="material-symbols-outlined">
                     format_align_left
                </span>
        </div>
        <div class="btn">
                <span class="material-symbols-outlined">
                      format_align_right
                </span>
        </div>
        <div class="btn">
                <span class="material-symbols-outlined">
                      format_align_center
                </span>
        </div>
        <div class="btn">
                <span class="material-symbols-outlined">
                      format_italic
                </span>
        </div>
        <div class="btn">
                <span class="material-symbols-outlined">
                      format_underlined
                </span>
        </div>
        <div class="btn">
                <span class="material-symbols-outlined">
                      format_bold
                </span>
        </div>`
  }
}
