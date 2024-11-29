const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.inlineReply("**Üzgünüm bu komudu kullanmak için `Kanalları Yönet` yetkisine sahip olman gerek.**");
let reason = args.slice(1).join(' ')
 
var kanal = message.mentions.channels.first() 


if (args[0] == "sıfırla") {
  db.delete(`önerikanal_${message.guild.id}`)
  return message.inlineReply("**Önerilerin gönderileceği kanal sıfırlandı.**")
} else if (!kanal) {
  return message.inlineReply("**Lütfen bir kanal etiketleyiniz.**")
} else {
  db.set(`önerikanal_${message.guild.id}`, kanal.id)
  return message.inlineReply(`**Önerilerin gönderileceği başarıyla ${kanal} olarak ayarlandı.** Sıfırlamak için !öneri-ayarla sıfırla `)
}

 } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["istek-ayarla","öneri-kanal"],
 permLevel: 4
}
exports.help = {
 name: 'öneri-ayarla',
 description: 'ö',
 usage: 'ö'
};
