exports.run = (client, message, args) => {
  if(!message.member.roles.some(r=>["Staff"].includes(r.name)) ) 
  return message.reply("Desculpe, sem permissão");

const sayAviso = args.join(" ");
let aviso = args.slice(0).join(' ');
if(!aviso)
return message.reply("diga oque devo anunciar.");
message.delete().catch(O_o=>{}); 
client.guilds.get("428523906501181440").channels.get("428530825487974402").send("@everyone",{embed: {
  color: 3447003,
  author: {
    name: "Anuncio!",
    icon_url: client.user.avatarURL
  },
  title: client.user.username,
  fields: [{
      name: "𛲡",
      value: `${sayAviso} \n𛲡`
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "ReflexayDev© • BattleBOT"
  }
}
});

}
