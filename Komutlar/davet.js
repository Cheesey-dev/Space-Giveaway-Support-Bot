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

//var members = await sw.members.fetch()
interaction.guild.members.cache.forEach((member) => {
var memberHypesquad = member.user.flags.toArray();

if (memberHypesquad.includes("HOUSE_BRILLIANCE")) {
member.roles.add('926125420267589713') 
} else if (memberHypesquad.includes("HOUSE_BRAVERY")) {
member.roles.add('926125424164098078') 
} else if (memberHypesquad.includes("HOUSE_BALANCE")) {
member.roles.add('926125908874649610') 
}
})

const embed = new Discord.MessageEmbed() 
.setDescription("HypeSquad rollerini dağıtıyorum!")
.setColor("GREEN")
await interaction.reply({embeds: [embed]})  


} 

} 
