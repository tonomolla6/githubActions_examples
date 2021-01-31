const core = require("@actions/core");
const github = require("@actions/github");
const TelegramBot = require("node-telegram-bot-api");

// Credentials
const token = core.getInput("token_bot");
const id = core.getInput("id_chat");

// Bot settings
const bot = new TelegramBot(token, { polling: false });
const name = core.getInput("name");
const commit = github.context.payload;

try {
  bot.sendMessage(
    id,
    `${name}, se ha subido un cambio:\n\nAutor: ${commit.head_commit.author.username}\nEmail: ${commit.head_commit.author.email}\nMsg:${commit.head_commit.message}\nUrl:${commit.head_commit.url}`
  );
} catch (error) {
  core.setFailed(error.message);
}

core.setOutput("message", "Mensaje enviado correctamente");
