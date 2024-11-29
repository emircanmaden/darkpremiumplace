const Discord = require('discord.js');

exports.run = async (client, message, args) => {//hamzamertakbaba#3361
  
  if (message.deletable) await message.delete();
  if (!message.guild.me.permissions.has('MANAGE_MESSAGES')) return message.inlineReply(`${message.author} \`Webhookları Yönet\` iznim yok.`).then(a => a.delete({timeout: 4500}));
  
  let ÇekilecekKullanıcı = args[0];
  if (!ÇekilecekKullanıcı) return message.inlineReply(`${message.author} Bir kullanıcı ID'si girmelisin. Nasıl id alındığını bilmiyorsan !id kullanıcı diyerek bottan istediğiniz kullacınının idsini alabilirsiniz.`).then(a => a.delete({timeout: 4500}));
  if(!Number(ÇekilecekKullanıcı)) return message.inlineReply(`${message.author} Kullanıcı ID'leri rakam ile yazılmalı.`).then(a => a.delete({timeout: 4500}));

  let YazılacakMesaj = args.slice(1).join(' ');
  if (!YazılacakMesaj) return message.inlineReply(`${message.author} ID'sini girdiğin kullanıcı ne yazsın?`).then(a => a.delete({timeout: 4500}));
  
  if (YazılacakMesaj.includes("@everyone")) return message.inlineReply(`${message.author} Everyone mu? Severiz, şaka şaka bir daha bunu yapma.`).then(a => a.delete({timeout: 4500}));
  if (YazılacakMesaj.includes("@here")) return message.inlineReply(`${message.author} Here mi? Severiz, şaka şaka bir daha bunu yapma.`).then(a => a.delete({timeout: 4500}));
  
  let Kullanıcı = await client.users.fetch(ÇekilecekKullanıcı);
  try { 
  message.channel.createWebhook(Kullanıcı.username, {
      avatar: Kullanıcı.avatarURL()}) 
    .then(async (wb) => {
        const Webhook = new Discord.WebhookClient(wb.id, wb.token);
        await Webhook.send(YazılacakMesaj); 
        setTimeout(() => {
          Webhook.delete()
        }, 2000);
    })  
  } catch (err) {
    message.inlineReply(err);
};
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fakemesaj"],
  permLevel: 0,
 
};

exports.help = {// codare ♥
  name: 'fake-mesaj',
};