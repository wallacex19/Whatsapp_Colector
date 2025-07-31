const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const extractData = require('./utils/extractData');
const saveToExcel = require('./utils/saveToExcel');
const groupName = require('./config/groupName');

const client = new Client({
  authStrategy: new LocalAuth({
    dataPath: './sessions'
  }),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('✅ Bot está pronto e conectado.');
});

client.on('message', async msg => {
  try {
    const chat = await msg.getChat();

    if (chat.isGroup && chat.name === groupName) {
      const data = extractData(msg.body);
      saveToExcel(data);
      console.log('📥 Mensagem processada e salva.');
    }
  } catch (error) {
    console.error('❌ Erro ao processar a mensagem:', error.message);
  }
});

client.initialize();
