const Discord = require('discord.js');

exports.run = async (client, message) => {
    const joy = [
       "https://thumbs.gfycat.com/CreepyWeightyBittern-max-1mb.gif",
       "https://cdn.discordapp.com/attachments/777134297382387713/815202953018867722/large_Nah.gif.64cd1815e556d42d9ace28e3d66e7428.gif",
       "https://cdn.discordapp.com/attachments/777134297382387713/815202591414812691/Gqmpcf.gif"
        ]

let resimm = joy[Math.floor(Math.random() * joy.length)];


let weqweqwe = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setImage(resimm)

message.inlineReply(weqweqwe)

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["Nah"],
  permLevel: 0
}

exports.help = {
  name: 'nah',
  description: "zsadads",
  usage: "-joy"
};