const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const moment = require('moment');
const convert = require("parse-ms");
const itunes = require('itunes-web-api');

//bytetouppers
function bytesToSize(bytes, seperator = " ") {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes == 0) return 'n/a'
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
    if (i === 0) return `${bytes}${seperator}${sizes[i]}`
    return `${(bytes / (1024 ** i)).toFixed(1)}${seperator}${sizes[i]}`
  }
 let resim = 'https://cdn.discordapp.com/attachments/712743335873347654/790286656526614588/1200px-ITunes_logo.svg.png'
exports.run = async (client, message, args) => {           
    let ar = ['şarkı', 'uygulama', 'albüm']
    if(!ar.includes(args[0])) return message.inlineReply(new MessageEmbed().setFooter(
    `${message.author.username} tarafından istendi.`, message.author.avatarURL({dynamic: true , size: 2048})
    ).setAuthor(`iTunes`, resim, 'https://www.apple.com/tr/itunes/').setDescription(`
    :white_small_square: \`!itunes şarkı <ad>\`
    :white_small_square: \`!itunes albüm <ad>\`
    :white_small_square: \`!itunes uygulama <ad>\``).setColor(0xFEFEFE))
    if(!args[0]) return message.inlineReply(new MessageEmbed().setFooter(
    `${message.author.username} tarafından istendi.`, message.author.avatarURL({dynamic: true , size: 2048})
    ).setAuthor(`iTunes`, resim, 'https://www.apple.com/tr/itunes/').setDescription(`
    :white_small_square: \`!itunes şarkı <ad>\`
    :white_small_square: \`!itunes albüm <ad>\`
    :white_small_square: \`!itunes uygulama <ad>\``).setColor(0xFEFEFE))
    //if(args[0]) await message.inlineReply(new Discord.MessageEmbed().setColor(0x2F3136).setDescription(`**Bilgiler hazırlanıyor, lütfen bekleyiniz.**`).setFooter(`${client.user.username}`, client.user.displayAvatarURL())).then(msg => msg.delete({ timeout: 1000}));
    if(args[0] === 'şarkı') {
    const name = args.slice(1).join(" ");
    if (!name) { return message.inlineReply(new Discord.MessageEmbed().setDescription(`<@${message.author.id}> , Herhangi Bir Şarkı Adı Girmelisin.`).setColor(0xFEFEFE)).then(msg => msg.delete({ timeout: 10000})) }
    try {
        let body = await itunes.track(name, {limit: 1, lang: 'tr', country: 'tr'})
        if (!body.results.length) return message.inlineReply(new Discord.MessageEmbed().setDescription(`<@${message.author.id}> , Malesef Herhangi Bir Sonuç Bulunamadı.`).setColor(0xFEFEFE)).then(msg => msg.delete({ timeout: 10000})) 
        const data = body.results[0];
        const ending = convert(data.trackTimeMillis);
        let minutes = ending.minutes < 10 ? `0${ending.minutes}` : ending.minutes;
        let seconds = ending.seconds < 10 ? `0${ending.seconds}` : ending.seconds + ending.nanoseconds;
        let zaman = `${minutes}:${seconds}`;
        const embed = new MessageEmbed()
            .setColor(0x2F3136)
            .setAuthor('iTunes', resim, data.trackViewUrl)
            .setThumbnail(data.artworkUrl100.replace('100x100bb.jpg' , '1280x1280.png'))
            .addField('Ad', `${data.trackExplicitness === 'explicit' ? ' ' : ''}[${data.trackCensoredName}](${data.trackViewUrl})`)
            .addField('Sanatçı', `[${data.artistName}](${data.artistViewUrl})`)
            .addField('Albüm', `[${data.collectionName}](${data.trackViewUrl})`)
            .addField('Süre', zaman)
            .addField('Tür', data.primaryGenreName)
            .addField('Çıkış Tarihi', `${moment(data.releaseDate).format('Do MMMM YYYY')} | (${moment(data.releaseDate).fromNow()})`)
            .addField('Ön İzleme', `[İndirmek İçin Tıkla](${data.previewUrl})`)
        return message.inlineReply(embed);
    } catch (err) {
        return message.reply(`Bir hata İle Karışılaştım. Hata: \`${err.message}\`. Lütfen Tekrar Deneyiniz!`);
     }
} else if(args[0] === 'albüm') {
    const name = args.slice(1).join(" ");
    if (!name) { return message.inlineReply(new Discord.MessageEmbed().setDescription(`<@${message.author.id}> , Herhangi Bir Albüm Adı Girmelisin.`).setColor(0xFEFEFE)).then(msg => msg.delete({ timeout: 10000})) }
    try {
        const body = await itunes.album(name, {limit: 1, lang: 'tr', country: 'tr'})
        if (!body.results.length) return message.inlineReply(new Discord.MessageEmbed().setDescription(`<@${message.author.id}> , Malesef Herhangi Bir Sonuç Bulunamadı.`).setColor(0xFEFEFE)).then(msg => msg.delete({ timeout: 10000})) 
        const data = body.results[0];
        const embed = new MessageEmbed()
            .setColor(0x2F3136)
            .setAuthor('iTunes', resim, data.collectionViewUrl)
            .setThumbnail(data.artworkUrl100.replace('100x100bb.jpg' , '1280x1280.png'))
            .addField('Ad', `[${data.collectionName}](${data.collectionViewUrl})`)
            .addField('Sanatçı', `[${data.artistName}](${data.artistViewUrl})`)
            .addField('Parçalar', `${data.trackCount}`)
            .addField('Tür', data.primaryGenreName)
            .addField('Çıkış Tarihi', `${moment(data.releaseDate).format('Do MMMM YYYY')} | (${moment(data.releaseDate).fromNow()})`)
        return message.inlineReply(embed);
    } catch (err) {
        return message.reply(`Bir hata İle Karışılaştım. Hata: \`${err.message}\`. Lütfen Tekrar Deneyiniz!`);
     }
} else if(args[0] === 'uygulama') {
    const name = args.slice(1).join(" ");
    if (!name) { return message.inlineReply(new Discord.MessageEmbed().setDescription(`<@${message.author.id}> , Herhangi Bir Uygulama Adı Girmelisin.`).setColor(0xFEFEFE)).then(msg => msg.delete({ timeout: 10000})) }
    try {
        const body = await itunes.app(name, {limit: 1, lang: 'tr', country: 'tr'})
        if (!body.results.length) return message.inlineReply(new Discord.MessageEmbed().setDescription(`<@${message.author.id}> , Malesef Herhangi Bir Sonuç Bulunamadı.`).setColor(0xFEFEFE)).then(msg => msg.delete({ timeout: 10000})) 
        const data = body.results[0];
        const embed = new MessageEmbed()
            .setColor(0x2F3136)
            .setAuthor('iTunes', resim, data.trackViewUrl)
            .setThumbnail(data.artworkUrl100.replace('100x100bb.jpg' , '1280x1280.png'))
            .addField('Ad', `[${data.trackCensoredName}](${data.trackViewUrl})`)
            .addField('Geliştirici', `[${data.artistName}](${data.artistViewUrl})`)
            .addField('Fiyat', data.formattedPrice)
            .addField('Tür', data.genres.map(x => x).join(", "))
            .addField('Yaş Sınırı', data.trackContentRating)
            .addField('Boyut', bytesToSize(data.fileSizeBytes, " "))
            .addField('Versiyon', `${data.version} (iOS ${data.minimumOsVersion} Gerekli)`)
            .addField('Ortalama Oy', `${data.averageUserRatingForCurrentVersion.toFixed(1)} Yıldız | (${data.userRatingCountForCurrentVersion.toLocaleString().replace(/,/g,".")}) Yorum`)
            .addField('Çıkış Tarihi', `${moment(data.releaseDate).format('Do MMMM YYYY')} | (${moment(data.releaseDate).fromNow()})`)
        return message.inlineReply(embed);
    } catch (err) {
        return message.reply(`Bir hata İle Karışılaştım. Hata: \`${err.message}\`. Lütfen Tekrar Deneyiniz!`);
     }
} 
}
exports.conf = { enabled: true, guildOnly: false, aliases: ['itunes', 'iphone'], permLevel: 0 }; 
exports.help = { name: 'itunes', description: 'İtunesde Birşeyler Ararsınız.', usage: 'itunes komut <gereksinim>' };