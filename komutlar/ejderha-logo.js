const Discord = require("discord.js");
const db = require('quick.db')


exports.run = (client, message, args) => {
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}

let matador = args.slice(0).join("+");
if (!matador) return message.inlineReply("Lütfen Bişey Yaz");
let link ="https://dynamic.brandcrowd.com/asset/logo/055241ff-dc4f-4743-90be-1c9caa0c900b/logo?v=4&text=" + matador;

const Embedmatador = new Discord.MessageEmbed()

.setImage(link);

return message.inlineReply(Embedmatador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ejderha","dragon"],
  permLevel: 0
};

exports.help = {
  name: "ejderha-logo",
  description: "Ejderha Logosu Yaparsınız",
  usage: "ejderha <logo>"
};
