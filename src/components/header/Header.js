import {ExcelComponent} from "@core/ExcelComponent";

export class Header extends ExcelComponent {
    static className = "excel__header"
    toHTML() {
      return `
       <input type="text" class="input" value="Title">
        <div>
            <div class="btn">
                <span class="material-symbols-outlined">
                      close
                </span>
            </div>
            <div class="btn">
                <span class="material-symbols-outlined">
                      delete
                </span>
            </div>
        </div>`
    }
}
