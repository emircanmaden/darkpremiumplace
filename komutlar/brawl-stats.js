const Discord = require('discord.js');
const client = new Discord.Client();
const BrawlStars = require("brawlstars.js")
const token      = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImY1NmExYjI2LThlOWMtNGNlMS04MTA2LTI0ZmVhN2IyYTk0NyIsImlhdCI6MTYxNTMwOTg4NSwic3ViIjoiZGV2ZWxvcGVyL2I1ZjlhZmUyLTRiMmQtNjZmZi1hNDc3LTVhZDZlNDBhMzgwZCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTkzLjE2MC4yMTUuMjI4Il0sInR5cGUiOiJjbGllbnQifV19.4EGMfNELelJoy2cB-QKs9IIuH106fIpTVyGB9uMbonxY_6OFYWntfnpfvScpsUflhs3stma5RIPsDGbrA6gmoQ" // https://developer.brawlstars.com/ burdan token oluşturun
const clientbs     = new BrawlStars.Client(token)
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {

  if (message.author.bot) return;
  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix;

 
  let arg = args.slice(0).join(' ');

  if (!arg[0]) {
     const embed1 = new Discord.MessageEmbed()
  .setDescription(`
**Lütfen Bir Etiket Giriniz**

**Örn:** \`\`\`${prefix}brawlstats #82YQ2Q2PV\`\`\`
**Önemli:** Etiketin başına \`#\` koymazsanız çalışmaz!
  `)
  message.inlineReply(embed1)
} 

  const player = await clientbs.getPlayer(args[0]) 

  const embed = new Discord.MessageEmbed()
.setDescription(`
Adı: **${player.name}**
Etiketi: **${player.tag}**
İsim Rengi: **${player.nameColor}**
Kupası: **${player.trophies}**
En Yüksek Kupa Sayısı: **${player.highestTrophies}**

Xp Seviyesi: **${player.expLevel}**
Xp Puanı: **${player.expPoints}**

3'lü Galibiyeti: **${player.trioVictories}**
2'li Galibiyeti: **${player.duoVictories}**
Tekli Galibiyeti: **${player.soloVictories}**
Toplam Galibiyeti: **${player.totalVictories}**

Karakter Sayısı: **${player.brawlerCount}**
`)
message.inlineReply(embed) 
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'brawlstats'
};