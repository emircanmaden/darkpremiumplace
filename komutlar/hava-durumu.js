const {
    MessageAttachment,
    MessageEmbed
  } = require('discord.js');
  
exports.run = async function(client, message, args) {
  
   let şehir = args[0]
   if (!şehir) return message.inlineReply("Lütfen bir yer girin.")
  
   const embed = new MessageEmbed()
     .setTitle(`**${şehir.toLocaleUpperCase()} HAVA DURUMU**`)
     .setImage(`https://ryukjs.com/api/weather_image?city=${şehir}`) 
    message.inlineReply(embed)

};
  
exports.conf = {
  aliases: ["hava", "hava-durumu", "weather", "weathers"]
};
  
exports.help = {
  name: "havadurumu"
};