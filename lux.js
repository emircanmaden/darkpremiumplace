const Discord = require('discord.js');
const client = new Discord.Client();
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu }  = require("discord-buttons");
require("discord-buttons")(client);
require("discord-slider")(client);
require('./util/eventLoader.js')(client);
const Nuggies = require('nuggies');
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
moment.locale('tr');
require("./inlineReply")
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const express = require("express");
const path = require('path');
const snekfetch = require('snekfetch');
const Topgg = require('@top-gg/sdk')
const api = new Topgg.Api('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcyMzkyNjg5NzQ3NzY4MTI3NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE5MDgyODM3fQ.nKRmYhKrJDSNw3MlFhwsgWrsjV8HbD60FH7AMLDNogA')
setInterval(() => {
  api.postStats({
    serverCount: client.guilds.cache.size,
  })
}, 1800000) 
var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};
client.ayarlar = {
  "prefix": "!",
  "sahip": "702463861034319974",
  "token": "OTIyMDQ5MDc0NTIwMjY4ODAw.Yb7zHg.Hzhe7m0gTs5kEgwliL2-Wrhbuoo"
}
/*
const app = express()
app.get("/foo", (req, res, next) => {
    const foo = JSON.parse(req.body.jsonString)
})
process.on("unhandledRejection", (reason, promise) => {})

*/
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------KOMUTLAR---------------------------------\\

client.on("clickButton", async button => {
  if (button.id === "click_to_function") {
    button.channel.send(`${button.clicker.user.tag} clicked button!`);
  }
});

//yapayzeka
client.on("message", async message => {
  const ai = require("@codare/codare.ai");
  let kanal = db.fetch(`yapayzekakanal_${message.guild.id}`);
  if (!kanal) return;
  if (message.channel.id !== kanal) return;
  if (message.author.bot == true) return;
  let soru = message.content;
  message.channel.startTyping();
  ai.sor(soru).then(iugur => {
    setTimeout(function() {
      return message.inlineReply(iugur);
    }, 1000);
    message.channel.stopTyping();
  });
});

//prefix

client.on("message", async message => {

  if (message.author.bot) return;

  if (!message.guild) return;

  let prefix = db.get(`prefix_${message.guild.id}`);

  if (prefix === null) prefix = prefix;



  if (!message.content.startsWith(prefix)) return;



  if (!message.member)

    message.member = await message.guild.members.fetch(message);
//


  const args = message.content

    .slice(prefix.length)

    .trim()

    .split(/ +/g);

  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  
  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);

});


/*
//Eklendim-Atıldım/
client.on('guildRemove', guild => {

let embed = new Discord.MessageEmbed()

.setColor("RED")
.setTitle(" Bot Kickledi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.cache.get('784852732380708864').send(embed);

});*/
//Eklendim-Atıldım/
/*
client.on('guildDelete', guild => {

  let embed = new Discord.MessageEmbed()
  
  .setColor("RED")
  .setTitle(" Bot Kickledi ")
  .addField("Sunucu Adı:", guild.name)
  .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
  
     client.channels.cache.get('784852732380708864').send(embed);
  
  });
*/
client.on('guildCreate', guild => {

  let embed = new Discord.MessageEmbed()

  .setColor("GREEN")
  .setTitle(" Bot Eklendi ")
  .addField("Sunucu Adı:", guild.name)
  .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
  
     client.channels.cache.get('784852732380708864').send(embed);
  
  });
/*
// eklendim
client.on('guildCreate', async guild => { client.channels.cache.get('log kanal id').send(`${guild}, isimli sunucuya eklendim!`)})
*/
// atıldım
client.on('guildRemove', async guild => { client.channels.cache.get('784852732380708864').send(`${guild}, isimli sunucudan atıldım.. :(`)})

