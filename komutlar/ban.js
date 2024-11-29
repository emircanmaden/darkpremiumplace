
              /* eslint-disable no-unused-vars */
              const Discord = require('discord.js');
              const disbut = require('discord-buttons')  

              module.exports.run = async (client, message, args, utils, data) => {
if(!message.member.hasPermission('BAN_MEMBERS')){
      return  message.channel.send("Bu Komutu Yalnızca \`Üyeleri Engelle\` Yetkisine Sahip Olanlar Kullanabilir!")
  }
  if (!message.guild.me.hasPermission('BAN_MEMBERS')) return  message.channel.send('Üyeleri yasaklama iznim yok.')
  //lets

  let question = message.content.split(" ").slice(1).join(" ");
  const user = message.mentions.users.first();
  //if
  if (!user){
      return  message.channel.send('Kimi yasaklamak istiyorsun? Örn: **!ban @mehmet** id ile banlamak istiyorsan !idban komutunu kullan')
  }
  if(!question) question = 'no reason'
  if(user.id === message.author.id) return
  let embed = new Discord.MessageEmbed()
  .setDescription(`<:bancekici:855127349484716033> ${user.username}#${user.discriminator} banning for **${question}**?`)
  const newMessage = await  message.channel.send(embed)
             
                newMessage.react("✅").then(() => newMessage.react("❌"));
            
                const filter = (reaction, user) => {
                    return ["✅", "❌"].includes(reaction.emoji.name) && user.id === message.author.id;
                };
            
                newMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(async collected => {
                    const reaction = collected.first();
            
                    if (reaction.emoji.name === "✅") {
                       
                       //embed
                       let embed = new Discord.MessageEmbed()
                       .setDescription(`<:bancekici:855127349484716033> ${user.username}#${user.discriminator} has been banned for **${question}**`)
                       let btn = new disbut.MessageButton()
                       .setStyle('red')
                       .setLabel('undo')
                       .setID('undobutton');
                       let msg = await  message.channel.send({embed: embed, button:btn});
                       client.on('clickButton', async (button) => {
                         if (button.id === 'undobutton') {
                          await button.defer();
                          if (!button.clicker.member.permissions.has("MANAGE_CHANNELS")) return;
                                button.channel.send(new Discord.MessageEmbed()
                                .setDescription(`${user.username}#${user.discriminator} has been unbanned`)
                                )

                                 btn = new disbut.MessageButton()
                       .setStyle('red')
                       .setLabel('undo')
                       .setID('redobutton')
                       .setDisabled(true)
                                 msg.edit({embed: embed, button:btn})
                                 message.guild.members.unban(user);
                        }
                    });
                       //action
                       message.guild.members.ban(user);
                    } else {
                        let embed = new Discord.MessageEmbed()
                        .setTitle("Tamam, hiçbir şey olmayacak")
        
                     message.channel.send(embed);
                    }
                })
                .catch(collected => {

                    let embed = new Discord.MessageEmbed()
                        .setDescription("Tamam, bu kullanıcıyı burada tutacağız.");
        
                     message.channel.send(embed);
                });

              };
              
              exports.conf = {
                aliases: [],
                permLevel: 0
              };
              
              exports.help = {
                name: 'ban',
                description: 'Botun Pingini Gösterir !',
                usage: 'ban'
              };
              