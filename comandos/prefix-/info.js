exports.run = (client, message, args) => {   

message.channel.send({"embed": {
        "description": `IP: Em breve\nSite: [Em breve](https://google.com/)\nTwitter: [@_BattleMC](https://twitter.com/_BattleMC)\nUsuarios no discord: ${client.users.size -1}\n\nDiscord coder: Reflexay`,
        "url": "",
        "color": 4437732,
        "timestamp": new Date(),
        "footer": {
          "icon_url": client.user.avatarURL,
          "text": "ReflexayDev© • BattleBOT"
        },
        "thumbnail": {
          "url": ""
        },
        "image": {
          "url": ""
        },
        "author": {
          "name": client.user.username,
          "url": "",
          "icon_url": client.user.avatarURL
        }
      }
      });
      
        }
      
      