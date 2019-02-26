const Discord = require('discord.js');
const client = new Discord.Client();
const iKhaled = ['494469169862148116];


  console.log("BOT ONLINE");
    client.on('message', Akeel=> {
      var argresult = Akeel.content.split(` `).slice(1).join(' ');
        if (!iKhaled.includes(Khaled.author.id)) return;
        
        if (Khaled.content.startsWith('W')) {
          if(!argresult) return;
          client.user.setActivity(argresult, {type:'WATCHING'});
            client.user.setStatus("dnd")
            
            
            Khaled.channel.send(` **__Watching__ تم تفعيل حالة** `)
            setTimeout(function() {
            Khaled.delete();
          }, 60000)
        } else //Akeel
        if (Khaled.content.startsWith('L')) {//Akeel
          if(!argresult) return;
            client.user.setActivity(argresult , {type:'LISTENING'});
              client.user.setStatus("dnd")
              Khaled.channel.send(` **__Listening__ تم تفعيل حالة** `)
              setTimeout(function() {
                Khaled.delete();
              }, 60000)
        } else //Khaled
            if (Khaled.content.startsWith('S')) {
              if(!argresult) return;
              client.user.setGame(argresult, "https://www.twitch.tv/ikhaled321");
                client.user.setStatus("dnd")
                Khaled.channel.send(`**__Steaming__ تم تفعيل حالة**`)//Akeel
                setTimeout(function() {
                  Khaled.delete();
                }, 60000)
        } else 
        if (Khaled.content.startsWith('P')) {
          if(!argresult) return;
          client.user.setActivity(argresult , {type:'PLAYING'});//Akeel
           client.user.setStatus("dnd")
           Khaled.channel.send(`**__Playing__ تم تفعيل حالة**`)
           setTimeout(function() {
            Khaled.delete();
          }, 60000)
         }
    
    });
    
client.login("BOT_TOKEN");
