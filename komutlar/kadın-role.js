const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.inlineReply(nn.setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}kadın-rol\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));
if(!args[0]) return message.inlineReply(nn.setTitle('Bir hata oldu!').setColor('#00001').setDescription(`Bir rol etiketlemeyi unuttunuz.`)).then(a => a.delete({timeout: 10000}));
let role = message.mentions.roles.first();
if(!role) return message.inlineReply(nn.setTitle('Bir hata oldu!').setColor('#00001').setDescription(`Bir rol etiketlemeyi unuttunuz.`)).then(a => a.delete({timeout: 10000}));

data.set(`kadın.${message.guild.id}`, role.id);
message.inlineReply(nn.setTitle(`İşte bu kadar!`).setDescription(`Kayıt için kullanılacak: ${role} rol olarak seçtiniz.`)).then(a => a.delete({timeout: 10000}));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kadın-role'
};