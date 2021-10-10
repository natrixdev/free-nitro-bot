//Code proposé par Natrix#1167

const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);  
    bot.user.setActivity(">help | >nitro");// 
    bot.user.setStatus('online'); 
});





const nitro = require('discordnitro')


bot.on("message", message => {
    if (message.content === ">ping") {
        message.reply("```🏓 Pong !\n\n Latency : 89ms (Verry Stable)```")
    }
})

bot.on("message", message => { // runs whenever a message is sent
    if (message.content === ">info") { // checks if the message says "?random"
        message.channel.send("```Informations:\n\n Owner : Natrix#1167\n Nitros Claimed : +869k```")
    }
});



bot.on("message", message => { 
    if (message.content === ">help") { 
        message.channel.send("```Help Command\n >nitro (give you a free nitro)\n >info (informations about the bot)\n >ping (latency of the bot)\n\n" + message.author.username + " carried out the order.```")
    }
});

bot.on("message", message => { 
    if (message.content === ">nitro") {
        message.channel.send(nitro(1))
        console.log(message.author.username + " à reçu un nitro")
    }
});


//COMMAND DE NATRIX - IGNORE 
bot.on("message", message => { 
    if (message.content === "a") { 
    if (message.author.id === "804956183433707551") {
        message.channel.send(nitro(1))
    }
}});


//COMMAND DE NATRIX - IGNORE 

bot.login('process.env.TOKEN')
//Code proposé par Natrix#1167
