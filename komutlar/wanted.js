const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  var user = message.mentions.users.first()
  if(user) {
    var wanted = `https://www.oqwusdev.tk/api/wanted?link=${user.avatarURL({ format: 'png' })}`

  var başarılı = new Discord.MessageEmbed()
   .setColor('RED')
   .setAuthor(`Wanted ${user.username}`, wanted)
   .setURL(wanted)
   .setDescription("Resme gitmek için yukardaki linke tıklayın")
   .setImage(wanted)
   .setTitle('Wanted Url!') 
  message.inlineReply(başarılı)
} else {
  var wanted = `https://www.oqwusdev.tk/api/wanted?link=${message.author.avatarURL({ format: 'png' })}`

  var başarılı = new Discord.MessageEmbed()
   .setColor('RED')
   .setAuthor(`Wanted ${message.author.username}`, wanted)
   .setTitle(`Wanted Url`)
   .setURL(wanted)
   .setDescription("Resme gitmek için yukardaki linke tıklayın")
   .setImage(wanted)
  message.inlineReply(başarılı)
}};

exports.conf = {
  aliases: [], //komutun başka adları
  permLvl: 0 //0, 2, 3, 4
};

exports.help = {
  name: 'wanted', //komutun adı
  description: '', //komutun açıklaması
  usage: '' //komutun kullanımı
};