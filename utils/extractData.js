function extractData(message) {
 const fields = [
   "Matricula do colaborador",
   "Etiqueta TI",
   "Serial",
   "Horário de atividade",
   "Chamado da atividade",
   "Erro",
   "Solução",
   "Local"
 ];

 const result = {};

 fields.forEach(field => {
   const regex = new RegExp(`${field}:\\s*(.*?)\\s*(?=(?:\\w+:|$))`, 'i');
   const match = message.match(regex);
   result[field] = match && match[1] ? match[1].trim() : "N/A";
 });

 return result;
}

module.exports = extractData;
