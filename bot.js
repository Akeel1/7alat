////////////////////////////////////////////////// {The Package} ///////////////////////////////////////////////
const fs = require("fs"); 
const Discord = require('discord.js');
const prefix = "^"
const client = new Discord.Client();
const client1 = new Discord.Client();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Erexses system.
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity("",{type: 'watching'})
  console.log('The Prince : MeeRcY')
  console.log('The Prince : MdAx77x')
  console.log('?[?????????????????????????????????????????????????????????????????]?')
  console.log(`[Start] ${new Date()}`);
  console.log('?[?????????????????????????????????????????????????????????????????]?')
  console.log('')
  console.log('?[????????????????????????????????????]?');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('Created by: SPz / xR1.')
  console.log('with some help: .Manchez')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('?[????????????????????????????????????]?')
  console.log('')
  console.log('?[????????????]?')
  console.log(' Erexses Is Online')
  console.log('?[????????????]?')
  console.log('')
  console.log('')
});
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Welcome to evil gates.`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} servers.`);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Soon`,"https://www.twitch.tv/manchez")
client.user.setStatus("idle")
 
});
////////////////////////////////////////////////////////////  {   English . Help    } //////////////////////////////////////////////// Erexses system.
client.on('message' , message => {
if (message.content === '^help') {
           if (!message.member.hasPermission('SEND_MESSAGES')) return;
           message.react('??')
         let embed = new Discord.RichEmbed()

      .setThumbnail(message.author.avatarURL)    
      .addField("**???????General Commands .???????**","** **")
      .addField("**? ^helpA**","**?لرؤية قائمة المساعدة ب اللغة العربية?***")
     .addField("**? ^user**","**?user informations.?***")
     .addField("**? ^profile**","***?your informations In The Server.?**")
     .addField("**? ^ping**","**?bot's ping?***")
     .addField("**? ^avatar**","**?Avatar service.?***")
     .addField("**? ^botinfo**","**?the bot's informations.?***")
     .addField("**? ^server**","**?server informations.?***")
     .addField("**? ^clear**","**?clear the chat with a number 1-99.?***")
     .addField("**? ^v2min**","**?create an temporary voice channel.?***")
     .addField("**? ^binvite**","**?To Invite The Bot?***")
     .addField("**? ^report[mention]**","**?To Report Someone?***")
      .addField("**???????Administrative Commands ???????**","** **")
      .addField("**? ^warn**","**?Required channel named `#warn-log` and role named `Warner`And `warn` to works.?***")
      .addField("**? ^kick**","**?to kick someone.?**")
      .addField("**? ^ban**","**?to ban someone.?**")
      .addField("**? ^mute**","**?to mute someone.?**")
      .addField("**? ^unban**","**?to unban someone.?**")
      .addField("**? ^unmute**","**?to unmute someone.?**")
      .addField("**? ^mvall**","**?to move all to your voice channel.?**")
      .addField("**? ^move**","**?to move someone to your voice chanel.?**")
      .addField("**? ^kv**","**?to kick someone from voice channel.?**")
      .addField("**? ^say**","**?repeat what you said.?**")
      .addField("**? ^mc**","**?to mute the chat.?**")
      .addField("**? ^unmc**","**?to unmute the chat.?**")



    .setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
//////////////
client.on('message' , message => {
  if (message.content === '^help') {
             if (!message.member.hasPermission('SEND_MESSAGES')) return;
           let embed = new Discord.RichEmbed()
           .addField("**? ^new**","**?To Open Ticket?**")
           .addField("**? ^close**","**?For Close The Ticket.?**")
           .addField("**? ^bc**","**?broadcast service.?**")
          .addField("**? ^role**","**To give the role**")
        .addField("**? ^roleremove**","**To remove the role**")
      .setColor('RANDOM')
    message.author.sendEmbed(embed);
      }
  });
  /////////
