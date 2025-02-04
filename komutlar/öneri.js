const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
 
    var ökanal = await db.fetch(`önerikanal_${message.guild.id}`)
    var önerikanalı = message.guild.channels.cache.find(channel => channel.id === ökanal)
    if (!ökanal) return message.inlineReply(" **Maalesef Bir Öneri Kanalı Ayarlanmamış.** `Ayarlamak İçin !öneri-kanal #kanal` ")

var oneri = args.join(" ").slice(0)
if (!oneri) {
    message.inlineReply("**Hey Dostum Yanlış Kullanıyorsun. Merak Etme Ben Burdayım** \n`Örnek: !öneri Dark Place Bot'a oy vermeyen banlansın.`")
  
  return
} else {
    const embed = new Discord.MessageEmbed()
    .setTitle("Yeni Bir Öneri Var!")
    .addField("Öneren Kullanıcı:", `${message.author.tag}`)
    .addField(` Öneri`, oneri)
  .setColor("RED")
     .setTimestamp()
.setThumbnail(client.user.displayAvatarURL()) 
    
önerikanalı.send(embed).then(m => {
    m.react("⬆️")
    m.react("⬇️")})
}

  message.inlineReply(`**Öneriniz başarıyla alındı!** \n _Önerin ${önerikanalı} kanalına düştü_`)

 } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["istek"],
 permLevel: 0
}
exports.help = {
 name: 'öneri',
 description: 'ö',
 usage: 'ö'
};
