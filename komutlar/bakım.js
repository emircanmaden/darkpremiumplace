const { MessageEmbed } = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {
  var sahip = "702463861034319974"
  if(message.author.id !== sahip) return message.inlineReply(
  new MessageEmbed()
    .setColor('BLACK')
    .setAuthor(`${client.user.username} Bakım Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setDescription(`**Hey ${message.author.tag}!** Bu komutu sadece sahibim kullanabilir.`)
    .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
  )
  var a = qdb.fetch(`prefix_${message.guild.id}`)
  if(!a){
    var p = "!"
    }
  else {
    var p = a
  }
if(!args[0]) return message.inlineReply(
new MessageEmbed()
  .setColor('BLACK')
  .setAuthor(`${client.user.username} Bakım Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
  .setDescription(`Bir seçenek belirtmeniz gerekli! \`${p}bakım aç  /  ${p}bakım kapat\``)
  .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
)
 if(args[0] === "aç"){
  if(!qdb.has(`bakım_${client.user.id}`)){
    qdb.set(`bakım_${client.user.id}`, "açık")
    return message.inlineReply(
    new MessageEmbed()
      .setColor('BLACK')
      .setAuthor(`${client.user.username} Bakım Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
      .setDescription(`Bakım modu açıldı sahibim! Bundan sonra senin dışında kimse komut kullanamayacak.`)
      .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
    )}
    else return message.inlineReply(
    new MessageEmbed()
      .setColor('BLACK')
      .setAuthor(`${client.user.username} Bakım Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
      .setDescription(`Bakım modu zaten açık!`)
      .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
      )
    };
    if(args[0] === "kapat"){
    if(qdb.has(`bakım_${client.user.id}`)){
      qdb.delete(`bakım_${client.user.id}`)
      return message.inlineReply(
      new MessageEmbed()
        .setColor('BLACK')
        .setAuthor(`${client.user.username} Bakım Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
        .setDescription(`Bakım modu kapatıldı! Bundan sonra herkes komutları kullanabilir!`)
        .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
      )}
      else return message.inlineReply(
      new MessageEmbed()
        .setColor('BLACK')
        .setAuthor(`${client.user.username} Bakım Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
        .setDescription(`Bakım modu zaten açık değil!`)
        .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))        
      )
    };
    
  };
  exports.conf = {
    aliases: [],
    permLevel: 0
  };
  exports.help = {
    name: "bakım"
  }
  
  
