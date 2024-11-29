const Discord = require("discord.js")
const ms = require("ms")
const db = require("quick.db")
module.exports.run = async(client,message,args)=> {
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
let zaman = args[0]
let yazı = args.slice(1).join(" ")

if(!zaman) return message.reply(":x: Bir süre girmelisin! \n !hatırlat 10m Dream Studio")
if(!yazı) return message.reply(":x: Bir yazı girmelisin! \n \n !hatırlat 10m Dream Studio")
db.set(`hatırlat_${message.author.id}`,Date.now() + ms(zaman))
message.inlineReply("ok")
const interval = setInterval(function() {


    if(Date.now() > db.fetch(`hatırlat_${message.author.id}`)){
        db.delete(`hatırlat_${message.author.id}`)
        message.author.send(`**Hatırlatma:**${yazı}`)
        .catch(e => console.log(e))
        clearInterval(interval)
    }

},1000)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','flaming',"remind"],
    permLevel: 0
}

exports.help = {
    name: 'hatırlat',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'alev <yazı>'
}