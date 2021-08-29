console.log('Beep beep!');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.login(token);
client.on('ready', () => {
    console.log('The bot is ready');
});