const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async (client, message, args) => {
  let para = db.fetch(`para_${message.author.id}`) 
  
 
  let timeout = 25000;
  
  let crime = await db.fetch(`bahisoynama_${message.author.id}`)

      if (crime !== null && timeout - (Date.now() - crime) > 0) {
        
        let time = ms(timeout - (Date.now() - crime));
 
        message.inlineReply(new Discord.MessageEmbed()
                      .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ Bahis oynamak için ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'tekrar dene!'}`))
      } else {
  var miktar = args[0]
  if(!miktar) return message.inlineReply(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bahis oynamak için miktar girmelisin (en fazla 8000 💸)`))
 if(miktar > 10000) return message.inlineReply(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`En fazla 10.000 💸 bahis yatırabilirsin!`))   
if(miktar > para) return message.inlineReply(new Discord.MessageEmbed()
 
                                              .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bahis oynamak için cüzdanında ${para ? "sadece " + para + ' 💸 var!' : 'hiç paran yok!'}`))
        const result = [
          "WINWIN",
          "LOOSELOOSE"
        ] 
 
        let awnser = result[Math.floor(Math.random() * result.length)]
     if (awnser === "LOOSELOOSE") {
 var kaybettin = miktar        
      message.inlineReply(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                      .setDescription(`Bahisi kaybettin ve cüzdanından ${kaybettin} 💸 eksildi!`));
      await db.set(`bahisoynama_${message.author.id}`, Date.now());   
      await db.add(`para_${message.author.id}`, -kaybettin);   
        } else {
 
          var kazandın = miktar*2
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`Bahisi kazandın ve cüzdanına ${kazandın} 💸 eklendi!`)
      message.inlineReply(embed)     
    await db.set(`bahisoynama_${message.author.id}`, Date.now());   
    await db.add(`para_${message.author.id}`, kazandın);
 
        }}}
exports.conf = {
  enabled: true,
  aliases: [],
};

exports.help = {
  name: 'bahis',
};