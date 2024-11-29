const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async (client, message, args) => {
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
  
const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.inlineReply(`**Lütfen yazı yazınız.** <a:star:742698148329291826>`)
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('Alevli Logo Oluşturuldu')
  message.inlineReply(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','flaming'],
    permLevel: 0
}

exports.help = {
    name: 'alev',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'alev <yazı>'
}