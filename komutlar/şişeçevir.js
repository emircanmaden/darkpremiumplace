


const Discord = require('discord.js');

exports.run = function(client, message, args) {

  if(!message.member.voice.channel) return message.inlineReply('sesli kanala gir!')
  var random = message.guild.members.cache.filter(x => x.voice.channel && x.voice.channelID == message.member.voice.channelID).random();
  if(!random) return;
  var random2 = message.guild.members.cache.filter(x => x.voice.channel && x.voice.channelID == message.member.voice.channelID).random();
  if(!random2) return;
  return message.inlineReply('çeviren: '+message.author.tag+'\nsoran: '+random.user.tag+'\ncevaplayan: '+random2.user.tag);
  
  }


  exports.conf = {
    enabled: true, 
    guildOnly: true, 
    aliases: ["şişe-çevir","şişecevir","şişecevir"],
    permLevel: 0 
  };
  
  exports.help = {
    name: 'şişeçevir', 
    description: 'Rastgele bir şifre oluşturur.',
    usage: 'şifre <uzunluk>'
  };