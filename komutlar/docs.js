const fetch = require("node-fetch");
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const search = args[0];
    if (!search) return message.inlineReply("Aratacak bir şey gir.")


    let version = args[1];
    if (!version) version = `stable`;

    await fetch(`https://djsdocs.sorta.moe/v2/embed?src=${encodeURIComponent(version)}&q=${encodeURIComponent(search)}`)
        .then(async res => {
            const json = await res.json()
            await message.inlineReply({ embed: json })
        })
        .then(body => {
            if (body === null) return message.inlineReply("**Sonuç yok.**");
        })
        .catch(e => {
            message.inlineReply({
                embed: { "color": 0x4D5E94, "author": { "name": "Discord.js Docs (master)", "url": "https://discord.js.org/#/docs/main/master", "icon_url": "https://discord.js.org/favicon.ico" }, "title": "Search results:", "description": "Sonuç yok." }
            });
        });
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['djs'],
    permLevel: 0
};

exports.help = {
    name: 'docs',
    description: 'docs',
};