client.on('message' , message => {
  if (message.content === '^help') {
             if (!message.member.hasPermission('SEND_MESSAGES')) return;
           let embed = new Discord.RichEmbed()
  
        .setThumbnail(message.author.avatarURL)    
        .addField("**???Info???**","** **")
       .addField("**?? Bot Server?**","**https://discord.gg/EcTKdHZ***")
       .addField("**?? The Bot Made By :?**","***<@335484868479811584> , <@515458477053706251> , With some help From : <@518751658755358720>**")
       .addField("?Works on Heroku premium cloud.?",".")
       .addField("?24/7 online? :).",".")
      .setColor('RANDOM')
    message.author.sendEmbed(embed);
      }
  });
////////////////////////////////////////////{Arabic. Help} ///////////////////////////////////////////////////////////////
    ////////////////
    client.on('message' , message => {
      if (message.content === '^helpA') {
                 if (!message.member.hasPermission('SEND_MESSAGES')) return;
               let embed = new Discord.RichEmbed()
               .setThumbnail(message.author.avatarURL)    
               .addField("**???????اوامر عامه.???????**","** **")
              .addField("**? ^user**","**?معلومات المستخدم.?***")
              .addField("**? ^profile**","***?معلومات الخاصه في السيرفر.?**")
              .addField("**? ^ping**","**?لرؤية بنق البوت?***")
              .addField("**? ^avatar**","**?لرؤية الصورة الشخصية .?***")
              .addField("**? ^botinfo**","**?معلومات البوت.?***")
              .addField("**? ^server**","**?معلومات السيرفر.?***")
              .addField("**? ^clear**","**?لمسح الرسائل مع عدد 1-99?***")
              .addField("**? ^v2min**","**?لعمل روم مؤقت مدته دقيقتين.?***")
              .addField("**? ^binvite**","**?لدعوة البوت إلى سيرفرك?***")
              .addField("**? ^report**","**?لعمل بلاغ عن شخص معين?***")
               .addField("**???????أوامر الإدارة ???????**","** **")
               .addField("**? ^warn**","** ورتبة`warn-log`لإعطاء تحذير لشخص محدد يلزم ان يتوفر روم`Warner`***")
               .addField("**? ^kick**","**?لطرد شخص معين?**")
               .addField("**? ^ban**","**?لإعطاء باند لشخص معين.?**")
               .addField("**? ^mute**","**?لإعطاء ميوت لشخص معين.?**")
               .addField("**? ^unban**","**?لفك الحظر عن شخص معين.?**")
               .addField("**? ^unmute**","**?لفك ميوت عن شخص معين.?**")
               .addField("**? ^mvall**","**?لسحب الجميع إلى رومك الصوتي.?**")
               .addField("**? ^move**","**?لسحب شخص معين إلى رومك الصوتي?**")
               .addField("**? ^kv**","**?لطرد شخص معين من روم صوتي?**")
               .addField("**? ^say**","**?يكرر كلامك?**")
               .addField("**? ^mc**","**?لإغلاق الشات?**")
               .addField("**? ^unmc**","**?لفتح الشات بعد قفله?**")
          .setColor('RANDOM')
        message.author.sendEmbed(embed);
          }
      });
////////////////////////////
client.on('message' , message => {
  if (message.content === '^helpA') {
             if (!message.member.hasPermission('SEND_MESSAGES')) return;
           let embed = new Discord.RichEmbed()
  
        .setThumbnail(message.author.avatarURL)    
        .addField("**? ^new**","**?لفتح تذكرة?**")
        .addField("**? ^close**","**?لتقفيل التذكرة?**")
        .addField("**? ^bc**","**?لإرسال رسالة جماعية لجميع أعضاء السيرفر?**")
        .addField("**? ^role**","**?لإعطاء رتبة ?**")
        .addField("**? ^roleremove**","**?لسحب  الرتبه?**")
        .setColor('RANDOM')
    message.author.sendEmbed(embed);
      }
  });

  ////////////
  client.on('message' , message => {
    if (message.content === '^helpA') {
               if (!message.member.hasPermission('SEND_MESSAGES')) return;
             let embed = new Discord.RichEmbed()
    
          .setThumbnail(message.author.avatarURL)    
          .addField("**???????معلومات عامة ???????**","** **")
          .addField("**?? سيرفر البوت?**","**https://discord.gg/EcTKdHZ***")
         .addField("**?? هذا البوت صنع من قبل :?**","***<@335484868479811584> , <@515458477053706251> , With some help From : <@518751658755358720>**")
         .addField("?مرفوع على خادم هيروكو بريميوم?",".")
         .addField("?24/7 شغال :).",".")
        .setColor('RANDOM')
      message.author.sendEmbed(embed);
        }
    });




 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Erexses system. 
