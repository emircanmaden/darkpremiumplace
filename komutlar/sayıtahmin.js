const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const db = require('quick.db')

exports.run = async (client, message, args) => {
      if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
  this.games = new Set();
  if(this.games.has(message.channel.id)) await message.reply('Kanal başına sadece bir düello meydana gelebilir.');
    const islem = Math.floor(Math.random() * (100 - 1)) + 1
    const fixedlisonuç = islem
    let choice;
    let haklar = 10
    await message.react('👌')
    this.games.add(message.channel.id);
    await message.inlineReply(stripIndents`
					${message.author}, Numarayı tahmin et 0 ve 100 Arası
					\`${haklar}\` Deneme Hakkın Var.
				`);
           let uwu = false;
            while (!uwu && haklar !== 0) {
                const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 15000 });
              if(!response.first()) { 
                this.games.delete(message.channel.id);
                message.inlineReply(`${message.author}, Maalesef! Zaman doldu!`)
                message.inlineReply(`${message.author}, :shrug: Kaybettin! Sayı: \`${fixedlisonuç}\` :shrug: `)
              }              
                const choice = response.first().content
                if(isNaN(choice)) {
                  continue;
                }
                if (choice !== fixedlisonuç)  {
                  haklar -= 1
                  if(fixedlisonuç > choice) {
                  await message.inlineReply(stripIndents`
					          ${message.author}, :small_red_triangle: Daha büyük numara söylemelisin!
					          \`${haklar}\` Deneme Hakkın Var.
				          `);
                  continue;
                  }
                  if(fixedlisonuç < choice) {
                    await message.inlineReply(stripIndents`
					          ${message.author}, :small_red_triangle_down: Daha kücük numara söylemelisin!
					          \`${haklar}\` Deneme Hakkın Var.
				          `);
                  continue;
                  }
                }
                if (choice == fixedlisonuç) {
                  uwu = true
                }
                }
                if (haklar == 0) {
                  this.games.delete(message.channel.id);
                  await message.inlineReply(`${message.author}, :shrug: Kaybettin! Sayı: \`${fixedlisonuç}\` :shrug:`)
                }
                if (uwu) {
                  this.games.delete(message.channel.id);
                  await message.inlineReply(`${message.author}, :tada:  Doğru Tahmin! Sayı: \`${fixedlisonuç}\` :tada:`)
                try {
            } catch(e) {
              this.games.delete(message.channel.id);
            message.inlineReply('Bir hata oluştu')
        }
    } else {
      this.games.delete(message.channel.id);
      return console.log('Bir hata oluştu')
    }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sayıtahmini', 'sayıtahmin', 'sayı-tahmini',"number-guess"],
  permLevel: 0
};
exports.help = {
    name: 'sayı-tahmin',
  description: 'Rastgele rakam belirler ve siz o rakamı bulmaya çalışırsınız.',
  usage: 'sayı-tahmin'
};