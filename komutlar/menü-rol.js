// require Nuggies
const Nuggies = require('nuggies');
const Discord = require('discord.js');
/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
	const nn = new Discord.MessageEmbed().setThumbnail();
	if(!message.member.permissions.has('ADMINISTRATOR')) return message.inlineReply(nn.setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}buton-rol\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));
      const dpmanager = new Nuggies.dropdownroles();
      message.inlineReply(new Discord.MessageEmbed().setColor('#000001').setDescription(`

      <:onayli:857644714462150656> Lütfen aşağıdaki kullanım ile mesaj gönderin
      <a:buyutec:858335950894792704> \`rol_id mesaj emoji\`
      <a:buyutec:858335950894792704> Örnek: \`7473737373737474746 partner :partner:\` 
      Mesajı attıktan sonra \`bitir\` yazın.
  `)
  
  .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

	/**
	 * @param {Discord.Message} m
	 */
	const filter = m => m.author.id === message.author.id;
	const collector = message.channel.createMessageCollector(filter, { max: 10000 });

	collector.on('collect', async (msg) => {
		if (!msg.content) return message.channel.send('Geçersiz sözdizimi');
		if (msg.content.toLowerCase() == 'bitir') return collector.stop('bitir');
		if (!msg.content.split(' ')[0].match(/[0-9]{18}/g)) return message.channel.send('Geçersiz sözdizimi');

		const roleid = msg.content.split(' ')[0];
		const role = message.guild.roles.cache.get(roleid);
		if (!role) return message.channel.send('Geçersiz rol');

		const label = msg.content.split(' ').slice(1, msg.content.split(' ').length - 1).join(' ');

		const reaction = (await msg.react(msg.content.split(' ').slice(msg.content.split(' ').length - 1).join(' ')).catch(/*() => null*/console.log));

		const final = {
			role: roleid, label: label, emoji: reaction ? reaction.emoji.id || reaction.emoji.name : null,
		};
		dpmanager.addrole(final);
	})

	collector.on('end', async (msgs, reason) => {
		if (reason == 'bitir') {
			const embed = new Discord.MessageEmbed()
				.setTitle('Menü rol!')
				.setDescription('Belirli bir rolü almak için düğmelere tıklayın veya tam tersi')
				.setColor('RANDOM')
			Nuggies.dropdownroles.create({ message: message, content: embed, role: dpmanager, channelID: message.channel.id })
		}
	});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["menürol"]
  };
  
  exports.help = {
    name: 'menü-rol',
    description: 'Mesajınızı tersden yazar.',
    usage: 'mesajdöndür <mesaj>'
  };
  