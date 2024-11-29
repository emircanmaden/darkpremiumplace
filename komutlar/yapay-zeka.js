const Discord = require('discord.js');

const db = require("quick.db") 

exports.run = async (client, message, args) => {

    const nn = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.inlineReply(nn.setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}yapay-zeka aç/kapat\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));


if(args[0] == "aç") {

let engin = message.mentions.channels.first()

if(!engin) return message.inlineReply('<a:hata:834401133077987338> Lütfen yapay zeka kanalını belirt!')

db.set(`yapayzekakanal_${message.guild.id}`, engin.id)

db.set(`yapayzeka_${message.guild.id}`, 'aktif')

return message.inlineReply('<a:tik:834401015490936862> Yapay zeka sistemi açıldı!')

};

if(args[0] == "kapat") {

let engin = db.fetch(`yapayzeka_${message.guild.id}`)

if(!engin) return message.inlineReply('<a:hata:834401133077987338> Yapay zeka sistemi aktif değil!')

db.delete(`yapayzekakanal_${message.guild.id}`)

db.delete(`yapayzeka_${message.guild.id}`)

return message.inlineReply('<a:tik:834401015490936862> Yapay zeka sistemi kapatıldı!')

}; 



};

exports.conf = {

aliases: ["yapayzeka"] 

}

exports.help = {

  name: "yapay-zeka"

};