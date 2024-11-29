
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.MessageEmbed()

        
.setTimestamp()
.setDescription(`
<:darkplace:818868933574262824> \**!botstat** = Botun genel istatistik bilgileri atar.
<:darkplace:818868933574262824> \**!yapımcım** = Yapımcımı gösterir.
<:darkplace:818868933574262824> \**!bildir** = Bota eklenmesini, Kaldırılmasını veya Bugları bize gönderirsiniz.
<:darkplace:818868933574262824> \**!özelbot** = Botun kopyasını satın almak için bilgiler.
<:darkplace:818868933574262824> \**!çağır** = Sunucuya kurucumu çağırırsınız.
<:darkplace:818868933574262824> \**!yenilikler** = Botun son güncelleme hakkında detaylı bilgi alabilirsiniz.
<:darkplace:818868933574262824> \**!ekip** = Bot yetkili ekibini listeleyebilirsiniz.
<:darkplace:818868933574262824> \**!ping** = Botun pingine bakabilirsiniz.
<:darkplace:818868933574262824> \**!destekçi** = Oy vererek destek sunucumuzda özel rol alabilirsiniz.
<:darkplace:818868933574262824> \**!prefix** = prefixi değiştirmenize yarar **ÖRN:** !prefix -
<:darkplace:818868933574262824> \**!sponsor** = Bize sponsor olan firmayı gösterir.
<:darkplace:818868933574262824> \**!toplamkomut** = Botta bulunan tüm komutların toplamını gösterir.
<:darkplace:818868933574262824> \**!toplamkullanım** = Botta toplam komut kullanımı ve önceki kullanımları gösterir.
<:darkplace:818868933574262824> \**!donate** = Botun devamlılığı için donate hakkında bilgi verir.
<:darkplace:818868933574262824> \**!davet** = Beni sunucuna davet et.

`
       )	
	   .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '');

        return message.inlineReply(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['Bot',"BOT","b"],
	permLevel : 0
}
//codare
exports.help = {
	name : 'bot',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}

