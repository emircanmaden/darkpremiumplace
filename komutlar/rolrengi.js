const Discord = require('discord.js')

exports.run = async (client, message, args) => { 
  if(!message.member.permissions.has("MANAGE_ROLES")) return message.inlineReply("Rolleri yönet yetkisine sahip olmalısın.")
let rol = message.mentions.roles.first() 
if(!rol) return message.inlineReply("Bir rol belirtmelisin.")
let color = args[1]
if(!color) return message.inlineReply("Bir renk kodu belirtmelisin.")

message.guild.roles.cache.get(rol.id).setColor(color)
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`${rol} rolünün rengi başarıyla değiştirildi.`)
message.inlineReply(embed)
}
exports.conf = { 
enabled: true, 
guildOnly: false, 
aliases: ['rolecolor',"rol-rengi"],
permLevel: 0
}
exports.help = { 
name: 'rolrengi'
}
