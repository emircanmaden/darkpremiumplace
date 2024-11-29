const discord = require('discord.js');

exports.run = async (client, message, args) => {
    let enginar = message.mentions.channels.first()
    if(!enginar) return message.inlineReply('kanal belirt!')
    return message.inlineReply(`Etiketlenen kanalın idsi: ${enginar.id}`)
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kanalid"],
    permLevel: 0
  };
  
  exports.help = {
    name: "kanal-id",
    description: "dil",
    usage: "dil"
  };
