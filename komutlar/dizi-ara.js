const Discord = require('discord.js');
const film = require('film-apisi') //discord.gg/8FVXKfkXBC

exports.run = async (client, message, args) => {
if(!args.join(" ")) return message.reply('aramam için bir şey gerekiyor.')
let c = await film.ara(args.join(" "))
const embed = new Discord.MessageEmbed() //v11 kullanıyorsanız Discord.RichEmbed() yapınız.
.setColor('RANDOM')
.setTitle(c.ismi)
.setThumbnail(c.poster)
.addField('Yıldızlar:', c.yıldızlar)
.addField('Tür:', c.tür)
.addField('Puan:', c.puan)
.addField('Yıl:', c.yıl)
.addField('Süre:', c.süre)
.addField('Sezon:', c.sezon)
.addField('Bölüm:', c.bölüm)
.addField('Benzerler:', c.benzerler)
message.inlineReply(embed)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['dizi-ara'],
    permLevel: 0
}

exports.help = {
    name: 'diziara',
    description: "imdb den arama yapmanızı sağlar",
    usage: 'film-ara'
}