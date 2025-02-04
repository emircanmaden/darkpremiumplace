const database = require('quick.db');

exports.run = async (client, message, args) => {

  if(message.author.id !== '702463861034319974') return;
  if(!args[0]) return message.inlineReply('Yapılacak işlemi yazmayı unuttun. Kullanabileceğin parametreler: ekle, sil');
  if(!['ekle', 'sil'].includes(args[0])) return message.inlineReply('Yanlış bir parametre girdin. Kullanabileceğin parametreler: ekle, sil');

  if(args[0] === 'ekle') {
    if(!args[1]) return message.inlineReply('Güncelleme başlığını yazmalısın. Her parametre arasına | koyman gerekiyor. Örnek: !güncelleme ekle Başlık | Açıklama');
    args = args.slice(1).join(' ').split(' | ');
    if(!args[1]) return message.inlineReply('Güncelleme açıklamasını yazmalısın. Her parametre arasına | koyman gerekiyor. Örnek: !güncelleme ekle Başlık | Açıklama');
    
    database.add('numara', +1);
    const then = await database.fetch('numara');
    database.push('güncellemeler', {
      title: args[0],
      description: args[1],
      number: Number(then)
    });
    return message.inlineReply('Güncelleme eklendi.');
  } else {
    if(!args[1]) return message.inlineReply('Hangi güncellemeyi silmek istiyorsan o güncellemenin numarasını yazmalısın.');
    if(isNaN(args[1])) return message.inlineReply('Güncellemenin numarasını yazarken sadece sayı kullanabilirsin.');
    const güncellemeler = await database.fetch('güncellemeler');
    if(!güncellemeler || güncellemeler.length <= 0 || !güncellemeler.some(data => data.number === Number(args[1]))) return message.inlineReply('Bu numaraya sahip bir güncelleme bulunamadı.');
    database.set('güncellemeler', güncellemeler.filter(data => data.number !== Number(args[1])));
    return message.inlineReply('Güncelleme silindi.');
  };

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'güncelleme'
};