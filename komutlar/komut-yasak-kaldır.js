const discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database.json"); 
exports.run = async(client, message, args) => {
    let engin = args[0]
if(!engin) return message.inlineReply('yasaklanması kaldırılacak komutu yaz!')

db.delete(`yasaklandı_${message.guild.id}`, engin)
return message.inlineReply(`${engin} adlı komutun sunucuda yasaklanması kaldırıldı!`)
};
exports.conf = {
enabled: true, 
guildOnly: false,
aliases: ["komutyasakkaldır"],
permLevel: 4


};
exports.help = {
    name : "komut-yasak-kaldır"
    
    };