const Discord = require('discord.js');
const modül = require('film-apisi')

exports.run = (client, message, args) => {

const modül = require('film-apisi')
async function rastgele() {
    let sonuç = await modül.rastgele('dizi') //değerler dizi veya film
     message.inlineReply(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`**Dizinin İsmi:** \`${sonuç.ad}\`\n **Dizinin Puanı :** \`${sonuç.puan}\` \n **Dizinin Çıkış Yılı :** \`${sonuç.yıl}\` \n\n :arrow_down: **Dizinin POSTERİ** :arrow_down:`).setImage(`${sonuç.poster}`));
    
    console.log(sonuç)
      }
      rastgele()
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rastgele-dizi"],
  permLevel: 0
};

exports.help = {
    name: 'rastgeledizi',
  description: 'Ğ',
  usage: 'dizi'
};