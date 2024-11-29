const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.inlineReply(new Discord.MessageEmbed().setColor('#000001').setDescription(`${client.user} **Donate Menü**
> Botun devamlılığı için destekleriniz çok önemlidir. Destekleyenlere özel olarak sunucu içi rol verilecektir. <:destek:859231120746610718>

▪Papara Hesap No: 2036424842
▪İninal Barkod No: 4093230269374

5Tl Ve Atlı Ücretlerede <:bronz:852339949914423316> **Bronz Destekçi**
5Tl İle 10Tl Arası Ücretlerde <:gold:852340004457283584> **Gold Destekçi**
10Tl Ve Üstü Ücretlerde <:elite:852339898630668358> **Elite Destekçi**
Rolleri verilmektedir.

Eğer destek sunucuna katılmadıysanız [burdan](https://discord.gg/8FVXKfkXBC) katılıp [donate](https://discord.com/channels/722544398130479184/844141114578829322/844155417998786580) kanalına bakabilirsiniz.
`)

.setThumbnail('https://cdn.discordapp.com/attachments/785240659346980914/852338130831933450/1623283619919.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['bagış',"bağış","bağıs"],
  permLevel: 0
}

exports.help = {
  name: 'donate'
};