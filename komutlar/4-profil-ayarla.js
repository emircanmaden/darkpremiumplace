const Discord = require("discord.js")

const db = require("croxydb") 

exports.run = async (client, message, args) => {

  if(!args[0]) {

    const embed = new Discord.MessageEmbed() 

.setDescription("<a:hata:834401133077987338> Bir argümant girmen lazım! \n`yaş` **|** `açıklama` **|** `durum` **|** `durum-emoji` **|** `banner` **|** `xbox` **|** `youtube` **|** `github` **|** `twitch`**|** `diģer`") 

.setColor("RED") 

return message.inlineReply(embed) 

} 

if(args[0] == "yaş") {

db.set(`yas_${message.author.id}`, args[1])

return message.inlineReply('<a:check:858336047879815169> Yaşın ayarlandı!')

};

if(args[0] == "açıklama") {

db.set(`aciklama_${message.author.id}`, args.slice(1).join(" "))

return message.inlineReply('<a:check:858336047879815169> Açıklama ayarlandı!')

};

if(args[0] == "durum") {

db.set(`durum_${message.author.id}`, args.slice(1).join(" "))

return message.inlineReply('<a:check:858336047879815169> Durum ayarlandı!')

};

if(args[0] == "durum-emoji") {

db.set(`durume_${message.author.id}`, args[1])

return message.inlineReply('<a:check:858336047879815169> Durum emoji ayarlandı!')

};

if(args[0] == "banner") {

db.set(`banner_${message.author.id}`, args[1])

return message.inlineReply('<a:check:858336047879815169> Banner ayarlandı!')

};

if(args[0] == "xbox") {

db.set(`xboxq_${message.author.id}`, args[1])

return message.inlineReply('<a:check:858336047879815169> Xbox ayarlandı!')

};

if(args[0] == "youtube") {

db.set(`youtubeq_${message.author.id}`, args[1])

return message.inlineReply('<a:check:858336047879815169> YouTube ayarlandı!')

};

if(args[0] == "diğer") {

  db.set(`diğer_${message.author.id}`, args[1])
  
  return message.inlineReply('<a:check:858336047879815169> Diğer ayarlandı!')
  
  };

  if(args[0] == "twitch") {

    db.set(`twitch_${message.author.id}`, args[1])
    
    return message.inlineReply('<a:check:858336047879815169> Diğer ayarlandı!')
    
    };

if(args[0] == "github") {

db.set(`githubq_${message.author.id}`, args[1])

return message.inlineReply('<a:check:858336047879815169> Github ayarlandı!')

};

} 

exports.conf = {

aliases: ["profilayarla"] 

}

exports.help = {

name: "profil-ayarla" 

} 