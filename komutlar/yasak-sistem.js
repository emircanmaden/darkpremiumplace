const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.inlineReply(new Discord.MessageEmbed().setColor('#000001').setDescription(`${client.user} **Yasak Sistem**
**        [ Ceza Komutları ]        **
> \`${client.ayarlar.prefix}ban [@Etiket]\`
> \`${client.ayarlar.prefix}idban [ID]\`
> \`${client.ayarlar.prefix}kick [@Etiket]\`
> \`${client.ayarlar.prefix}unban [ID]\`

**        [ Diğer Komutlar ]        **
> \`${client.ayarlar.prefix}bansorgulama [ID]\`
> \`${client.ayarlar.prefix}banlist\`
> \`${client.ayarlar.prefix}bansayı\`

**        [ Komut Yasaklama Komutları ]        **
> \`${client.ayarlar.prefix}komut-yasakla\`
> \`${client.ayarlar.prefix}komut-yasak-kaldır\`


`)

.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yasaksistem'],
  permLevel: 0
}

exports.help = {
  name: 'yasak-sistem'
};