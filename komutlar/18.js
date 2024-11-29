const Discord = require("discord.js");
let kelime = require('../kelimeler/18.json');
const kelimeler = kelime.kelimeler

exports.run = async(client , message, args) =>{
    let kelime = kelimeler[Math.floor(Math.random() * kelimeler.length)]; 
    const codefun = new Discord.MessageEmbed()
    .setTitle(`*${kelime}*`)
    .setDescription(`*Lütfen +18 Sorusunu Cevaplayınız*`)
    .setAuthor(`${message.author.tag}`)
    .setThumbnail(`${message.author.avatarURL()}`)

    message.inlineReply(codefun)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['artı18', '+18'],
    permLevel: `Yetki gerekmiyor.`
  };
  
  exports.help = {
    name: '18',
    category: "eğlence",
    description: 'İstediğiniz bir kişi ile düello atarsınız!',
    usage: 'düello <@kullanıcı>'
  };
  