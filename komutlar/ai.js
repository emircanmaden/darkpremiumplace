const kwejn = require('@codare/codare.ai');
const Discord = require('discord.js');
 
 

/* ! let aiembed = new Discord.MessageEmbed()
.setTitle('AI SISTEMI')
.setDescription(`
Sorulan Soru: ${args.slice(0).join(' ')} 
Verilen Cevap: ${res}
`);
!*/





let args0 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription(`Lütfen cevaplamam için mesaj giriniz.`);



exports.run = async(client, message, args) => {
 
    //if(message.channel.id !== '785240659346980914') return message.inlineReply(`SALAK OROSPU EVLADI SADECE <#818572466590580758> ADLI KANLDA ÇALIŞIR BACINI SIKERIM ORAYA GIT`)

if(!args[0]) return message.inlineReply(args0)
kwejn.sor(args.slice(0).join(' ')).then(res => {
  
  let aiixd = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .addField('Sorulan Soru', `${args.slice(0).join(' ')}`)
  .addField('Verilen Cevap', `${res}`, true)
  .setThumbnail(message.author.displayAvatarURL)
  //.setDescription(`SORULAN SORU: ${args.slice(0).join(' ')}\n Verilen Cevap: ${res}`)
  .setFooter(`Komutu Kullanan Kişi: ${message.author.tag}`)
message.inlineReply(aiixd)
})
 
};
 
exports.conf = {
    enabled: true,
    guildonly: false,
    aliases: ['ai', 'ai', 'ai'],
    permlevel: 0
  }
  exports.help = {
    name: 'ai',
    description: 'ai',
    usage: 'ai'
  }
