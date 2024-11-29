const ataturkSozu = require("ataturk-sozu");

exports.run = async (client, message) => {
message.inlineReply(ataturkSozu());
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ataturk-sozu","atatürksözü"],
  permLevel: 0
};

exports.help = {
  name: "atatürk-sözü"
};
