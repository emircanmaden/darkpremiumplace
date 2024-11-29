const Discord = require("discord.js")

const disbutpages = require("discord-embeds-pages-buttons")

 const disbut = require("discord-buttons") 

exports.run = async (client, message, args) => {

    const embed1 = new Discord.MessageEmbed()
  .setURL("https://top.gg/bot/723926897477681276")

  .setDescription(`  
  <:darkplace:818868933574262824> \**!sil** = Belirlediğiniz kadar mesaj siler. 
  <:darkplace:818868933574262824> \**!ayarlar** = Ayarlanan komutları görüntülemek için sistem.
  <:darkplace:818868933574262824> \**!say** = Sunucunuzun aktif toplam sayısını vb. gösterir.
  <:darkplace:818868933574262824> \**!yavaş-mod** = Yavaş modu ayarlarsınız. 
  <:darkplace:818868933574262824> \**!vçek** = Etiketlediğiniz kişiyi bulunduğunuz odaya çekersiniz.
 
 `)

 .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '');

    const embed2 = new Discord.MessageEmbed()
    .setURL("https://top.gg/bot/723926897477681276")
  
    .setDescription(`   
    <:darkplace:818868933574262824> \**!prefix** = Botun prefixini değiştirme komutudur.
    <:darkplace:818868933574262824> \**!snipe** = Son silinen mesajı gösterir.
    <:darkplace:818868933574262824> \**!kanalaç** = Etiketlediğiniz kişiye özel kanal açar.
    <:darkplace:818868933574262824> \**!nuke** = Komutu kullandığınız kanalı onay verirseniz siler sonra tekrar oluşturur.
    <:darkplace:818868933574262824> \**!buton-rol** = Butona tıklayarak rol almanızı sağlar.
    <:darkplace:818868933574262824> \**!menü-rol** = Menüye tıklayarak rol almanızı sağlar.
    <:darkplace:818868933574262824> \**!sunucu-kur** = Sunucunuzu yeni açtıysanız bu komut size göre.

   `)
  
   .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '');

   
    var pages = [embed1, embed2]

    disbutpages.pages(client, message, pages, 300000, disbut, "green", "857590104364548116", "857590016968228874", "857590058444783626")

}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["yetkili"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'authorized',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}
