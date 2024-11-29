const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => { 
    if (message.author.id !== message.guild.owner.id) return message.inlineReply(`:x: Bu komutu sadece sunucu sahibi kullanabilir.`);
    let kontrol = await db.fetch(`denetimkaydi_${message.guild.id}`)
    if(!kontrol) return message.inlineReply('Sistem zaten kapalı. !denetim-aç komutuyla açabilirsin.')
    message.inlineReply('Denetim kaydı sistemi kapatıldı.').then(ilkkodumsj => {
  
  db.delete(`denetimkaydi_${message.guild.id}`)
    }, 5000)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["denetimkapat"], 
  permLevel: 0
};
 
exports.help = {
  name: 'denetim-kapat',
  description: 'denetim kaydı sistemi the artist', 
  usage: 'denetim-kapat'
};