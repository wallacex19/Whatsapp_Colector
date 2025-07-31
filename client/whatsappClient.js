/* const { Client, LocalAuth } = require('whatsapp-web.js');
const fs = require('fs');
const path = require('path');

const SESSION_DIR = path.join(__dirname, '../sessions');

if (!fs.existsSync(SESSION_DIR)) {
  fs.mkdirSync(SESSION_DIR);
}

const client = new Client({
  authStrategy: new LocalAuth({
    dataPath: SESSION_DIR,
  }),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox'],
  },
});

function initClient(onMessageCallback) {
  client.on('qr', (qr) => {
    console.log('🔷 Escaneie o QR code abaixo para logar no WhatsApp:');
    console.log(qr);
  });

  client.on('ready', () => {
    console.log('✅ Cliente WhatsApp está pronto!');
  });

  client.on('message', onMessageCallback);

  client.initialize();
}

module.exports = { initClient };
 */