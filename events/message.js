const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const database = require('quick.db');
const db = require('quick.db')
const config = require("../ayarlar.json")
let talkedRecently = new Set();

module.exports = message => {
  if(!message.guild) return;
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);//
	setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let client = message.client;
  if (message.author.bot) return;//
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);//
  let perms = client.elevation(message);
  let cmd;

  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));//
  }
  //komutlar
  if(db.has(`bakım_${client.user.id}`)){
    if(message.author.id !== "702463861034319974") return message.channel.send(
    new Discord.MessageEmbed()
      .setColor('BLACK')
      .setAuthor(`${client.user.username} Bakım`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
      .setTitle("Botumuz bakımdadır! Lütfen daha sonra tekrar deneyiniz.")
      .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
    )
    }
  //MESSAGE.JS DE 
// cmd.run(client, message, args, db); YAZISININ ÜSTÜNE
//YAPIŞTIR

// 'Vu4ll#1719 ❤️
if (message.guild.id == db.fetch(`sunucu_karaliste_${message.guild.id}`))
      return message.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(
            message.guild.name,
            message.guild.iconURL({ dynamic: true })
          )
          .setColor("BLACK")
          .setDescription(
            `Olmazz. Sahibim bu sunucuyu \`${db.fetch(
              `sunucu_karaliste_sebep_${message.guild.id}`
            )}\` sebebi ile karalisteye almış! Beni bu suncuda kullanamazsın. Herhangi bir yanlışlık olduğunu düşünüyorsan [bize ilet.](https://discord.gg/8FVXKfkXBC)`
          )
          .setFooter(
            message.author.tag,
            message.author.avatarURL({ dynamic: true })
          )
          .setTimestamp()
      );

if (db.fetch(`cokaradalistere_${message.author.id}`)) return message.channel.send(
  new Discord.MessageEmbed().setDescription("Olamaz sen botun karalistesinde bulunuyorsun botu kullanamazsın. \n \nHerhangi bir yanlışlık olduğunu düşünüyorsan [bize ilet.](https://discord.gg/8FVXKfkXBC)"))
//komutlar
  if (cmd) {
    client.channels.cache.get("922050880075890729").send(new Discord.MessageEmbed() .setColor("RANDOM") .setThumbnail(message.author.avatarURL({dynamic:true})) 
    .setDescription("**Bir Komut Kullanıldı!** \n\n **Komut İsmi** → `" + cmd.help.name + "` \n **Kullanan Kişi** → <@"+message.author.id+"> | `"+client.users.cache.get(message.author.id).tag+"` \n **Kullanılan Sunucu** → `"+message.guild.name+"`")
    )
    


    const Database = require("plasma-db");
    const db = new Database("./database.json"); 
     let engin = db.fetch(`yasaklandı_${message.guild.id}`)
      if (cmd.help.name === engin) {
         return message.channel.send(`**${cmd.help.name}** isimli komut bu sunucuda yasaklanmıştır!`)
          return
      
    }
   if (cmd.conf.enabled === false) {
      if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.sahip.includes(message.author.id)) {
        const embed = new Discord.MessageEmbed()//
                    .setDescription(`:x: **${cmd.help.name}** isimli komut şuanda geçici olarak kullanıma kapalıdır!`)
                    .setColor("RED")
                message.channel.send({embed})
                return
        
        
        
      }//
    }
    
    if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {//
				const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username,message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`)
        .setColor('#004b79')
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {//
				const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username,message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)
        .setColor('#004b79')
				message.channel.send({embed})
				return//
			}
		}
    if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username,message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`)
        .setColor('#004b79')
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {//
				const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username,message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
        .setColor('#004b79')
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.MessageEmbed()
          .setAuthor(message.author.username,message.author.displayAvatarURL({dynamic: true}))
					.setDescription(`Bu komutu sadece **Sahibim** kullanabilir!`)
          .setColor('#004b79')
				message.channel.send({embed})
				return
        
		
      }
		}
    
    
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
    
  }

  db.add("bot-kullanım", 1)};
