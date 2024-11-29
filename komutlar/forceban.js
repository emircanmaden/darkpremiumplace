const {Message,Client,MessageEmbed,GuildMember} = require('discord.js')



exports.run = async (client, message, args) => {
  /**
   * @param {Message} message
   * @param {Client} client
   * @param {Array<string>} args
   */
      let embed = new MessageEmbed()
      .setAuthor(message.author.username,message.author.displayAvatarURL({dynamic: true}))
      .setColor('#004b79')

      if(!message.member.hasPermission('BAN_MEMBERS')) return message.inlineReply(embed.setDescription(`Bu Komutu Yalnızca \`Üyeleri Engelle\` Yetkisine Sahip Olanlar Kullanabilir!`));

      let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      let sebep = args.slice(1).join(" ")

      if(!member) {
        client.users.fetch(args[0]).then(() => {
        reason: sebep ? `Yetkili: ${message.author.username} | ${sebep}` : `Yetkili: ${message.author.username} | Belirtilmemiş`
          message.inlineReply(embed.setDescription(`${args[0]} Adlı / İdli Kullanıcıyı **${sebep ? sebep : 'Belirtilmemiş'}** Sebebinden Banladım!`));
          return;
        }).catch(() => {
          message.inlineReply(embed.setDescription(`**${message.author} Bir Kişi Etiketlemeli Veya Geçerli Bir Id Girmelisin!**`));
          return;
        })
      }

      if(member.user.id == message.author.id) return message.inlineReply(embed.setDescription(`**${message.member}, Kendini Banlayamazsın!**`));
      if(member.user.id == client.user.id) return message.inlineReply(embed.setDescription(`**${message.member}, Kendinimi Banlayamam!**`));

      if(member.user.id == message.guild.owner.user.id) return message.inlineReply(embed.setDescription(`**${message.member}, Sunucu Sahibini Banlayamazsın!**`));
//Champ
      if(member.roles.highest.position > message.member.roles.highest.position && message.author.id !== message.guild.owner.user.id) return message.inlineReply(embed.setDescription(`**${message.member}, ${member} Adlı Kişinin Rolü Senden Yüksek!**`));

      if(member.roles.highest.position == message.member.roles.highest.position && message.author.id !== message.guild.owner.user.id) return message.inlineReply(embed.setDescription(`**${message.member}, ${member} Adlı Kişinin Rolü Senle Eşit!**`));

      if(member.roles.highest.position > message.member.roles.highest.position) return message.inlineReply(embed.setDescription(`**${message.member}, ${member} Adlı Kişinin Rolü Benden Yüksek!**`));

      if(member.roles.highest.position == message.member.roles.highest.position) return message.inlineReply(embed.setDescription(`**${message.member}, ${member} Adlı Kişinin Rolü Benle Eşit!**`));

      message.guild.members.ban(member.user.id, {
        reason: sebep ? `Yetkili: ${message.author.username} | ${sebep}` : `Yetkili: ${message.author.username} | Belirtilmemiş`
      })

      message.inlineReply(embed.setDescription(`${args[0]} Adlı / İdli Kullanıcıyı **${sebep ? sebep : 'Belirtilmemiş'}** Sebebinden Banladım!`))
  }


exports.conf = {
  aliases: ["id-ban","forceban"],
  permLevel: 0
};

exports.help = {
  name: 'idban',
  description: 'Botun Pingini Gösterir !',
  usage: 'ban'
};







