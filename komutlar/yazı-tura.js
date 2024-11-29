const Discord = require('discord.js');
const chancejs = require('chance');
const db = require('quick.db')

const chance = new chancejs();

const cevaplar = [
    "YAZI-TURA:**__TURA__**",
    "YAZI-TURA:**__YAZI__**"
];

exports.run = function(client, message) {
            if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
    
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    
    if (cevap === "YAZI-TURA:**__YAZI__**") {
        
         const embedyazı = new Discord.MessageEmbed()
        .setColor(0xf4b942)
        .setDescription(cevap)
        .setThumbnail("https://img4.androidappsapk.co/tisIWOl3eEUm3xB1d6JoqwZFtC4kTFPgr_byxjL7cMNwlQsAGN6iOmuUIFYDQr5prw=s300")
        message.inlineReply(embedyazı);
        
    } else if (cevap === "YAZI-TURA:**__TURA__**") {
        
        const embedtura = new Discord.MessageEmbed()
        .setColor(0xf4b942)
        .setDescription(cevap)
        .setThumbnail("https://play-lh.googleusercontent.com/XqQPFaIqg5vEiB316LM5eOHThuZHt1ZIVleJ0_hX4LrhJdG6le951ybCszG0w5AKl_-i")
        message.inlineReply(embedtura);
        
    }
        

};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["yazı-tura"],
  permLevel: 0 
};

exports.help = {
  name: 'yazıtura', 
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
};