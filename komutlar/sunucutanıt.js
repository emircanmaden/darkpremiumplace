// Komut Alanı 
const Discord = require('discord.js')
const annenspor = new Set();
const ayarlar = require('../ayarlar.json')
    exports.run = async(client, message, args) => {

        const webhook = new Discord.WebhookClient('840536107543560193', 'j_oVxNC-PBI0ZXKRiNgbtfnLqxDJrkOoElS7thuaNmdqFBS2PBWyaS2hHeuKD0aD9zlx')


        if (annenspor.has(message.author.id)) {
            message.inlineReply("Sunucu tanıt komutunu yalnızca \`10 saniyede\` bir kullanabilirsn!").then(tedoa => tedoa.delete({timeout:10000}))
    } else {


const tedoa = new Discord.MessageEmbed()
.setAuthor(message.author.tag,message.author.displayAvatarURL({ dynamic:true }))
.setDescription(`!sunucutanıt kullandınız
Sizin sunucunuz burda tanıtıldı
[Burdan tanıtılan sunucuya gidebilirsin](http://www.discord.org.in/darkplace) 
**Sizde sunucunuzu tanıtmak istiyorsanız.**
!davet yazarak beni sunucunuza davet edebilirsinz`)
.setFooter('Dark Place Bot Sunucu Tanıtma Sistemi')
.setTimestamp()
message.inlineReply(tedoa)
message.channel.createInvite({ maxAge: 0 }).then((invite) => {
webhook.send(`
> sende beni ekleyip **!davet** sunucunu \ntanıtabilirsin !sunucutanıt

> Sunucu ismi:
> \`${message.guild.name}\`
> Üye sayısı: \`${message.guild.memberCount}\`
> Davet linki: ${invite}`)
annenspor.add(message.author.id);
setTimeout(() => {
annenspor.delete(message.author.id);
}, 10000); 
})
}
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sunucu-tanıt", "tanıt"],
    permLevel: 0
  };
  exports.help = {
    name: "sunucutanıt",
    description: "",
    usage: "(prefix)sunucupp <id>"
  };
  