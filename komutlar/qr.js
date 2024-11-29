const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.inlineReply(`**QR kodu oluşturmak için link giriniz**`)
  const linqo = `https://normal-api.ml/createqr?text=${yazi}`
  .replace(' ', '%20')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("QR Kodu")
  .setImage(linqo)
  .setFooter(message.author.tag+' bir QR kodu oluşturdu', message.author.avatarURL())
  .setTimestamp();
  message.inlineReply(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['qr-kod','QR','QR-kod'],
    permLevel: 0
}

exports.help = {
    name: 'qr',
    description: 'a.',
    usage: 'qr-kod link'
}