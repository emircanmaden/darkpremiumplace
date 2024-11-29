const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(new MessageEmbed().color("#004b79").setDescription(`:x: Yetkin yeterli değil!`))
    let user = args[0];
    const banList = await message.guild.fetchBans();
    if (!user || isNaN(user) || !banList.has(user)) {
        return message.reply(new MessageEmbed().setColor("#004b79").setDescription(`:x: Kullanıcı id hatalı veya kullanıcı yasaklı değil!`))
    }
    message.guild.members.unban(user);
    message.reply(new MessageEmbed().setColor("#004b79").setDescription(`:white_check_mark: **Başarılı!**`))
};

exports.conf = {
    aliases: ["un-ban"]
};

exports.help = {
    name: 'unban'
};