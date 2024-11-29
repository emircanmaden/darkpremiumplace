const emran = require("discord.js"); 
const db = require('quick.db')

const client = new emran.Client();

const DBL = require("dblapi.js");
const emirhan = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcyMzkyNjg5NzQ3NzY4MTI3NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE5MDgyODM3fQ.nKRmYhKrJDSNw3MlFhwsgWrsjV8HbD60FH7AMLDNogA', client);

/*

https://top.gg/api/docs#mybots Sitesinden DBL Tokeninizi alabilirsiniz.

*/

exports.run = (client, message) => {
      if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
    emirhan.hasVoted(message.author.id).then(voted => { 
        if (!voted) {
            message.inlineReply( new emran.MessageEmbed()
.setTitle("Hata")
.setColor("RED")
.setDescription("Sunucumuz da özel role sahip olabilmen için ilk öncelikle oy vermen gerekiyor!")
.addField("Oy Vermek için:", `[Buraya Tıkla!](https://top.gg/bot/${client.user.id}/vote)`)
.setFooter(client.user.username)
)

        } else {
  message.inlineReply( new emran.MessageEmbed()
.setTitle("Başarılı!")
.setDescription("Sunucumuz da başarılı bir şekilde rolünüz verildi!")
.setColor("GREEN")
)
            message.member.roles.add("777658326250553364")    //Vericek rol id.
        }
    })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oyverdim","oyver","destekci"],
  permLevel: 0,
   
};

exports.help = {
  name: 'destekçi',
 description: 'Bota oy verirseniz rolü kaparsınız',
 usage: 'oyverdim'
};
