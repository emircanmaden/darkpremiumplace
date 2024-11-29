const discord = require('discord.js')
const db = require('quick.db')

exports.run = function(client, message, args,params) {
          if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}

  if (args.length < 1) {
    return message.reply('Doğru Kullanım !tersyazı merhaba')
  }
   
message.channel.send(args.join(' ').split('').reverse().join(''))
};

exports.conf = {
  aliases: [ 'ters' ],
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'tersyazı',
  description: 'Gönderdiğiniz mesajın ters çevrilmiş halini yazar.',
  category: 'Kullanıcı',
  usage: 'tersyaz yazı',
};