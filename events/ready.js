const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const { readdirSync } = require("fs");
const fs = require("fs");
const ascii = require("ascii-table");
const db = require("quick.db")
var prefix = ayarlar.prefix;
module.exports = client => {
  
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Toplam kullanıcı ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.cache.size + ` adet kanala, ` + client.guilds.cache.size + ` adet sunucuya ve ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);

  client.user.setStatus("online");
   var oyun = [
       `!yardım`,
        "Bot enerjisini ServerKurma.com'dan alıyor.",
        "!müzik"
        
    ];
    setInterval(function() {
        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
        client.user.setActivity(oyun[random], "https://rapp");
        }, 15000);
}