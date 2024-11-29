const Discord = require('discord.js');



exports.run = (bot, message, args) => {
const renk = "" //EMBEDİN RENKSİZ OLMASINI İSTİYORSANIZ " " OLARAK DÜZENLEYİN 
 
if(args[0] > 81 || args[0] < 0) return message.inlineReply({embed: {color:"RED",title:"Bu işte bi' terslik var ama...",description:"Türkiyede 81 il bulunmaktadır ve bu illerin plaka kodları doğal olarak 1 ve 81 arasındadır. Lütfen geçerli bir plaka kodu girin."}});
if (isNaN(args[0])) return message.inlineReply({embed: {color:"RED",title:"Bu işte bi' terslik var ama...",description:"Eksik veya yanlış bir plaka kodu girdiniz."}});

switch(args[0]){
case "1":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Adana iline aittir.`}});break
case "2":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Adıyaman iline aittir.`}});break
case "3":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Afyonkarahisar iline aittir.`}});break
case "4":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Ağrı iline aittir.`}});break
case "5":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Amasya iline aittir.`}});break
case "6":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Ankara iline aittir.`}});break
case "7":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Antalya iline aittir.`}});break
case "8":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Artvin iline aittir.`}});break
case "9":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Aydın iline aittir.`}});break
case "10":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Balıkesir iline aittir.`}});break
case "11":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Bilecik iline aittir.`}});break
case "12":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Bingöl iline aittir.`}});break
case "13":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Bitlis iline aittir.`}});break
case "14":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Bolu iline aittir.`}});break
case "15":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Burdur iline aittir.`}});break
case "16":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Bursa iline aittir.`}});break
case "17":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Çanakkale iline aittir.`}});break
case "18":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Çankırı iline aittir.`}});break
case "19":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Çorum iline aittir.`}});break
case "20":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Denizli iline aittir.`}});break
case "21":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Diyarbakır iline aittir.`}});break
case "22":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Edirne iline aittir.`}});break
case "23":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Elazığ iline aittir.`}});break
case "24":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Erzincan iline aittir.`}});break
case "25":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Erzurum iline aittir.`}});break
case "26":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Eskişehir iline aittir.`}});break
case "27":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Gaziantep iline aittir.`}});break
case "28":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Giresun iline aittir.`}});break
case "29":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Gümüşhane iline aittir.`}});break
case "30":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Hakkari iline aittir.`}});break
case "31":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Hatay iline aittir.`}});break
case "32":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Isparta iline aittir.`}});break
case "33":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Mersin iline aittir.`}});break
case "34":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu İstanbul iline aittir.`}});break
case "35":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu İzmir iline aittir.`}});break
case "36":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Kars iline aittir.`}});break
case "37":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Kastamonu iline aittir.`}});break
case "38":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Kayseri iline aittir.`}});break
case "39":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Kırklareli iline aittir.`}});break
case "40":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Kırşehir iline aittir.`}});break
case "41":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Kocaeli iline aittir.`}});break
case "42":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Konya iline aittir.`}});break
case "43":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Kütahya iline aittir.`}});break
case "44":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Malatya iline aittir.`}});break
case "45":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Manisa iline aittir.`}});break
case "46":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Kahramanmaraş iline aittir.`}});break
case "47":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Mardin iline aittir.`}});break
case "48":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Muğla iline aittir.`}});break
case "49":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Muş iline aittir.`}});break
case "50":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Nevşehir iline aittir.`}});break
case "51":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Niğde iline aittir.`}});break
case "52":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Ordu iline aittir.`}});break
case "53":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Rize iline aittir.`}});break
case "54":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Sakarya iline aittir.`}});break
case "55":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Samsun iline aittir.`}});break
case "56":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Siirt iline aittir.`}});break
case "57":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Sinop iline aittir.`}});break
case "58":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Sivas iline aittir.`}});break
case "59":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Tekirdağ iline aittir.`}});break
case "60":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Tokat iline aittir.`}});break
case "61":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Trabzon iline aittir.`}});break
case "62":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Tunceli iline aittir.`}});break
case "63":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Şanlıurfa iline aittir.`}});break
case "64":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Uşak iline aittir.`}});break
case "65":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Van iline aittir.`}});break
case "66":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Yozgat iline aittir.`}});break
case "67":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Zonguldak iline aittir.`}});break
case "68":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Aksaray iline aittir.`}});break
case "69":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Bayburt iline aittir.`}});break
case "70":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Karaman iline aittir.`}});break
case "71":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Kırıkkale iline aittir.`}});break
case "72":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Batman iline aittir.`}});break
case "73":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Şırnak iline aittir.`}});break
case "74":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Bartın iline aittir.`}});break
case "75":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Ardahan iline aittir.`}});break
case "76":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Iğdır iline aittir.`}});break
case "77":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Yalova iline aittir.`}});break
case "78":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Karabük iline aittir.`}});break
case "79":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Kilis iline aittir.`}});break
case "80":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Osmaniye iline aittir.`}});break
case "81":message.inlineReply({embed: {color: renk,description: `${args[0]} plaka kodu Düzce iline aittir.`}});break

    
    
};
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['plakasorgu'], // meftun!#3544
  permLevel: 0
};

exports.help = {
  name: 'plaka',
  description: 'Numarasını girdiğiniz plakanın hangi şehire ait olduğunu gösterir.',
  usage: 'a.plaka 20'
}; 