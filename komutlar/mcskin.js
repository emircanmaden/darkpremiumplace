const db = require('quick.db')

const Discord = require(`discord.js`);

exports.run = (client, message, args) => {
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.reply('Bir Oyuncu Adı Belirt!\n Girdiğiniz isimde bir skin çıkmıyorsa o isimde bir skin yoktur demektir komut hatasız çalışıyor sonuçlar mc-heads sitesinden arama yapılıp geliyor.');
 if (mesaj == member) {
    message.reply('Kullanıcı Değil , Oyuncu Adı Belirt!')
 } else {
 const mcbody = new Discord.MessageEmbed()
   .setColor('#ffa200')
   .setTitle('Oyuncu: ' + mesaj)
   .setImage(body)
 message.inlineReply(mcbody);
 }
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0,
 kategori: "eğlence" 
};

exports.help = {
 name: 'mcskin',
 description: 'Belirtilen oyuncunun kostümünü gösterir.',
 usage: 'mcbody <oyuncu>'
};