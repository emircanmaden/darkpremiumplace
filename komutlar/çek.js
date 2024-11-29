const Discord = require('discord.js');
const data = require('quick.db');


exports.run = async (client, message, args) => {
if(!message.member.permissions.has('MOVE_MEMBERS')) return message.inlineReply(new Discord.MessageEmbed().setTitle(`**• \`${client.ayarlar.prefix}çek\` kullanmak için, \`Üyeleri Taşı\` İznine sahip olmanız gerekiyor.**`));
if(message.member.voice.channel == undefined) return message.inlineReply(new Discord.MessageEmbed().setTitle('Hata!').setDescription('Sesli kanala girerek dene').setFooter(`Ping: ${client.ws.ping}`, client.user.avatarURL({dynamic:true})))
if(!message.mentions.members.first()) return message.inlineReply(new Discord.MessageEmbed().setColor('RED').setTitle('Hata!').setDescription('Bir kullanıcıyı etiketleyerek dene'));
if(message.author.id === message.mentions.members.first()) return;
if(message.mentions.members.first().voice.channel == undefined) return message.inlineReply(new Discord.MessageEmbed().setTitle('Hata!').setDescription(`Etiketlediğin ${message.mentions.members.first()} Sesli kanalda yok.`).setFooter(`Ping: ${client.ws.ping}`, client.user.avatarURL({dynamic:true})))
message.guild.members.cache.get(message.mentions.members.first().id).voice.setChannel(message.member.voice.channel.id);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'vçek'
};