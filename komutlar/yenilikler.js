const Discord = require('discord.js');
const database = require('quick.db');
const disbutpages = require("discord-embeds-pages-buttons")

 const disbut = require("discord-buttons") 

exports.run = async (client, message, args) => {

  if(!database.fetch('güncellemeler') || database.fetch('güncellemeler').length <= 0) return message.reply('Hiç güncelleme notu eklenmemiş.');
  
  let pages = [];
  let page = 1;
  database.fetch('güncellemeler').sort((a, b) => b.number-a.number).forEach(data => {
    pages.push(new Discord.MessageEmbed()
    .setColor('GREEN')
    .setAuthor('Güncelleme #'+data.number)
    .setDescription(data.title)
    .addField('Açıklama', '・ '+data.description.split('\n').join('\n・ ', true)));
  });
  disbutpages.pages(client, message, pages, 300000, disbut, "green", "857590104364548116", "857590016968228874", "857590058444783626")


  ;

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yenilikler"],
  permLevel: 0
};

exports.help = {
  name: 'güncellemeler'
};

