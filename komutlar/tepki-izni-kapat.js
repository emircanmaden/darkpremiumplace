const Discord = require("discord.js");
const db = require('quick.db')

exports.run = (client, message, args) => {
    const nn = new Discord.MessageEmbed().setThumbnail();
    if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.inlineReply(nn.setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•**Bu komutu **kullanmak için,** \`Kanalları Yönet\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));
  
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
   message.channel.updateOverwrite(every, {
    ADD_REACTIONS: false
  });

  message.inlineReply("Sohbet kanalı `Tepki Eklenemez` durumuna getirildi.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tepkikapat"],
  kategori: "sohbet",
  permLevel: 0
};

exports.help = {
  name: "tepki-kapat",
  description: "Sohbetinizi kapatmaya yarar.",
  usage: "kapat"
};

