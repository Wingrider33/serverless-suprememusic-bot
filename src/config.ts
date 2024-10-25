import dotenv from "dotenv";

dotenv.config();

const { 
    DISCORD_APPLICATION_ID,
    DISCORD_BOT_TOKEN,
    DISCORD_PUBLIC_KEY,
    DISCORD_GUILD_ID 
} = process.env;

if (!DISCORD_APPLICATION_ID || !DISCORD_BOT_TOKEN || !DISCORD_PUBLIC_KEY || !DISCORD_GUILD_ID) {
  throw new Error("Missing environment variables");
}

export const config = {
    DISCORD_APPLICATION_ID,
    DISCORD_BOT_TOKEN,
    DISCORD_PUBLIC_KEY,
    DISCORD_GUILD_ID
};