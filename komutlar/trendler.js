const Discord = require('discord.js');
const film = require('film-apisi')
exports.run = async (client, message, args) => {
    async function trend() {
        let sonuç = await film.trend().catch(err => {message.inlineReply(`hata 404 inga \n \n ${err}`);});
        const embed = new Discord.MessageEmbed()
        .setTitle('Trend filmler')
        .setDescription(sonuç.trendler)
        .setThumbnail('https://www.kindpng.com/picc/m/589-5890639_transparent-film-camera-icon-png-film-png-download.png')
return message.inlineReply(embed)
}
          trend()
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["trendfilmler"],
  permLevel: 0
};

exports.help = {
  name: 'trend-filmler'
};