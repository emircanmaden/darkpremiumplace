const Discord = require("discord.js")
exports.run = async (client, message, args) => {
const { Snake } = require('weky');
new Snake({
    message: message,
    embed: {
    title: 'Snake', //embed title
    color: "#gt4668", //embed color
    gameOverTitle: "Game Over", //game over embed title
    },
    emojis: {
      empty: '⬛', //zone emoji
      snakeBody: '⏺️', //snake
      food: '🍏', //food emoji
      //control
      up: '⬆️', 
      right: '⬅️',
      down: '⬇️',
      left: '➡️',
      },
    }).start()
} 
exports.conf = {
aliases: ['snake', 'yılan', 'yılan-oyunu', 'play-snake', 'yılan-oyna'] 
} 
exports.help = {
name: "snake" 
} 


