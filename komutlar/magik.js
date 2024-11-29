const { MessageEmbed, MessageAttachment } = require("discord.js");
const get = require("request");

exports.run = async (client, message, args) => {
  //'Vu4ll#1719
  let kullanıcı = message.mentions.users.first() || message.author;

  let r = Math.floor(Math.random() * Math.floor(11));
  if (r == 0) {
    r = 1;
  }

  let link = `https://nekobot.xyz/api/imagegen?type=magik&image=${kullanıcı.avatarURL(
    { format: "png", size: 1024 }
  )}&intensity=${r}&raw=true`;

  get(link, async function(err, resp, body) {
    //'Vu4ll#1719
    body = JSON.parse(body);

    const ek = new MessageAttachment(body.message, `magik.png`);

    const embed = new MessageEmbed()
      .setTitle(`Magik efekti hazır!`)
      .setDescription(`Magik seviyesi: ${r}`)
      .attachFiles(ek)
      .setImage(`attachment://magik.png`)
      .setFooter(
        `${message.author.tag} tarafından istendi`,
        message.author.avatarURL({ dynamic: true })
      )
      .setTimestamp();

    message.inlineReply(embed);
  });
};
exports.conf = {
  //'Vu4ll#1719
  aliases: []
};

exports.help = {
  name: "magik",
  description: "",
  usage: "magik <etiket>",
  perm: ""
};
