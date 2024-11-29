const Discord = require('discord.js');
var generator = require('generate-password');
const ayarlar = require('../ayarlar.json') 

exports.run = function(client, message, args) {

  
    let uzunluk = args[0]
    let prefix = ayarlar.prefix
   
    if (!prefix) return message.reply(`**Doğru Kullanımı** ${prefix}şifre <uzunluk> `)
  
    if(!uzunluk) return message.inlineReply(`**Doğru Kullanımı** ${prefix}şifre <uzunluk>`);

        var password = generator.generate({
        length: `${uzunluk}` , 
        numbers: true
    });
    
    let embed = new Discord.MessageEmbed()
    .setTitle(":closed_lock_with_key: Üretilen Şifre :closed_lock_with_key: ")
    .setTimestamp()
    .setDescription(`Şifre: **${password}**`)
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
  
    message.inlineReply(embed);
  }


  exports.conf = {
    enabled: true, 
    guildOnly: true, 
    aliases: ["sifre"],
    permLevel: 0 
  };
  
  exports.help = {
    name: 'şifre', 
    description: 'Rastgele bir şifre oluşturur.',
    usage: 'şifre <uzunluk>'
  };