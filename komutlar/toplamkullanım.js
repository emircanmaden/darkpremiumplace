const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
const db = require('quick.db')
const   client = new Discord.Client();
let cpuStat = require("cpu-stat");
const { stripIndents } = require('common-tags');


require("moment-duration-format");
exports.run = async (bot, message, args) => {
  let kullanimSay = db.fetch("bot-kullanım") || 0
    if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
  
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
 
   const bunemq = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const annencilermaldır = new Discord.MessageEmbed()
  .addField(`» **Toplam Komut Kullanım Sayısı**`, kullanimSay)
 return message.inlineReply(annencilermaldır);
  };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: "toplamkullanım",
  description: "Bot i",
  usage: "istatistik"
};
