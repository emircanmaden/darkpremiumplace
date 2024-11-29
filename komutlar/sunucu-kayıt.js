const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.inlineReply(new Discord.MessageEmbed().setColor('#000001').setDescription(`${client.user} **Hizmet Dışı! :warning:**

**Önemli!!**: Botun intentleri açık olmadığından kayıt ederken rolü vermeme ismi değiştirmeme gibi sorunlar olucaktır. Gerekli başvuruları yaptım. Destek sunucusuna geldiyseniz [burdan](https://discord.gg/EfPtZ9SSAB) bota eklenen güncellenen veya çıkarılan şeylerden anında haberdan olabilirsiniz. Veya **!yenilikler** yazarak bakabilirsiniz.

`)

.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kayıt'],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kayıt'
};

/*
__Tek komut ile kayıt ve isim yapabilirsin.__**

> \`${client.ayarlar.prefix}erkek-role [@rolEtiket]\`
> \`${client.ayarlar.prefix}kadın-role [@rolEtiket]\`
> \`${client.ayarlar.prefix}yetkili-role [@rolEtiket]\`
> \`${client.ayarlar.prefix}kayıtsız-role [@rolEtiket]\`

**      [ Kapatma Komutları ]        **
> 🗑️ **${client.ayarlar.prefix}erkek-sil**
> 🗑️ **${client.ayarlar.prefix}kadın-sil**
> 🗑️ **${client.ayarlar.prefix}yetkili-sil**
> 🗑️ **${client.ayarlar.prefix}kayıtsız-sil**

**İsim başına tag koyması için**
!kayıt-tag 🚀
!kayıt-tag-kapat\
*/