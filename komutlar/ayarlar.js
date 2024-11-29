const Discord = require('discord.js')
const data = require('quick.db');
const db = require('quick.db');

exports.run = async(client, message, args) => {
const erkekroleID = await data.fetch(`erkek.${message.guild.id}`);
const kadınroleID = await data.fetch(`kadın.${message.guild.id}`);
const yetkiliroleID = await data.fetch(`yetkili.${message.guild.id}`);
const kayıtsızroleID = await data.fetch(`kayıtsız.${message.guild.id}`);

let kapat = ("<:kapali:841088855343497216>")
let kısıt = ("<:acik:841088923840282694>")
let yok = ("<:soruisareti:855778335597264916>")
let caps = data.fetch(`caps.${message.guild.id}`)
let küfür = data.fetch(`küfür.${message.guild.id}`)
let napim = data.fetch(`napim.${message.guild.id}`)
let saas = data.fetch(`selams.${message.guild.id}`)
let reklam = data.fetch(`reklam.${message.guild.id}`)
let mesaj = data.fetch(`mslog_${message.guild.id}`);
let öneri = db.fetch(`önerikanal_${message.guild.id}`);
let denetim = db.fetch(`denetimkaydi_${message.guild.id}`);
let yapay = db.fetch(`yapayzeka_${message.guild.id}`);
let yapayk = db.fetch(`yapayzekakanal_${message.guild.id}`);
let aktiflik = data.fetch(`aktiflik.${message.guild.id}`)

let erkek = message.guild.roles.cache.get(erkekroleID);
let kadın = message.guild.roles.cache.get(kadınroleID);
let yetkili = message.guild.roles.cache.get(yetkiliroleID);
let kayıtsız = message.guild.roles.cache.get(kayıtsızroleID);

let napimengel
if(!napim) { napimengel= kapat } else { napimengel = kısıt}
let yapayzeka
if(!yapay) { yapayzeka= kapat } else { yapayzeka = kısıt}
let yapaykanal 
if(!yapayk) { yapaykanal = kapat } else { yapaykanal = `<#${yapayk}>`}
let denetimkaydı
if(!denetim) { denetimkaydı= kapat } else { denetimkaydı = kısıt}
let capslock
if(!caps) { capslock = kapat } else { capslock = kısıt}
let küfürengel
if(!küfür) { küfürengel= kapat } else { küfürengel = kısıt}
let aktiflikbilgi
if(!aktiflik) { aktiflikbilgi= yok } else { aktiflikbilgi = kısıt}
let selam
if(!saas) { selam= kapat } else { selam = kısıt}
let reklamengel
if(!reklam) { reklamengel= kapat } else { reklamengel = kısıt}
let mesajlog 
if(!mesaj) { mesajlog = kapat } else { mesajlog = `<#${mesaj}>`}
let önerikanal 
if(!öneri) { önerikanal = kapat } else { önerikanal = `<#${öneri}>`}
let erkekrole 
if(!erkek) { erkekrole = yok } else { erkekrole = `${erkek}`}
let kadınrole 
if(!kadın) { kadınrole = yok } else { kadınrole = `${kadın}`}
let kayıtsızrole 
if(!kayıtsız) { kayıtsızrole = yok } else { kayıtsızrole = `${kayıtsız}`}
let yetkilirole 
if(!yetkili) { yetkilirole = yok } else { yetkilirole = `${yetkili}`}
 
const knn = new Discord.MessageEmbed()
  .setDescription(`
  \`\`\`        [ Kısıtlama Sistemleri ]        \`\`\`
  **Caps Kısıt** ${capslock}
  **Küfür Kısıt** ${küfürengel}
  **Reklam Kısıt** ${reklamengel}
  **Napim Kısıt** ${napimengel}
  **Denetim Kaydı** ${denetimkaydı}
  
  \`\`\`        [ Ayarlanabilir Sistemleri ]        \`\`\`
  **Selam Sistemi** ${selam}
  **Yapay Zeka** ${yapayzeka}
  **Öneri Kanal** ${önerikanal}
  **Yapay Zeka Kanal** ${yapaykanal}

  `)
  message.inlineReply(knn)
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['settings'],
  permlvl: 2
}

exports.help = {
  name: "ayarlar"
}
