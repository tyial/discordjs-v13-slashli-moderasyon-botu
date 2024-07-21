const {Client} = require("discord.js");
const config = require("./Config.js");
const client = new Client({intents: 32767});

require("./Utils/eventLoader.js")(client)
require("./Utils/slashHandler.js")(client)

// CrashHandler --------------------------------------------------------------
process.on('unhandledRejection', (reason, p) => {
    console.error(reason);
});
process.on("uncaughtException", (err, origin) => {
    console.error(' [AntiCrash] :: Uncaught Exception/Catch');
})
process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.error(' [AntiCrash] :: Uncaught Exception/Catch (MONITOR)');
});
// CrashHandler --------------------------------------------------------------

client.login(config.Token);
