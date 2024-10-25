import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("resume")
  .setDescription("Resumes play of current song");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Resumed <<song>>");
}