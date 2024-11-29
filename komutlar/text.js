const Discord = require("discord.js");

exports.run = async (client, message, args) => { // 'Vu4ll#0586
  let yazı = args.slice(0).join(" ");
  let encode = encodeURI(yazı);
  if (yazı.lenght < 1) return message.inlineReply(`Bir şeyler yazmalısın`);
  message.inlineReply(
    new Discord.MessageAttachment(
      `https://abcdef-text-api.herokuapp.com/type/${encode}.gif`,
      `text.gif`
    )
  );
};

exports.conf = {
  aliases: []
};

exports.help = { // 'Vu4ll#0586
  name: "text",
  description: "",
  usage: "text <yazı>",
  perm: ""
};
