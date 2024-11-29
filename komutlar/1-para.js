const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {
   
          let user = message.mentions.users.first() || message.author
          
  var cüzdan = db.fetch(`para_${user.id}`)
  var banka = db.fetch(`bankapara_${user.id}`)   
 
  var toplam= cüzdan+banka
message.inlineReply(new Discord.MessageEmbed()
                  .setImage("https://cdn.discordapp.com/attachments/782948599134814218/829403297181335562/unknown.png")
                  .setColor("YELLOW")
                  .setAuthor(user.tag, user.avatarURL({dynamic: true}))     
                  .addField("Cüzdan",`${cüzdan ? cüzdan + ' 💸' : "0 💸"}`,true)
                  .addField("Banka",`${banka ? banka + ' 💸' : "0 💸"}`,true)
                  .addField("Toplam",`${toplam ? toplam + ' 💸' : "0 💸"}`,true))
  }

 
exports.conf = {
  enabled: true,
  aliases: ["money","param","para"],
};
 
exports.help = {
  name: 'para',
};