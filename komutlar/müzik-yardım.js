const Discord = require('discord.js');
const data = require('quick.db');
exports.run = async (client, message, args) => {
message.inlineReply(new Discord.MessageEmbed().setColor('#000001').setDescription(`${client.user} **Müzik Menüsüne Hoşgeldin**

> \`${client.ayarlar.prefix}setup\` = Müzik oynatmadan önce bu komutu kullanmalısınız sonrasında gelen ekran müziğe göre değişecektir.
> \`${client.ayarlar.prefix}play\` = İstediğiniz şarkıyı oynatırısınız


`)

.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['Müzik',"müzik","music"],
  permLevel: 0
}

exports.help = {
  name: 'müzik-sistem'
};