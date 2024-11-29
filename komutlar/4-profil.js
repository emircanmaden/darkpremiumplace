const Discord = require("discord.js")

const { MessageButton } = require("discord-buttons") 

const db = require("croxydb") 

exports.run = async (client, message, args) => {

let kullanıcı = message.mentions.users.first() 

let yas = db.fetch(`yas_${message.author.id}`)

let aciklama = db.fetch(`aciklama_${message.author.id}`) 

let durum = db.fetch(`durum_${message.author.id}`) 

let durume = db.fetch(`durume_${message.author.id}`) 

let banner = db.fetch(`banner_${message.author.id}`) 

let xbox = db.fetch(`xboxq_${message.author.id}`) 

let youtube = db.fetch(`youtubeq_${message.author.id}`) 

let twitch = db.fetch(`twitch_${message.author.id}`) 

let github = db.fetch(`githubq_${message.author.id}`) 

let diger = db.fetch(`diğer_${message.author.id}`) 

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

let xboxb = new MessageButton() 

.setLabel(`Xbox`)

.setURL(`${xbox || "https://www.xbox.com/tr-TR"}`)

.setStyle("url")

let youtubeb = new MessageButton() 

.setLabel(`YouTube`)

.setURL(`${youtube || "https://youtube.com"}`)

.setStyle("url")


let githubb = new MessageButton() 

.setLabel(`Github`)

.setURL(`${github || "https://github.com"}`)

.setStyle("url")

let twitchb = new MessageButton() 

.setLabel(`Twitch`)

.setURL(`${twitch || "https://twitch.com"}`)

.setStyle("url")

let diğerb = new MessageButton() 

.setLabel(`Diğer`)

.setURL(`${diger || "https://google.com"}`)

.setStyle("url")

const embed1 = new Discord.MessageEmbed() 

.setTitle("Profil") 

.addField(`<:member:859221774834597888> İsim`, message.author.username) 

.addField(`<:member:859221774834597888> Yaş`, `${yas || "Ayarlanmamış"}`) 

.addField(`<:canta:859221831483392001> Rozetlerin`, `${owner || ""} ${yetkili || ""} ${mod || ""} ${dev || ""} ${early || ""} ${pre || "<:member:859221774834597888>"} ${gold || ""} ${destekci || ""} ${bug || ""} ${bug2 || ""} ${onayli || ""}`) 

.addField(`<:pusula:859221909765488640> Açıklama`, `${aciklama || "Ayarlanmamış ayarlamak için !profil-ayarla"}`) 

.addField(`<:pusula:859221909765488640> Durum`, `${durume || ""} ${durum || "Rozet almak ve bilgi almak istiyorsanız destek sunucuma gelin"}`)

.setImage(`${banner || ""}`)

.setColor("GREEN") 

.setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 })) 

message.channel.send({

embed: embed1, 

buttons: [xboxb, youtubeb, githubb, twitchb, diğerb]

}) 

} 

exports.conf = {

aliases: ["profil"] 

}

exports.help = {

name: "profil" 

}  