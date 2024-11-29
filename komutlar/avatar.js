

const { MessageButton } = require("discord-buttons");
const Discord = require('discord.js');

exports.run = async (client, message, args)=> {
  var k = message.mentions.users.first() || client.users.cache.find(k => k.username == args.slice(0).join(" ")) || client.users.cache.get(args[0]) || message.author
        var avatar = k.avatarURL({ format: 'png', dynamic: true, size: 256 })

        if (avatar == null) return message.reply(`**${k.username}** Kullanıcısının Avatarı Yok!`)

        var msj = new Discord.MessageEmbed()
            .setColor('#5555dd')
            .setTitle(`:id: \`${k.id}\``)
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({ dynamic: true }))
    
            var png = new MessageButton()
                .setLabel(`PNG`)
                .setStyle('grey')
                .setID('png')
    
            var jpeg = new MessageButton()
                .setLabel(`JPEG`)
                .setStyle('grey')
                .setID('jpeg')
    
            var webp = new MessageButton()
                .setLabel(`WEBP`)
                .setStyle('grey')
                .setID('webp')
    
            var gif = new MessageButton()
                .setLabel(`GIF`)
                .setStyle('grey')
                .setID('gif')
    
            msj.setImage(avatar)
            const mesaj = await message.channel.send({ buttons: [png, jpeg, webp], embed: msj })
    
            client.on('clickButton', async (button) => {
                if (button.clicker.user.id !== message.author.id) return
                if (button.id == 'png') {
                    msj.setImage(k.avatarURL({ format: 'png', size: 256 }))
                    mesaj.edit({ buttons: [jpeg, webp], embed: msj })
                } else if (button.id == 'jpeg') {
                    msj.setImage(k.avatarURL({ format: 'jpeg', size: 256 }))
                    mesaj.edit({ buttons: [png, webp], embed: msj })
                } else if (button.id == 'webp') {
                    msj.setImage(k.avatarURL({ format: 'webp', size: 256 }))
                    mesaj.edit({ buttons: [png, jpeg], embed: msj })
                } else if (button.id == 'gif') {
                    msj.setImage(k.avatarURL({ format: 'gif', size: 256 }))
                    mesaj.edit({ buttons: [png, jpeg, webp], embed: msj })
                }
            });
            setTimeout(() => {
                png.setDisabled(true)
                jpeg.setDisabled(true)
                webp.setDisabled(true)
                gif.setDisabled(true)
                mesaj.edit({ buttons: [png, jpeg, webp], embed: msj })
            }, 4000 * 60)
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatarım',"av","pp"],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: '',
  usage: 'avatar [@kullanıcı]'
};
