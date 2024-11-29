const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
    if(message.author.id !== "702463861034319974") return;

message.inlineReply(new Discord.MessageEmbed().setDescription(`
!premium
!rozetver
!load
!güncelleme ekle sil
!eval
!bakım
!ex
!sunucularım

`)

.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'owner'
};