const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'unban',
    command: new SlashCommandBuilder()
        .setName('unban')
        .setDescription('Belirtilen kullanıcının banını kaldırır.')
        .addStringOption(option =>    
            option.setName('kullanıcı')
                .setDescription('Kullanıcının idsini yazınız.')
                .setRequired(true))
        .setDefaultMemberPermissions(Permissions.FLAGS.BAN_MEMBERS)
        .setDMPermission(false),

    async run(client, interaction) {
        const mentioned = interaction.options.getString('kullanıcı');
        const guild = interaction.guild;
        const bannedUsers = await guild.bans.fetch();
        const bannedUser = bannedUsers.find(user => user.user.id === mentioned);

        if (!guild.members.me.permissions.has("BAN_MEMBERS")) return interaction.reply({ embeds: [new MessageEmbed()
            .setColor("RED")
            .setAuthor({ iconURL: "https://cdn.discordapp.com/emojis/1170055691319386223.png", name: "Hata!" })
            .setDescription("Bot, üyelerin yasaklanmasını kaldırma yetkisine sahip değil.")
            .setFooter({ text: `${new Date().toLocaleString("tr-TR", { hour12: false, timezone: "Europe/Istanbul"})} tarihinde komut kullanıldı.` })], ephemeral: true });
        if (!bannedUser) return interaction.reply({ embeds: [new MessageEmbed()
            .setColor("RED")
            .setAuthor({ iconURL: "https://cdn.discordapp.com/emojis/1170055691319386223.png", name: "Hata!" })
            .setDescription("Kullanıcı bulunamadı.")
            .setFooter({ text: `${new Date().toLocaleString("tr-TR", { hour12: false, timezone: "Europe/Istanbul"})} tarihinde komut kullanıldı.` })], ephemeral: true })

        await guild.members.unban(mentioned) 
        interaction.reply({ embeds: [new MessageEmbed()
            .setColor("GREEN")
            .setAuthor({ iconURL: "https://cdn.discordapp.com/emojis/1170055689381617754.png", name: "Başarılı!" })
            .setDescription(`${bannedUser.user.tag} kullanıcısının yasağı kaldırıldı.`)
            .setFooter({ text: `${new Date().toLocaleString("tr-TR", { hour12: false, timezone: "Europe/Istanbul"})} tarihinde komut kullanıldı.` })] });
    }
};