//snipe 
client.on('messageDelete', message => {
  const emirhan = require("quick.db")
  emirhan.set(`snipe.mesaj.${message.guild.id}`, message.content)
  emirhan.set(`snipe.id.${message.guild.id}`, message.author.id)

})


  client.ÂrézCK = {
    başarılı: "#66ff00",
    başarısız: "#ff0000" 
   }

  
  client.ekoayarlar = {
    parabirimi: "dolar",
    botunuzunprefixi: "!",
    botunuzunidsi: "820707911315488808",
    botismi: "Dark Place",
    renk: "RANDOM", //İNGİLİZCE TERCİH ETTİĞİNİZ RENGİ YAZINIZ! EĞER BÖYLE BIRAKIRSANIZ RASTGELE ATAR!
    isimsiz: "Bilinmiyor", //İSİMSİZ KİŞİLERİN HANGİ İSİM İLE GÖZÜKECEĞİNİ BELİRLEYEBİLİRSİNİZ!
    rastgelepara: true, //EĞER BUNU TRUE YAPARSANIZ RASTGELE PARA VERME ÖZELLİĞİ AKTİF OLUR VE GÜNLÜK PARALARI RASTGELE VERİR!
    minpara: 10, //EĞER RASTGELE PARA DURUMUNU AKTİF ETTİYSENİZ BURADAN RASTGELE PARA PARAMETRESİNİNİN MİNUMUM PARASINI BELİRTİNİZ!
    maxpara: 200, //EĞER RASTGELE PARA DURUMUNU AKTİF ETTİYSENİZ BURADAN RASTGELE PARA PARAMETRESİNİNİN MAXİMUM PARASINI BELİRTİNİZ!
    günlükpara: 50, //EĞER RASTGELE PARAYI TRUE YAPTIYSANIZ BURAYI ELLEMENİZE GEREK YOK!
    dbloy: true, //EĞER BOTUNUZ DBL (DİSCORD BOT LİST) DE KAYITLIYSA GÜNLÜK ÖDÜL ALMAK İÇİN OY İSTER FALSE KAPALI, TRUE AKTİF DEMEK!
    dblkey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcyMzkyNjg5NzQ3NzY4MTI3NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE3ODcwNzU2fQ.DkQp5hc7Ui4-rkivsarDc-Xveq-DZbLJtwb69OJEcSA", //EĞER DBLOY U AKTİF ETMEDİYSENİZ BURAYA KEY EKLEMENİZE GEREK YOK EĞER AKTİF ETTİYSENİZ DBL SİTESİNDEN BULABİLİRSİNİZ!
    dblmsj: "Bu komutu kullanabilmek için bota oy vermelisiniz. Oy vermek için !oyvedimr", //EĞER DBLOY U AKTİF ETMEDİYSENİZ BURAYA MESAJ YAZMANIZA GEREK YOK! EĞER AKTİF ETTİYSENİZ BOTA OY VERMEK İÇİN HANGİ MESAJI YAZACAĞINI AYARLAYABİLİRSİNİZ.
    başlangıçparası: 50, //EĞER RASTGELE PARAYI TRUE YAPTIYSANIZ BURAYI ELLEMENİZE GEREK YOK!
    admin: ["702463861034319974"]
  }


  //saas

  client.on('message', async message => {
    if(message.channel.type !== 'text') return;
  if(message.content.toLocaleLowerCase() === 'sa') {
  
  const selamlar = await data.fetch(`selams.${message.guild.id}`);
  if(!selamlar) return;
  
  return message.inlineReply(new Discord.MessageEmbed().setDescription(`${message.author} **ve aleyküm selam, Hoş Geldin!**`));
  }});
  
  
  const data = require('quick.db');

//küfür
client.on('message', message => {
  if(message.channel.type !== 'text') return;
  let mesaj = message.content.toLocaleLowerCase();
if(mesaj.includes('cloudup')) message.react('🤫');
})

