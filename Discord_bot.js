const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

/*client.on('message', msg => {
  if (msg.author.bot) return;{
  if (msg.content === 'ping') {
    msg.reply('Pong!');}
  if (msg.content ==='heyo')
   {msg.channel.send("hi");}
   if(msg.content.includes("hai"))
   {msg.channel.send("hello");}
   if(msg.content.startsWith("o/"))
  {msg.channel.send("o/");}
  if (msg.content.startsWith("hi"))
    {msg.channel.send("hello");}

}

});*/
const prefix = "wm";
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)||message.author.Bot){ return;}
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();//command defination it is like a variable or something still in doubt with the lowercase part
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  }
  if (message.content.startsWith(prefix + "hi")) {
    message.channel.send("hello");
  }
  /*console.log(args)
  console.log(command) //these will help me figure out stuff wrong in this code
  console.log("("+command[0]+")")*/ //this line is  supposed to check the number of spaces and all passed in the command
  if(command === "kick")
  {
      let member = message.mentions.members.first();
      let reason = args.slice(1).join(" ");
      member.kick(reason);
}

    if (command === "ban") {
      let member = message.mentions.members.first();
      let reason = args.slice(1).join(" ");
      member.ban(reason);
    }
    if (command === "unban") {
      let member = message.mentions.members.first();
      let reason = args.slice(1).join(" ");
    message.guild.unban(member, "reason")

    }
  if(command === "say")
  {
   let text = args.join(" ");
   message.delete(); //deletes message
   message.channel.send(text); //parameter thing
}

});
client.on("channelCreate", function(channel){
    console.log(`channelCreate: ${channel}`);

});
client.on("message",msg =>{
  if(msg.author.Bot) return;
  if(msg.content.startsWith("No u"))
{  msg.channel.send("Yes You")
}
});

client.login('');//super secret
