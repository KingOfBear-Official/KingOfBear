let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `uhm. cari apa?\n\ncontoh:\n${usedPrefix + command} logo`
  m.reply(wait)
  let res = await fetch(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${text}`)
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.status) throw json
  conn.sendButtonImg(m.chat, await (await fetch(json.result)).buffer(), kasihcaption, footer, 'Next', `${usedPrefix + command} ${text}`, m, 0, { thumbnail: await (await fetch(json.result)).buffer() })
}
handler.help = ['pinterest <pencarian>']
handler.tags = ['image']
handler.command = /^(pint(erest)?)$/i

module.exports = handler
