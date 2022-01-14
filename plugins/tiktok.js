let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(wait)
let res = await fetch(`https://apikey-bear2.herokuapp.com/api/tiktod/?url=${args[0]}&apikey=${bearkey}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { description, author, statistic, link } = json.nowm
await conn.sendFile(m.chat, link, 'tt.mp4', `
▶ ${statistic.playCount} Views
❤ ${statistic.diggCount} Likes
🔁 ${statistic.shareCount} Shares
💬 ${statistic.commentCount} Comments
- *By:* ${author.nickname} (${author.username})
- *Desc:*
${description}
`.trim(), m)
}

handler.help = ['tiktok <url>']
handler.tags = ['downloader']
handler.command = /^tiktok$/i

module.exports = handler
