const {Client} = require("discord.js");
const config = require("./Config.js");
const client = new Client({intents: 32767});

require("./Utils/eventLoader.js")(client)
require("./Utils/slashHandler.js")(client)

client.login(config.Token);