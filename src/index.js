require('dotenv').config();

const { Client, EVENT } = require('dogehouse.js');
const app = new Client();

const token = process.env.DOGEHOUSE_TOKEN;
const refreshToken = process.env.DOGEHOUSE_REFRESH_TOKEN;

app.connect(token, refreshToken).then(async () => {
  console.log('Bot connected.');
  console.log(`Top Rooms: ${await app.rooms.top}`);
});