client.on('message', message => {
          

  if (message.content.startsWith(prefix + "user")) {
   
   if(!message.channel.guild) return message.reply(`only for servers.`);

       message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
var moment = require('moment');
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
moment.locale('ar-TN');
var id = new  Discord.RichEmbed()

.setColor("RANDOM")
.setThumbnail(message.author.avatarURL)
.addField('you joined discordapp since: ',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField('you joined this server since: ', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(`you have invited: `, ` ${inviteCount} `)


.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);
})
}



});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Erexses system.

client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "^";

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply(":x: you need `MANAGE_MESSAGES` permission to do that savage thing.").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("i need `MANAGE_MESSAGES` permission. :x:").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
    let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("**you should create role named `Muted`**").then(msg => {msg.delete(5000)});
    if (message.mentions.users.size < 1) return message.reply('**mention someone.**').then(msg => {msg.delete(5000)});

		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  User**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  By**", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  Reason**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} you are now muted. 
${message.author.tag} By
[ ${reason} ] : Reason
Erexses system.
`)
		.setFooter(`Server : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage(":x: you need `MANAGE_MESSAGES` permission to do that savage thing.").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("I need`MANAGE_MESSAGES` permission.").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage(":x: you should mention someone first.");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage(":x: he's not muted.")

  await toMute.removeRole(role)
  message.channel.sendMessage("Successfully unmuted him. :white_check_mark:");

  return;

  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Erexses system.
 
