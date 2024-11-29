const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
const db = require('quick.db')
const   client = new Discord.Client();
let cpuStat = require("cpu-stat");
const { stripIndents } = require('common-tags');
const data = require('quick.db')

require("moment-duration-format");
exports.run = async (bot, message, args) => {
  let antikufur = await data.fetch(`antikufur-counter`) || 0;
  let antireklam = await data.fetch(`antireklam-counter`) || 0;
  let anticaps = await data.fetch(`anticaps-counter`) || 0;
  let antinapim = await data.fetch(`antinapim-counter`) || 0;
  let MessageCounter = await data.fetch(`message-counter`) || 0; 

  let kullanimSay = db.fetch("bot-kullanım") || 0
    if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
  
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
 
  let msg = message
  let cpuLol;
  message.inlineReply('**Bilgiler Toplanıyor.**')
   
   const bunemq = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const annencilermaldır = new Discord.MessageEmbed()
  .setFooter('Dark Place İstatislik', bot.user.avatarURL())
  .addField("<:onayli:857644714462150656> Toplam Kullanıcı", bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0),)
  .addField("<:onayli:857644714462150656> Toplam Sunucu", bot.guilds.cache.size.toLocaleString(),)
  .addField("<:onayli:857644714462150656> Toplam Kanal Sayısı", bot.channels.cache.size.toLocaleString(),)
  .addField(`<:onayli:857644714462150656> Toplam Kullanım Sayısı`, kullanimSay)

  .addField("<:developer:780450481863917580> Pingim", bot.ws.ping+" ms")
  .addField("<a:kitap:857644797538861116> İşletim Sistemi", `${os.platform()}`)
  .addField("<a:kitap:857644797538861116> Discord.js Sürümü", "v"+Discord.version)
  .addField("<a:kitap:857644797538861116> Node.JS Şürümü", `${process.version}`)
  .addField("<a:kitap:857644797538861116> Bit", `${os.arch()}`)
  .addField("<a:kitap:857644797538861116> CPU", `${os.cpus().map(i => `${i.model}`)[0]}`)  
  .addField("<a:kitap:857644797538861116> Bellek Kullanımı", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/16384mb`)
  .addField(`<a:kitap:857644797538861116> Uptime`, bunemq)
  .setDescription(`
  <a:buyutec:858335950894792704> **${MessageCounter}** Kullanılan kelime içerisinden
  <a:buyutec:858335950894792704> **${antikufur}** Küfür Engellendi 
  <a:buyutec:858335950894792704> **${antinapim}** Napim Kelimesi Engellendi
  <a:buyutec:858335950894792704> **${antireklam}** Reklam Engellendi
  <a:buyutec:858335950894792704> **${anticaps}** Caps Engellendi
 `)
  .addField("<a:tacc:857644780503040020> Yapımcım & Geliştirici", "<@702463861034319974>")
  .addField("<a:whitearrow:799653213652516864> Linkler", " [Davet Url  ](https://top.gg/bot/723926897477681276/invite) [Oy Url  ](https://top.gg/bot/723926897477681276/vote) [D.Sunucu Url](https://discord.gg/8FVXKfkXBC)", )


 return message.inlineReply(annencilermaldır);
  };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i',"botstat"],
  permLevel: 0
};
 
exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};
