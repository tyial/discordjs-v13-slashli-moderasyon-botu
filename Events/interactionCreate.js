module.exports = client => {
    client.on("interactionCreate", interaction => {
        if (interaction.isCommand()) client.slashInteractions.get(interaction.commandName)?.run(client, interaction);
    });
}  