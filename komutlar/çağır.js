const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')


exports.run = (client, message, args) => {
              if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
   let wenzy = args.slice(0).join(' ');
   
  if (!wenzy) return message.reply('❌Sahibimi çağırmam için bir sebep gir!')
  if (wenzy.length < 6) return message.inlineReply("❌ Sebebiniz Daha Geçerli Olması İçin **En Az 6** Karakterli Olmalıdır!");//karakter sayı değeri değiştirilebilir. nasıl yapıcağınızı bilmiyosanız kod paylaşımıcısıyla iletişime geçin.
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(lrows => {

    message.inlineReply("Sahibime Mesajını İlettim!")
    let vortex = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL()}`)
    .setTitle('Biri Seni Yardın İçin Çağırdı')
    .addField('Sebep:', `${wenzy}`)
    .addField(`Sunucunun Davet Linki:`, `${lrows}`)
    .setThumbnail(message.guild.iconURL())
    .setFooter('Dark Place');
    client.users.cache.get(ayarlar.sahip).send(vortex);
  });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yapımcıyı-çağır","call","cagir","cagır","çagir"],
  permLevel: 0
};

exports.help = {
  name: 'çağır',
  description: 'WENZY CODE OLAMASA YAPAMAM ABE',
  usage: 'çağır'
};