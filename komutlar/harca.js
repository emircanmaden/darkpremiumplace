const zacron = require("discord.js");
exports.run = (client, message, args) => {
    const hmesaj = new zacron.MessageEmbed()
        .setDescription("**Para Harcanıyor Lütfen Bekleyiniz...**")
        .setColor("#4285f4");

    const embed = new zacron.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle("✅ | 128 Milyar Dolar Harcandı")
    .setDescription(`**Alınan Eşyalar**
x35'li Çokomel - 5 Adet
Dr. Oetker Pudra Şekeri - 30 Adet
Mini Özel Jet - 5 Adet
5 Litre Ayçiçek Yağı 85TL - 15  Adet
Keyif Çayı - 31 Adet
Köprü Malzemeleri
Yol Malzemeleri
Makam Aracı - 7 Adet
Kanal İstanbul - 1 Adet
Saray - 12 Adet

Geri Kalan Para Harcanmış, Halkın Hazinesinde Duruyor, Veya Böyle Bir Rakam Var Olmadı (Denildi) :)
Peki Bu Parayla Neler Yapılabilirdi?
• Türkiye Nüfusuna Pandemi Döneminde Tamı Tamına 1500$ Sosyal Destek Sağlanabilirdi
• 8 Milyon Üniversite Öğrencisine 2000 Ay Boyunca KYK Bursu Verilebilirdi
• 10 Milyon Asgari Ücretle Çalışan Vatandaşa 36 Ay Boyunca Maaş Ödemesi Yapılabilirdi`)
.setColor("#4285f4");
message.inlineReply(hmesaj).then(mes => {
setTimeout(() => {
    mes.delete()
    mes.channel.send(embed)
}, 5000);
})
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["harça",],
    permLevel: 0
}
exports.help = {
    name: "harca",
    description: "128 Milyar Dolar Harcanır :)"
}