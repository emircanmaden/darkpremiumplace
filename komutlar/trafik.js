const Discord = require("discord.js");
const fetch = require('node-fetch')

exports.run = (client, message, args) => {
 if(!args[0]) return message.inlineReply("**Lütfen Bir Şehir Belirtin!**")
    var token = "pk.7f265e5019256dd5cb6df5f7911fab64"
    
    if(!args[1]) {
      var zoom = 10
    }
  
    if(args[1]) {
      if (args[1] > 23) return message.inlineReply("**Yakınlaştırma Oranı 23'ten Fazla Olamaz!**") 
      zoom = args[1]
    }
    
       if(isNaN(zoom)){
    return message.inlineReply('**Girdiğin Yakınlaştırma Argümanı Bir Sayı Değil!**')
  }
    const encodedURI = encodeURI(`https://us1.locationiq.com/v1/search.php?key=${token}&q=${args[0].toLowerCase()}&limit=1&accept-language=&countrycodes=&dedupe=0&format=json`);
    
try {
     fetch(encodedURI)
          .then(res => res.json()).then(body => {
          let { type } = body;

      if(body.error === "Unable to geocode") {
        const geoembed = new Discord.MessageEmbed()
        .setDescription("**❌ Böyle Bir Adres Bulunamadı!**")
        .setColor("RED")
        return message.inlineReply(geoembed)
      }
      
       const embed = new Discord.MessageEmbed() 
       .setAuthor(`${args[0]} İçin Gösterilen Trafik Bilgisi`)
       .setDescription(`**Zoom Oranı: ${zoom}` + "\r\n" + "\r\n" + `Yandex Tarafından Alınan Veriye Göre:**`)
       .setImage(`https://static-maps.yandex.ru/1.x/?lang=tr&ll=${body[0].lon},${body[0].lat}&size=650,450&z=${zoom}&l=map,trf`)
       message.inlineReply(embed)
       console.log(body[0].lat)

     })
   } catch (e) {
      message.inlineReply("Komudu Çalıştırırken Bir Hata İle Karşılaşıldı.");
    }
}

exports.conf = {
  aliases: ['trafik'],
  permLevel: 0,
  kategori: "Genel",
};

exports.help = {
  name: 'Trafik',
  description: 'Seçtiğiniz yerin/lokasyonun size trafik verisini gösterir',
  usage: 'trafik <şehir> <yakınlaştırma>',

};