client.on('message', async message => {
  if(message.channel.type !== 'text') return;
  const küfür = await data.fetch(`küfür.${message.guild.id}`);
  if(!küfür) return;
  const blacklist = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq"];
  const uyarılar = [
  'Bu sunucuda küfür filtresi mevcuttur boşa küfür etme.',
  'Bu sunucuda küfür engel sistemi vardır boşa küfür etme.',
  'Bu sunucuda küfür filtresi açık boşa küfür etme kankam.'];
  let uyarımesaj = uyarılar[Math.floor(Math.random() * uyarılar.length)];
  let content = message.content.split(' ');
  
  content.forEach(kelime => {
  if(blacklist.some(küfür => küfür === kelime))  {
  if(message.member.permissions.has('BAN_MEMBERS')) return;
  message.delete();
  message.channel.send(new Discord.MessageEmbed().setTitle('Küfür Engel Sistemi').setDescription(`${message.author} ${uyarımesaj}`));
db.add(`antikufur-counter`, 1) 
  }
  })
  
  });
  //reklam
  client.on('message', async message => {
    if(message.channel.type !== 'text') return;
  const reklam = await data.fetch(`reklam.${message.guild.id}`);
  if(!reklam) return;
  const blacklist = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg"];
  const uyarılar = [
  'Bu sunucuda reklam filtresi mevcuttur boşa reklam yapma.',
  'Bu sunucuda reklam koruma sistemi vardır boşa reklam yapma.'
  ];
  let uyarımesaj = uyarılar[Math.floor(Math.random() * uyarılar.length)];
  if(blacklist.some(a => message.content.includes(a)))  {
  if(message.member.permissions.has('BAN_MEMBERS')) return;
  message.delete();
  message.channel.send(new Discord.MessageEmbed().setTitle('Reklam Engel Sistemi').setDescription(`${message.author} ${uyarımesaj}`));
  db.add(`antireklam-counter`, 1)
  }
  
  });

  //napim
   client.on('message', async message => {
    if(message.channel.type !== 'text') return;
  const reklam = await data.fetch(`napim.${message.guild.id}`);
  if(!reklam) return;
  const blacklist = ["napim","napm","npim","NAPİM","Napim","Napm","Npim"];
  const uyarılar = [
  'Bu sunucuda napim filtresi mevcuttur boşa yazma.',
  'Bu sunucuda napim koruma sistemi vardır boşa yazma.'
  ];
  let uyarımesaj = uyarılar[Math.floor(Math.random() * uyarılar.length)];
  if(blacklist.some(a => message.content.includes(a)))  {
  if(message.member.permissions.has('BAN_MEMBERS')) return;
  message.delete();
  message.channel.send(new Discord.MessageEmbed().setTitle('Napim Engel Sistemi').setDescription(`${message.author} ${uyarımesaj}`));
  db.add(`antinapim-counter`, 1)
  }
  
  });
  client.on("message", message => {
    db.add(`message-counter`, 1)
    }) 

    //caps
client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.length >= 5) {

const caps = await data.fetch(`caps.${message.guild.id}`);
if(!caps) return;

let kontrol = message.content.toUpperCase()
if(message.content === kontrol) {

if(message.member.permissions.has('BAN_MEMBERS')) return;
if(message.mentions.users.first()) return;

message.delete();
message.channel.send(new Discord.MessageEmbed().setTitle('Caps Engel Sistemi').setDescription(`${message.author} Bu sunucuda caps engel sistemi mevcuttur mesajınız silindi.`));
db.add(`anticaps-counter`, 1)
}}});



//otocevap
client.on('message', async message => {
  if(message.channel.type !== 'text') return;
const chimped = await data.fetch(`chimped.${message.guild.id}`);
if(!chimped) return;
let command = chimped.find(a => a.command === message.content.toLocaleLowerCase());
if(command) {
message.inlineReply(`${message.author} ${command.respond}`);
};
}); 

