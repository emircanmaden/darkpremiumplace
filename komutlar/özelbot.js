const Discord = require('discord.js');

exports.run = async (client, message, args) => {


  const embed = new Discord.MessageEmbed()
  .setTitle("Özel Dark Place Bot")
  .setDescription(`<:darkplace:818868933574262824> Artık sizinde Dark Place Bot Kopyası olabilir!`)
  .addField("__Özellikler;__", `-Botun adını değiştirebilme. \n-Botun profil fotağrafını değiştirebilme. \n-Botun oynuyor kısmını değiştirebilme. \n \n-Bota özel VDSde yer. \n-7/24 Kesintisiz hizmet. \nBotun makinesine erişim hariçi kullanımda tamamen özgürsünüz. \n \n**Kütüphanesi:** Discord.js ~ **Veri Tabanı:** quickdb & lowdb \n \n》Aylık **29.99TL** \n \n Almak isteyenler destek sunucusuna gelip <@702463861034319974> ile iletişime geçebilir.`)

  message.inlineReply(embed)

  
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ozelbot"],
    permLevel: 0,
     
  };
  
  exports.help = {
    name: 'özelbot',
   description: 'Bota oy verirseniz rolü kaparsınız',
   usage: 'oyverdim'
  };

