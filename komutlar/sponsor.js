const Discord = require('discord.js');
const db = require('quick.db')

const client = new Discord.Client();

exports.run = (client, message) => {
            if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}

    const ozelmesajkontrol = new Discord.MessageEmbed()
    .setTitle("Başarılı!")
    .setTitle("Sponsor oldukları ServerKurma.com'a Teşekkür ederiz.")
    .setDescription("[Burdan](https://bit.ly/2XRJeI9) websitelerine göz atabilir veya kendinize uygun web hosting, sanal sunucu alabilrsiniz.")
    .setThumbnail("https://cdn.discordapp.com/attachments/785240659346980914/834716063819235388/images_1.jpeg")
    .setColor("GREEN")
  
    message.inlineReply(ozelmesajkontrol)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["Sponsor"],
    permLevel: 0,
     
  };
  
  exports.help = {
    name: 'sponsor',
   description: 'Bota oy verirseniz rolü kaparsınız',
   usage: 'oyverdim'
  };