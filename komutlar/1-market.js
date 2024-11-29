const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
var ayarlar = require("../ayarlar.json")
const db = require('quick.db')
const ms = require('parse-ms')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcyMzkyNjg5NzQ3NzY4MTI3NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE5MDgyODM3fQ.nKRmYhKrJDSNw3MlFhwsgWrsjV8HbD60FH7AMLDNogA', client);
const kasalar = require('.././kasalar');
exports.run = (client, message, args) => {


      var Moneyım = db.fetch(`para_${message.author.id}`)
      var bankapara = db.fetch(`bankapara_${message.author.id}`)


      const embed = new Discord.MessageEmbed()
      .setTitle(`**MARKET**`)
      .setAuthor(`Cüzdan: ${Moneyım} 💸 Banka: ${bankapara} 💸`)
      .addField(`**1-hançer:**`,`300k Money`)
      .addField(`**2-harita:**`,`500k Money`)
      .addField(`**3-çekiç:**`,`400k Money`)
      .addField(`**5-ok ve yay:**`,`800k Money`)
      .addField(`**4-silah:**`,`1m Money`)
      .setFooter(`Bir şeyler almak için !satınal <isim>`)
      message.reply(embed) 
      };

      
      exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['dükkan'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'market',
        description: 'Markete atar',
        usage: 'market'
      };
      