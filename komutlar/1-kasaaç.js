const Discord = require('discord.js');
const db = require('quick.db')
const kasalar = require('.././kasalar');
exports.run = async (client, message, args) => {
  const kasaid = args[0];
  const para = await db.fetch(`para_${message.author.id}`);
  const kasasayisi = kasalar.length
  const kasaidembeds = new Discord.MessageEmbed()
  .setTitle(`Bir kasa İd'si gir!`)
  .setFooter(`Kasa listesine bakmak için: !kasalar`)
  .setColor(client.ekoayarlar.renk)
  if(!kasaid) return message.inlineReply(kasaidembeds)
  if(kasaid > kasasayisi) return message.inlineReply(kasaidembeds)
  if(isNaN(kasaid)) return message.inlineReply(kasaidembeds)
  const kasafiyat = kasalar.filter(x => x.kasaid == kasaid).map(x => x.fiyat)
  if(para < kasafiyat) return message.inlineReply(`:warning: Paranız Yetersiz!`)
  message.inlineReply(`Kasayı açmak istediğinize emin misiniz?\n Şu anda \`${para} ${client.ekoayarlar.parabirimi}\` paran var kasayı açtıktan sonra \`${para - kasafiyat}\` paran kalacak. \n\`Eğer açmak istiyorsan evet(e) istemiyorsan hayır(h) yazabilirsin.\``)
  
  
  let uwu = false;
  while (!uwu) {
    const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
    const choice = response.first().content
    if (choice == 'hayır' || choice == 'h') return message.inlineReply('🚀 İşlem iptal edildi.')
    if (choice !== 'evet' && choice !== 'e') {
      message.inlineReply('❓ Lütfen sadece **evet (e)** veya **hayır (h)** ile cevap verin.')
    }
    if (choice == 'evet' || choice == 'e') uwu = true
  }
  if (uwu) {
    try {
      db.add(`para_${message.author.id}`, -kasafiyat)
      message.inlineReply("Kasa Açılıyor.").then(async msg => {
        const icindekiler = require(`.././kasa${kasaid}`)
        setTimeout(() => {
          msg.edit("Kasa Açılıyor..");
        }, 1);
        setTimeout(() => {
          msg.edit("Kasa Açılıyor...");
        }, 2);
        setTimeout(() => {
          msg.edit("Kasa Açılıyor..");
        }, 3);
        setTimeout(() => {
          msg.edit("Kasa Açılıyor.");
        }, 4);
        setTimeout(() => {
          msg.edit("Kasa Açıldı!");
          msg.delete()
        }, 5);
        setTimeout(() => {
          const icindeki = icindekiler[Math.floor(Math.random() * icindekiler.length)];
          message.inlineReply(`Kasadan \`${icindeki}\` ${client.ekoayarlar.parabirimi} kazandın!`)
          db.add(`para_${message.author.id}`, icindeki)
        }, 7)
      })
      
      } catch(e) {
        message.inlineReply(':warning: Bir hata var!')
      }
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kasaaç'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'kasa-aç',
    description: 'Belirttiğiniz İD deki kasayı açarsınız.',
    usage: 'kasa-aç <Kasa-İD>'
}