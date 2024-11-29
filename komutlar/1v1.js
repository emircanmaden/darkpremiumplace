
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

const opponent = message.mentions.users.first();

if (!opponent) return message.inlineReply(`Oynamak için birini etiketle.`);

const { fight } = require('weky');

const battle = new fight({

    client: client,

    message: message,

    acceptMessage: 'Click to fight with <@' + message.author + '>', //message sent to see if opponent accepts

    challenger: message.author, // NOT CHANGEABLE

    opponent: opponent,  // NOT CHANGEABLE

    hitButtonText: 'HIT', // Hit button text (Custom)

    hitButtonColor: 'red', // Hit button color (Custom)

    healButtonText: 'HEAL', // Heal button text (Custom)

    healButtonColor:  'green', // Heal button color (Custom)

    cancelButtonText: 'CANCEL', // Cancel button text (Custom)

    cancelButtonColor: 'blurple', // Cancel button color (Custom)

});

battle.start();

} 

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['1vs1', '1v1', 'savaş',"duel"],
	permLevel: `Yetki gerekmiyor.`
  };
  
  exports.help = {
	name: 'düello',
	category: "eğlence",
	description: 'İstediğiniz bir kişi ile düello atarsınız!',
	usage: 'düello <@kullanıcı>'
  };