const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('MANAGE_EMOJIS')) return;
if(!args[0]) return message.inlineReply(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Gönder Komutu', "Komutu yazdığınız sunucuda olan emojiler arasından bir emojinin adını yazarak botun onu göndermesini sağlayabilirsiniz.")
.addField('Kullanım', `!emojigönder emojiadi`)
.addField('Örnekler', `!emojigönder hareketliemojim
!emojigönder baskabiremoji`)
.setFooter(message.author.username+' tarafından istendi.', message.author.avatarURL({ dynamic: true })));

const emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
if(!emoji) return message.inlineReply('Aradığınız emojiyi **bu sunucudaki** emojiler arasında bulamadım, emoji adlarının büyük-küçük harfe duyarlı olduğunu unutmayın.')
message.delete();
return message.inlineReply(`<${emoji.animated ? 'a' : ''}:${emoji.name}:${emoji.id}>`);

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emojigönder'],
  permLevel: 0
};
 
exports.help = {
  name: 'emoji-gönder',
  namee: 'send'
};