import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("play")
  .setDescription("Plays song");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Playing <<song>>");
}
