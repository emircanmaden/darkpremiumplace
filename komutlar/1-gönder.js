const Discord = require("discord.js");
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
 
  let para = db.fetch(`para_${message.author.id}`)
  
  let etiket = message.mentions.users.first()

  let  miktar = args[1]
  
  if(!etiket) return message.inlineReply(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))                   
                      .setDescription(`Para göndermek için bir kullanıcı etiketlemelisin!`))
  if(! miktar) return message.inlineReply(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                      .setDescription(`Göndermek istediğin para miktarını girmelisin!
                     \`!gönder <miktar || hepsi>\``))
  if(miktar < 0 ||  miktar.startsWith('0') ) return message.inlineReply(new Discord.MessageEmbed().setColor("RED").setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setDescription(`🤔 Girdiğin miktar geçerli bir sayı değil !?`));
 if(miktar === 'all' || miktar === 'hepsi') {
   if(para < 0) return message.inlineReply(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ Şuan elinde hiç para yok.`)) 
db.add(`para_${etiket.id}`, para)
db.add(`para_${message.author.id}`, -para)   
message.inlineReply(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`✅ Başarılı, ${etiket}'a ${para} 💸 gönderdin!`))
 
 } else {
  if(isNaN(miktar)) return message.inlineReply(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 Girdiğin miktar geçerli bir sayı değil !?`))
 }  
  if(etiket.id === message.author.id) return message.inlineReply(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))               
                      .setDescription(`⛔ Kendine para gönderemezsin!`))
 
  if(miktar > para) return message.inlineReply(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))                 
                      .setDescription(`⛔ Şuan elinde ${para ? "sadece " + para + " 💸 var!": "hiç para yok!"} `))
if(miktar === 'all' || miktar === 'hepsi') {
  return;
}  else {  
  message.inlineReply(new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
                .setDescription(`✅ Başarılı,${etiket}'a ${miktar} 💸 gönderdin!`))
  db.add(`para_${etiket.id}`, miktar)
  db.add(`para_${message.author.id}`, -miktar)

}};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gonder"],
  permLevel: 0
};

exports.help = {
  name: 'gönder',
}; 