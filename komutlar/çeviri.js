const Discord = require('discord.js');
const { translate } = require('bing-translate-api');
exports.run = async (client, message, args) => {
  let dil = args[0]
  if(!dil) return message.inlineReply('Lütfen çevrilecek dili belirtin!')
  let engin = args.slice(1).join(' ')
  if(!engin) return message.inlineReply(`Lütfen ${dil} çevrilecek kelimeyi giriniz`) 
 let res = translate(engin, null, dil).catch(err => {message.inlineReply(`Dili bulamadım! \n \n ${err}`);});
 let kelime = await (await res).text
 let çeviri = await (await res).translation
 let yenidil = await (await res).language.to
 const embed = new Discord.MessageEmbed()
 .setTitle(engin + " çevirisi")
 .setDescription(`Kelime: ${kelime} \n \n Çeviri sonucu: ${çeviri} \n \n Çevrilen dil: ${yenidil}`)
 .setFooter('Dark Place Çeviri')
 return message.inlineReply(embed).catch(err => {message.inlineReply(`Kelimeyi çeviremedim \n \n ${err}`);});
 


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çevir","ceviri"],
  permLevel: 0
};

exports.help = {
  name: 'çeviri'
};