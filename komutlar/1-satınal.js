const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
var ayarlar = require("../ayarlar.json")
const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async (client, message, args) => {

      let alınacak = args.join(" ");
      if(!alınacak) return message.reply('Lütfen satın almak için bir ürün seçin!')
      let items = db.fetch(`newitemler_${message.author.id}`);
      let bakiye = db.fetch(`para_${message.author.id}`)
      
      
      if(alınacak === 'hançer'){
          if(bakiye < 299999) return message.reply('Bu ürünü alacak kadar paranız yok malesef, lütfen başka birürün seçin.');
          db.subtract(`para_${message.author.id}`, 300000);
          db.push(`newitemler_${message.author.id}`, "Hançer :dagger:");
          message.reply('Başarıyla bir adet kılıç alındı.')
      }

        if(alınacak === 'harita'){
          if(bakiye < 499999) return message.reply('Bu ürünü alacak kadar paranız yok malesef, lütfen başka birürün seçin.');
          db.subtract(`para_${message.author.id}`, 500000);
          db.push(`newitemler_${message.author.id}`, "Harita :map:");
          message.reply('Başarıyla bir adet harita alındı.')
      }

    if(alınacak === 'çekiç'){
          if(bakiye < 399999) return message.reply('Bu ürünü alacak kadar paranız yok malesef, lütfen başka birürün seçin.');
          db.subtract(`para_${message.author.id}`, 400000);
          db.push(`newitemler_${message.author.id}`, "Çekiç :hammer:");
          message.reply('Başarıyla bir adet balta alındı.')
      }

    if(alınacak === 'silah'){
          if(bakiye < 1000001) return message.reply('Bu ürünü alacak kadar paranız yok malesef, lütfen başka birürün seçin.');
          db.subtract(`para_${message.author.id}`, 1000000);
          db.push(`newitemler_${message.author.id}`, "Silah :gun:");
          message.reply('Başarıyla bir adet silah alındı.')
      }
    if(alınacak === 'ok ve yay'){
          if(bakiye < 799999) return message.reply('Bu ürünü alacak kadar paranız yok malesef, lütfen başka birürün seçin.');
          db.subtract(`para_${message.author.id}`, 800000);
          db.push(`newitemler_${message.author.id}`, "Ok ve Yay :bow_and_arrow:");
          message.reply('Başarıyla bir adet ok ve yay alındı.')
      }

    
    };
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['buy',"satın-al"],
permLevel: 0
};

exports.help = {
name: 'satınal',
description: 'satın alma',
usage: 'satınal'
};
