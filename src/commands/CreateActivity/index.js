import { ReplyMessage } from "../../components/ReplyMessage/index.js";

export const CreateActivity = async (interaction) => {
  const roleName = interaction.options.getString("activity_name");
  const roleColor =
    interaction.options.getString("activity_color") || "#FFFFFF";

  if (!roleName) {
    return interaction.reply({
      embeds: [
        ReplyMessage({
          color: 0xff0000,
          msg: "Please provide a role name.",
        }),
      ],
    });
  }

  // Check if the role already exists
  const existingRole = interaction.guild.roles.cache.find(
    (role) => role.name === roleName
  );

  if (existingRole) {
    return interaction.reply({
      embeds: [
        ReplyMessage({
          color: 0xff0000,
          msg: `Activity/Role ${roleName} already exists.`,
        }),
      ],
    });
  }

  try {
    const role = await interaction.guild.roles.create({
      name: roleName,
      color: roleColor,
      reason: "New role created via command",
    });

    await interaction.reply({
      embeds: [
        ReplyMessage({
          msg: `Activity/Role ${role.name} created successfully!`,
        }),
      ],
    });
  } catch (error) {
    console.error(error);
    await interaction.reply({
      embeds: [
        ReplyMessage({
          color: 0xff0000,
          msg: error.message,
        }),
      ],
    });
  }
};
