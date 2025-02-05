import { SlashCommandBuilder } from "discord.js";

export const configCommands = [
  new SlashCommandBuilder()
    .setName("mact")
    .setDescription("Manage Activity")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("create_activity")
        .setDescription("Create a new Activity")
        .addStringOption((option) =>
          option
            .setName("activity_name")
            .setDescription("The role name of the activity")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("activity_color")
            .setDescription("The color for the activity role")
            .setRequired(false)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("remove_activity")
        .setDescription("Remove the role activity")
        .addStringOption((option) => {
          return option
            .setName("activity_name")
            .setDescription("The name activity or role name")
            .setRequired(true);
        })
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("create_event")
        .setDescription("Create a new event")
        .addStringOption((option) =>
          option
            .setName("activity_name")
            .setDescription("The name of the activity")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("list")
        .setDescription("List users of activity role")
        .addStringOption((option) =>
          option
            .setName("activity_name")
            .setDescription("The name of the activity")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("clear")
        .setDescription("Clear the Activity role from all users")
        .addStringOption((option) =>
          option
            .setName("activity_name")
            .setDescription("The name of the activity")
            .setRequired(true)
        )
    ),

  // Alias Command
  new SlashCommandBuilder()
    .setName("manage_activity")
    .setDescription("Alias for mact - Manage Activity")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("create_activity")
        .setDescription("Create a new Activity")
        .addStringOption((option) =>
          option
            .setName("activity_name")
            .setDescription("The role name of the activity")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("activity_color")
            .setDescription("The color for the activity role")
            .setRequired(false)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("remove_activity")
        .setDescription("Remove the role activity")
        .addStringOption((option) => {
          return option
            .setName("activity_name")
            .setDescription("The name activity or role name")
            .setRequired(true);
        })
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("create_event")
        .setDescription("Create a new event")
        .addStringOption((option) =>
          option
            .setName("activity_name")
            .setDescription("The name of the activity")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("list")
        .setDescription("List users of activity role")
        .addStringOption((option) =>
          option
            .setName("activity_name")
            .setDescription("The name of the activity")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("clear")
        .setDescription("Clear the Activity role from all users")
        .addStringOption((option) =>
          option
            .setName("activity_name")
            .setDescription("The name of the activity")
            .setRequired(true)
        )
    ),
].map((command) => command.toJSON());
