const Discord = require('discord.js');//Syko qwe
const ayarlar = require("../ayarlar.json")


exports.run = async(client, message) => {

if(!message.member.hasPermission("MANAGE_ROLES")) return message.inlineReply("**Bu İşlem İçin `ROLLERİ_YÖNET` Yetkisine Sahip Olmalısınız.**")

let prefixi = ayarlar.prefix

const user = message.mentions.members.first()
if(!user) return message.inlineReply(`**Rol Alınacak Kişiyi Etiketleyin Örnek; ${prefixi}rolal @kullanıcı @rol**`)
const rolewqe = message.mentions.roles.first()  
if(!rolewqe) return message.inlineReply(`**Kişiye Alınacak Rolü Giriniz Örnek; ${prefixi}rolal @kullanıcı @rol**`)

user.roles.remove(rolewqe)

const syko = new Discord.MessageEmbed() 
.setAuthor(message.guild.name, message.guild.iconURL({dynamic: true,}))
.setDescription(`:diamond_shape_with_a_dot_inside: ${user} **İsimli Kullanıcıya Başarı İle** ${rolewqe} **Rolü Alındı!!**`)
.setFooter(`Kullanan: ${message.author.username}`)
.setTimestamp()

message.inlineReply(syko) 

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["rl", "roleremove", "rol-al"] //Syko

  };
  
  exports.help = {
    name: 'rolal',
    description: 'rolverme komutu',
    usage: 'rolver @kullanıcı @rol' //Syko qwe
  };