const Discord = require("discord.js");
const db = require("quick.db");

    exports.run = async (client, message, args) => {
        message.delete();
        if (!args[0])
    return message.inlineReply(new Discord.MessageEmbed()
    .setDescription("Dark Place Not Sistemi")
    .setTitle(`Not Komutları`)
    .addField('**oluştur:**', `**!not oluştur <1-2-3> <Not İçeriği>** Not Almanızı Sağlar`)
    .addField('**sil:**', `**!not sil <1-2-3>** Aldığınız Notu Silmenizi Sağlar.`)
    .addField('**oku:**', `**!not oku <1-2-3>** Aldığınız Notları Okumanızı Sağlar.`)
    .addField('**tümü:**', `**  !not tümü** Aldığınız Tüm Notları Listeler`)
    ).then(m => m.delete(10000));
      
      if (args[0] == "al"  || args[0] == "ekle" || args[0] == "oluştur" || args[0] == "yaz") {
        let zaman = new Date()
        let hunterrocknot = zaman.getFullYear() + "/" + (zaman.getMonth() +1) + "/" + zaman.getDate() + " | " + zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds();

        if(args[1] === "1"){
            let mesaj = args.slice(2).join(' ')

            db.set(`HRnot1_${message.author.id}`, [mesaj + "  \n`" + hunterrocknot + "`"])
            message.delete();
            message.inlineReply('1. Notunuz Kayıt Edildi...')
            .then(m => m.delete(5000))
        }

        if(args[1] === "2"){
            let mesaj2 = args.slice(2).join(' ')

            db.set(`HRnot2_${message.author.id}`, [mesaj2 + "  \n`" + hunterrocknot + "`"])
            message.delete();
            message.inlineReply('2. Notunuz Kayıt Edildi...')
            .then(m => m.delete(5000))
        }

        if(args[1] === "3"){
            let mesaj3 = args.slice(2).join(' ')


            db.set(`HRnot3_${message.author.id}`, [mesaj3 + "  \n`" + hunterrocknot + "`"])
            message.delete();
            message.inlineReply('3. Notunuz Kayıt Edildi...')
            .then(m => m.delete(5000))
        }

        if(args[1] > 4){
            message.delete();
            message.reply('En Fazla 3 Not Kaydedebilirsiniz.')
            .then(m => m.delete(5000))
        }
    };


    //------------------------------------------------------------------------------------------
    
         if (args[0] ==  "sil" || args[0] == "yoket") {

                    if(args[1] === "1"){
                        db.delete(`HRnot1_${message.author.id}`)
                        message.delete();
                        message.inlineReply('1. Notunuz Silindi')
                        .then(m => m.delete(5000))
                    }
            
                    if(args[1] === "2"){
                        db.delete(`HRnot2_${message.author.id}`)
                        message.delete();
                        message.inlineReply('2. Notunuz Silindi')
                        .then(m => m.delete(5000))
                    }
            
                    if(args[1] === "3"){
                        db.delete(`HRnot3_${message.author.id}`)
                        message.delete();
                        message.inlineReply('3. Notunuz Silindi')
                        .then(m => m.delete(5000))
                    }
            
                    if(args[1] > 4){
                        message.delete();
                        message.reply('En Fazla 3 Not Silebilirsiniz.')
                        .then(m => m.delete(5000))
                    };
                    
//------------------------------------------------------------------------------------------

               } else if (args[0] == "oku" || args[0] == "bak") {
                    let not1 = db.fetch(`HRnot1_${message.author.id}`)
                    let not2 = db.fetch(`HRnot2_${message.author.id}`)
                    let not3 = db.fetch(`HRnot3_${message.author.id}`)

                    if(args[1] === "1"){
                        message.delete();
                        const hunterrocknot2 = new Discord.MessageEmbed()
                    .setDescription(`
                        ${message.author} **İşte Aldığın İlk Not;**
                        1- ${not1 || "Almış Olduğunuz Bir Not Bulunmuyor"}
                    `)
                    .setColor("0XC51E39")
                    message.inlineReply(hunterrocknot2)
                    }

                    if(args[1] === "2"){
                        message.delete();
                        const hunterrocknot3 = new Discord.MessageEmbed()
                        .setDescription(`
                            ${message.author} **İşte 2. Aldığın Not;**
                            2- ${not2 || "Almış Olduğunuz Bir Not Bulunmuyor"}
                        `)
                        .setColor("0XC51E39")
                        message.inlineReply(hunterrocknot3)
                    }

                    if(args[1] === "3"){
                        message.delete();
                        const hunterrocknot4 = new Discord.MessageEmbed()
                        .setDescription(`
                            ${message.author} **İşte 3. Aldığın Not;**
                            1- ${not1 || "Almış Olduğunuz Bir Not Bulunmuyor"}
                        `)
                        .setColor("0XC51E39")
                        message.inlineReply(hunterrocknot4)
                    }

                    if(args[1] > 4){
                        message.delete();
                        message.reply('En fazla 3 not okuyabilirsin.. :smile:').then(m => m.delete(5000))
                    };

//------------------------------------------------------------------------------------------


     } else if (args[0] == "tümü" || args[0] == "hepsi" || args[0] == "all") {
        let not1 = db.fetch(`HRnot1_${message.author.id}`)
        let not2 = db.fetch(`HRnot2_${message.author.id}`)
        let not3 = db.fetch(`HRnot3_${message.author.id}`)



        message.delete();
        const hunterrocknot1 = new Discord.MessageEmbed()
        .setDescription(`
            ${message.author} **İşte Aldığın Notlar**
            1- ${not1 || "Almış Olduğunuz Bir Not Bulunmuyor"}\n
            2- ${not2 || "Almış Olduğunuz Bir Not Bulunmuyor"}\n
            3- ${not3 || "Almış Olduğunuz Bir Not Bulunmuyor"}
        `)
        .setColor("0XC51E39")
        message.inlineReply(hunterrocknot1)
    } 

} 



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["note"],
    permLevel: 0,
};
 
exports.help = {
    name: 'not',
    description: 'not',
    usage: 'not'
};