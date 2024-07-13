const { MessageEmbed } = require("discord.js")
const { SlashCommandBuilder } = require("@discordjs/builders")
module.exports = {
    name: 'yardım',
    command: new SlashCommandBuilder()
      .setName('yardım')
      .setDescription('Yardım menüsünü gösterir.')
      .setDMPermission(false),
  
    async run(client, interaction) {

interaction.reply({ embeds: [new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Yardım')
      .setDescription('Komutlar hakkında bilgi alın.')
      .addFields(
        { name: 'Komutlar', value: `
        /at → Seçilen kullanıcıyı sunucudan atar.
        /ban → Seçilen kullanıcıyı sunucudan engeller.
        /kilidi-aç → Komutun kullanıldığı kanalın herkesin yazma yetkisini açar.
        /kilitle → Komutun kullanıldığı kanalın herkesin yazma yetkisini kapatır.
        /rol-al → Seçilen kullanıcıdan seçilen rolü alır.
        /rol-ver → Seçilen kullanıcıya seçilen rolü verir.
        /sil → Kanaldan yazılan miktarda mesaj silinir.
        /unban → ID'sini yazdığınız kullanıcının sunucudaki engelini açar.
        /zamanaşımı → Seçilen kullanıcıya seçilen zaman boyunca zamanaşımı uygular.
        `, inline: true }
    )]})
  }
}