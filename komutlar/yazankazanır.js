const Discord = require('discord.js');
const database = require('quick.db');
let kelime = require('../kelimeler/yazankazanır.json');
const kelimeler = kelime.yazankazanır

exports.run = async (client, message, args) => {// can#0002

  if(!args[0]) return message.inlineReply('Kiminle yazan kazanır oynamak istiyorsan o kişiyi etiketle.');
  if(!message.mentions.members.first()) return message.inlineReply('Hata: Etiketlenen kişi bulunamadı.');
  const member = message.mentions.members.first();
  if(member.user.id === message.author.id) return message.inlineReply('Hata: Sadece kendiniz dışında bir kişiyle oynayabilirsiniz.');

  message.inlineReply(`${member}, sana bir yazan kazanır daveti yollandı. Kabul etmek istiyorsan aşşağıda ki 🟢 tepkisine, reddetmek için 🔴 tepkisine tıkla.`).then(async sent => {
    await sent.react('🟢');
    await sent.react('🔴');

    const filter = (reaction, user) => user.id === member.id;
    sent.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] }).then(collected => {
      collected = collected.first();
      if(collected._emoji.name === '🔴') return sent.delete() && message.reply('Yazan kazanır kabul edilmedi.');
      sent.delete();
      message.inlineReply('Kelime hazırlanıyor, bekleyin!').then(sent2 => {
        setTimeout(() => {
          const kelime = random(kelimeler);
          const mf = response => {
	          return response.content.toLowerCase() === kelime.toLowerCase();
          };

          message.inlineReply(`${member} ${message.author}, kelimeniz: ${kelime}`);
	        message.channel.awaitMessages(mf, { max: 1, time: 30000, errors: ['time'] }).then(answer => {
            sent2.delete();
          
            return message.inlineReply(`${answer.first().author} doğru cevabı verdi!`).then(m => m.delete({ timeout: 20000 }))
          }).catch(() => message.inlineReply('Sanırım kimse kazanamadı.'));

        }, 3000);
      });
    }).catch(error => console.log(error) && message.reply('Bir cevap verilmedi.'));
  });

  function random(map) {
    if(!map) return;
    return map[Math.floor(Math.random() * map.length)];
  };

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazankazanır'],
  permLevel: 0
};
 
exports.help = {
  name: 'yazan-kazanır'
};// codare ♥