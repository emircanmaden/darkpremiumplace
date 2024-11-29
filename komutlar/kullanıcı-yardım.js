const Discord = require("discord.js")

const disbutpages = require("discord-embeds-pages-buttons")

 const disbut = require("discord-buttons") 

exports.run = async (client, message, args) => {

    const embed1 = new Discord.MessageEmbed()
  .setURL("https://top.gg/bot/723926897477681276")

  .setDescription(`  
  <:darkplace:818868933574262824> \**!minecraft** = Ipsini girdiğiniz sunucunun istatisliğini atar.
  <:darkplace:818868933574262824> \**!not** = Not alırsınız.
  <:darkplace:818868933574262824> \**!avatar** = Profil fotoğrafınıza bakarsınız.
  <:darkplace:818868933574262824> \**!id** = Etiketlediğiniz kişinin İD'sine bakarsınız.
  <:darkplace:818868933574262824> \**!steamstore** = Belirtilen steam oyunu hakkında bilgi gösterir.
  <:darkplace:818868933574262824> \**!korona** = Korona verilerini gösterir.
  <:darkplace:818868933574262824> \**!sunucubilgi** = Sunucu bilgiyi gösterir.
  <:darkplace:818868933574262824> \**!gif-ara** = Giphy sunucusundan yazdığınız gifi çıktı olarak atar.
  <:darkplace:818868933574262824> \**!yetkilerim** = Sahip olduğunuz yetkileri görüntüler.
  <:darkplace:818868933574262824> \**!çağır** = Bot özelden sahibimi çağırır.
  <:darkplace:818868933574262824> \**!çeviri** = google çeviri komutudur.
  <:darkplace:818868933574262824> \**!v11tov12** = v11 komutlarını 12'ye çevirirsiniz.
  <:darkplace:818868933574262824> \**!text <yazı>** = Bota gif şeklikde yazı yazdırırsınız.
  <:darkplace:818868933574262824> \**!nerde** = Etiketlediginiz kişi sesdemi değilmi vb. sorgularsınız.
  <:darkplace:818868933574262824> \**!uptime** = Botun çalışma süresünü görüntülersiniz.`,             
 `<:darkplace:818868933574262824> \**!deprem-bilgi** = Türkiyede son 10 depremi görüntüler.
  <:darkplace:818868933574262824> \**!kullanıcı-bilgi** = Kullanıcı bilgi komutudur.
  <:darkplace:818868933574262824> \**!hatırlat** = Belirledğiniz süre sonra bot size hatırlatmak amacıyla mesaj gönderir.
  <:darkplace:818868933574262824> \**!youtube** = Youtubeden arama yapmanızı sağlar.
  <:darkplace:818868933574262824> \**!bitcoin** = Bitcoin verilerini görüntüler.
  <:darkplace:818868933574262824> \**!havadurumu** =  Belirtilen bölgenin hava durumunu gösterir.
  <:darkplace:818868933574262824> \**!itunes** = İtunes üzerinde uygulama / şarkı / albüm gösterirsiniz.
  <:darkplace:818868933574262824> \**!lyrics** = Yazdığınız şarkı sözünü atar.
  <:darkplace:818868933574262824> \**!tdk** = Tdkdan atasözü ve kelimenin anlamını aratırsınız **ÖRN:** !tdk elma.
  <:darkplace:818868933574262824> \**!ai** = Bot ile konuşursunuz.
 `)

 .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '');

    const embed2 = new Discord.MessageEmbed()
    .setURL("https://top.gg/bot/723926897477681276")
  
    .setDescription(`   
    <:darkplace:818868933574262824> \**!kekoca** = Kekoca yazarsınız.
    <:darkplace:818868933574262824> \**!atatürksözü** = Atatürk sözlerini attırırsınız.
    <:darkplace:818868933574262824> \**!iftar** = İftara ne kadar kaldığını söyler.
    <:darkplace:818868933574262824> \**!şifre** Sizin için şifre oluşturur.
    <:darkplace:818868933574262824> \**!kontrol** = Belirttiğiniz kişinin hesabını ne zaman kurmuş olduğuna bakarsınız.
    <:darkplace:818868933574262824> \**!pnd** = Link kısaltırsınız.
    <:darkplace:818868933574262824> \**!kelimesay** = Kurduğunuz cümlede kaç kelime olduğunu size söyler.
    <:darkplace:818868933574262824> \**!kanalid** = Belirttiğiniz kanalın id'sini alırsınız.
    <:darkplace:818868933574262824> \**!tanıt** = Sunucunuzu destek sunucusunda tanıtırsınız.
    <:darkplace:818868933574262824> \**!youtube** = Youtubeden arama yaparsınız.
    <:darkplace:818868933574262824> \**!googleplay** = Google playden arama yaparsınız.
    <:darkplace:818868933574262824> \**!kripto** = Kripto para birimlerine bakarsınız.
    <:darkplace:818868933574262824> \**!docs** = Discord docsda arama yaparsınız.
    <:darkplace:818868933574262824> \**!ezan** = Belirtiğiniz şehirdeki ezan vakitlerini gösterir.
    <:darkplace:818868933574262824> \**!ses** = Bu komut sayesinde ses kanalında youtube videoları izleyebilmenizi veya oyun oynamanızı sağlar.
    
   `)
  
   .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '');

   const embed3 = new Discord.MessageEmbed()
   .setURL("https://top.gg/bot/723926897477681276")
 
   .setDescription(`   
   <:darkplace:818868933574262824> \**!sunucutanıt** = Sunucunuzu tanıtırsınız.
   <:darkplace:818868933574262824> \**!roblox** = İstediğiniz kişinin roblox profilini görüntülersiniz.
   <:darkplace:818868933574262824> \**!plaka** = Plaka sorgularsınız.
   <:darkplace:818868933574262824> \**!qr** = Qr kodu oluşturursunuz.
   <:darkplace:818868933574262824> \**!özelgünler** = Özel günlere ne kadar kaldığını gösterir.
   <:darkplace:818868933574262824> \**!etiket** = Sizi en son etiketleyen hakkında bilgi verir.
   <:darkplace:818868933574262824> \**!ss** = Yazdığınız siteye giderek size ss atar.
   <:darkplace:818868933574262824> \**!komut-ara** = İstediginiz komut varmı yokmu diye kontrol etmenize yarar.
   <:darkplace:818868933574262824> \**!hesapla** = Butonlu hessp makinesi kullanırsınız.
   <:darkplace:818868933574262824> \**!profil** = Özel profil komutudur.
   <:darkplace:818868933574262824> \**!profil-ayarla** = Özel profil komutunu ayarlanıza yarar.
   <:darkplace:818868933574262824> \**!memes** = Rastgele memesler görüntülersiniz.
   <:darkplace:818868933574262824> \**!trafik şehir (sayı)** = İstediğiniz şehrin trafik yoğunluğunu yandex harita üzerinden görmenize yarar.
   <:darkplace:818868933574262824> \**!embedoluştur** = İstediğiniz kanala bot ile embed mesajı gönderirsiniz.
   <:darkplace:818868933574262824> \**!sunucupp** = Sunucu ppsine bakarsınız.
   <:darkplace:818868933574262824> \**!banner** = İstediğiniz kisinin bannerine bakarsınız.

  `)
 
  .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '');

   
    var pages = [embed1, embed2,embed3]

    disbutpages.pages(client, message, pages, 300000, disbut, "green", "857590104364548116", "857590016968228874", "857590058444783626")

}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["kullanıcı","user"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı-yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}
