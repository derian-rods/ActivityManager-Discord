import { EmbedBuilder } from "discord.js";
export const ReplyMessage = ({ title, msg, color = 0x00ff00 }) => {
  return new EmbedBuilder()
    .setColor(color)
    .setTitle(`${title || " "}`)
    .setDescription(`${msg}`)
    .setTimestamp();
};
//
