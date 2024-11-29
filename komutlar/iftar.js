const Discord = require("discord.js");
const axios = require('axios');
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
 /*   if (talkedRecently.has(message.author.id)) {

        return message.inlineReply("Api 1000 Kişi İle Sınırlı Olduğu İçin `30` Dakika Da Bir Kullanabilirsin ");
        
        } else {
        
        // the user can type the command ... your command code goes here :)
        
        // Adds the user to the set so that they can't talk for a minute
        
        talkedRecently.add(message.author.id);
        
        setTimeout(() => {
        
        message.delete();
        
        // Removes the user from the set after a minute
        
        talkedRecently.delete(message.author.id);
        
        }, 1800000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
        
        }
          */    
    const city = args[0];
    if (!city) return message.inlineReply('Şehir adı girmelisiniz.');
    axios.get(`https://api.collectapi.com/pray/single?ezan=Ak%C5%9Fam&data.city=${city.toLowerCase()}`, {
        headers: {
            "content-type": "application/json",
            "authorization": "apikey 0dCXRUVpk3ylPEHvveByqM:7lAzVulLdvLJ4ULu7lh8sN"
        }
    }).then(res => {
        const messageEmbed = new Discord.MessageEmbed().setDescription(`
           > **${city}** şehri için iftar saati **${res.data.result[0].time}.**
           \`\`\`Kalan Süre: ${res.data.result[0].hour} ${res.data.result[0].min}\`\`\`
        `);

        message.inlineReply(messageEmbed);
    }).catch(err => {
        message.inlineReply('Bir sorun ortaya çıktı. Komudu doğru kullandığınızdan emin olun.');
        console.log(err);
    });
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "iftar"
};