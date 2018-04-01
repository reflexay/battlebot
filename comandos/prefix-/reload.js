exports.run = (client, message, args) => {

        let reason = args.slice(0).join(' ');
    
        if (message.author.id === "149998623101288448"){
        if (reason.length < 1) return message.reply('**Diga o comando que devo reiniciar Reflexay.**');
    
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    
        message.channel.sendMessage("**:gear: " + message.author + " Comando " + args[0] + " reiniciado!**");
    
    } else {
        message.reply("**Sem permissão. :confused:**");
    }
    }