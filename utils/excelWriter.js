/* const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

function writeDataToExcel(data) {
  const date = new Date();
  const filename = `Dados_Coletados_WPP - ${date.toLocaleDateString('pt-BR').replace(/\//g, '')}.xlsx`;
  const filepath = path.join(__dirname, '..', filename);

  let workbook;
  let worksheet;

  if (fs.existsSync(filepath)) {
    workbook = xlsx.readFile(filepath);
    worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const existingData = xlsx.utils.sheet_to_json(worksheet);
    existingData.push(data);
    worksheet = xlsx.utils.json_to_sheet(existingData);
  } else {
    worksheet = xlsx.utils.json_to_sheet([data]);
    workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Dados');
  }

  xlsx.writeFile(workbook, filepath);
}

module.exports = { writeDataToExcel };
 */