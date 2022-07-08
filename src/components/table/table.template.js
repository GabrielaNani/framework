const CODES = {
  A: 65,
  Z: 90
}

const createCol = (content) => {
  return `
<div class=''></div>
  <div class="column" data-type="resizable">
   ${content} 
   <div class="col-resize" data-resize="column">
  </div>
  </div>`
}

const createRow = (content, index) => {
  console.log("index: ", index)
  const resizer = index ? ` <div class="row-resize" data-resize="row">
   </div>` : ""
  return `
   <div class="row">
        <div class="row-info" data-type="resizable">
      ${resizer}
    ${index ?index : ""}
        </div>
        <div class="row-data">
        ${content}
        </div>
   </div>`
}

const createCell = () => {
  return `
    <div class="cell" contenteditable>
    </div>`
}

const toChar = (_, index) => {
  return String.fromCharCode(CODES.A + index)
}

export const createTable = (rowsCount = 50) => {
  const colsCount = CODES.Z - CODES.A + 1
  const cols = new Array(colsCount)
      .fill("")
      .map(toChar)
      .map(createCol)
      .join("")
  console.log(cols);
  const rows = []
  rows.push(createRow(cols))
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill("")
        .map(createCell)
        .join("")
    rows.push(createRow(cells, i + 1))
  }
  return rows.join("")
}
