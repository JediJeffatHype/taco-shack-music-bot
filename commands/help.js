const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'help',
    description: "a help command",
    execute(message, args, cmd, client, Discord){
    const help = new Discord.messageEmbed()
    .setColor('#D2B48C')
    .setTitle('List of Commands')
    .addFields(
        {name: 'Play', value: 'Do ~play and a song to play a song!'} 
        )
    }
}