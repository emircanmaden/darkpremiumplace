//eval
const Discord = require ("discord.js");
const hastebin = require('hastebin-gen');
const { MessageButton } = require('discord-buttons');
exports.run = (bot, message) => {
    
    var embed = new Discord.MessageEmbed()
  .setTitle("Kısıtlı")
    .setColor("#f45f42")
  .addField("Bu komud sadece emircana özel :pensive:","Lütfen boşa bu komutu kullanmayın.")
		
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
  const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  const args = message.content.split(" ").slice(1);
  const args2 = message.content.split(' ').slice(1).join(' ');
  
    try {
         var authors = ["702463861034319974"];
    if(!authors.includes(message.author.id)) {
    message.inlineReply({embed: embed});
    return;
    }
    
    if (!args2) {
      message.inlineReply("kod gir?");
      return;
  }
  

        const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")	
        evaled = require("util").inspect(evaled);

        if (clean(evaled).length > 1024 || code.length > 1024) {
        hastebin(`Evaled: ${code}\n\nÇıktı: \n\n${clean(evaled)}`, "js").then(r => {
          var embed3 = new Discord.MessageEmbed()
          .setTitle("Oops!")
          .setTimestamp()
          .setColor("#ffff66")
          .addField("Fazla mı bu ne senin için hastebin linki koydm",":pensive:")
          const button = new MessageButton()
          .setLabel('Çıktı')
          .setStyle('url')
          .setURL(r);
        
          return message.inlineReply({ embed: embed3, component: button });
})} else {
        var embed2 = new Discord.MessageEmbed()
        .setColor("#00ced1")
        .setDescription(`Çıktı\n\`\`\`js\n${clean(evaled)}\n\`\`\``)
        message.inlineReply({embed : embed2 });
} 
    } catch (err) {
        const code = args.join(" ");
                if (clean(err).length > 1024 || code.length > 1024) {
        hastebin(`Evaled: ${code}\n\nError: \n\n${clean(err)}`, "js").then(r => {
          var embed3 = new Discord.MessageEmbed()
          .setTitle("Oops!")
          .setTimestamp()
          .setColor("#f44242")
          .addField("Hata var galb ben bilmiom bu işleri sen bilcen",":pensive:")
          message.inlineReply({ embed: embed3 })
})}
      var embed3 = new Discord.MessageEmbed()
      .setColor("#f44242")
      .addField(":outbox_tray:", `\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``)
      message.inlineReply({embed: embed3 });
    }
}
exports.conf = {aliases: []}
exports.help = {
    name: "eval",
    description: "discordJS eval komutu",
    usage: "<prefix>eval <code>",
}