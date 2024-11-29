const discord = require('discord.js');
exports.run = async(client, message, args) => {
message.inlineReply(`**${client.commands.size} + 1** komutum var!`)  
};
exports.conf = {
enabled: true, 
guildOnly: false,
aliases: ["toplamkomut","toplam-komut"],
permLevel: 0
};
exports.help = {
    name : "kaç-komut"
    };