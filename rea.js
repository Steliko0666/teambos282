const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
token: process.env.token, //Tokeni e.nv Kısmındaki Yere Yapıştırın

prefix: "!" //Değiştirebilirsiniz.
})
bot.onMessage() 
bot.loadCommands(`./komutlar/`)

bot.command({
name: "ping", //Tetikleyici
code: `$ping Pong!` //Kod
})