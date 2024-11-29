const Discord = require("discord.js");
const db = require('quick.db')

exports.run = (client, message, args) => {
              if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}

  let mesaj = args.slice(0).join(" ");
  if (mesaj.length < 1) return message.inlineReply("Kimi öpeceksin?");

const Embedmatador = new Discord.MessageEmbed()

    .setAuthor(" ")
    .setColor(`ORANGE`)
    .setDescription(
      message.author.username +
        ` **adlı kullanıcı, ${mesaj} adlı kullanıcıyı öptü.**`
    )

    .setImage(
               `https://media.tenor.com/images/39fe167bdab90223bcc890bcb067b761/tenor.gif`
 );
  return message.inlineReply(Embedmatador);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "öp",
  description: "İstediğiniz kişiyi öpersiniz.",
  usage: "öp"
};
