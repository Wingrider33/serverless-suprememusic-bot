import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("pause")
  .setDescription("Pauses current song");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Paused <<song>>");
}