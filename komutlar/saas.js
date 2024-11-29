const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.inlineReply(nn.setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}selam aç / kapat\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));

if(!args[0]) return message.inlineReply(nn.setColor('#00001').setTitle('Bir hata oldu!').setDescription(`Saas açmak istersen **${client.ayarlar.prefix}saas aç** yazmalısın.`))
if(args[0] === 'aç') {
data.set(`selams.${message.guild.id}`, true);
return message.inlineReply(nn.setTitle(`İşte bu kadar!`).setDescription('Seas mesajı başarıyla açıldı.')).then(a => a.delete({timeout: 10000}));
} else if(args[0] === 'kapat') {
data.delete(`selams.${message.guild.id}`);
return message.inlineReply(nn.setTitle('İşte bu kadar!').setDescription('Saas mesajı başarıyla kapatıldı.')).then(a => a.delete({timeout: 10000}));
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sa-as"],
  permLevel: 0
}

exports.help = {
  name: 'saas'
};