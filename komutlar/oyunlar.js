const Discord = require('discord.js');
const data = require('quick.db');
exports.run = async (client, message, args) => {
message.inlineReply(new Discord.MessageEmbed().setColor('#000001').setDescription(`${client.user} **Oyunlar Menüsüne Hoşgeldin**

**        [ Doğruluk Mu? Cesaretlik Mi? ]        **
> \`${client.ayarlar.prefix}c\`  = Botun Cesaret Komutlarını Gösterir
> \`${client.ayarlar.prefix}d\`  = Botun Doğruluk Komutlarını Gösterir
> \`${client.ayarlar.prefix}18\` = Botun +18 Komutlarını Gösterir
> \`${client.ayarlar.prefix}pas\`  = Soruyu Pas Geçer
> \`${client.ayarlar.prefix}şişeçevir\`  = Şişe Çevirirsiniz

**        [ Çift Kişilik Oyunlar ]        **
> \`${client.ayarlar.prefix}1v1\`
> \`${client.ayarlar.prefix}xox\`
> \`${client.ayarlar.prefix}yazankazanır\`

**        [ Tek Kişilik Oyunlar ]        **
> \`${client.ayarlar.prefix}pokemon\`
> \`${client.ayarlar.prefix}snake\`
> \`${client.ayarlar.prefix}adamasmaca\`
> \`${client.ayarlar.prefix}sayı-tahmin\`
> \`${client.ayarlar.prefix}yazı-tura\`
> \`${client.ayarlar.prefix}aki\`

**        [ Çok Kişili Oyunlar ]        **
> \`${client.ayarlar.prefix}ses fio\`
> \`${client.ayarlar.prefix}ses pn\`
> \`${client.ayarlar.prefix}ses bio\`

**        [ Diğer Oyunlar ]        **
> \`${client.ayarlar.prefix}ekonomi\`

`)

.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['oyun'],
  permLevel: 0
}

exports.help = {
  name: 'oyunlar'
};