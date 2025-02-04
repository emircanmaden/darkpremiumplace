const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.inlineReply(nn.setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}küfür kısıt / kapat\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));

if(!args[0]) return message.inlineReply(nn.setColor('#00001').setTitle('Bir hata oldu!').setDescription(`küfür kısıtmak istersen **${client.ayarlar.prefix}küfür kısıt** yazmalısın.`))
if(args[0] === 'kısıt') {
data.set(`küfür.${message.guild.id}`, true);
return message.inlineReply(nn.setTitle(`İşte bu kadar!`).setDescription('Küfür kısıtlaması başarıyla açıldı.')).then(a => a.delete({timeout: 10000}));
} else if(args[0] === 'kapat') {
data.delete(`küfür.${message.guild.id}`);
return message.inlineReply(nn.setTitle('İşte bu kadar!').setDescription('Küfür kısıtlaması başarıyla kapatıldı.')).then(a => a.delete({timeout: 10000}));
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'küfür'
};