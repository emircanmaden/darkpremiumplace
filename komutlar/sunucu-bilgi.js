const { MessageEmbed } = require("discord.js");
const moment = require("moment");
moment.locale("tr");

exports.run = async (client, message, args) => {
  // 'Vu4ll#0586 ❤️
  let guild = message.guild;

  let kuruluş = `${moment(guild.createdAt).format("LL")} | ${moment(
    guild.createdAt
  ).fromNow()}`;
  let region = guild.region
    .replace("europe", "Avrupa")
    .replace("russia", "Rusya")
    .replace("japan", "Japonya")
    .replace("india", "Hindistan")
    .replace("hongkong", "Hong Kong")
    .replace("brazil", "Brezilya")
    .replace("sydney", "Sydney")
    .replace("southafrica", "Güney Afrika")
    .replace("singapore", "Singapur")
    .replace("us-south", "Güney Amerika")
    .replace("us-central", "Amerika")
    .replace("us-east", "Doğu Amerika")
    .replace("us-west", "Batı Amerika");

  let verification = guild.verificationLevel
    .replace("NONE", "Yok")
    .replace("LOW", "Düşük")
    .replace("MEDIUM", "Orta")
    .replace("VERY_HIGH", "Çok yüksek")
    .replace("HIGH", "Yüksek");

  let notifications = guild.defaultMessageNotifications
    .replace("ALL", "Tüm bildirimler")
    .replace("MENTIONS", "Sadece bahsetmeler");

  let Features = {
    ANIMATED_ICON: "Animasyonlu simge",
    BANNER: "Sunucu afişi",
    COMMERCE: "Ticaret özellikleri",
    COMMUNITY: "Topluluk",
    DISCOVERABLE: "Keşfedilebilir",
    FEATURABLE: "Özellikli",
    INVITE_SPLASH: "Davet arkaplanı",
    NEWS: "Duyuru kanalları",
    PARTNERED: "Partner sunucu",
    VANITY_URL: "Özel link",
    VERIFIED: "Doğrulanmış sunucu",
    WELCOME_SCREEN_ENABLED: "Hoş geldin ekranı",
    MEMBER_VERIFICATION_GATE_ENABLED: "Üye doğrulaması",
    VIP_REGIONS: "384kbps sesli kanal özelliği",
    PREVIEW_ENABLED: "Önizleme aktif"
  };

  let boost = guild.premiumSubscriptionCount;
  let owner = await client.users.fetch(guild.ownerID);

  const embed = new MessageEmbed()
    .setTitle(guild.name)
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .setColor(`BLACK`)
    .addField(
      `≽ Sunucu bilgisi`,
      `
ID **>** ${guild.id}
Sahip **>** ${"<@" + owner + "> / " + owner.tag || "Sunucu sahibini bulamadım"}
Ses bölgesi **>** ${region}
Doğrulama seviyesi **>** ${verification}
Sunucu kuruluş tarihi **>** ${kuruluş}
`
    )
    .addField(
      `≽ Sunucu istatistikleri`,
      `
Üyeler **>** ${guild.members.cache.size} üye **(**${
        guild.members.cache.filter(x => x.user.bot == true).size
      } bot**)**
Rol sayısı **>** ${
        guild.roles.cache.size < 1 ? "Rol bulunmamakta" : guild.roles.cache.size
      }
Kanallar **>** ${
        guild.channels.cache.filter(x => x.type == "category").size
      } kategori, ${
        guild.channels.cache.filter(x => x.type == "text").size
      } yazı kanalı, ${
        guild.channels.cache.filter(x => x.type == "voice").size
      } ses kanalı
Emoji sayısı **>** ${
        guild.emojis.cache.size < 1
          ? "Emoji bulunmamakta"
          : guild.emojis.cache.size
      }
Boost sayısı **>** ${boost < 1 ? "Boost bulunmamakta" : boost}
Boost seviyesi **>** ${
        guild.premiumTier < 1 ? "Boost bulunmamakta" : guild.premiumTier
      }
AFK kanalı **>** ${
        guild.afkChannelID == null
          ? "AFK kanalı bulunmamakta"
          : "<#" + guild.afkChannelID + ">"
      }
AFK süresi **>** ${guild.afkTimeout / 60} dakika
Kurallar kanalı **>** ${
        guild.rulesChannelID == null
          ? "Kurallar kanalı bulunmamakta"
          : "<#" + guild.rulesChannelID + ">"
      }
Varsayılan bildirimler **>** ${notifications}
`
    )
    .addField(
      `≽ Sunucu özellikleri (${guild.features.length})`,
      `${guild.features.map(a => Features[a] || a).join(", ") ||
        "Sunucu özelliği yok"}`
    )
    .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))
    .setTimestamp();

  if (guild.banner != null)
    return embed.setImage(guild.bannerURL({ size: 2048, format: "png" }));

  message.inlineReply(embed);
};

exports.conf = {
  aliases: ["sunucu-bilgi", "server", "server-info"]
};

exports.help = {
  // 'Vu4ll#0586 ❤️
  name: "sunucubilgi",
  description: "Sunucu hakkında bilgiler verir",
  usage: "sunucu",
  perm: ""
};
