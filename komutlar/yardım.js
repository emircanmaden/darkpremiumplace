const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("croxydb") 

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
  let owner = db.fetch(`dpowner${message.author.id}`) 

  let yetkili = db.fetch(`dpyetkili${message.author.id}`) 
  
  let mod = db.fetch(`dpmod${message.author.id}`)
  
  let dev = db.fetch(`dpdev${message.author.id}`) 
  
  let early = db.fetch(`dpearly${message.author.id}`)
  
  let pre = db.fetch(`dppre${message.author.id}`) 
  
  let gold = db.fetch(`dpgold${message.author.id}`) 
  
  let destekci = db.fetch(`dpdestek${message.author.id}`) 
  
  let bug = db.fetch(`dpbug${message.author.id}`) 
  
  let bug2 = db.fetch(`dpbug2${message.author.id}`) 
  
  let onayli = db.fetch(`dponayli${message.author.id}`) 
  
        const codare = new Discord.MessageEmbed()

        .setAuthor(`${client.user.username} Yardım Menüsü  `, 'https://cdn.discordapp.com/attachments/739930997029863485/818874030303215618/1615303942623.png', 'https://top.gg/bot/723926897477681276')//SadmaNN
        .setDescription('**[Destek Sunucusu](https://discord.gg/8FVXKfkXBC)** **•** **[Botun Davet Linki](https://top.gg/bot/723926897477681276/invite)** **•** **[Oy ver](https://top.gg/bot/723926897477681276/vote)** \nBota Eklenenlerden Anında Haberdar Olmak İçin: `!yenilikler` ')
        .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '')
        .addField(`<:canta:859221831483392001> Rozetlerin`, `${owner || ""} ${yetkili || ""} ${mod || ""} ${dev || ""} ${early || ""} ${pre || "<:member:859221774834597888>"} ${gold || ""} ${destekci || ""} ${bug || ""} ${bug2 || ""} ${onayli || ""}`) 
        .addField("Şu Komutu Denediniz Mi?:",` \`!${client.commands.filter(x => x.help.name || x.help.namee).map(x => x.help.name)[Math.floor(Math.random() * client.commands.filter(x => x.help.name || x.help.namee).map(x => x.help.name).length)]}\`     `)
        .addFields(//SadmaNN//SadmaNN
          { name: '**Kullanıcı**', value: '`!kullanıcı`', inline: true },//SadmaNN
          { name: '**Eğlence**', value: '`!eğlence`', inline: true },//SadmaNN
          { name: '**Yetkili**', value: '`!yetkili`', inline: true },//SadmaNN
          { name: '**Bot**', value: '`!bot`', inline: true },//SadmaNN
          { name: '**Emoji**', value: '`!emojiyardım`', inline: true },//SadmaNN
          { name: '**Ekonomi**', value: '`!ekonomi`', inline: true },//SadmaNN
          { name: '**Kik**', value: '`!kik`', inline: true },//SadmaNN
          { name: '**Oyunlar**', value: '`!oyunlar`', inline: true },
          { name: '**Müzik**', value: '`!müzik`', inline: true },

        )	
          .addField('** Sponsor & Donate**', 
          `Sponsor oldukları [ServerKurma.com'a](https://bit.ly/2XRJeI9) Teşekkür ederiz. \nBotun Devamlılığı için \`!donate\` yardımlarınız önemlidir.`)
          .setImage("https://cdn.discordapp.com/attachments/739930997029863485/845734696649228298/cubuk3.gif")
          .setTimestamp()//SadmaNN
          return message.inlineReply(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help',"y","h"],
	permLevel : 0
}
//codare
exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}

 