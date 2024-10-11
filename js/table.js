const table = document.getElementById('table-math');
const headerRow = table.getElementsByTagName('tr')[0];
console.log(`blu: ${headerRow.outerHTML}`);
for (let i = 0; i < 10; i++) {
    const newHeader = document.createElement('th');
    newHeader.textContent = `${i + 1}`;
    headerRow.appendChild(newHeader);
    console.log(newHeader.textContent);
}

for (let i = 0; i < 10; i++) {
    const tableRow = document.createElement('tr');  
    const newDataCell = document.createElement('td');
    newDataCell.textContent = `${i + 1}`;
    // append the new data cell to the new table row
    tableRow.appendChild(newDataCell);
    // append the new table row to the table
    table.appendChild(tableRow);
}

for (let i = 1; i <= 10; i++){
    const row = table.getElementsByTagName('tr')[i];
    let dataCellRow = row.getElementsByTagName('td')[0].textContent;
    console.log(`row: ${dataCellRow}`);
    
    for (let i = 0; i < 10; i++){
        const newCell = document.createElement('td');
        const header = table.getElementsByTagName('th')[i + 1];
        console.log(`header: ${header.textContent}`);
        newCell.textContent = `${(dataCellRow) * (header.textContent)}`;
        row.appendChild(newCell);
    }

}