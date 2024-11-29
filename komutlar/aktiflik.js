const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(!args[0]) return message.inlineReply(new Discord.MessageEmbed()
.setTitle('Yanlış Komut Kullanımı!')
.setDescription(`Aktiflik açmak için **${client.ayarlar.prefix}aktiflik aç** yazabilirsin.`))

if(args[0] === 'aç') {
message.inlineReply(new Discord.MessageEmbed()
.setTitle('Başarılı!')
.setDescription('Aktiflik başarıyla açıldı.'));
data.set(`aktiflik.${message.guild.id}`, true);
};

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'aktiflik'
};