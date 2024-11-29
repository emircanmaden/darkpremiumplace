const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

var prefix = ayarlar.prefix;




const mapping = {
    'a': 'α',
    'b': 'ß',
    'c': '¢',
    'd': '∂',
    'e': 'є',
    'f': 'ƒ',
    'g': 'q',
    'h': 'ђ',
    'i': 'เ',
    'j': '𝕛',
    'k': 'к',
    'l': 'ℓ',
    'm': '๓', // meftun!#3544
    'n': 'η',
    'p': 'ρ',
    'r': 'я',
    's': 'ร',
    't': 'ᴛ',
    'u': 'ย',
    'v': 'Ꮙ',
    'w': '山',
    'x': 'א',
    'y': 'Ч',
    'z': '乙',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    'ö': '๏',
    'ş': '$',
    'ü': 'υ',
    'ç': 'ς', 
    'ı': '|', 
    'o': 'σ',
    'ğ': 'ğ',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': '*️⃣'
};

exports.run = (bot, msg, args) => {
    if (args.length < 1) {
        throw '**Bir mesaj belirt**';
    }

          if (args.length > 50) return msg.channel.send(`${this.client.emojis.get('509395840821886986')} En fazla 50 Harf Kullanabilirsiniz.`); // meftun!#3544
  
    msg.channel.send(
        args.join(' ')
            .split('')
            .map(c => mapping[c] || c)
            .join('')
      
    )
  msg.channel.send(`${msg.author} tarafından yazdırıldı.`); //bota istenmeyen/argo birşey yazdırılırsa kimin yazdığı bilinebilsin diye bu satır var, istemezseniz bu satırı silebilirsiniz. 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kekodili'], // meftun!#3544
  permLevel: 0
};

exports.help = {
  name: 'kekoca',
  description: 'Mesajınızı keko diline çevirir.',
  usage: 'e.kekoca <mesaj>'
}; 