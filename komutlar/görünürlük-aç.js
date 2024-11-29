const Discord = require("discord.js");
const db = require('quick.db')

exports.run = (client, message, args) => {
    const nn = new Discord.MessageEmbed().setThumbnail();
    if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.inlineReply(nn.setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•**Bu komutu **kullanmak için,** \`Kanalları Yönet\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));
  
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
   message.channel.updateOverwrite(every, {
    VIEW_CHANNEL: null
  });

  message.inlineReply("Sohbet kanalı `görünür` durumuna getirildi.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["görünürlükaç"],
  kategori: "sohbet",
  permLevel: 0
};

exports.help = {
  name: "görünürlük-aç",
  description: "Sohbetinizi kapatmaya yarar.",
  usage: "kapat"
};

