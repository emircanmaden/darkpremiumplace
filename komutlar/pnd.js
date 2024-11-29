const Discord = require("discord.js");
const modül = require('pnd.tl')('0746c7d376089a14dfbde093b9d2b4e2e49face8') //burdaki api keyi yazmazsanız çalışmaz!!!!!
exports.run = async (client, message, args) => {
  message.inlineReply('Kısaltmak istediğin linki yaz')
const collected = await message.channel.awaitMessages((m) => m.author.id == message.author.id, {
        max: 1,
        time: 50000,
      })
const link = collected.first().content;
message.inlineReply("Tamam şimdi kısaltmak istediğin linkin typenını yaz typler;", { files: ["https://furtsy.kill-all.men/Ms34Ia.png"]})
const collected1 = await message.channel.awaitMessages((m) => m.author.id == message.author.id, {
        max: 1,
        time: 50000,
      })
const type = collected1.first().content;
let kısalt = await modül.kısalt(link, type)

message.inlineReply(`Linkiniz: <${kısalt}>`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pnd"],
  permLevel: 0
};

exports.help = {
  name: 'pnd',
  description: 'pnd.tl üzerinden link kısaltmanızı sağlar',
  usage: 'pnd'
};

