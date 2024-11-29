const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')




var prefix = ayarlar.prefix;




const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
// Start with the character '!'
const OFFSET = '!'.charCodeAt(0);

exports.run = (bot, msg, args) => {
  
  
  
  
  
    if (args.length < 1) {
        msg.reply('**Döndürmem İçin Bir Mesaj Belirt!**');
    }

    msg.channel.send(
        args.join(' ').split('')
            .map(c => c.charCodeAt(0) - OFFSET)
            .map(c => mapping[c] || ' ')
            .reverse().join('')
    );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'mesaj-döndür',
  description: 'Mesajınızı tersden yazar.',
  usage: 'mesajdöndür <mesaj>'
};
