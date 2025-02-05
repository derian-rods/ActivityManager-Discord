import { Client, Partials, GatewayIntentBits, REST, Routes } from "discord.js";
import dotenv from "dotenv";
import http from "http";
import { configCommands } from "./commands/configCommands.js";
import { CreateActivity, RemoveActivity } from "./commands/index.js";

dotenv.config();

const { TOKEN, CLIENT_ID } = process.env;
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  partials: [
    Partials.User,
    Partials.Channel,
    Partials.GuildMember,
    Partials.Reaction,
    Partials.Message,
    Partials.GuildScheduledEvent,
    Partials.ThreadMember,
  ],
});

client.once("ready", async () => {
  console.log(`Ready running as ${client?.user?.tag}`);
  const guild = client.guilds.cache.first();
  if (!guild) {
    console.error("Bot is not in any guilds.");
    return;
  }
  const rest = new REST({ version: "10" }).setToken(TOKEN);

  try {
    console.log("started refreshing application (/) commands.");
    await rest.put(Routes.applicationCommands(CLIENT_ID, guild.id), {
      body: configCommands,
    });
    console.log("Successfully reloaded application (/) commands.");
  } catch (err) {
    console.log(err);
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName, options } = interaction;

  if (commandName === "mact" || commandName == "manage_activity") {
    const subcommand = options.getSubcommand();
    switch (subcommand) {
      case "create_activity":
        await CreateActivity(interaction);
        break;
      case "remove_activity":
        await RemoveActivity(interaction);
    }
  }
});

client.login(TOKEN);

const server = http.createServer((_, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Bot is running");
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  client.login(TOKEN);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception thrown", error);
  client.login(TOKEN);
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
