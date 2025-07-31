const fs = require('fs');
const path = require('path');
const os = require('os');
const xlsx = require('xlsx');

function saveToExcel(data) {
  const now = new Date();
  const date = now.toLocaleDateString('pt-BR').replace(/\//g, '');
  const fileName = `Dados_Coletados_WPP - ${date}.xlsx`;

  // Caminho da pasta Documentos do usuário
  const documentsPath = path.join(os.homedir(), 'Documents');
  const filePath = path.join(documentsPath, fileName);

  // Cria nova planilha e aba
  const wb = xlsx.utils.book_new();
  const ws = xlsx.utils.json_to_sheet(data);
  xlsx.utils.book_append_sheet(wb, ws, 'Dados');

  // Salva o arquivo
  xlsx.writeFile(wb, filePath);
  console.log(`✅ Arquivo salvo em: ${filePath}`);
}

module.exports = { saveToExcel };
