let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.dare)}”`, m)
}
handler.help = ['truth', 'dare']
handler.tags = ['fun']
handler.command = /^(dare)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
//https://sumsel-tribunnews-com.cdn.ampproject.org/v/s/sumsel.tribunnews.com/amp/2020/05/14/pertanyaan-dan-tantangan-truth-or-dare-seru-dan-aman-untuk-mencairkan-suasana?amp_js_v=a6&amp_gsa=1&usqp=mq331AQHKAFQArABIA%3D%3D#aoh=16158517341963&referrer=https%3A%2F%2Fwww.google.com&amp_tf=Dari%20%251%24s&ampshare=https%3A%2F%2Fsumsel.tribunnews.com%2F2020%2F05%2F14%2Fpertanyaan-dan-tantangan-truth-or-dare-seru-dan-aman-untuk-mencairkan-suasana
//https://psycatgames-com.cdn.ampproject.org/v/s/psycatgames.com/id/magazine/party-games/truth-or-dare/?amp_js_v=a6&amp_gsa=1&usqp=mq331AQHKAFQArABIA%3D%3D#aoh=16158517866717&amp_ct=1615851787919&referrer=https%3A%2F%2Fwww.google.com&amp_tf=Dari%20%251%24s&ampshare=https%3A%2F%2Fpsycatgames.com%2Fid%2Fmagazine%2Fparty-games%2Ftruth-or-dare%2F
global.dare = [
    "Tunjukkan daftar chat terakhir di WhatsApp/LINE",
    "Tunjukkan history dari browser ponsel/laptop kamu",
    "Tunjukkan history pencarian di Instagram/TikTok/LINE",
    "Tunjukkan foto-foto/video paling baru di galeri",
    "Makan sayuran mentah pertama yang terlihat di kulkas",
    "Kirim e-money (OVO/GoPay/Dana) ke orang di group ini, pilih random",
    "Ambil beberapa nomor dari kontakmu secara acak dan kirim sms/wa “Aku hamil sama mereka”",
    "Ambil minuman apa saja yg ada didekat mu lalu campurkan dengan cabai dan minum!",
    "Ambil nomor secara acak dari kontakmu, telepon dia, dan bilang “Aku mencintaimu”",
    "Berdiri deket kulkas, tutup mata, pilih makanan secara acak didalemnya, pas makanpun mata harus tetep ditutup",
    "Bilang “KAMU CANTIK/GANTENG BANGET NGGAK BOHONG” sama cewek/cowok yang menurutmu paling cantik/ganteng di group ini",
    "Cabut bulu kaki mu sendiri sebanyak 3x",
    "Chat kedua orangtuamu, katakan “bahwa kamu kangen” dengan mereka lengkap dengan emoticon sedih",
    "Coba searcing google mengenai hal-hal yang mengerikan atau menggelikan seperti trypophobia, dll",
    "Duduk relaks di tengah jalan sambil berpura-pura itu adalah pantai untuk berjemur",
    "isi mulut penuh dengan air dan harus tahan hingga dua putaran. Jika tertawa dan tumpah atau terminum, maka harus ngisi ulang dan ditambah satu putaran lagi",
    "Kirim sms/wa pada orangtuamu “Hai, bro! Aku baru beli majalah Playboy edisi terbaru!”",
    "Kirim sms/wa pada orangtuamu, “Ma, Pa, aku sudah tahu bahwa aku adalah anak adopsi dari Panti Asuhan. Jangan menyembunyikan hal ini lagi”",
    "Kirim sms pada tiga nomor acak di kontakmu dan tulis “Aku baru saja menjadi model majalah Playboy”",
    "Makan 1 Sendok kecap manis dan kecap asin!",
    "Makan sesuatu tapi gak pake tangan",
    "Mecahin telur pake kepala",
    "Menggombali orang yang ada di group ini",
    "Menyanyikan lagu HAI TAYO di depan banyak orang sambil menari",
    "Menyanyikan lagu Iwak Peyek dengan keras di lampu merah",
    "Minjem sesuatu ke tetangga",
    "Minta uang pada seseorang (random/acak) di jalan sambil bilang “Saya tidak punya uang untuk naik angkot”",
    "Minum tiga teguk teh atau coke (coca-cola atau sprite) yang dicampur sambal",
    "Nyebutin 1 biru sampai 10 biru dengan cepat dan tidak boleh melakukan kesalahan. Jika salah maka harus diulang dari awal",
    "Pake celana kebalik sampe besok paginya",
    "Petik 1 bunga lalu berikan bunga itu ke orang yg tidak kamu kenal (harus lawan jenis ya)",
    "Pura pura kerasukan ex: kerasukan macan dll",
    "Telpon mama kamu dan bilang “ma, aku mau nikah secepatnya”",
    "Telpon mantan kamu dan bilang “aku rindu kamu”",
    "Teriak “WOI GW JACK, DENGER NIH RAUNGAN GW, ROAAAAR!” ditempat rame",
    "Warnain kuku kaki dan tangan tapi dengan warna berbeda-beda buat seminggu",
    "",
    "",]
