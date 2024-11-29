const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('MANAGE_EMOJIS')) return;
if(client.emojis.cache.size <= 0) return;
  
  if(!args[0] || isNaN(args[0])) {
    
    let findedEmoji = client.emojis.cache.random();
    message.inlineReply(`Bulunan emoji: ${findedEmoji}. Eklenmesini onaylıyorsanız \`evet\` yazınız. Eğer iptal etmek istiyorsanız herhangi bir şey yazabilirsiniz. 
Tek seferde birden çok rastgele emoji de yükleyebilirim: \`!rastgele-yükle 4\``)

    const filter = response => {
    	return response.author.id === message.author.id;
    };
    message.channel.awaitMessages(filter, { max: 1, time: 0, errors: ['time'] }).then(collected => {
			
      if(collected.first().content === 'evet') {
      
      return message.guild.emojis.create(findedEmoji.url, findedEmoji.name).then(m => message.inlineReply(`Yüklendi: ${message.guild.emojis.cache.get(m.id)}`));

      } else return message.inlineReply('Yazan şekilde onaylamadınız, işlem iptal edildi.');

		});

  } else {
    if(args[0] > 5 || args[0] <= 0) return message.inlineReply('Tek seferde fazla 5 tane emoji ekleyebilirim.');

    let emojis = [];
    for(var i = 0; i < args[0]; i++) {
      emojis.push(client.emojis.cache.random().id);
    };

    message.inlineReply(`Bulunan emojiler: ${emojis.map(a => client.emojis.cache.get(a)).join(' ')}. Eklenmesini onaylıyorsanız \`evet\` yazınız. Eğer iptal etmek istiyorsanız herhangi bir şey yazabilirsiniz.`)

    const filter = response => {
    	return response.author.id === message.author.id;
    };
    message.channel.awaitMessages(filter, { max: 1, time: 0, errors: ['time'] }).then(collected => {
			
      if(collected.first().content === 'evet') {
      
      message.inlineReply(`Emojiler yüklendi: ${emojis.map(a => client.emojis.cache.get(a)).join(' ')}`);
      emojis.map(a => client.emojis.cache.get(a)).forEach(x => {
      return message.guild.emojis.create(x.url, x.name);
      });
      } else return message.inlineReply('Yazan şekilde onaylamadınız, işlem iptal edildi.');

		});

  };



}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'rastgele-yükle',
  namee: 'random-upload'
};