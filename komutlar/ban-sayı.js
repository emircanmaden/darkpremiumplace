const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  var s = message.guild.fetchBans().then(bans => {
  message.inlineReply(`Bulunduğunuz sunucuda **${bans.size}** banlı üye var.`)
  })
 };

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bansayı"],
  permLevel: 1
};
exports.help = {
  name: "ban-sayı",
  usage: "banlar"
};
