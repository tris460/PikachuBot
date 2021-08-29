console.log('Beep beep!');

require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const token = process.env.TOKEN;
const channelID = process.env.CHANNEL_ID;
const replies = ['Pika-pika', 'Pika', 'Pika-Pikachu', 'Chuuu', 'Pikachuuuu'];

client.login(token);

client.on('ready', () => {
    console.log('The bot is ready');
});

client.on('messageCreate', message => {
    if (message.channel.id == channelID && message.content == 'Pikachu') {
        // message.reply('Pika-pika');
        const index = Math.floor(Math.random() * replies.length);
        message.channel.send(replies[index]);
    }
});