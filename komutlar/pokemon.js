const { MessageEmbed } = require("discord.js");

const { Spawn } = require("pokecord");

 

module.exports.run = async (client, message, args) => {

 

    const pokemon = await Spawn().catch(e => {});

    if (!pokemon) return message.inlineReply("Opps! Bir şeyler ters gitti.");

    const filter = m => m.author.id === message.author.id;

 

    const embed = new MessageEmbed()

        .setAuthor("Pokemonu tahmin et")

        .setColor("#FFFF00")

        .setImage(pokemon.imageURL);

    

    await message.inlineReply(embed);

 

    message.channel.awaitMessages(filter, {

        max: 1,

        error: ["time"],

        time: 15000

    })

    .then(collected => {

        const m = collected.first();

        if (!m.content || m.content.toLowerCase() !== pokemon.name.toLowerCase()) return message.inlineReply(`Yanlış tahmin! Cevap şuydu: **${pokemon.name}**.`);

        return message.inlineReply(` Doğru Tahmin! `);

    })

    .catch(() => {

        message.inlineReply(` Zamanında cevap vermedin. Doğru cevap **${pokemon.name}**!`);

    });

 

};

 

exports.conf = {

    aliases: [] 
    
    }
    
    exports.help = {
    
    name: "pokemon" 
    
    }  