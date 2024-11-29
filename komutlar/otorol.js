const Discord = require('discord.js');
const qdb = require('quick.db');
module.exports.run = async(client, message, args) => {
  const embedreis1 = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setTitle(`${client.user.username} Oto Rol Paneli`)
  .addField("Dostum, oto-rol kullanmayı bilmiyorsan;","otorol yardım")
  .setFooter(client.user.tag)
  if(!args[0]) return message.inlineReply(embedreis1)
  if(args[0] === "ayarla"){
  var kanal = message.mentions.channels.first();
    var rol = message.mentions.roles.first();
    const embedreis2 = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setTitle(`${client.user.username} Oto Rol Paneli`)
  .setDescription("Dostum, bir kanal belirtmen gerekli!")
  .setFooter(client.user.tag)
    if(!kanal) return message.inlineReply(embedreis2)
        const embedreis3 = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setTitle(`${client.user.username} Oto Rol Paneli`)
  .setDescription("Dostum, bir rol belirtmen gerekli!")
  .setFooter(client.user.tag)
    if(!rol) return message.inlineReply(embedreis3)
  qdb.set(`otorolkanali_${message.guild.id}`, kanal.id)
  qdb.set(`otorol_${message.guild.id}`, rol.id)
      const embedreis4 = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setTitle(`${client.user.username} Oto Rol Paneli`)
  .setDescription(`
  Oto Rol kanalı <#${kanal.id}> kanalına ayarlandı!
  
  Oto Rol rolü <@&${rol.id}> rolüne ayarlandı!
  `)
  .setFooter(client.user.tag)
    return message.inlineReply(embedreis4)

    }
if(args[0] === "yazı") {
    var yazı = args.slice(1).join(' ') 
 if(!yazı) return message.inlineReply('Dostum yazı ayarlamayı seçtin ama yazı ayarlamadın değil mi :(') 
    qdb.set(`otorolyazi_${message.guild.id}`, yazı)
      const embedreis4 = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setTitle(`${client.user.username} Oto Rol Paneli`)
  .setDescription(`
  Oto Rol yazısı;
  
  *${yazı}*
  
  Olarak ayarlandı!
  `)  }
  
  if(args[0] === "sıfırla") {
    var kanal1 = qdb.fetch(`otorolkanali_${message.guild.id}`)
    if(kanal1) {var kanalMesaj = "*Oto Rol Kanalı Veri Tabanı Başarıyla Sıfırlandı!*"}
    if(!kanal1) {
      var kanalMesaj = "**Oto Rol Kanalı Zaten Ayarlanmamış!**"
    }
    var rol1 = qdb.fetch(`otorol_${message.guild.id}`)
    if(rol1) {var rolMesaj = "*Oto Rol Rolü Veri Tabanı Başarıyla Sıfırlandı!*"}
    if(!rol1) {
      var rolMesaj = "**Oto Rol Rolü Zaten Ayarlanmamış!**"
    }
    var yazı1 = qdb.fetch(`otorolyazi_${message.guild.id}`)
    if(yazı1) {var yazıMesaj = "*Oto Rol Yazı Veri Tabanı Başarıyla Sıfırlandı!*" }
    if(!yazı1) {
      var yazıMesaj = "**Oto Rol Yazı Zaten Ayarlanmamış!**"
   
    }
  const sıfırlama1 = new Discord.MessageEmbed()
    .setColor('BLACK')
  .setTitle(`${client.user.username} | Oto Rol Sistemi!`)  
  .setDescription(`${kanalMesaj} \n`)
     qdb.delete(`otorolkanali_${message.guild.id}`) 
    const sıfırlama2 = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setDescription(`${rolMesaj} \n`)
     qdb.delete(`otorol_${message.guild.id}`) 
    const sıfırlama3 = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setDescription(`${yazıMesaj} \n`)
    .setFooter(`${client.user.tag} | Oto Rol Sistemi!`)
     qdb.delete(`otorolyazi_${message.guild.id}`) 
    message.inlineReply(sıfırlama1)
  message.inlineReply(sıfırlama2)
  return message.inlineReply(sıfırlama3)
    
    }
    if(args[0] === "yardım"){
        const embedimsi = new Discord.MessageEmbed()
      .setColor('#000000')
      .setAuthor(`${client.user.username} Otorol Paneli!`)
      .setDescription(`
    **otorol ayarla #kanal #rol**
    Otorol kanalını ve rolünü ayarlarsınız
    
    **otorol yazı <yazınız>**
    Otorol yazısını ayarlarsınız
    
    **otorol sıfırla**
    Otorol veritabanını sıfırlarsınız 
    
    **otorol yardım**
    Otorol Yardım Paneli!
    `)
    .setFooter(client.user.tag)
    message.inlineReply(embedimsi)
}
};
module.exports.conf = {aliases: [], permLevel: 3};
module.exports.help = {name: "testshjdıhjpdf"};
