const Discord = require('discord.js')
exports.run = function(client, message, args) {
let yardim = new Discord.MessageEmbed()
.setTitle(" Ekonomi | Komut Listesi")
.addField("__💰  Kullanıcı__",`
**\`!ekonomi kullanıcı\`** - *Ekonomi komutları hakkında bilgi edinin!*

\`günlük\`, \`çalış\`, \`soy\`, \`soygun\`, \`yatır\`, \`çek\`, \`gönder\`, \`kasalar\`, \`kasabilgi\`, \`market\`, \`satınal\`, \`eşyalar\`
`)
.addField("__🎲  Oyunlar__",`
**\`!ekonomi oyunlar\`** - *Eğlence/Bahis oyunları oynayarak para kazanın!*

\`balık-tut\`, \`bahis\`, \`slots\`, \`kasa-aç\`
`)
.addField("__💼  Destek__",`
**\`!ekonomi destek\`** - *Bize destek olabiliceğiniz komutlar!*

\`davet\`, \`yapımcım\`, \`destekçi\`, \`bildir\`

Destek Sunucumuz [__Discord Sunucumuza__](https://discord.gg/8FVXKfkXBC) katılmayı unutmayın!
`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '');

let kullanıcı = new Discord.MessageEmbed()
.setTitle("__💰  Kullanıcı Komutları__")
.setDescription(`
**\`!market\` - __Marketten alabileceğiniz eşyalara bakarsınız.__**
**\`!satınal\` - __Marketteki eşyaları satın almanızı sağlar.__**
**\`!eşyalar\` - __Aldığınız eşyaları gösterir.__**
**\`!günlük\` - __24 saat aralıkla 2300-2700 arası para kazanırsınız.__**
**\`!para\` - __Etiketlediğiniz kişinin veya kendi paranızı görürsünüz.__**
**\`!gönder\` - __Etiketlediğiniz kullanıcıya para gönderirsiniz.__**
**\`!soygun\` - __14 dakikada bir soygun yaparsınız.__**
**\`!çalış\` - __Rastgele bir işte çalışıp maaş alırsınız.__**
**\`!yatır\` - __Kendi cüzdanınızdan bankaya para yatırırsınız.__**
**\`!çek\` - __Bankadan kendi cüzdanınıza para çekersiniz.**
**\`!soy\` - __Etiketlediğiniz kişinin cüzdanından para çalarsınız.__**
**\`!kasalar\` - __Bütün kasaları ayrıntılı listeler.__** 
**\`!kasabilgi\` - __ID sini yazdığınız kasa hakkında bilgi alırsınız.__** 
[Destek Sunucumuza](https://discord.gg/8FVXKfkXBC) katılmayı unutmayın
`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '');
let oyunlar = new Discord.MessageEmbed()
.setTitle("__🎲  Oyun Komutları__")
.setDescription(`
**\`!bahis\` - __Bahis oynarsınız, para kaybeder veya 2 katını kazanırsınız.__**
**\`!slot-machine\` - __Slots oynarsınız, para kaybeder veya 2 katını kazanırsınız.__**
**\`!balık-tut\` - __Balık tutarsınız, rastgele para kazanırsınız veya kaybedersiniz.__** 
**\`!kasa-aç\` - __Kasa açarsınız içinden rastgele para kazanırsınız.__** 
`)//== s (https://discord.gg/8FVXKfkXBC) s ==\\
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '');
let destek = new Discord.MessageEmbed()
.setTitle("__💼  Destek Komutları__")
.setDescription(`
**\`!davet\` - __Botu kendi sunucunuza eklersiniz.__**
**\`!destekçi\` - __Botun oyverme linkini atar oy verip destek sunucusunda rol alabilirsiniz.__**
**\`!yapımcım\` - __Botun yapımcısını/geliştiricisini atar.__**
**\`!bildir\` - __Hatalı komutları veya eklenmesini istediğiniz komutları bildirirsiniz.__**
[Destek Sunucumuza](https://discord.gg/8FVXKfkXBC) katılmayı unutmayın
`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '');
  if(!args[0]) return message.inlineReply(yardim)
  
  
  if(args[0] === 'kullanıcı' || args[0] === 'user') return message.inlineReply(kullanıcı)
  if(args[0] === 'oyunlar' || args[0] === 'oyun' || args[0] === 'games' || args[0] === 'game') return message.inlineReply(oyunlar)
  if(args[0] === 'destek' || args[0] === 'support') return message.inlineReply(destek)
  
  
};


exports.conf = {
    enabled: true, 
    aliases: ["ekonomi","yardımekonomi",'Ekonomi'],
  };
  
  exports.help = {
    name: 'ekonomiyardım'
  };
