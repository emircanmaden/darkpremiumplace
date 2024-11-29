const Discord = require("discord.js")
const db = require("croxydb") 
exports.run = async (client, message, args) => {

if(message.author.id !== "702463861034319974") return message.inlineReply(":no_entry: Bu Komutu Sadece Sahibim Kullanabilir.");

if(args[0] == "pre") {

db.set(`dppre${args[1]}`, "⭐")

return message.inlineReply(`<:yes:855123080393392149> <@${args[1]}> Adlı kişiye premium verdim!`)

};

if(args[0] == "bug") {

db.set(`dpbug${args[1]}`, "<:bug1:859232209194057747>")

return message.inlineReply(`<:yes:855123080393392149> <@${args[1]}> Adlı kişiye bug-hunter verdim!`)

};

if(args[0] == "owner") {

db.set(`dpowner${args[1]}`, "<:owner:859231377086218250>")

return message.inlineReply(`<:yes:855123080393392149> <@${args[1]}> Adlı kişiye owner verdim!`)

};

if(args[0] == "bug2") {

db.set(`dpbug2${args[1]}`, "<:bug2:859231499399725087>")

return message.inlineReply(`<:yes:855123080393392149> <@${args[1]}> Adlı kişiye bug-hunter2 verdim!`)

};

if(args[0] == "destekçi") {

db.set(`dpdestek${args[1]}`, "<:destek:859231120746610718>")

return message.inlineReply(`<:yes:855123080393392149> <@${args[1]}> Adlı kişiye Destekçi verdim!`)

};

if(args[0] == "yetkili") {

db.set(`dpyetkili${args[1]}`, "<:staff:859230893273382943>")

return message.inlineReply(`<:yes:855123080393392149> <@${args[1]}> Adlı kişiye yetkili verdim!`)

};

if(args[0] == "dev") {

db.set(`dpdev${args[1]}`, "<:developer:780450481863917580>")

return message.inlineReply(`<:yes:855123080393392149> <@${args[1]}> Adlı kişiye developer verdim!`)

};

if(args[0] == "gold") {

db.set(`dpgold${args[1]}`, "<:gold:852340004457283584>")

return message.inlineReply(`<:yes:855123080393392149> <@${args[1]}> Adlı kişiye gold verdim!`)

};

if(args[0] == "mod") {

db.set(`dpmod${args[1]}`, "<:mod:859233935888613386>")

return message.inlineReply(`<:yes:855123080393392149> <@${args[1]}> Adlı kişiye mod verdim!`)

};

if(args[0] == "early") {

db.set(`dpearly${args[1]}`, "<:early:859230812833447946>")

return message.inlineReply(`<:yes:855123080393392149> <@${args[1]}> Adlı kişiye early verdim!`)

};

if(args[0] == "onaylı") {

db.set(`dponayli${args[1]}`, "<:onayli:857644714462150656>")

return message.inlineReply(`<:yes:855123080393392149> <@${args[1]}> Adlı kişiye onaylı kullanıcı verdim!`)

};

} 

exports.conf = {

aliases: ["rozetver","rz"] 

}

exports.help = {

name: "rozet-ver" 

} 