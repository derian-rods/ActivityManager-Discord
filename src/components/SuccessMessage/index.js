import { EmbedBuilder } from "discord.js";
export const SuccessMessage = ({ title, msg }) => {
  return new EmbedBuilder()
    .setColor(0x00ff00) // Color de éxito
    .setTitle(`${title || " "}`)
    .setDescription(`${msg}`)
    .setTimestamp();
};
