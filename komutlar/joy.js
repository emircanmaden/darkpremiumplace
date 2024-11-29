const Discord = require('discord.js');

exports.run = async (client, message) => {
  if(message.guild.id !== "389517372744269834") return;

  const joy = [
        "https://cdn.discordapp.com/attachments/723678071877795950/723678723961782342/PicsArt_06-01-08.55.57.jpg",
        "https://cdn.discordapp.com/attachments/723678071877795950/723678782904467536/image0.png",
        "https://cdn.discordapp.com/attachments/303602379197120512/735216904893104198/PicsArt_07-21-10.28.53.jpg",
        "https://cdn.discordapp.com/attachments/723678071877795950/735862299700494366/PicsArt_07-22-11.11.01.jpg",
        "https://cdn.discordapp.com/attachments/703975091364692018/805523027596804176/unknown.png",
        "https://cdn.discordapp.com/attachments/703975091364692018/805522907689910292/PicsArt_05-31-11.57.46.jpg",
        "https://cdn.discordapp.com/attachments/703975091364692018/805522907332739072/image0.jpg",
        "https://cdn.discordapp.com/attachments/703975091364692018/805522906946994236/PicsArt_05-31-11.42.38.jpg",
        "https://cdn.discordapp.com/attachments/703975091364692018/805522906674495519/PicsArt_05-31-11.11.05.jpg",
        "https://cdn.discordapp.com/attachments/703975091364692018/805522906388889641/image0.png",
        "https://cdn.discordapp.com/attachments/703975091364692018/805522747957837834/PicsArt_07-21-11.30.41.jpg",
        "https://cdn.discordapp.com/attachments/703975091364692018/805522747215314994/PicsArt_07-21-10.28.53.jpg",
        "https://cdn.discordapp.com/attachments/303602379197120512/742437221185093693/1DB38EFBCDF1B3C8C92C72F8962D52A5_620x349.png",
        "https://cdn.discordapp.com/attachments/659410721024639016/752972564296499250/JOY.PNG",
        "https://cdn.discordapp.com/attachments/659410721024639016/752975508068761781/sdhgsdhdfhjd.PNG",
        "https://cdn.discordapp.com/attachments/723678071877795950/752971458560524308/PicsArt_06-20-02.16.30.jpg",
        "https://cdn.discordapp.com/attachments/723678071877795950/794688571239432263/unknown.png",
        "https://cdn.discordapp.com/attachments/723678071877795950/794689054964842526/unknown.png",
        "https://cdn.discordapp.com/attachments/750475316048429110/805796637410590750/emircanmdn.JPG"
        ]

let resimm = joy[Math.floor(Math.random() * joy.length)];


let weqweqwe = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setImage(resimm)
.setFooter(`Bu komut Emircan Maden tarafından Joy'a özel yapılmıştır.`)

message.inlineReply(weqweqwe)

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["Joy"],
  permLevel: 0
}

exports.help = {
  name: 'joy',
  description: "zsadads",
  usage: "-joy"
};