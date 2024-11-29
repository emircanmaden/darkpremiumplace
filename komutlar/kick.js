const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username,message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)
    .setColor('#004b79');
 
    message.inlineReply(embed);
    return;
  }
 
  let u = message.mentions.users.first();
  if (!u) {
    return message.inlineReply(
      new Discord.MessageEmbed()
        .setDescription("Lütfen atılacak kişiyi etiketleyiniz!")
        .setColor("#004b79")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
 
  const embed = new Discord.MessageEmbed()
    .setColor("#004b79")
    .setDescription(`${u} Adlı şahsın sunucudan atılmasını onaylıyor musunuz?`)
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.inlineReply(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.inlineReply(
          `İşlem onaylandı! ${u} adlı şahıs sunucudan atıldı!`
        );
 
        message.guild.member(u).kick();
      }
    });
  });
};
 
module.exports.conf = {
  aliases: [],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};
 
module.exports.help = {
  name: "kick",
  description: "kick",
  usage: "kick"
};