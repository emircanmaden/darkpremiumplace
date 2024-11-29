const Discord = require("discord.js");
const db = require('quick.db')
exports.run = async(client, message, args) => {

      let items = db.fetch(`newitemler_${message.author.id}`);

      if(items === null) items = "Hiçbir şey yok"
      
              const Embed = new Discord.MessageEmbed()
              .addField('Envanter:', items)
      
              message.reply(Embed);
     };
      exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['items',"item"],
        permLevel: 0
      };
      
      exports.help = {
        name: 'eşyalar',
        description: 'eşyaları gösterir',
        usage: 'items'
      };
      