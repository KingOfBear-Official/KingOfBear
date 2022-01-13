let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  if (/^tod$/i.test(command)) {
    conn.send3Button(m.chat, 'Truth or Dare', footer, 'Truth', '#truth', 'Dare', '#dare', 'RANDOM', `${pickRandom(['#dare', '#truth'])}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})
  }
}
handler.help = ['tod'].map(v => v + ' (truth>or<dare>')
handler.tags = ['fun']
handler.command = /^(tod)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
