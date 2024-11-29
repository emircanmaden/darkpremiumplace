const Discord = require('discord.js');
const ms = require('parse-ms');
const db = require('quick.db')//s
module.exports.run = async (client, message, args) => {
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} 
 let user =  message.mentions.users.first()
//s
 if(!user) return message.inlineReply(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))                   
                      .setDescription(`⛔ Parasını çalmak istediğin kullanıcıyı etiketlemelisin!`))
  let targetuser = await db.fetch(`para_${user.id}`);
  let author     = await db.fetch(`çalma_${message.author.id}`);
  let author2    = await db.fetch(`para_${message.author.id}`);

  let timeout = 900000;
//s
if (author !== null && timeout - (Date.now() - author) > 0) {
  let time = ms(timeout - (Date.now() - author));
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
     .setDescription(`⏱ Birisini soymak için ${time.minutes ? time.minutes + ' dakika,' : ''} ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'tekrar dene!'}`);
    message.inlineReply(timeEmbed)
//s
  } else {
//s
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
  .setDescription(`⛔ Para çalmak için en az 200 💸 paraya ihtiyacın var`);


  if (author2 < 200) {
    return message.inlineReply(moneyEmbed)
  }//s
var lostmoney = rastgeleMiktar(150,500)
  let moneyEmbed2 = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
  .setDescription(`⛔ Faqir birisini soymaya çalıştın ve ${lostmoney} 💸 ceza yedin`);
  

  //s 
  if (targetuser <= 100) {
    return message.inlineReply(moneyEmbed2),db.set(`çalma_${message.author.id}`, Date.now()),db.add(`para_$${message.author.id}`, -lostmoney)
db.set(`çalma_${message.author.id}`, Date.now())
db.add(`para_${message.author.id}`, -lostmoney)
  }
  
  let authorembed = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
  .setDescription(`⛔ Kendini soymayımı düşünüyorsun?!`);
//s
    if(user.id === message.author.id) {
    return message.inlineReply(authorembed)
  }
//s
    let gotmoney = rastgeleMiktar(600,1200)

  let embed = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
   .setDescription(`✅ Soygun Başarılı, ${user}'ı soydun ve ${gotmoney} 💸 kazandın`)
   .setColor("GREEN")

   message.inlineReply(embed)
//s
    await db.add(`para_${user.id}`, -gotmoney);
await db.add(`para_${message.author.id}`, gotmoney);
await db.set(`çalma_${message.author.id}`, Date.now());
  
		}
//s
}
exports.conf = {
  enabled: true,
  aliases: ["hırsızlıkyap","hırsızlık-yap"],
};
//s
exports.help = {
  name: 'soy',
};