//etiket 
client.on('message', async(message) => {
  if(message.content.toLowerCase().startsWith("!etiket")) {
  let uye = message.mentions.members.first() || message.member
  let mention = db.get(`mention.${message.guild.id}.${uye.id}`)
  if(!mention) return message.inlineReply(`${message.member} veritabanında etiketlenme bilgisi bulunamıyor.`)
  message.inlineReply(new Discord.MessageEmbed().setAuthor(`${message.member.displayName} kullanıcısına atılan son etiket bilgileri;`, message.author.avatarURL({dynamic: true}))
  .setDescription(`
  \`Mesaj:\` **${mention.message}**
  \`Mesajı Atan Kişi:\` <@!${mention.author}>
  \`Kanal:\` <#${mention.channel}> - (${mention.channel})
  \`Yazılma Tarihi:\` ${moment.duration(Date.now() - mention.date).format("D [gün], H [saat], m [dakika], s [saniye]")} **önce yazılmış**
  `))
  }
  let member = message.mentions.members.first()
  if(member) {
  if(message.member.id == member.id || message.author.bot || message.content.toLowerCase().startsWith("!etiket")) return;
   db.set(`mention.${message.guild.id}.${member.id}`, {message: message.content,author: message.author.id,date: message.createdTimestamp,channel: message.channel.id})
  }
  })

  //bot etiket prefix mobile
  client.on('message', async msg => {
    if(msg.content == `<@723926897477681276>`)
    msg.inlineReply(`> Dark Place Bilgilendirme`, new Discord.MessageEmbed()
  .setColor("#1F4A89")
  .setDescription(`
  **Merhaba sevgili <@${msg.author.id}> kullanıcım.** <a:selam:780450791311278090>
  `)
  .addField('**Sunucuya Eklenme Tarihi:**', moment(msg.guild.me.joinedAt).format("LLLL")  )
  .addField("**Prefixim:**",`${ayarlar.prefix}`)
  .addField("**Komutlara Nasıl Ulaşırım?**",`  ${ayarlar.prefix}yardım yazarak yardım menüsüne ulaşabilirsiniz.`  )
  .addField("**Peki Ya Destek Sunucusu?**",`  [Buraya tıklarayarak destek sunucusuna gidebilirsin](https://discord.gg/8FVXKfkXBC)`  )
  .setFooter(`${client.user.username}`, client.user.avatarURL())
  );
  });

    //bot etiket prefix pc
    client.on('message', async msg => {
      if(msg.content == `<@!723926897477681276>`)
      msg.inlineReply(`> Dark Place Bilgilendirme`, new Discord.MessageEmbed()
      .setColor("#1F4A89")
      .setDescription(`
      **Merhaba sevgili <@${msg.author.id}> kullanıcım.** <a:selam:780450791311278090>
      `)
      .addField('**Sunucuya Eklenme Tarihi:**', moment(msg.guild.me.joinedAt).format("LLLL")  )
      .addField("**Prefixim:**",`${ayarlar.prefix}`)
      .addField("**Komutlara Nasıl Ulaşırım?**",`  ${ayarlar.prefix}yardım yazarak yardım menüsüne ulaşabilirsiniz.`  )
      .addField("**Peki Ya Destek Sunucusu?**",`  [Buraya tıklarayarak destek sunucusuna gidebilirsin](https://discord.gg/8FVXKfkXBC)`  )
      .setFooter(`${client.user.username}`, client.user.avatarURL())
      );
      });

//denetim kaydı
client.on("channelCreate", async channel => {
  var sunucuidsi = channel.guild.id;
  let kontrol = await db.fetch(`denetimkaydi_${sunucuidsi}`);
  if(!kontrol) return;
  channel.guild.fetchAuditLogs().then(logs => { 
    let kanaliacan = logs.entries.first().executor;
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${channel.guild.name} Sunucunuzda Bir Kanal Kuruldu!`)
  .setDescription(`
**Kanalı Açan ve ID'si: ${kanaliacan} ve ${kanaliacan.id}**

**Kanal İsmi ve ID'si: ${channel.name} ve ${channel.id}**
  `)
  .setFooter("Dark Place")
  channel.guild.owner.send(embed)
  });
});

client.on("channelDelete", async channel => {
  var sunucuidsi = channel.guild.id;
  let kontrol = await db.fetch(`denetimkaydi_${sunucuidsi}`);
  if(!kontrol) return;
  channel.guild.fetchAuditLogs().then(logs => { 
    let kanalisilen = logs.entries.first().executor;
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${channel.guild.name} Sunucunuzda Bir Kanal Silindi!`)
  .setDescription(`
**Kanalı Silen ve ID'si: ${kanalisilen} ve ${kanalisilen.id}**

**Kanal İsmi ve ID'si: ${channel.name} ve ${channel.id}**
  `)
  .setFooter("Dark Place")
  channel.guild.owner.send(embed)
  });
});

