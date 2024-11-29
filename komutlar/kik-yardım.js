const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = [''];
message.inlineReply(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Komut İçinde Komutlar(KİK) Menüsüne Hoş Geldin
**
\`\`\`        [ Yetkili Kik ]        \`\`\`

**\`${client.ayarlar.prefix}sunucu-kayıt\`**
Erkek veya Kadın kayıt edebileceğiniz sistem

**\`${client.ayarlar.prefix}yedek-sistem\`**
Sunucunuzda olabilecek patlamalardan karşı bir sistem

**\`${client.ayarlar.prefix}kanal-sistem\`**
Kanalları yönetebileceğiniz sistem

**\`${client.ayarlar.prefix}komut-mesaj-sistem\`**
Oto cevap sistemidir sınırsız kullanabilirsiniz.

**\`${client.ayarlar.prefix}kısıtlamalar\`**
sunucu güvenliği için sistem

**\`${client.ayarlar.prefix}yasak-sistem\`**
Sunucu içi ceza sistem

**\`${client.ayarlar.prefix}uyarı-sistem\`**
Uyarı sistem komutları

**\`${client.ayarlar.prefix}rol-sistem\`**
rol ile işlemleri yapabileçeğiniz sistem

**\`${client.ayarlar.prefix}ayarlanabilir-sistem\`**
Ayarlanabilir olan komutların bir menü altında toplanamamış olan bazı komutlar

**\`${client.ayarlar.prefix}aktiflik aç\` & \`${client.ayarlar.prefix}aktiflik kapat\`**
Aktiflik Sistem **(**!profile [@etiket]**) **- ne kadar kayıt etmiş bilgilerini görebilirsin

**\`${client.ayarlar.prefix}ayarlar\`**
Bu komut sayesinde bot ile ayarladığınız sistemleri kontrol etmenizi sağlar

\`\`\`        [ Kullanıcı Kik ]        \`\`\`

**\`${client.ayarlar.prefix}dizi-film\`**
dizi-film komutlarını atar

**\`${client.ayarlar.prefix}premium-sistem\`**
İçinde yetkili ve kullanıcı kokitlarının bulunduğu premium komutlardır.

**\`${client.ayarlar.prefix}nsfw\`**
Cinsel içerikler içeride seni bekliyor
`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["komut-içinde-komutlar"],
  permLevel: 0
}

exports.help = {
  name: 'kik'
};