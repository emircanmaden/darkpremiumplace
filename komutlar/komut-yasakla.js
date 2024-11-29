const discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database.json"); 
exports.run = async(client, message, args) => {
    let engin = args[0]
if(!engin) return message.inlineReply('yasaklanacak kodu yaz!')

db.set(`yasaklandı_${message.guild.id}`, engin)
return message.inlineReply(`${engin} adlı komut sunucuda yasaklandı!`)
};
exports.conf = {
enabled: true, 
guildOnly: false,
aliases: ["komutyasakla"],
permLevel: 4


};
exports.help = {
    name : "komut-yasakla"
    
    };