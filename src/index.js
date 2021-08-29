console.log('Beep beep!');

require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const token = process.env.TOKEN;

client.login(token);

client.on('ready', () => {
    console.log('The bot is ready');
});

client.on('messageCreate', message => {
    if (message.content == 'pikachu') {
        message.reply('Pika-pika');
    }
});