const Discord = require("discord.js");
const db = require('quick.db')

exports.run = async (client, message, args) => {
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
  let kişi = message.mentions.members.first() || message.author;
  message.inlineReply(`**İstediğiniz Kişinin ID Numarası:** **${kişi.id}**`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:['id'],
  permlevel:0
}

exports.help = {
  name : "id",
  description:"Birisinin İD Sini Alırsınız",
  usage:"!id"
}