client.on("roleCreate", async role => {
  var sunucuidsi = role.guild.id;
  let kontrol = await db.fetch(`denetimkaydi_${sunucuidsi}`);
  if(!kontrol) return;
  role.guild.fetchAuditLogs().then(logs => { 
    let rolukuran = logs.entries.first().executor;
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${role.guild.name} Sunucunuzda Bir Rol Kuruldu!`)
  .setDescription(`
**Rolü Kuran ve ID'si: ${rolukuran} ve ${rolukuran.id}**

**Rol ID'si: ${role.id}**
  `)
  .setFooter("Dark Place")
  role.guild.owner.send(embed)
  });
});

client.on("roleDelete", async role => {
  var sunucuidsi = role.guild.id;
  let kontrol = await db.fetch(`denetimkaydi_${sunucuidsi}`);
  if(!kontrol) return;
  role.guild.fetchAuditLogs().then(logs => { 
    let rolusilen = logs.entries.first().executor;
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${role.guild.name} Sunucunuzda Bir Rol Silindi!`)
  .setDescription(`
**Rolü Silen ve ID'si: ${rolusilen} ve ${rolusilen.id}**

**Silinmeden Önce Rolün İsmi: ${role.name}**
  `)
  .setFooter("Dark Place")
  role.guild.owner.send(embed)
  });
});

client.on("guildBanAdd", async (guild, user) => {
  var sunucuidsi = guild.id;
  let kontrol = await db.fetch(`denetimkaydi_${sunucuidsi}`);
  if(!kontrol) return;
  guild.fetchAuditLogs().then(logs => { 
    let banlayan = logs.entries.first().executor;
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${guild.name} Sunucunuzda Biri Banlandı!`)
  .setDescription(`
**Banlayan ve ID'si: ${banlayan} ve ${banlayan.id}**

**Banlanan İsmi ve ID'si: ${user.tag} ve ${user.id}**
  `)
  .setFooter("Dark Place")
  guild.owner.send(embed)
  });
});
client.on("guildBanRemove", async (guild, user) => {
  var sunucuidsi = guild.id;
  let kontrol = await db.fetch(`denetimkaydi_${sunucuidsi}`);
  if(!kontrol) return;
  guild.fetchAuditLogs().then(logs => { 
    let bankaldiran = logs.entries.first().executor;
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${guild.name} Sunucunuzda Birinin Banı Kaldırıldı!`)
  .setDescription(`
**Banı Kaldıran ve ID'si: ${bankaldiran} ve ${bankaldiran.id}**

**Banı Kaldırılanın İsmi ve ID'si: ${user.tag} ve ${user.id}**
  `)
  .setFooter("Dark Place")
  guild.owner.send(embed)
  });
});

client.on("channelPinsUpdate", async message => {
  var sunucuidsi = message.guild.id;
  let kontrol = await db.fetch(`denetimkaydi_${sunucuidsi}`);
  if(!kontrol) return;
  message.guild.fetchAuditLogs().then(logs => { 
    let pinduzenleyen = logs.entries.first().executor;
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${message.guild.name} Sunucunuzda Biri Sabitlenenlerle Oynadı!`)
  .setDescription(`
**Mesaj Sabitlemelerini Düzenleyen ve ID'si: ${pinduzenleyen} ve ${pinduzenleyen.id}**
  `)
  .setFooter("Dark Place")
  message.guild.owner.send(embed)
  });
});

client.on("emojiCreate", async emoji => {
  var sunucuidsi = emoji.guild.id;
  let kontrol = await db.fetch(`denetimkaydi_${sunucuidsi}`);
  if(!kontrol) return;
  emoji.guild.fetchAuditLogs().then(logs => { 
    let emojiekleyen = logs.entries.first().executor;
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${emoji.guild.name} Sunucunuzda Biri Emoji Ekledi!`)
  .setDescription(`
**Emoji Ekleyen ve ID'si: ${emojiekleyen} ve ${emojiekleyen.id}**

**Emoji İsmi ve ID'si: ${emoji.name} ve ${emoji.id}**
  `)
  .setFooter("Dark Place")
  emoji.guild.owner.send(embed)
  });
});

