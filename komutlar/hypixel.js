const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
  var kullaniciadi = args.slice(0).join(' ')

  if (!kullaniciadi) {
    const valueerr = new Discord.MessageEmbed()
      .setDescription('Lütfen geçerli bir yazı girin!')
    return message.inlineReply(valueerr)
  };

  if (kullaniciadi.length < 3) {
    const lengtherr = new Discord.MessageEmbed()
      .setDescription('Kullanıcı Adı Kısa Olamaz!')
    return message.inlineReply(lengtherr)
  }

  fetch(`https://api.rexulec.com/hypixel/${kullaniciadi}`).then(response => {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      return response.json().then(data => {
        if (data.status == "404") {
          const usernameerr = new Discord.MessageEmbed()
            .setDescription('Bu kullanıcı adı ile bir hesap yok. Geçerli bir isim girmeyi deneyin!')
          message.channel.stopTyping();
          return message.inlineReply(usernameerr)
        }
      });
    } else {
      const finalcode = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${kullaniciadi} İçin Bilgiler..`)
        .setImage(`https://api.rexulec.com/hypixel/${kullaniciadi}`)
      message.inlineReply(finalcode);
    }
  })

}

exports.conf = {
  aliases: ['hypixel'],
  permLevel: 0,
  kategori: "Eğlence",
};

exports.help = {
  name: 'Hypixel Bilgi',
  description: 'İstediğiniz kişinin Hypixel istatisliklerini gösterir.',
  usage: 'hypixel <Kullanıcı Adı>',
};