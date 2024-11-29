const Discord = require('discord.js');
const db = require('quick.db')
const kasalar = require('.././kasalar');

exports.run = async (client, message, args) => {
  const kasaid = args[0];
  const kasasayisi = kasalar.length
  const kasaidembeds = new Discord.MessageEmbed()
  .setTitle(`Bir kasa id'si gir!`)
  .setFooter(`Kasa listesine bakmak için: !kasalar`)
  .setColor(client.ekoayarlar.renk)
  if(!kasaid) return message.inlineReply(kasaidembeds)
  if(kasaid > kasasayisi) return message.inlineReply(kasaidembeds)
  if(isNaN(kasaid)) return message.inlineReply(kasaidembeds)
  
  const kasalarfilter = kasalar.filter(x => x.kasaid == kasaid).map(x => `\n **${x.isim}** \n Kasa Fiyatı: **${x.fiyat}** \n Kasa Açıklaması: **${x.açıklama}**`).join('\n ')
  const icindekiler = require(`.././kasa${kasaid}`)
  const kasalariçindekilerfilter = icindekiler.map(x => x).join(' ')
  const embed = new Discord.MessageEmbed()
  .addField(`Kasa Bilgisi (İd : ${kasaid})`, `${kasalarfilter}`)
  .addField(`İçinden Çıkan Paralar;`, `${kasalariçindekilerfilter}`)
  .setFooter(`Kasa listesine bakmak için: !kasalar`)
  .setColor(client.ekoayarlar.renk)
  message.inlineReply(embed)
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kasabilgi', 'kasabilgisi', 'kasa'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'kasa-bilgi',
    description: 'Kasalar hakkında bilgi alırsınız.',
    usage: 'kasa-bilgi <Kasa-İD>'
}