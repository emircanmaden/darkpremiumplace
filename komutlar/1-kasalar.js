const Discord = require('discord.js');
const db = require('quick.db')
const kasalar = require('.././kasalar');

exports.run = async (client, message, args) => {
  
  const kasalarfilter = kasalar.filter(x => x.kasaid).map(x => `\n **${x.isim}** \n  Kasa fiyatı: **${x.fiyat}** İD: **${x.kasaid}**`).join('\n ')
  const embed = new Discord.MessageEmbed()
  .addField(`<:bilgi:829648989796302858> __Kasa Listesi__ <:bilgi:829648989796302858>`,`${kasalarfilter}`)
  .setFooter(`Bir kasa hakkında bilgi almak için: !kasa-bilgi <kasaid>`)
  .setColor(client.ekoayarlar.renk)
  .setImage("https://media.discordapp.net/attachments/829013111881203712/829324874845126676/sasdads.png")
  message.inlineReply(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'kasalar',
    description: 'Kasaları listeler.',
    usage: 'kasalar'
}