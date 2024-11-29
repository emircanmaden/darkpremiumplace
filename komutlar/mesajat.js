const Discord = require('discord.js')
exports.run = async(client, message, args) => {
    let id = "702463861034319974" //buranın içerisine kendi id ni yaz
    let user = message.mentions.users.first() || client.users.cache.get(args.slice(1).join(' '))
    if (message.author.id !== id) return message.inlineReply("Bu komutu yalnızca bot sahibi kullanabilir!") 
    let engin = args[0]
    if(!engin) return message.inlineReply('Lütfen mesaj atmak istediğin kişinin idini belirt!')
let enginar = args.slice(1).join(' ')
    if(!enginar) return message.inlineReply('Lütfen mesajı belirt!')
    const embed = new Discord.MessageEmbed()
    .setTitle('Sahibimden bir mesaj geldi!')
    .setDescription(`Sahibim <@${message.author.id}> sana bir mesaj gönderdi! \n \n Mesaj: ${enginar}`)
    client.users.cache.get(engin).send(embed)
    return message.inlineReply('Mesaj başarı ile gönderildi!')
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mesajat'],
    permlvl: 0 // sahip permi ayarlayın
}

exports.help = {
    name: "mesaj-at"
}