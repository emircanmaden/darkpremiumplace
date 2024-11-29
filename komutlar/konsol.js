const exec = require('child_process').exec;
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {//renata#0001
    if (message.author.id !== "702463861034319974") return message.inlineReply(":no_entry: Bu komutu sadece bot sahibi kullanabilir.");
    if (!args.join(" ")) return message.inlineReply(":no_entry: Çalıştırılacak komudu boş bırakmayın.")
    exec(`${args.join(' ')}`, (error, stdout) => {
        const response = (error || stdout);
        let embed = new Discord.MessageEmbed()
            .setTitle(` Exec`)
            .addField("Giriş", `\`\`\`asciidoc\n${args.join(" ")}\n\`\`\``)
            .addField("Çıkış", `\`\`\`js\n${response}\n\`\`\``)
            .setColor('RED');

        message.inlineReply(embed);
    });
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['execute', 'ex',"konsol"],
    permLevel: 0
};

exports.help = {
    name: "exec"
};