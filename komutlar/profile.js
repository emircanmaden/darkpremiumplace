const Discord = require('discord.js');
const data = require('quick.db');

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
  }
  
exports.run = async (client, message, args) => {
const sistem = await data.fetch(`aktiflik.${message.guild.id}`);
if(!sistem) return message.inlineReply(new Discord.MessageEmbed()
.setTitle('Bir hata oldu!')
.setDescription(`**Aktiflik sistemini açman gerekli.\nAçmak istersen:** \`${client.ayarlar.prefix}aktiflik aç\``));

if(!message.mentions.members.first()) {
const datas = await data.fetch(`say.kadın.${message.author.id}.${message.guild.id}`);
const dataa = await data.fetch(`say.erkek.${message.author.id}.${message.guild.id}`);

const embed = new Discord.MessageEmbed()
.setColor('#f1c335')
.setTitle(`${message.author.username} Kayıt Bilgi`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '')
.setDescription(`⭐ **Toplam Kayıt Sayısı:** \`${Number(dataa ? dataa : '0')+Number(datas ? datas : '0')}\`
**Erkek Sayısı:** \`${dataa ? dataa : 'veri yok.'}\`
**Kadın Sayısı:** \`${datas ? datas : 'veri yok.'}\``);
message.inlineReply(`<@!${message.author.id}>,`, embed);
} else {
const datas = await data.fetch(`say.kadın.${message.mentions.members.first().id}.${message.guild.id}`);
const dataa = await data.fetch(`say.erkek.${message.mentions.members.first().id}.${message.guild.id}`);

const embed = new Discord.MessageEmbed()
.setColor('#f1c335')
.setTitle(`${message.mentions.members.first().user.username} Kayıt Bilgi`)
.setThumbnail(message.mentions.members.first().user.avatarURL() ? message.mentions.members.first().user.avatarURL({dynamic: true}) : '')
.setDescription(`⭐ **Toplam Kayıt Sayısı:** \`${Number(dataa ? dataa : '0')+Number(datas ? datas : '0')}\`
**Erkek Sayısı:** \`${dataa ? dataa : 'veri yok.'}\`
**Kadın Sayısı:** \`${datas ? datas : 'veri yok.'}\``);
message.inlineReply(`<@!${message.mentions.members.first().id}>,`, embed);
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'profile'
};