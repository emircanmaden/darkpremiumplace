const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
  
  let dil = await db.fetch(`dil_${message.guild.id}`)
  
  
  
  if(!dil) { // DİL AYARLANMAMIŞ ( BOTUNUZ EĞER DİL AYARLANMADIYSA HANGİ DİLİ KULLANMASINI İSTİYORSANIZ. )
    message.inlineReply('Herhangi bir dil ayarlanmamış varsayılan dil çalıştı.')
  }
  
  
  if(dil === "TR") { // TÜRKÇE DİL
const eğlence = new Discord.MessageEmbed()
 .setTimestamp()
 .setTitle('Dark Place Bot Ekibi')
.setDescription(`
<@702463861034319974>
<@765570995020890182>
`)
message.inlineReply(eğlence)
}
 
    if(dil === "EN") { // TÜRKÇE DİL
    
const eğlence = new Discord.MessageEmbed()
 .setTimestamp()
 .setTitle('Dark Place Bot Team')
 .setDescription(`
 <@702463861034319974>
 <@765570995020890182>
 `)
message.inlineReply(eğlence)
}
  
  };
exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["Ekip","team"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'ekip',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}