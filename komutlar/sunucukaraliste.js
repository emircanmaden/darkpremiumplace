const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const config = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  // 'Vu4ll#1719 ❤️
  let kliste = db.fetch(`sunucu_karaliste_${args[1]}`);
  let ksebep = db.fetch(`sunucu_karaliste_sebep_${args[1]}`);

  const embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
    .setColor("BLACK")
    .setTimestamp();

  if (![config.sahip, config.vu4ll].includes(message.author.id))
    return message.channel
      .send(
        embed.setDescription(
          `Dur bi dakika, ama sen.. Ama sen sahibim değilsin.`
        )
      )
      .then(msg => msg.delete({ timeout: 1000 * 5 }));

  if (!args[0])
    return message.inlineReply(
      embed.setDescription(
        `${config.prefix}sunucu-karaliste <ekle/çıkar> şeklinde kullan!`
      )
    );
  if (!["ekle", "çıkar"].includes(args[0]))
    return message.inlineReply(
      embed.setDescription(
        `Geçersiz argüman girdiniz! Mevcut argümanlar: \`ekle\`, \`çıkar\``
      )
    );

  switch (
    args[0] // 'Vu4ll#1719 ❤️
  ) {
    case "ekle":
      if (!args[1])
        return message.inlineReply(
          embed.setDescription(`Lütfen bir sunucu ID'si gir.`)
        );
      if (isNaN(args[1]) || args[1].length < 18 || args[1].length > 18)
        return message.inlineReply(
          embed.setDescription(`Lütfen geçerli bir sunucu ID'si gir.`)
        );
      if (args[1] == kliste)
        return message.inlineReply(
          embed.setDescription(`Bu sunucu zaten karalistede!`)
        );

      let reason = args.slice(2).join(" ");
      if (!reason) reason = "Sebep belirtilmemiş";

      message.inlineReply(
        embed.setDescription(
          `**${
            args[1]
          }** ID'li sunucuyu başarıyla \`${reason}\` sebebi ile karalisteye aldın`
        )
      );
      db.set(`sunucu_karaliste_${args[1]}`, args[1]);
      db.set(`sunucu_karaliste_sebep_${args[1]}`, reason);
      break;

    case "çıkar":
      if (!args[1])
        return message.inlineReply(
          embed.setDescription(`Lütfen bir sunucu ID'si gir.`)
        );
      if (isNaN(args[1]) || args[1].length < 18 || args[1].length > 18)
        return message.inlineReply(
          embed.setDescription(`Lütfen geçerli bir sunucu ID'si gir.`)
        );
      if (kliste == null)
        return message.inlineReply(
          embed.setDescription(`Bu sunucu karalistede değil!`)
        );

      message.inlineReply(
        embed.setDescription(
          `**${args[1]}** ID'li sunucuyu başarıyla karalisteden çıkarttın`
        )
      );
      db.delete(`sunucu_karaliste_${args[1]}`);
      db.delete(`sunucu_karaliste_sebep_${args[1]}`);
      break;
  }
};

exports.conf = {
  aliases: ["sunucukaraliste"]
};

exports.help = {
  // 'Vu4ll#1719 ❤️
  name: "sunucu-karaliste",
  description: "Belirtilen sunucuyu karalisteye ekler/çıkartır",
  usage: "sunucu-karaliste <ekle/çıkar> <sunucu ID>",
  perm: "Bot sahibi"
};
