const Discord = require("discord.js");
const ms = require("parse-ms");

exports.run = async (client, message, args, bot) => {

  let ylbs = new Date("2022-01-01 00:00:00");
  let yilbasi = ms(ylbs - Date.now());

  let cck = new Date("2022-04-23 00:00:00")
  let cocuk = ms(cck - Date.now());

  let emk = new Date("2022-05-01 00:00:00")
  let emek = ms(emk - Date.now());

  let spr = new Date("2022-05-19 00:00:00")
  let spor = ms(spr - Date.now());

  let rzm = new Date("2022-05-12 00:00:00");
  let ramazan = ms(rzm - Date.now());

  let krb = new Date("2021-07-20 00:00:00");
  let kurban = ms(krb - Date.now());

  let dmk = new Date("2021-07-15 00:00:00")
  let demokrasi = ms(dmk - Date.now());

  let zrf = new Date("2021-08-30 00:00:00");
  let zafer = ms(zrf - Date.now());

  let cmh = new Date("2021-10-29 00:00:00");
  let cumhur = ms(cmh - Date.now());

  message.inlineReply(
    new Discord.MessageEmbed().setColor("00ffff")
      .setDescription(`
Yılbaşınına **${yilbasi.days}** gün **${yilbasi.hours}** saat **${yilbasi.minutes}** dakika kaldı!

Ulusal Egemenlik ve Çocuk Bayramı'na **${cocuk.days}** gün **${cocuk.hours} saat **${cocuk.minutes} dakika kaldı!

Emek ve Dayanışma Günü'ne **${emek.days}** gün **${emek.hours} saat **${emek.minutes} dakika kaldı!

Atatürk'ü Anma Gençlik ve Spor Bayramı'na**${spor.days}** gün **${spor.hours} saat **${spor.minutes} dakika kaldı!

Ramazan bayramına **${ramazan.days}** gün **${ramazan.hours}** saat **${ramazan.minutes}** dakika kaldı!

Kurban bayramına **${kurban.days}** gün **${kurban.hours}** saat **${kurban.minutes}** dakika kaldı!

Demokrasi ve Milli Birlik Günü'ne **${demokrasi.days}** gün **${demokrasi.hours} saat **${demokrasi.minutes} dakika kaldı!

Zafer bayramına **${zafer.days}** gün **${zafer.hours}** saat **${zafer.minutes}** dakika kaldı!

Cumhuriyet bayramına **${cumhur.days}** gün **${cumhur.hours}** saat **${cumhur.minutes}** dakika kaldı!`)
  );
};

exports.conf = {
  aliases: ["özelgünler"]
};

exports.help = {
  name: "özel-günler"
};