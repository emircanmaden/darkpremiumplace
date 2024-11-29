
const { MessageButton } = require("discord-buttons");
const Discord = require('discord.js');
exports.run = async(client, message, args) => {
        var g = client.guilds.cache.find(s => s.name == args.slice(0).join(" ")) || client.guilds.cache.get(args[0]) || message.guild
        var icon = g.iconURL({ format: 'png', dynamic: true, size: 256 })

        if (g.icon == null) return message.channel.send(`**${g.name}** Adlı Sunucunun Avatarı Yok!`)

        var msj = new Discord.MessageEmbed()
            .setAuthor(g.name, icon)
            .setTitle(`:id: \`${g.id}\``)
            .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({ dynamic: true }))

        var emd = new Discord.MessageEmbed()
            .setAuthor(g.name, icon)
            .setTitle(`:id: \`${g.id}\``)
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

        var bgif = new MessageButton()
            .setLabel(`GIF`)
            .setStyle('grey')
            .setID('gif')

        msj.setImage(icon)
        const mesaj = await message.channel.send({ buttons: [png, jpeg, webp], embed: msj })

        client.on('clickButton', async (button) => {
            if (button.clicker.user.id !== message.author.id) return
            if (button.id == 'png') {
                msj.setImage(g.iconURL({ format: 'png', size: 256 }))
                mesaj.edit({ buttons: [jpeg, webp], embed: msj })
            } else if (button.id == 'jpeg') {
                msj.setImage(g.iconURL({ format: 'jpeg', size: 256 }))
                mesaj.edit({ buttons: [png, webp], embed: msj })
            } else if (button.id == 'webp') {
                msj.setImage(g.iconURL({ format: 'webp', size: 256 }))
                mesaj.edit({ buttons: [png, jpeg], embed: msj })
            } else if (button.id == 'gif') {
                msj.setImage(g.iconURL({ format: 'gif', size: 256 }))
                mesaj.edit({ buttons: [png, jpeg, webp], embed: msj })
            }
        });
        setTimeout(() => {
            png.setDisabled(true)
            jpeg.setDisabled(true)
            webp.setDisabled(true)
            mesaj.edit({ buttons: [png, jpeg, webp], embed: msj })
        }, 4000 * 60)
    }
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };
    exports.help = {
      name: "sunucupp",
      description: "",
      usage: "(prefix)sunucupp <id>"
    };