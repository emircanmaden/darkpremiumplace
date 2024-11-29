const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  
   let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) //let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
   if(!member) {
       return message.inlineReply(new Discord.MessageEmbed().setColor("RED").setTimestamp().setDescription("**⚠️ • Hediye Verecek Bir Kişi Etiketlemelisin**"))
   }
 

   let bruv = message.guild.member(member)
   let isim = args[1]
   
   
   if(!isim) return message.inlineReply(new Discord.MessageEmbed().setColor("RED").setTimestamp().setDescription("**⚠️ • Vereceğin Hediyeyi Yazmalısın \n\nÖrnek : !hediye-ver <@kişi> <hediye>**"))
  


   let embed = new Discord.MessageEmbed()
   .setAuthor(`Hediye Geldi!`, message.author.avatarURL())
   .setTimestamp()
   .setDescription(`
  **${message.author} Sana Bir Hediye Almış ${member} Sana ${isim} Hediyesini Verdi :heart:
  **
   `)
   .setImage("https://img-s2.onedio.com/id-5eb2b69abaf24ad70e5c2664/rev-0/w-900/h-674/f-gif/s-986ae1dca55e1bf8f70286b3ac6653bd25560d87.gif")
   message.inlineReply(embed).then(message=> message.react("✅"))
  
 }


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hv','h-v','hediyever'],
    permLevel: 0
};

exports.help = {
    name: 'hediye-ver',
    description: 'Birine Hediye Verirsin',
    usage: 'prefix+hediye-ver'
};