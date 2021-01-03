const Discord = require("discord.js");
const client = new Discord.Client();
const constants = require("./constants");
const utilities = require("./util");
const jokes = require("./jokes.json");

client.on("ready", () => {
  console.log("Constants Loaded!");
  console.log("Utility Functions Loaded!");
  console.log("Jokes Loaded!");
  console.log("Connected as " + client.user.tag);

  client.user.setActivity(constants.ACTIVITY, { type: "WATCHING" });
});

client.login(constants.DISCORD_BOT_SECRET_TOKEN);
