import { ReplyMessage } from "../../components/ReplyMessage/index.js";

export const RemoveActivity = async (interaction) => {
  try {
    const roleName = interaction.options.getString("activity_name");
    const role = interaction.guild.roles.cache.find((r) => r.name === roleName);
    if (!role) {
      return interaction.reply({
        embeds: [
          ReplyMessage({
            color: 0xff0000,
            msg: "Activity/Role not found.",
          }),
        ],
      });
    }

    await role.delete();
    return interaction.reply({
      embeds: [
        ReplyMessage({
          color: 0x00ff00,
          msg: `Activity/Role ${roleName} has been deleted.`,
        }),
      ],
    });
  } catch (error) {
    console.error(error);
    return interaction.reply({
      embeds: [
        ReplyMessage({
          color: 0xff0000,
          msg: "An error occurred while trying to delete theActivity/Role.",
        }),
      ],
    });
  }
};
