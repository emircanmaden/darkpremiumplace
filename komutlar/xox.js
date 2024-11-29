const Discord = require("discord.js")

exports.run = async (client, message, args) => {

const opponent = message.mentions.users.first();

if (!opponent) return message.inlineReply(`Lütfen birini etiketleyin.`);

const { TicTacToe } = require('weky')

const game = new TicTacToe({

    message: message,

    opponent: opponent, // opponent

    xColor: 'red', // x's color

    oColor: 'blurple', //zero's color

    xEmoji: '❌',  //t he x emoji

    oEmoji: '0️⃣' ,// the zero emoji

})

game.start()

} 

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ["xox","sos"],
	permLevel: 0
  };
  
  exports.help = {
	name: 'xox',
	description: 'sos Komutudur',
	usage: 'sos <kullanıcı>'
  };