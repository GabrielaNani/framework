const CODES = {
  A: 65,
  Z: 90
}

const createCol = (content) => {
  return `
  <div class="column">
   ${content} 
  </div>`
}

const createRow = (content) => {
  return `
   <div class="row">
        <div class="row-info">
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

export const createTable = (rowsCount = 15) => {
  const colsCount = CODES.Z - CODES.A + 1
  const cols = new Array(colsCount)
      .fill("")
      .map((element, index) =>{
        return String.fromCharCode(CODES.A + index)
      })
      .map(item =>{
        return createCol(item)
      })
      .join("")
  console.log(cols);
  const rows = []
  rows.push(createRow(cols))
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow())
  }
  return rows.join("")
}
createCell()
createCol()
