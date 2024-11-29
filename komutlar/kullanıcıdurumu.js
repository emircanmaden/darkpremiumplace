const Discord = require('discord.js')

exports.run = async (cleint, message, bot, args) => {

let sadecebot = message.guild.members.cache.filter(m => m.user.bot).size;
let sadeceüye = message.guild.memberCount;
let totalüye = sadeceüye - sadecebot;

const kullanıcıdurumu = new Discord.MessageEmbed()
.setColor(`#9e1a1a`)
.setDescription(`
<:cevrimici:849997767719518219> Aktif: **${message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size}** <:bosta:849997902214594651> Boşta: **${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}** <:rahatsizetmeyin:849997838708506634> Rahatsız Etmeyin: **${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}** <:gorunmez:849997947420409856>  Çevrimdışı: **${message.guild.members.cache.filter(off => off.presence.status === 'offline').size}** <:bot:849997717237399583> Bot: **${sadecebot}** 
`)
.setFooter(`Toplam Kullanıcı Sayısı: ${totalüye}`)
message.inlineReply(kullanıcıdurumu)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}
exports.help = {
    name: "ndhdjdudjd",
     description: 'Sunucudaki kullanıcı istatistiklerini sergiler.',
    usage: '${orefix}kullanıcıdurumu',
} 