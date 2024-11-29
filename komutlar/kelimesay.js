const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    let mesaj = args.slice(0).join(" ");
    let sayı = mesaj.split(" ").length

    message.inlineReply(`>>> ${sayı}`)


};

exports.conf = {
    aliases: ["kelime-say"],
    permLevel: 0,
    kategori: 'genel'
  };
  
  exports.help = {
    name: 'kelimesay',
    description: 'kelime say.',
    usage: 'kelimesay <mesaj>',
  
  };