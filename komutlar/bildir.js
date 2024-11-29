const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    const webhook = new Discord.WebhookClient(
        "887367541113098260",
        "dNLFUhZwMpNvlTJPKTr0bVsMSS3eJB8ZGWNYiypFSgUGNrphcHc6X02CZbZiqwdl1kRq"
      );
      
let bug = args.join(" ").slice(0);

let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = webhook
message.channel.createInvite({ maxAge: 0 }).then((invite) => {
let embed = new Discord.MessageEmbed()
.setTitle("Dark Place Rapor Sistemi")
.setThumbnail("http://files.kegri.wtf/hatabildir.png")
.addField("Bildirilen Rapor", bug)
.addField("Rapor Eden", user, true)
.addField("Sunucu", guild, true)
.addField("Sunucu ID", guildid, true)
.addField("Davet Link",` ${invite}`)
.addField("Kanal", kanal, true)
.setColor("#f49542")

message.inlineReply(":white_check_mark: **Raporunuz başarı ile iletildi.** | Dark Place")

webhook.send(embed);
})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rapor","report"],
  permLevel: 0  
};

exports.help = {
  name: 'bildir',
  description: '',
  usage: 'hatabildir'
}