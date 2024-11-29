const Discord = require('discord.js');
const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();
const data = require('quick.db');


exports.run = async (client, message, args) => {
if(message.channel.nsfw == false) return message.inlineReply(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setDescription(`${message.author} **Kanal __NSFW__ olarak aktif değil. Kontrol et!**`).setColor('#00001'))
if(await data.fetch(`slm.${message.author.id}.${message.guild.id}.h`)) return message.inlineReply(new Discord.MessageEmbed().setColor('#00001').setDescription(`**10 saniyenin altında hızlı kullanamazsın!**`));
DabiClient.nsfw.hentai.random().then(json => {
message.inlineReply(new Discord.MessageAttachment(json.url));
data.set(`slm.${message.author.id}.${message.guild.id}.h`, 'codare');
setTimeout(() => {
data.delete(`slm.${message.author.id}.${message.guild.id}.h`)
}, 10000);
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'hentai'
};