const { MessageEmbed } = require("discord.js");
const ayar = require("../ayarlar.json")
const db = require("quick.db")
exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return  message.react('<a:dh10:796159136945405994>')
    let embed = new MessageEmbed().setColor('BLACK').setTimestamp().setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let user = message.guild.member(member)
    if (!user) return message.inlineReply('Bir kullanıcı belirt')
    if (!user.voice.channel) return message.inlineReply('Bu kullanıcı ses kanalında değil')

    let kanal = user.voice.channel
    let mik = user.voice.selfMute ? "<:kapali:841088855343497216>" : "<:acik:841088923840282694>"
    let kulak = user.voice.selfDeaf ? "<:kapali:841088855343497216>" : "<:acik:841088923840282694>"
    let yayın = user.voice.streaming ? "<:acik:841088923840282694>" : "<:kapali:841088855343497216>"
    let cam = user.voice.selfVideo ? "<:acik:841088923840282694>" : "<:kapali:841088855343497216>"
    let kanalinfo = user.voice.channel.userLimit
    let kanaldakiler = message.guild.members.cache.filter(x => x.voice.channel && x.voice.channel.id === kanal.id).size
    if (kanal && user.voice.channel) {
      kanal.createInvite().then(invite =>
       
        message.inlineReply(embed.setDescription(`
${user} Adlı kullanıcı \`${kanal.name}\` adlı ses kanalında.
Mikrofonu: ${mik}
Kulaklığı: ${kulak}
Yayın Bilgisi: ${yayın}
Kamera Bilgisi: ${cam}
Kanal Bilgisi: \`${kanaldakiler}/${kanalinfo}\`
Kanal Linki: [tıkla](https://discord.gg/${invite.code})

`))
)}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nerde"],
  permLevel: 0,
};

exports.help = {
  name: 'nerede',
  description: 'not',
  usage: 'not'
};
