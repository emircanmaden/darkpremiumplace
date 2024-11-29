const Discord = require('discord.js');

exports.run = async (client, message, args) => {

return message.inlineReply(new Discord.MessageEmbed()
.setTitle('Dark Place Emoji Menüsü')
.setDescription(`[Beni sunucuna ekle!](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1074121728)
Komutlarım ile sunucunuza yeni emojiler bulabilir, var olanları düzenleyebilir, tepki olarak ekleyebilirsiniz.

[Yardım mı lazım?](https://discord.gg/8FVXKfkXBC)`)
.addField('Bütün Komutlar — '+client.commands.filter(x => x.help.namee || x.help.nameee).size, '🆕 **'+client.commands.filter(x => x.help.namee || x.help.nameee).map(x => x.help.name).join('**, **')+`**\n\n>>> Sunucunun şuanki ön-eki: \`!\`
Örnek komut kullanımı: \`!${client.commands.filter(x => x.help.namee || x.help.nameee).map(x => x.help.name)[Math.floor(Math.random() * client.commands.filter(x => x.help.namee || x.help.nameee).map(x => x.help.name).length)]}\``)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));


}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emoji-yardım","helpemoji","help-emoji"],
  permLevel: 0
};
 
exports.help = {
  name: 'emojiyardım',
  namee: 'help'
};