client.on('message', message => {
	var prefix = "^"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You need ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I should have ` KICK_MEMBERS ` Permission to do that. :x:**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**mention someone**");
  if(!reason) return message.reply ("**with a reason please.**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**holy crap, he higher than my role.**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Erexses system.

client.on('message', message => {
	var prefix = "^"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**you should have ` BAN_MEMBERS ` Permission to do that SAVAGE thing.**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I need ` BAN_MEMBERS ` Permission!**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**mention someone**");
  if(!reason) return message.reply ("**with a reason please.**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**SHIT, this kid higher than my role.**");


  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Erexses system.

client.on('message', message => {
  if(message.content.startsWith('^mvall')) {
   if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: you need have `MOVE_MEMBERS` permission :/ **');
     if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I need `MOVE_MEMBERS` permission**");
  if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
   var author = message.member.voiceChannelID;
   var m = message.guild.members.filter(m=>m.voiceChannel)
   message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
   m.setVoiceChannel(author)
   })
   message.channel.send(`**:white_check_mark: successfully moved all to your channel/room**`)


   }
     });


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Erexses system.

client.on('message', message => {
  var prefix = "^";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);


let args = message.content.split(" ").slice(1);
let x = args.join(" ")
  if(message.content.startsWith(prefix + 'say')) {
      message.channel.send(''+x);
          message.delete(999)
  }
  
 
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Erexses system.

client.on("message", message => {
  var prefix = "^";
  const command = message.content.split(" ")[0];

  if(command == prefix+"kv"){

      if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
          return message.reply('you do not have permission to perform this action!');
      }

      var member = message.guild.members.get(message.mentions.users.array()[0].id);
      if(!message.mentions.users){
          message.reply("please mention the member")
          return;
      }

  if(!member.voiceChannel){
  message.reply("i can't include voice channel for member!")
  return;
  }
            message.guild.createChannel('voicekick', 'voice').then(c => {
              member.setVoiceChannel(c).then(() => {
                  c.delete(305).catch(console.log)
      


  
    });
   });
  }
});
 
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  client.on('message', function(msg) {
    if(msg.content.startsWith (prefix + 'server')) {
      if(!msg.channel.guild) return msg.reply('**only for servers sorry.**');
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField('**Server name.: **' , `**[ ${msg.guild.name} ]**`,true)
      .addField('**Server Region.:**',`**[ ${msg.guild.region} ]**`,true)
      .addField('** Roles.:**',`**[ ${msg.guild.roles.size} ]**`,true)
      .addField('** Members count.:**',`**[ ${msg.guild.memberCount} ]**`,true)
      .addField('** in the voice channels.:**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
      .addField('** text channels.:**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
      .addField('** Voice channels.:**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
      .addField('** server owner.:**',`**[ ${msg.guild.owner} ]**`,true)
      .addField('** server id:**',`**[ ${msg.guild.id} ]**`,true)
      .addField('** server created on.: **',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Erexses system.
client.on('message', message => {
  if (message.content.startsWith("^avatar")) {
      var mentionned = message.mentions.users.first();
  var x5bzm;
    if(mentionned){
        var x5bzm = mentionned;
    } else {
        var x5bzm = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setImage(`${x5bzm.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Erexses system.

client.on('message', message => {
  if(!message.channel.guild) return;
if (message.content.startsWith('^ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms ?? ")
.addField('**WebSocket:**',api + " ms ?? ")
message.channel.send({embed:embed});
}
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Erexses system.
client.on("message", msg => {
  var prefix = "^";
if(msg.content.startsWith (prefix + "profile")) {
if(!msg.channel.guild) return msg.reply('**:x: Only for servers sorry.**');         
const embed = new Discord.RichEmbed();
embed.addField(" name", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
 .addField("  id", `**[ ${msg.author.id} ]**`, true)
 .setColor("RANDOM")
 .setFooter(msg.author.username , msg.author.avatarURL)
 .setThumbnail(`${msg.author.avatarURL}`)
 .setTimestamp()
 .setURL(`${msg.author.avatarURL}`)
 .addField(' status', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
 .addField('   playing ', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
 .addField(' roles', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
msg.channel.send({embed: embed})
}
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Erexses system.
client.on('message', message => {
  if (message.content.startsWith(`^botinfo`)) {
  message.channel.send({
  embed: new Discord.RichEmbed()
     .setAuthor(client.user.username,client.user.avatarURL)
     .setThumbnail(client.user.avatarURL)
     .setColor('RANDOM')
     .setTitle('``Erexses Bot`` ')
     .addField('``Using languages``' , `[English - العربية]` , true)
     .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
     .addField('``servers``', [client.guilds.size], true)
     .addField('``channels``' , `[ ${client.channels.size} ]` , true)
     .addField('``Users``' ,`[ ${client.users.size} ]` , true)
     .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
     .addField('``My ID``' , `[ ${client.user.id} ]` , true)
     .addField('``My Prefix``' , `[ ^ ]` , true)
     .addField('``My Language``' , `[ JavaScript ]` , true)
     .addField('``Bot Version``' , `[ STILL BETA ]` , true)

    .setFooter('By | .MdAx77x ??#4461 ، viva manchez#0080')
  })
  }
  });
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Erexses system.

client.on('message', message => {
  let args = message.content.split(" ").slice(1);
if (message.content.startsWith('^clear')) {
let args = message.content.split(" ").slice(1)
  let messagecount = parseInt(args);
  if (args > 100) return message.reply("**must less than 100**").then(messages => messages.delete(5000))
  if (!messagecount) return message.reply("**example: `^clear 5`**").then(messages => messages.delete(5000))
  message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
  message.channel.send(`\`${args}\` : just cleared.`).then(messages => messages.delete(5000));
}
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Erexses system.
client.on('message', message => {
  if (message.content.startsWith('^help')){
       let meercy = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("**check your DM / direct messages.**")
       
       
    message.channel.sendEmbed(meercy);
      }
  });
  
                                               
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Erexses system.
client.on('message', message => {
  if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'move')) {
   if (message.member.hasPermission("MOVE_MEMBERS")) {
   if (message.mentions.users.size === 0) {
   return message.channel.send("``example : " +prefix+ "move [user]``")
  }
  if (message.member.voiceChannel != null) {
   if (message.mentions.members.first().voiceChannel != null) {
   var authorchannel = message.member.voiceChannelID;
   var usermentioned = message.mentions.members.first().id;
  var embed = new Discord.RichEmbed()
   .setTitle("Succes!")
   .setColor("RANDOM")
   .setDescription(`just moved <@${usermentioned}> to your channel voice. `)
  var embed = new Discord.RichEmbed()
  .setTitle(`You are Moved in ${message.guild.name}`)
   .setColor("RANDOM")
  .setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
   message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
  message.guild.members.get(usermentioned).send(embed)
  } else {
  message.channel.send(""+ message.mentions.members.first() +" `he must in voice channel first.`")
  }
  } else {
   message.channel.send("**`you must in voice channel.`**")
  }
  } else {
  message.react("?")
  }
   }
  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Erexses system.

client.on('guildMemberAdd', member => {
  var embed = new Discord.RichEmbed()
  .setThumbnail(member.user.avatarURL)
.addField("***Welcome to our server.***" ,member.user.username )
  .setDescription('***Erexses System.***')
  .setColor('RANDOM')
var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Erexses system.

client.on('message', message => {
  if (message.content.startsWith('السلام عليكم')){
       let ra3d = new Discord.RichEmbed()
    ("#e9ab26")
    .setDescription("**وعليكم السلام ورحمة الله وبركاتة**")
       
       
    message.channel.sendEmbed(ra3d);
      }
  });
/////////////////////////////////////////////////////////////////////
client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription('**you just did the RIGHT THING!**')
      guild.owner.send(embed)
});
//////////////////////////////////////////////////////////////////////

client.on('message', message => {
 
  if (message.content.startsWith('^mc')) {
                         if(!message.channel.guild) return message.reply('** This command only for servers**');
  
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **Required `Manage_Messages` permission :x:**');
            message.channel.overwritePermissions(message.guild.id, {
          SEND_MESSAGES: false
  
            }).then(() => {
                message.reply("**channel has been muted. :white_check_mark: **")
            });
              }
 //xR1 Bot
 if (message.content.startsWith('^unmc')) {
                      if(!message.channel.guild) return message.reply('** This command only for servers**');
  
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**Required `Manage_Messages` permission. :x:**');
            message.channel.overwritePermissions(message.guild.id, {
          SEND_MESSAGES: true
  
            }).then(() => {
                message.reply("**channel has been unmuted. :white_check_mark:**")
            });
              }
              
      
    
 });
/////////////////////////////////////////////////////////////////

client.on('message', function(message) {
  if (message.channel.type === "dm") {
      if (message.author.id === client.user.id) return;
      var stewart = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setTimestamp()
          .setTitle('``new messages.``')
          .setThumbnail(`${message.author.avatarURL}`)
          .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
          .setFooter(`From.: (@${message.author.tag})  |  (${message.author.id})`)
      client.channels.get("536286408114044946").send({ embed: stewart });
  }
});

///////////////////////////////////////////////////////////////////

client.on("message", message => {
    if(message.content.startsWith(prefix + 'v2min')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
    
      if(!message.member.hasPermission('SEND_MESSAGES')) return    message.channel.send('Required `ADMINISTRATOR` permission.').then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> type a name`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:ballot_box_with_check: Temporary voice channel. **2 minute.** : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> Time Ended.`), 120000))  // 120000 دقيقتان
    }
    });
////////////////////////////////////////////////////////////////////

client.on('message', message => {    
  if(!message.channel.guild) return;
if(message.content.startsWith('^bc')) {
if(!message.channel.guild) return message.channel.send('**only for servers.**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**Required ** `ADMINISTRATOR` permission.' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "Erexses Developers";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**type what you want to say.**');message.channel.send(`**are you sure?. \nmessage :** \` ${args}\``).then(msg => {
msg.react('?')
.then(() => msg.react('?'))
.then(() =>msg.react('?'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**? | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
message.guild.members.forEach(m => {

var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server: ', message.guild.name)
.addField('sender: ', message.author.username)
.addField('message:', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
/////////////////////////////////////////////////////////////////////////
client.on('message',message => {

  if (true) {

if (message.content === '^binvite') {

      message.author.send('  https://discordapp.com/api/oauth2/authorize?client_id=534859236186783759&permissions=8&scope=bot   |  my invite link :).    ').catch(e =>console.log(e.stack));

 

    }

   }

  });

 

 

client.on('message', message => {

     if (message.content === "^binvite") {

     let embed = new Discord.RichEmbed()

  .setAuthor(message.author.username)

  .setColor("RANDOM")

  .addField(" Done | check your dm.")

     

     

     

  message.channel.sendEmbed(embed);

    }

});
////////////////////////////////////////////////////////////////////////
//Code Here
/////////////////////////////////////////////////////////////////////////
client.on('message', message => {  
  if(!message.channel.guild) return; 
var args = message.content.split(' ').slice(1).join(' '); 
if (message.content.startsWith('^Fbc')){ 
if (message.author.id !== '515458477053706251','335484868479811584','518751658755358720') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **') 
message.channel.sendMessage('جار ارسال الرسالة |?') 
client.users.forEach(m =>{ 
m.sendMessage(args) 
}) 
} 
});

//////////////////////////////////////////////////////////////////////
client.on('message', function(message) {
  if(message.content.startsWith(prefix + "report")) {
      let messageArgs = message.content.split(" ").slice(1).join(" ");
      let messageReason = message.content.split(" ").slice(2).join(" ");
      if(!messageReason) return message.reply("**# Specify a reason!**");
  let mUser = message.mentions.users.first();
  if(!mUser) return message.channel.send("Couldn't find user.");
  let Rembed = new Discord.RichEmbed()
  .setTitle("`New Report!`")
  .setThumbnail(message.author.avatarURL)
  .addField("**# - Reported User:**",mUser,true)
  .addField("**# - Reported User ID:**",mUser.id,true)
  .addField("**# - Reason:**",messageReason,true)
  .addField("**# - Channel:**",message.channel,true)
  .addField("**# - Time:**",message.createdAt,true)
  .setFooter("لو أن الريبورت فيه مزح بتعاقب صاحبه عقوبه قاسية")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
  msg.react("?")
  msg.react("?")
.then(() => msg.react('?'))
.then(() =>msg.react('?'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
  message.guild.owner.send(Rembed)
  message.reply("**# - Done! ??**");
})
reaction2.on("collect", r => {
  message.reply("**# - Canceled!**");
})
})
}
});//
/////////////////////////////////////////////////////////
client.on('guildCreate', guild => {
   
  client.channels.get("539516185515917313")
const embed = new Discord.RichEmbed()
   .setAuthor(` joined new server ?`)
   .setDescription(`**
Server name: __${guild.name}__
Server id: __${guild.id}__
Server owner: __${guild.owner}__
Member Count: __${guild.memberCount}__
Servers Counter : __${client.guilds.size}__
=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
أسم السيرفر: __${guild.name}__
آيدي السيرفر: __${guild.id}__
أونر ألسيرفر: __${guild.owner}__
عدد الأعضاء: __${guild.memberCount}__
عدد السيرفرات : __${client.guilds.size}__**`)
         .setColor("RANDOM")
         .addField("New Server!")
         .setFooter('Erexses Bot' , client.user.avatarURL)
           client.channels.get("539516185515917313").send({embed}); //Sup
}
 
);

client.on('guildDelete', guild => {
  client.channels.get("539516185515917313")
const embed = new Discord.RichEmbed()
   .setAuthor(`Nameless Bot left a server ?`)
   .setDescription(`**
Server name: __${guild.name}__
Server id: __${guild.id}__
Server owner: __${guild.owner}__
Members Count: __${guild.memberCount}__
Servers Counter : __${client.guilds.size}__
=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
أسم السيرفر: __${guild.name}__
آيدي السيرفر: __${guild.id}__
أونر ألسيرفر: __${guild.owner}__
عدد الأعضاء: __${guild.memberCount}__
عدد السيرفرات : __${client.guilds.size}__**`)
         .setColor("RANDOM")
         .setFooter('Erexses Bot' , client.user.avatarURL)
           client.channels.get("539516185515917313").send({embed});
}
 
);
////////////////////////////////////////////////////////////////////
client.on("message", message => { 
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
let prefix = '-'; 
let messagearray = message.content.split(" ");
let rank = message.guild.member(message.author).roles.find('name', 'Warner');

let cmd = messagearray[0];
let args = messagearray.slice(1);
if(cmd === `${prefix}warn`){

  if (!rank) return message.channel.send('**You Dont Have Perm**');
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!rUser) return message.channel.send("**Couldn't find user**");
    let reason = args.join(" ").slice(22);
    if(!reason) return message.channel.send('**What Is The Reason**');

    let reportembed = new Discord.RichEmbed()
    .setTitle('~~~~~~~~~~~~~~~New Warn~~~~~~~~~~~~~~~')
    .setThumbnail(`${message.author.avatarURL}`)
    .setColor("BLACK")
    .addField("[ Warned User] ", `[${rUser}]`)
    .addField("[ Warned By ]", `[${message.author}]`)
    .addField("[ In Channel ]", `[${message.channel}]`)
    .addField("[ Reason ]",`[${reason}]`)
    .setFooter(`Erexses Developers.`)
    
    
    let WarnChannel = message.guild.channels.find(`name`,"warn-log");
    
    message.delete().catch(O_o=>{});
    WarnChannel.send(reportembed);
    let role12 = message.guild.roles.find('name', 'warn');
    rUser.addRole(role12);
    
        return;
    }
    });

/////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  ;
  var args = message.content.split(' ').slice(1);
  var msg = message.content.toLowerCase();
  if( !message.guild ) return;
  if( !msg.startsWith( prefix + 'role' ) ) return;
  if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
  if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
    if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
      if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
      var role = msg.split(' ').slice(2).join(" ").toLowerCase();
      var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
      if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
          message.mentions.members.first().removeRole( role1 );
          return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
      }
      if( args[0].toLowerCase() == "all" ){
          message.guild.members.forEach(m=>m.removeRole( role1 ))
          return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
      } else if( args[0].toLowerCase() == "bots" ){
          message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
          return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
      } else if( args[0].toLowerCase() == "humans" ){
          message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
          return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
      }  
  } else {
      if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
      if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
      var role = msg.split(' ').slice(2).join(" ").toLowerCase();
      var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
      if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
          message.mentions.members.first().addRole( role1 );
          return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
      }
      if( args[0].toLowerCase() == "all" ){
          message.guild.members.forEach(m=>m.addRole( role1 ))
          return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
      } else if( args[0].toLowerCase() == "bots" ){
          message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
          return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
      } else if( args[0].toLowerCase() == "humans" ){
          message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
          return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
      }
  }
});
//////////////////////////

client.on("message", async message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  if (command == "leave") {
   if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**Sorry, you don't have permission to use this!**");
      

      if(message.author.id != "335484868479811584","518751658755358720","515458477053706251") return message.reply("**Sorry, you don't have permission to use this!**");/* لو سمحت حط الايدي حقك*/

      
      if(!args[0] || args[1]) return message.reply(`**${prefix}leave <guild_id>**`);
      let definedGuild = client.guilds.get(args[0])
      if(!definedGuild) return message.reply(`** 404 : invalid guild id or this guild delted**`);
      client.guilds.get(args[0]).leave()
      .catch(error => { return message.reply(error.message) })
  }     
})
//////////////////////////////
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

var prefixs = "^";

client.on("ready", () => {
});


client.on("message", (message) => {
if (!message.content.startsWith(prefixs) || message.author.bot) return;
if (message.content.toLowerCase().startsWith(prefixs + `new`)) {
  const reason = message.content.split(" ").slice(1).join(" ");
  if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
  if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
  message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
      let role = message.guild.roles.find("name", "Support Team");
      let role2 = message.guild.roles.find("name", "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
      const embed = new Discord.RichEmbed()
      .setColor(0xCF40FA)
      .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Team** will be here soon to help.`)
      .setTimestamp();
      c.send({ embed: embed });
  }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefixs + `close`)) {
  if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

  message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`^conf\`. This will time out in 10 seconds and be cancelled.`)
  .then((m) => {
    message.channel.awaitMessages(response => response.content === '^conf', {
      max: 1,
      time: 10000,
      errors: ['time'],
    })
    .then((collected) => {
        message.channel.delete();
      })
      .catch(() => {
        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
            m2.delete();
        }, 3000);
      });
  });
}

});
///////////////////////////////

client.login(process.env.BOT_TOKEN);


