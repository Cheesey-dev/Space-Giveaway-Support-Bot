const Discord = require('discord.js');

const db = require("croxydb") 

const {MessageActionRow, MessageButton} = require("discord.js") 

module.exports = {

  name: "cheesey", 

  options: [], 

  

    description: 'Cheesey özel yhaa',

    run: async (client, interaction) => {
      if(!interaction.user.id == "753842258457002036") return 
//let sw = client.guilds.cache.get(interaction.guild.id) 
const embed = new Discord.MessageEmbed() 

.setDescription("HypeSquad rollerini dağıtıyorum!")

.setColor("GREEN")

await interaction.reply({embeds: [embed]})  

 
//var members = await sw.members.fetch()
interaction.guild.members.cache.forEach((member) => {
  var a = member.user.fetchFlags() 
var memberHypesquad = a.flags.toArray();
  const flags = {
    "HOUSE_BRILLANCE": "926125420267589713", 
    "HOUSE_BRAVERY": "926125424164098078", 
    "HOUSE_BALANCE": "926125908874649610" 
   } 
const rozet = memberHypesquad.length ? memberHypesquad.map((flag) => flags[flag]).join(" ") : ""
member.roles.add(rozet) 
/*if (memberHypesquad.includes("HOUSE_BRILLIANCE")) {
member.roles.add(rozet) 
} else if (memberHypesquad.includes("HOUSE_BRAVERY")) {
member.roles.add(rozet) 
} else if (memberHypesquad.includes("HOUSE_BALANCE")) {
member.roles.add(rozet) 
}*/
})


} 

} 
