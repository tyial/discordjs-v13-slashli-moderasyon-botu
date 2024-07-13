const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'kilidi-aç',
  command: new SlashCommandBuilder()
    .setName('kilidi-aç')
    .setDescription('Kanalın kilidini açar.')
    .setDefaultMemberPermissions(Permissions.FLAGS.MANAGE_CHANNELS)
    .setDMPermission(false),

  async run(client, interaction) {
    const channel = interaction.channel;

    if (channel.permissionsFor(interaction.guild.roles.everyone).has("SEND_MESSAGES")) {
        return interaction.reply({ embeds: [new MessageEmbed()
          .setColor("RED")
          .setAuthor({ iconURL: "https://cdn.discordapp.com/emojis/1170055691319386223.png", name: "Hata!" })
          .setDescription("Kanal zaten kilitli değil!")
          .setFooter({ text: `${new Date().toLocaleString("tr-TR", { hour12: false, timezone: "Europe/Istanbul"})} tarihinde komut kullanıldı.` })], ephemeral: true });
      }

    await channel.permissionOverwrites.edit(interaction.guild.roles.everyone, {
      SEND_MESSAGES: true
    })
    .then(() => {
      interaction.reply({ embeds: [new MessageEmbed()
        .setColor("GREEN")
        .setAuthor({ iconURL: "https://cdn.discordapp.com/emojis/1170055689381617754.png", name: "Başarılı!" })
        .setDescription("Kanalın başarıyla kilidi açıldı!")
        .setFooter({ text: `${new Date().toLocaleString("tr-TR", { hour12: false, timezone: "Europe/Istanbul"})} tarihinde komut kullanıldı.` })] });
    })
    .catch(() => {
      interaction.reply({ embeds: [new MessageEmbed()
        .setColor("RED")
        .setAuthor({ iconURL: "https://cdn.discordapp.com/emojis/1170055691319386223.png", name: "Hata!" })
        .setDescription("Bir hata oluştu.")
        .setFooter({ text: `${new Date().toLocaleString("tr-TR", { hour12: false, timezone: "Europe/Istanbul"})} tarihinde komut kullanıldı.` })] });
    });
  }
};
