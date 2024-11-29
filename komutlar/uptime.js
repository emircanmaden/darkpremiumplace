const Discord = require("discord.js");
const db = require('quick.db')
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (client, message, args) => {
            if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  let çevrilenkod = db.get(`çevrilenkod`);
  let msg = message
   const uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const yazıkkafana = new Discord.MessageEmbed()
    .setColor('0x36393F')
 .addField('Çalışma Süresi', `\`\`\`${uptime}\`\`\`` ,true)
.setTimestamp();

 return message.inlineReply(yazıkkafana);
  };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: "uptime",
  description: "Bot i",
  usage: "istatistik"
};