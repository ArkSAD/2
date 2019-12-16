const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "#";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
  console.log(`Start : ${client.user.tag}!`);
client.user.setGame(`Mind`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});


client.login("NjA2MTEyNDg5MDc1MTEzOTg0.XffQ9Q.1_Lj0CF3b2jrlVEA_3eTasFaGk4");
