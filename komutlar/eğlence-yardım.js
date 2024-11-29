const Discord = require("discord.js")

const disbutpages = require("discord-embeds-pages-buttons")

 const disbut = require("discord-buttons") 

exports.run = async (client, message, args) => {

    const embed1 = new Discord.MessageEmbed()
  .setURL("https://top.gg/bot/723926897477681276")

  .setDescription(`  
  <:darkplace:818868933574262824> \**!aduketçek** = Etiketlediğiniz kişiye aduket çekersiniz.
  <:darkplace:818868933574262824> \**!ay** = Ay gifini atar.
  <:darkplace:818868933574262824> \**!aşkölçer** = Etiketlediğiniz kullanıcı ile ilişki durumunuzu ölçer.
  <:darkplace:818868933574262824> \**!dünya** = Dünya gifini atar.
  <:darkplace:818868933574262824> \**!amounus** = Etiketlediğiniz kişiyi asarsınız.
  <:darkplace:818868933574262824> \**!trump** = Trump adına tweet paylaşırsınız.
  <:darkplace:818868933574262824> \**!adamasmaca** = Adam asmaca oyunu oynarsınız.
  <:darkplace:818868933574262824> \**!hediyever** = İstediğiniz birisine istediğiniz hediyeyi verirsiniz.
  <:darkplace:818868933574262824> \**!fbi** = FBİ çağırırsınız.
  <:darkplace:818868933574262824> \**!kral-ol** = Kral olursunuz.
  <:darkplace:818868933574262824> \**!harca** = 128 Milyar para harcarsınız.
  <:darkplace:818868933574262824> \**!mcskin** = Belirtilen minecraft oyuncusunun karakterini gösterir.
  <:darkplace:818868933574262824> \**!mckafa** = Belirtilen minecraft oyuncusunun kafasını gösterir.
  <:darkplace:818868933574262824> \**!csgo** = CS:GO kasası açarsınız.
  <:darkplace:818868933574262824> \**!emojiyazı** = Emojili yazı oluşturur. 
  <:darkplace:818868933574262824> \**!tersyazı** = Yazıyı tersden bir şekilde yazar. 
  <:darkplace:818868933574262824> \**!mesaj-döndür** = Belirtilen yazıyı avatarını tersine döndürür.
  <:darkplace:818868933574262824> \**!cursed** = Cursed yazı stili ile yazarsınız.
  <:darkplace:818868933574262824> \**!bs** = Brawl Stars kutu açarsınız.
 `)

 .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '');

    const embed2 = new Discord.MessageEmbed()
    .setURL("https://top.gg/bot/723926897477681276")
  
    .setDescription(`   
    <:darkplace:818868933574262824> \**!dinamik** = Dinamik logo oluşturur. 
    <:darkplace:818868933574262824> \**!altın** = Altın logo oluşturur. 
    <:darkplace:818868933574262824> \**!yazıfoto** = Banner logo oluşturur. 
    <:darkplace:818868933574262824> \**!basit** = Basit logo oluşturur. 
    <:darkplace:818868933574262824> \**!elmas** = Elmas logo oluşturur. 
    <:darkplace:818868933574262824> \**!sarı** = Sarı logo oluşturur. 
    <:darkplace:818868933574262824> \**!neonmavi** = Neon mavi logo oluşturur. 
    <:darkplace:818868933574262824> \**!kalın** = Kalın logo oluşturur. 
    <:darkplace:818868933574262824> \**!anime** = Anime yazı tipinde logo oluşturur. 
    <:darkplace:818868933574262824> \**!habbo** = Habbo yazı tipinde logo oluşturur. 
    <:darkplace:818868933574262824> \**!arrow** = Ok işaretli logo oluşturur. 
    <:darkplace:818868933574262824> \**!tokat** = Etiketlediğiniz kişiye tokat atarsınız.
    <:darkplace:818868933574262824> \**!wasted** = Profil fotoğrafınıza WASTED yazını eklenmiş bir şekilde sunar.
    <:darkplace:818868933574262824> \**!öp** = Etiketlediğiniz kişiyi öpersiniz.
    <:darkplace:818868933574262824> \**!yeşil** = Yeşil logo oluşturur. 
    <:darkplace:818868933574262824> \**!ilgiiste** = İlgi istersiniz.
    <:darkplace:818868933574262824> \**!alev** = Alevli logo oluşturur. 
    <:darkplace:818868933574262824> \**!kırmızı** = Kırmızı logo oluşturur.
    
   `)
  
   .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '');

   const embed3 = new Discord.MessageEmbed()
   .setURL("https://top.gg/bot/723926897477681276")
 
   .setDescription(`   
   <:darkplace:818868933574262824> \**!magik** = Profil fotoğrafınızı eğlenceli hale dönüştürürsünüz.
   <:darkplace:818868933574262824> \**!wanted** = Sizin başınıza bulmaları için ödül koyar.
   <:darkplace:818868933574262824> \**!ejderha** = Ejderhalı logo oluşturur. 
   <:darkplace:818868933574262824> \**!boğazla** = Profil fotoğrafınıza karşınızdakini boğazlıyormuş gibi filtre  uygular. 
   <:darkplace:818868933574262824> \**!token** = Troll komutdur token veriyormuş gibi yapar. 
   <:darkplace:818868933574262824> \**!ft** = Fornite yazı fontunda bota yazı yazdırırsınız.
   <:darkplace:818868933574262824> \**!hbç** = Herkese çay ısmarlarsınız.
   <:darkplace:818868933574262824> \**!kahve-ısmarla** = Birine kahve ısmarlarsınız.
   <:darkplace:818868933574262824> \**!adam-ol** = Sıradan adam ol komutudur.
   <:darkplace:818868933574262824> \**!craftrise** = İstediğiniz kişinin craft rise bilgisine ulaşırsınız.
   <:darkplace:818868933574262824> \**!hypixel** = İstediğiniz kişinin hypixel bilgisine ulaşırsınız.
  `)
 
  .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '');

   
    var pages = [embed1, embed2,embed3]

    disbutpages.pages(client, message, pages, 300000, disbut, "green", "857590104364548116", "857590016968228874", "857590058444783626")

}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["eğlence","fun","eglence"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence-yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}
