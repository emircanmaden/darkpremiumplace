const { MessageEmbed } = require('discord.js')
const emirhan = require('quick.db')
const db = require('quick.db')
exports.run = async (client, message, args) => {
  const emirhan = await db.fetch(`snipe.id.${message.guild.id}`)
    if(!emirhan) {
    const codare2 = new MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`Mesaj bulunamadı!`)
    message.inlineReply(codare2);
          } else {
  let kullanıcı = client.users.cache.get(emirhan);
  const emran = await db.fetch(`snipe.mesaj.${message.guild.id}`)
  const codare = new MessageEmbed()
  .setAuthor(kullanıcı.username, kullanıcı.avatarURL())
  .setDescription(`Silinen mesaj: ` + emran)
  message.inlineReply(codare) }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {//'Vu4ll#0586
    name: "snipe",
  description: "",
  usage: ""
};

