/*
    Problem:
        Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.
    Example: 
    grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
    sortedGrid = [
        'abcde', 
        'fghij', 
        'klmno', 
        'pqrst', 
        'uvwxy'
    ]
    Need to check if the columns are also in ascending order
    columns = [
        'afkpu',
        'bglqv',
        'chmrsw,
        'dinsx',
        'ejoty'
    ]
    Check each column if the sorted version of the column is just the same as the initial/unsorted column.
*/
const gridChallenge = (grid) => {
  let sortedRows = grid.map((row) => row.split("").sort().join(""));
  console.log(sortedRows);
  let columns = [];
  let column = "";
  for (let i = 0; i < sortedRows.length; i++) {
    for (let j = 0; j <= sortedRows[i].length; j++) {
        // if(i > sortedRows[i].length) {
        //     continue;
        // }
        if(!sortedRows[j][i]) {
            continue;
        } else {
            column += sortedRows[j][i];
        }
    }
    if(!column) {
        continue;
    }
    columns.push(column);
    column = "";
  }
  console.log(columns);
  for (let column of columns) {
    let unsorted = column;
    let sortedColumn = column.split("").sort().join("");
    if (unsorted != sortedColumn) {
      return "NO";
    }
  }
  return "YES";
};

let grid = ["ebacd", "fghij", "olmkn", "trpqs", "xywuv"];
let grid1 = ["abc", "hjk", "mpq", "rtv"];
let grid2 = ["mpxz", "abcd", "wlmf"];

console.log(gridChallenge(grid2)); // Expected output: YES
