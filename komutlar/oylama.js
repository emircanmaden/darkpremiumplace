const Discord = require("discord.js");
const db = require('quick.db')

exports.run = (client, message, args) => {
      if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
  if (message.channel.type == "dm") return;
  if (message.channel.type !== "text") return;

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu Komutu Kullanabilmek İçin **Mesajları Yönet** İznine Sahip Olmalısın Ama Senin Yok Kullanamazsın`).then(m => m.delete({ timeout: 10000}));

  message.delete();

  let question = args.join(" ");

  let user = message.author.username;

  if (!question) return message.inlineReply(new Discord.MessageEmbed().setTitle(`Yazı Yazmayı Unuttun!`)).then(m => m.delete(({ timeout: 5000})));

  message.inlineReply(new Discord.MessageEmbed()
        .setColor("007bff")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter("~", client.user.avatarURL())
        .addField(`Oylama! `, `**${question}**`)
    )
    .then(function(message) {
      message.react("👍");
      message.react("👎");
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama","voting","anket"],
  permLevel: 0
};

exports.help = {
  name: "oylama",
  description: "Oylama yapmanızı sağlamaktadır.",
  usage: "!oylama <oylamaismi>"
};