
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

const cevaplar = [

    "%0 <:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814> Çok zor ab",

    "%4 <:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814> Olacak gibi değil...",

    "%12 <:dolu:857606220180488193><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814> Bence hiç deneme?",

    "%26 <:dolu:857606220180488193><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814> Hmm düşük bence.",

    "%31 <:dolu:857606220180488193><:dolu:857606220180488193><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814> Bence şansını dene xd.",

    "%45 <:dolu:857606220180488193><:dolu:857606220180488193><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814> WoaW! Biraz daha yükseltebilirsin.",

    "%59 <:dolu:857606220180488193><:dolu:857606220180488193><:dolu:857606220180488193><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814> İyi iyi",

    "%63 <:dolu:857606220180488193><:dolu:857606220180488193><:dolu:857606220180488193><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814> Olcak olcakk!", 

    "%72 <:dolu:857606220180488193><:dolu:857606220180488193><:dolu:857606220180488193><:dolu:857606220180488193><:bos:857606712138399814><:bos:857606712138399814><:bos:857606712138399814> Hay maşallah yükseliyor!", 

    "%87 <:dolu:857606220180488193><:dolu:857606220180488193><:dolu:857606220180488193><:dolu:857606220180488193><:bos:857606712138399814><:bos:857606712138399814> Çıkma teklifi ettin mi?", 

    "%99 <:dolu:857606220180488193><:dolu:857606220180488193><:dolu:857606220180488193><:dolu:857606220180488193><:dolu:857606220180488193><:bos:857606712138399814> Aynı oyun oynarken son 1 kalır gibi...",

    "%100 <:dolu:857606220180488193><:dolu:857606220180488193><:dolu:857606220180488193><:dolu:857606220180488193><:dolu:857606220180488193> ADAMM! İşte budur.", 

];

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

if (!args[0]) {

      return message.inlineReply(

        new Discord.MessageEmbed()

          .setColor("RANDOM")

          .setDescription("<:no:855123020325584907> Birini etiketlemelisin")

          .setTimestamp()

      );

    }

const user = message.mentions.members.first();

const embed = new Discord.MessageEmbed() 

.setColor("PINK") 

.setDescription(`${cevap}`) 

.setTitle("Aşk Ölçer 2000")

message.inlineReply(embed) 

} 

exports.conf = {
        enabled: true, 
        guildOnly: false, 
        aliases: ["aşk","aşkölçer","aşk-ölçer"],
        permLevel: 0,
          kategori: "eğlence",
        category: "fun"
      };
      
      exports.help = {
        name: 'aşk-ölçer',
        description: 'İki kullanıcı arasındaki aşkı ölçer.',
        usage: 'aşk-ölçer <@kullanıcı> veya aşk-ölçer <@kullanıcı> <@kullanıcı>',
      };