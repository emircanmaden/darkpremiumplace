const Discord = require('discord.js')

    exports.run = (client, message, args) => {

        let kullanıcı = message.mentions.members.first();

        if(!kullanıcı) return message.inlineReply(`${message.author} - Kahve Ismarlayacağın Kullanıcıyı Etiketlemelisin`)

        if(kullanıcı){

            const kahve = new Discord.MessageEmbed()

            .setDescription(`${message.author}, ${kullanıcı} **Kişisine türk kahvesi ısmarladı**`)

            .setImage('https://i.pinimg.com/originals/0e/8d/52/0e8d52e8206c524576bb8d14224276a5.gif')

            .setFooter('Afiyet olsun');

            message.inlineReply(kahve)

        }

    }

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ['Kahve','kahve-ısmarla','kahveısmarla'],

    permLevel: 0

}

exports.help = {

    name: 'kahve'

}