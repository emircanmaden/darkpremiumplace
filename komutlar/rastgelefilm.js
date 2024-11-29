const Discord = require('discord.js');
const modül = require('film-apisi')

exports.run = (client, message, args) => {

const modül = require('film-apisi')
async function rastgele() {
    let sonuç = await modül.rastgele('film') //değerler dizi veya film
     message.inlineReply(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`**Filmin İsmi:** \`${sonuç.ad}\`\n **Filmin Puanı :** \`${sonuç.puan}\` \n **Filmin Çıkış Yılı :** \`${sonuç.yıl}\` \n\n :arrow_down: **Filmin POSTERİ** :arrow_down:`).setImage(`${sonuç.poster}`));
    
    console.log(sonuç)
      }
      rastgele()
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rastgele-film"],
  permLevel: 0
};

exports.help = {
    name: 'rastgelefilm',
  description: 'Ğ',
  usage: 'dizi'
};