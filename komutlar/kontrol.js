const Discord = require('discord.js');
const moment = require("moment");
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args, tools) => {
    let user;

    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);
    require("moment-duration-format");
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const katilma = new Date().getTime() - member.joinedAt.getTime();
    const gecen = moment.duration(kurulus).format(`YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`)
    const katılma = moment.duration(katilma).format(`YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`)

    var kontrol;
    if (kurulus < 1036800000)
      kontrol = "Güvenilir Değil <a:hata:834401133077987338>";
    if (kurulus > 1036800000)
      kontrol = "Güvenilir <a:verified:799654362863370240>";

    const CryonicX = new Discord.MessageEmbed()

    .setColor("#2f3136")
    .setDescription(`Hesap oluşturulma tarihi: **${gecen}** Kullanıcı: **${kontrol}**`)

    moment.locale("tr");
    message.inlineReply(CryonicX)

}

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
    };

    exports.help = {
        name: 'kontrol'
    };


