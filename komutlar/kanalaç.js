const Discord = require(`discord.js`);
const db = require("quick.db");


exports.run = async (client, message, args) => { 
      if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
  if(!message.member.hasPermission(`MANAGE_GUILD`)) return message.inlineReply(`Bu komutu kullanabilmek için yetkin yetersiz.`)

  let kişi = message.mentions.users.first()

  if(!kişi) return message.inlineReply(`Bir kişi etiketlemelisin.`)

  let isim = args[1];

  if(!isim) return message.inlineReply(`${kişi}, için oluşturacağım kanalın ismini girmelisin.`)

  let everyone = message.guild.roles.cache.find(r => r.name === `@everyone`)

  message.guild.channels.create(isim, `text`).then(channel => { channel.createOverwrite(kişi, {

  'SEND_MESSAGES': true,
  'READ_MESSAGE_HISTORY': true,
  'VIEW_CHANNEL': true })

  channel.createOverwrite(everyone, {
  'VIEW_CHANNEL': false}) })

  message.inlineReply(`${kişi}, için özel kanal oluşturuldu.`)
};
exports.conf = {
 enabled: true,
  guildOnly: true,
  aliases: ["kanal-aç","openchannel","open-channel","oc","ka"],
  permLevel: 0
}

 exports.help = {
name: 'kanalaç'
}