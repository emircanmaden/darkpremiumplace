const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.inlineReply(nn.setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}spotify kısıt / kapat\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));

if(!args[0]) return message.inlineReply(nn.setColor('#00001').setTitle('Bir hata oldu!').setDescription(`spotify kısıtmak istersen **${client.ayarlar.prefix}spotify kısıt** yazmalısın.`))
if(args[0] === 'kısıt') {
db.set(`spotifyEngel${message.guild.id}`, true);
return message.inlineReply(nn.setTitle(`İşte bu kadar!`).setDescription('Spotify Parti kısıtlaması başarıyla açıldı.')).then(a => a.delete({timeout: 10000}));
} else if(args[0] === 'kapat') {
db.delete(`spotifyEngel${message.guild.id}`);
return message.inlineReply(nn.setTitle('İşte bu kadar!').setDescription('Spotify Parti kısıtlaması başarıyla kapatıldı.')).then(a => a.delete({timeout: 10000}));
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'spotify'
};