//bot dm
client.on("message", message => {
  if (message.channel.type === "dm") {
    if (message.author.bot) return;
    client.channels.cache.get("850048356927144026").send(new Discord.MessageEmbed()
    .setDescription(`${message.author.tag} Kişisi Özelden Mesaj Attı!`)
    .addField(`Gönderilen Mesaj`, message.content)
    .setColor(`#00ffee`)
    .setThumbnail(message.author.avatarURL()));
  }
});


//aki
const akinator = require("discord-tr-akinator")

client.on("message", async message => {
    if(message.content.startsWith(`!aki`)) {
        akinator(message, client);
    }
});


//son görülme
const logs = require('discord-logs');
logs(client);

client.on("guildMemberOnline", (member, newStatus) => {
  if(member.user.bot) return
  database.set(`Member.${member.user.id}`, Date.now())
});

client.on("guildMemberOffline", (member, oldStatus) => {
  if(member.user.bot) return
  database.set(`Member2.${member.user.id}`, Date.now())
});


// veri tabanı yedekleme
const backup = () => {
  fs.copyFile('./json.sqlite', `./backups/yedekleme • ${moment().format('D-M-YYYY • H.mm.ss')} • dark place.sqlite`, err => {
      if (err) return console.log(err);
      console.log('Veritabanını yedekledim.');
  });
};

client.on('ready', () => {
  setInterval(() => backup(), 1000 * 60 * 60 * 24); // Günde bir kere yedekler.
});


// handle giveaway buttons
client.on('clickButton', button => {
  Nuggies.buttonclick(client, button);
});

// handle giveaway buttons
client.on('clickMenu', menu => {
  Nuggies.dropclick(client, menu);
});


//sunucularım
client.on("message", (message)=>{
  if(message.content.startsWith("!sunucularım")){
const guildArray = client.guilds.cache.array()
while (guildArray.length) {
  const embed = new Discord.MessageEmbed();
  const guilds = guildArray.splice(0,25);
  for (const guild of guilds) {
    embed.setTitle("Bulunduğum Sunucular")
    embed.addField(`${guild.name} \`${guild.memberCount}\``, guild.id);
    embed.setColor('#0DB5C7')
  }
  message.channel.send({embed: embed});
  }
}
})

/*
//profil
const talkedRecently = new Set();
client.on("clickButton", async (button,message) => {
  if (button.id === "Button3") {
await button.defer() 
     await button.clicker.member.roles.add("856580749948223510");

      await db.set(`dponayli${button.clicker.user.id}`, "<:onayli:857644714462150656>");

      const evet = new Discord.MessageEmbed() 

.setDescription(`<:yes:855123080393392149> ${button.clicker.user.tag} Başarı ile onaylı kullanıcı oldun!`)

.setColor("GREEN")

await client.channels.cache.get("784749889560510465").send(evet)
}
})
*/

client.on('ready', async () => {

  let sunucular = ['722544398130479184',"389517372744269834","895850255743074347","818111789186285568","935903727871729695"];

  client.guilds.cache.forEach(async (guild) => {

    if (!sunucular.includes(guild.id)) {

      guild.leave();
    };
  });
}); 
 

client.on('guildCreate', async (guild) => {

  let sunucular = ['722544398130479184',"389517372744269834","895850255743074347","818111789186285568","935903727871729695"];

  if (!sunucular.includes(guild.id)) {

    guild.leave();
  };
}); 
 