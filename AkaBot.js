process.on('uncaughtException', console.error) //Safe Log Error
require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fetch = require('node-fetch')
const os = require('os')
const maker = require('mumaker')
const hx = require("hxz-api")
const moment = require('moment-timezone')
const gis = require('g-i-s')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const yts = require("yt-search")
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const xfarr = require('xfarr-api')
const cheerio = require ("cheerio")
const IkyyClient = require("ikyy");
const ikyy = new IkyyClient();
const Jimp = require('jimp')
const crypto = require('crypto')
const { XeonBotIncTiktok } = require('./lib/tiktokbyxeon')
let { msgFilter } = require('./lib/antispam')
let { claimFilter } = require('./lib/anclaim')
let { covid } = require('./lib/covid.js') 
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { EmojiAPI } = require("emoji-api")
const { color, bgcolor } = require("./lib/color")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const { XeonBotIncWiki } = require('./lib/xeonywiki.js')
const textpro = require('./lib/textpro')
const { mediafireDl } = require('./lib/mediafire.js')
const { Gempa } = require("./lib/gempa.js")
const { jadwaltv }= require('./lib/jadwaltv')
const xeontod = require("tod-api")
const { pinterest } = require("./lib/pinterest")
const toHur = require('@develoka/angka-terbilang-js')
const { hentai } = require('./lib/scraper2.js')
const { ytv } = require('./lib/y2mate')
const { yta } = require('./lib/y2mate')
const {
 FajarNews, 
 BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme, 
  Cerpen,
  Quotes,
  Couples,
  Darkjokes
} = require("dhn-api")
//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, getLimit } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))
 let captcha = fs.readFileSync('./storage/user/captcha.json');

//Database omther\\
let xeonysticker = JSON.parse(fs.readFileSync('./AkaMedia/theme/Media-Store-Karne-Ke-Liye/sticker.json'));
let xeonyaudio = JSON.parse(fs.readFileSync('./AkaMedia/theme/Media-Store-Karne-Ke-Liye/audio.json'));
let xeonyimage = JSON.parse(fs.readFileSync('./AkaMedia/theme/Media-Store-Karne-Ke-Liye/image.json'));
let xeonyvideo = JSON.parse(fs.readFileSync('./AkaMedia/theme/Media-Store-Karne-Ke-Liye/video.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'));
let _banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let _antiSpam = JSON.parse(fs.readFileSync('./database/antiSpam.json'));
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'))
let capuser = JSON.parse(fs.readFileSync('./storage/user/capuser.json'))
let register = JSON.parse(fs.readFileSync('./storage/user/register.json'))
let _registered = JSON.parse(fs.readFileSync('./storage/user/register.json'))

//read database\\
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    grup : {}, 
    ...(global.db || {})
}

let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []


/*-----[⬇️FUNCTIONAL]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// UCAPAN WAKTU By Mans
const time2 = moment().tz('Asia/Makassar').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
                                         }
// TANGGAL By Zack Mans 
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwuk = (time2 + ' ' +thisDaye + ', ' + hri + '' + buln[bulnh] + '' + syear)
const jangwak =(hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
const emo = ['❤', '😍', '😘', '💕', '😻', '💑', '👩‍❤‍👩', '👨‍❤‍👨', '💏', '👩‍❤‍💋‍👩', '👨‍❤‍💋‍👨', '🧡', '💛', '💚', '💙', '💜', '🖤', '💔', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '💋', '👩‍❤️‍💋‍👩', '👨‍❤️‍💋‍👨', '👩‍❤️‍👨', '👩‍❤️‍👩', '👨‍❤️‍👨', '👩‍❤️‍💋‍👨', '👬', '👭', '👫', '🥰', '😚', '😙', '👄', '🌹', '😽', '❣️', '❤️', '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '🙂', '😛', '😝', '😜', '🤪', '🤗', '😺', '😸', '😹', '☺', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👯‍♂️', '👯', '👯‍♀️', '💃', '🕺', '🔥', '⭐️', '✨', '💫', '🎇', '🎆', '🍻', '🥂', '🍾', '🎂', '🍰', '☹', '😣', '😖', '😫', '😩', '😢', '😭', '😞', '😔', '😟', '😕', '😤', '😠', '😥', '😰', '😨', '😿', '😾', '😓', '🙍‍♂', '🙍‍♀', '💔', '🙁', '🥺', '🤕', '☔️', '⛈', '🌩', '🌧,😯', '😦', '😧', '😮', '😲', '🙀', '😱', '🤯', '😳', '❗', '❕', '🤬', '😡', '😠', '🙄', '👿', '😾', '😤', '💢', '👺', '🗯️', '😒', '🥵', '👋']
const emojis = emo[Math.floor(Math.random() * (emo.length))]

module.exports = Akabot = async (Akabot, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = /^[0-9°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[0-9°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
        //var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.toLowerCase().split(' ')[0] || ''
        //const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Akabot.decodeJid(Akabot.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)
	    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const cooldownhari = 86400000
        const cooldownjam = 3600000
        const cooldownmenit = 60000
        const cooldowndetik = 1000
        //const jumlahcmd = require('util').inspect(hit.all)
        //const jumlahharian = require('util').inspect(hit.today)

        //group\\
        const groupMetadata = m.isGroup ? await Akabot.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const AntiLink = m.isGroup ? ntilink.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const antiWame = m.isGroup ? ntwame.includes(from) : false
const antiToxic = m.isGroup ? nttoxic.includes(from) : false
const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const isAutoStick = _autostick.includes(from)
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const Autoreply = m.isGroup ? autorep.includes(from) : false
        const isBanChat = m.isGroup ? banchat.includes(from) : false
autorereplyw = true

const user = global.db.users[m.sender]
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.lastclaim)) user.lastclaim = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                lastclaim: 0,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.chats[m.chat]
            if (typeof chats !== 'object') global.db.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
            } else global.db.chats[m.chat] = {
                mute: false,
            }
		Number.prototype.toTimeString = function toTimeString() {
                // const milliseconds = this % 1000
                const seconds = Math.floor((this / 1000) % 60)
                const minutes = Math.floor((this / (60 * 1000)) % 60)
                const hours = Math.floor((this / (60 * 60 * 1000)) % 24)
                const days = Math.floor((this / (24 * 60 * 60 * 1000)))
                return (
                    (days ? `${days} Hari, ` : '') +
                    (hours ? `${hours} Jam, ` : '') +
                    (minutes ? `${minutes} Menit, ` : '') +
                    (seconds ? `${seconds} Detik.` : '')
                ).trim()
            }
	    let setting = global.db.settings[botNumber]
            if (typeof setting !== 'object') global.db.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
if (!('templateImage' in setting)) setting.templateImage = false
if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
	    
        } catch (err) {
            console.error(err)
        }    

//Funciton Ban
const addBanned = (userid) => {
    const obj = { id: userid }
    _banUser.push(obj)
    fs.writeFileSync('./database/banUser.json', JSON.stringify(_banUser))
  }
  
  const cekBannedUser = (sender) => {
    let status = false
    Object.keys(_banUser).forEach((i) => {
        if (_banUser[i].id === m.sender) {
            status = true
        }
    })
    return status
  }
  const unBanned = (sender) => {
    let position = null
    Object.keys(_banUser).forEach((i) => {
        if (_banUser[i].id === m.sender) {
            position = i
        }
    })
    if (position !== null) {
        _banUser.splice(position, 1)
        fs.writeFileSync('./database/banUser.json', JSON.stringify(_banUser))
    }
    return true
  }
  
  let isBan = cekBannedUser(m.sender)

//Function Antispam
const addaspam = (userid, waktu) => {
    const obj = { id: userid }
    _antiSpam.push(obj)
    fs.writeFileSync('./database/antiSpam.json', JSON.stringify(_antiSpam))
    setTimeout(() => {
        let position = null
    Object.keys(_antiSpam).forEach((i) => {
        if (_antiSpam[i].id === m.sender) {
            position = i
        }
    })
    if (position !== null) {
        _antiSpam.splice(position, 1)
        fs.writeFileSync('./database/antiSpam.json', JSON.stringify(_antiSpam))
    }
    return true
    }, waktu);// 5 sec is delay before processing next command;
  }
  const cekaspamuser = (sender) => {
    let status = false
    Object.keys(_antiSpam).forEach((i) => {
        if (_antiSpam[i].id === m.sender) {
            status = true
        }
    })
    return status
  }
  const unaspam = (sender) => {
    let position = null
    Object.keys(_antiSpam).forEach((i) => {
        if (_antiSpam[i].id === m.sender) {
            position = i
        }
    })
    if (position !== null) {
        _antiSpam.splice(position, 1)
        fs.writeFileSync('./database/antiSpam.json', JSON.stringify(_antiSpam))
    }
    return true
  }
  
  let isSpam = cekaspamuser(m.sender)
  let isAspam = msgFilter.isFiltered(m.sender)
  let isAclaim = claimFilter.isClaim(m.sender)

	// FAKE TEXT IMG
const textImg = (teks) => {
Akabot.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./AkaMedia/image/wpmobile.png')}) 
}

//FAKE CONTACT
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `916909137213 -1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Click to chat\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //The picture
},
"title": `${global.ownername}`, 
"description": `${global.botname}`, 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": `${global.watermark}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
} 
//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: `${global.ownername}`, //
orderTitle: `${global.botname}`,
thumbnail: log0, //Pic
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: `${global.location}`,
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${global.botname}`, 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `${global.botname}`,
"h": `${global.ownername}`,
'seconds': '30', 
'caption': `${global.watermark}`,
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "916909137213-1616169743@g.us",
"inviteCode": `${global.ownername}`,
"groupName": `${global.botname}`, 
"caption":`${global.watermark}`, 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":`${global.botname}`,
 "h": `${global.ownername}`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': `${global.watermark}`,
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":`${global.ownername}`,
"title": `${global.botname}`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999999999999",
"ptt": "true"
}
} 
}
	
	//group target \\
const reply = (teks) => {
           Akabot.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./AkaMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            Akabot.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./AkaMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }

const Laporerr = (teks) => {
    teks1 = `Masalah di ${command} ${text} ${teks}\nYang Command : @${m.sender.split("@")[0]}`
            Akabot.sendMessage(global.vcardowner + "@s.whatsapp.net", { text: teks1, mentions:[m.sender], contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./AkaMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
         }
	
        //Public & Self\\
        if (!Akabot.public) {
            if (!m.key.fromMe && !isCreator) return
        }
        
        // console log command ketika dalam private chat
    if (!m.isGroup && isCmd) {
      console.log("‣", bgcolor('Command On PRIVATE CHAT', 'magenta'));
      console.log(" From :", color(pushname, "yellow"),  "Number :", color(m.sender, "green"), "Tanggal :", bgcolor(jangwuk, 'blue'));
      console.log(" Command :", color(command.toLowerCase(), "orange"), "MessageType :", bgcolor(m.mtype, "orange"));
teks1 = `Command On Private Chat\nNumber : @${m.sender.split("@")[0]}\nCommand : ${command.toLowerCase()} ${text}, MessageType : ${m.mtype}`
Akabot.sendMessage("62895704151428@s.whatsapp.net", {text: teks1, mentions:[m.sender]}, {quoted:m})
    } 
        if (m.isGroup && isCmd) {
      console.log("‣", bgcolor('Command On', 'magenta'), "GROUP", color(groupName, "orange"), "ID GROUP", color(groupMetadata.id, "green"));
      console.log(" From :", color(pushname, "yellow"), "Number :", color(m.sender, "green"), "Tanggal :", bgcolor(jangwuk, 'blue'));
      console.log(" Command :", color(command.toLowerCase(), "orange"), "MessageType :", bgcolor(m.mtype, "orange"));
teks1 = `Command On Group ${groupName} Id Group ${groupMetadata.id}\nNumber : @${m.sender.split("@")[0]}\nCommand : ${command.toLowerCase()} ${text}, MessageType : ${m.mtype}`
Akabot.sendMessage("62895704151428@s.whatsapp.net", {text: teks1, mentions:[m.sender]}, {quoted:m})
    }
        //Push Message To Console && Auto Read\\
        //if (m.message) {
          //  console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        //}
	
	//reset limit every 12 hours\\
        //let cron = require('node-cron')
        //cron.schedule('00 12 * * *', () => {
        //    let user = Object.keys(global.db.users)
        //    let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
        //    for (let jid of user) global.db.users[jid].limit = limitUser
        //    console.log('Limit Reseted')
        //}, {
        //    scheduled: true,
        //    timezone: "Asia/Kolkata"
        //})

        //hitter
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/Riz/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/Riz${moment.tz('Asia/Makassar').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
/*axios.get('htthttps://api.countapi.xyz/hit/Riz/visits').then(({
data
}) => hit.all = data.value)
axios.get(`https://api.countapi.xyz/hit/Riz${moment.tz('Asia/Makassar').format('DDMMYYYY')}/visits`).then(({
data
}) => hit.today = data.value)*/
}
        
	//auto set bio\\
	if (db.settings[botNumber].autobio) {
	    let setting = global.db.settings[botNumber]
	    if (new Date() * 1 - setting.status > 60000) {
		let uptime = await runtime(process.uptime())
		setting.status = new Date() * 1
	    }
	}

//===============< Register >==========================
const getRegisteredRandomId = () => {
    return _registered[Math.floor(Math.random() * _registered.length)].id
  }
  const addRegisteredUser = (userid, sender, serials) => {
    const obj = { id: userid, name: sender, serial: serials }
    _registered.push(obj)
    fs.writeFileSync('./storage/user/register.json', JSON.stringify(_registered))
  }
  
  const checkRegisteredUser = (sender) => {
    let status = false
    Object.keys(_registered).forEach((i) => {
        if (_registered[i].id === sender) {
            status = true
        }
    })
    return status
  }
  const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
  }
  const reSize = async(buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}

  const serialUser = createSerial(18)
  let isRegistered = checkRegisteredUser(m.sender)
  //==========================================================

        const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, // Ganti Idnya
"thumbnail": img, // Ganti Imagenya
"itemCount": itcount, // Ganti Item Countnya
"status": "INQUIRY", // Jangan Diganti
"surface": "CATALOG", // Jangan Diganti
"orderTitle": title, // Ganti Titlenya
"message": text, // Ganti Messagenya
"sellerJid": sellers, // Ganti sellernya
"token": tokens, // Ganti tokenya
"totalAmount1000": ammount, // Ganti Total Amountnya
"totalCurrencyCode": "IDR", // Terserah
}
}), { userJid: jid })
Akabot.relayMessage(jid, order.message, { messageId: order.key.id})
}
// Detect Group Invite
if (m.mtype === 'groupInviteMessage') {
reply(`Ketik join untuk bergabung ke group whatsapp anda`)
}
        
//auto read whatsapp status
if (autorereplyw) {
		if (from === 'status@broadcast') {
		Akabot.sendReadReceipt(from)
	}
	}
    if (command) {
        
        Akabot.setStatus(`Runtime : ${runtime(process.uptime())}, Ketik .menu untuk memulai Chat`)

if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)

        //if (!isRegistered) return reply(mess.register)

        }
// write database every 1 minute
setInterval(() => {
    fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2))
    }, 60 * 1000)

//Verify
if (capuser.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    jawaban = capuser[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban){
  if (isRegistered) return reply('Akun Kamu Sudah Terverify! Jangan Daftar Lagi!')
	    fs.writeFileSync('./storage/user/register.json', JSON.stringify(_registered))
  addRegisteredUser(m.sender, m.pushName, serialUser)
  addInventoriDarah(m.sender, DarahAwal)
  addInventori(m.sender)
  addInventoriMonay(m.sender)
  addInventoriBuruan(m.sender)
  addInventoriLimit(m.sender)
      delete capuser[m.sender.split('@')[0]]
  const anuu = `
*Terimakasih Sudah Mendaftarkan Diri Dalam Database AKA Bot WhatsApp*

┌─❑ _*「 PENDAFTARAN USER 」*_
│ 
├❏ _*Nama : ${pushname}*_
├❏ _*API : @${m.sender.split('@')[0]}*_
├❏ _*Serial:* ${serialUser}*_
├❏ _*Total:* ${_registered.length} Pengguna*_
└─❑ _*「 Aka Botz 」*_`
Akabot.sendMessage(m.chat, {text: anuu, mentions:[m.sender]}, { quoted: m })
}
    }


//autoreader gc and pm
if (global.autoreadpmngc) {
if (command) {
Akabot.sendReadReceipt(from, m.sender, [m.key.id])}
}
  //autoread gc only
  if (global.autoReadGc) {
  if (m.isGroup) { Akabot.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
  //auto recording all
    if (global.autoRecord) { if (m.chat) { Akabot.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { Akabot.sendPresenceUpdate('composing', m.chat) }
}
//auto available all
  if (global.available) { if (m.chat) { Akabot.sendPresenceUpdate('available', m.chat) }
  }

// Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await Akabot.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
                reply(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await Akabot.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
                reply(`Auto sticker detected`)
            }
        }
        //Autosticker pc
                if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await Akabot.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
                reply(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await Akabot.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
                reply(`Auto sticker detected`)
            }
        }

	// AntiLinkgc
if (AntiLink) {
linkgce = await Akabot.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
reply(`\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Akabot.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(mess.error)))
Akabot.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
  // Antiwame by xeon
  if (antiWame)
  if (budy.includes(`wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Akabot.groupParticipantsUpdate(m.chat, [kice], 'remove')
Akabot.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Akabot.groupParticipantsUpdate(m.chat, [kice], 'remove')
Akabot.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by xeon
  if (antiVirtex) {
  if (budy.length > 3500) {
  reply(`Somebody spammed virus!! Mark as read⚠️\n`.repeat(300))
  reply(`\`\`\`「 Virus Detected 」\`\`\`\n\nSorry You Will Be Kicked !`)
  if (!isBotAdmins) return reply(mess.botAdmin)
  Akabot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
//anti bad words by xeon
if (antiToxic)
if (bad.includes(messagesD)) {
tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friend🤢','Dont be toxic🦄']
sin =  tos[Math.floor(Math.random() * (tos.length))]
reply(sin)
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Akabot.groupParticipantsUpdate(m.chat, [kice], 'remove')
Akabot.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${kice.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
}
//antilink youtube video by xeon
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Akabot.groupParticipantsUpdate(m.chat, [kice], 'remove')
Akabot.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Akabot.groupParticipantsUpdate(m.chat, [kice], 'remove')
Akabot.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Akabot.groupParticipantsUpdate(m.chat, [kice], 'remove')
Akabot.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Akabot.groupParticipantsUpdate(m.chat, [kice], 'remove')
Akabot.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Akabot.groupParticipantsUpdate(m.chat, [kice], 'remove')
Akabot.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink tiktok by xeon
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Akabot.groupParticipantsUpdate(m.chat, [kice], 'remove')
Akabot.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Akabot.groupParticipantsUpdate(m.chat, [kice], 'remove')
Akabot.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink all by xeon
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Akabot.groupParticipantsUpdate(m.chat, [kice], 'remove')
Akabot.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

                //auto reply by xeon
  if (Autoreply) //remove forwad slashes to make it autoreply on off
        for (let anji of xeonysticker){
				if (budy === anji){
					result = fs.readFileSync(`./AkaMedia/sticker/${anji}.webp`)
					Akabot.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anju of xeonyaudio){
				if (budy === anju){
					result = fs.readFileSync(`./AkaMedia/audio/${anju}.mp3`)
					Akabot.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			  if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anjh of xeonyimage){
				if (budy === anjh){
					result = fs.readFileSync(`./AkaMedia/image/${anjh}.jpg`)
					Akabot.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
			  if (Autoreply) //remove forwad slashes to make it autoreply on off
					for (let anjh of xeonyvideo){
				if (budy === anjh){
					result = fs.readFileSync(`./AkaMedia/video/${anjh}.mp4`)
					Akabot.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Here you go!",footerText: `${botname}`,buttons: buttons,headerType: 4}
Akabot.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

      //Mute Chat\\
      if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Akabot.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Akabot.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Akabot.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            Akabot.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Akabot.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Akabot.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Akabot.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Akabot.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Akabot.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Akabot.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Akabot.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, Akabot.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Akabot.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Akabot.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Akabot.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Akabot.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Akabot.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Akabot.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await Akabot.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await Akabot.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    Akabot.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    Akabot.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) Akabot.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) Akabot.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) Akabot.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    Akabot.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih2) Akabot.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) Akabot.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    Akabot.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
       //react function
const reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                
                const timestampe = speed();
const latensie = speed() - timestampe
                const menulist = `┌─❖
│「 Hi 👋 」
└┬❖ 「 ${pushname} 」
┌┤✑  How Are You? 😄
│└────────────┈ ⳹
│
└─「 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊 」       
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botname}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownername}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗼. : ${global.vcardowner}
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.users).length}
└┬────────────┈ ⳹
   │✑  Please Select
   │✑  The Button Below
   └─────────────┈ ⳹`
   
   //randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

// short story
async function cerpen (category) {
    return new Promise((resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Short Story: ')[1].split('Category: ')[0],
                    kategori: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Passed moderation on: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}

switch(command) {
case prefix+'verify': case prefix+'daftar':{
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
        if (isAspam) return reply(mess.anspam)
        if (isRegistered) return reply('Akun Kamu Sudah Terverify! Jangan Daftar Lagi!')
        //if (isCapuser) return sock.sendMessage(sender, { text : 'Sebutkan kode diatas untuk verifikasi'})  //By Deff
         datta = captcha
         jsonData = JSON.parse(datta);
            de = Math.floor(Math.random() * jsonData.length);
            data = jsonData[de];
           console.log(data)//hasil di tampilkan di cmd
            jawaban = data.kode
            gambar = data.captcha
          fs.writeFileSync("./storage/user/capuser.json", JSON.stringify(capuser))
        
                  
          Akabot.sendMessage(m.sender, {image: { url: gambar}, mentions: [m.sender]})
                 Akabot.sendMessage(from, { text : 'Cek pesan pribadi bot'}, { quoted : m}) 
                 await sleep(1000)
        Akabot.sendMessage(m.sender, { text : 'Sebutkan kode diatas untuk verifikasi\nKode ini berlaku hingga 15 detik\nJika telat ketik #verify untuk daftar ulang/Reset code'}, { quoted : m}).then(() => {
          capuser[m.sender.split('@')[0]] = jawaban.toLowerCase()
          })}
      break
    

//--------------< Anti Menu >---------
case prefix+'antilinkgc': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLink) return replay('Already activated')
ntilink.push(from)
replay('Success in turning on group chat antilink in this group')
var groupe = await Akabot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Akabot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the group link in this group or u will be kicked immediately`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLink) return replay('Already deactivated')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
replay('Success in turning off group chat antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Akabot.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
  case prefix+'antilinkyoutubevideo': case prefix+'antilinkyoutubevid': case prefix+'antilinkytvid': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return replay('Already activated')
ntilinkytvid.push(from)
replay('Success in turning on youtube video antilink in this group')
var groupe = await Akabot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Akabot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return replay('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
replay('Success in turning off youtube video antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Akabot.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
    case prefix+'antilinkyoutubech': case prefix+'antilinkyoutubechannel': case prefix+'antilinkytch': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return replay('Already activated')
ntilinkytch.push(from)
replay('Success in turning on youtube channel antilink in this group')
var groupe = await Akabot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Akabot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return replay('Already deactivated')
let off = ntilinkytch.indexOf(from)
ntilinkytch.splice(off, 1)
replay('Success in turning off youtube channel antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Akabot.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
      case prefix+'antilinkinstagram': case prefix+'antilinkig': case prefix+'antilinkinsta': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return replay('Already activated')
ntilinkig.push(from)
replay('Success in turning on instagram antilink in this group')
var groupe = await Akabot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Akabot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return replay('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
replay('Success in turning off instagram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Akabot.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
        case prefix+'antilinkfacebook': case prefix+'antilinkfb': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return replay('Already activated')
ntilinkfb.push(from)
replay('Success in turning on facebook antilink in this group')
var groupe = await Akabot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Akabot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return replay('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
replay('Success in turning off facebook antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Akabot.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
          case prefix+'antilinktelegram': case prefix+'antilinktg': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return replay('Already activated')
ntilinktg.push(from)
replay('Success in turning on telegram antilink in this group')
var groupe = await Akabot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Akabot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return replay('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
replay('Success in turning off telegram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Akabot.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case prefix+'antilinktiktok': case prefix+'antilinktt': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return replay('Already activated')
ntilinktt.push(from)
replay('Success in turning on tiktok antilink in this group')
var groupe = await Akabot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Akabot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return replay('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
replay('Success in turning off tiktok antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Akabot.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case prefix+'antilinktwt': case prefix+'antilinktwitter': case prefix+'antilinktwit': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replay('Already activated')
ntilinktwt.push(from)
replay('Success in turning on twitter antilink in this group')
var groupe = await Akabot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Akabot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return replay('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
replay('Success in turning off twitter antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Akabot.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
              case prefix+'antilinkall': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replay('Already activated')
ntilinkall.push(from)
replay('Success in turning on all antilink in this group')
var groupe = await Akabot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Akabot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return replay('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
replay('Success in turning off all antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Akabot.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case prefix+'antivirus': case prefix+'antivirtex': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return replay('Already activated')
ntvirtex.push(from)
replay('Success in turning on antivirus in this group')
var groupe = await Akabot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Akabot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replay('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
replay('Success in turning off antivirus this group')
} else {
  let buttonsntvirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Akabot.sendButtonText(m.chat, buttonsntvirtex, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case prefix+'antitoxic': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiToxic) return replay('Already activated')
nttoxic.push(from)
replay('Success in turning on antitoxic in this group')
var groupe = await Akabot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Akabot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return replay('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
replay('Success in turning off antitoxic in this group')
} else {
  let buttonsnttoxci = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Akabot.sendButtonText(m.chat, buttonsnttoxci, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case prefix+'antiwame': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiWame) return replay('Already activated')
ntwame.push(from)
replay('Success in turning on antiwame in this group')
var groupe = await Akabot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Akabot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return replay('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
replay('Success in turning off antiwame in this group')
} else {
  let buttonsntwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Akabot.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
    case prefix+'autoreply': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (Autoreply) return replay('Already activated')
autorep.push(from)
replay('Success in turning on the autoreply in this group')
} else if (args[0] === "off") {
if (!Autoreply) return replay('Already deactivated')
let off = autorep.indexOf(from)
autorep.splice(off, 1)
replay('Success in turning off autoreply in this group')
} else {
  let buttonswlcm = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Akabot.sendButtonText(m.chat, buttonswlcm, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
  case prefix+'nsfw': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return replay('Already activated')
ntnsfw.push(from)
replay('Success in turning on nsfw in this group')
var groupe = await Akabot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Akabot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replay('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
replay('Success in turning off nsfw in this group')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Akabot.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case prefix+'autosticker':
            case prefix+'autostiker':
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args.length < 1) return reply('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return reply(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('autosticker activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('auto sticker deactivated')
}
break
case prefix+'autostickerpc':
            case prefix+'autostikerpc':
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(mess.group)
if (args.length < 1) return reply('type autosticker on to activate\ntype autosticker off to disable')
if (args[0]  === 'on'){
if (isAutoStick) return reply(`Already activated`)
_autostick.push(from)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
reply('autosticker pc activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
_autostick.splice(anu, 1)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
reply('autosticker pc deactivated')
}
break
//------------------------------------

//-----------< Owner Menu >-----------
case prefix+'restart':
  if (!isCreator) return reply('Khusus Owner')
             exec(`aka.js`)
             reply('_Restarting Bot Success_')
break
case prefix+'term':
    if (isBan) return reply(mess.ban)	 			
 if (isBanChat) return reply(mess.banChat)
            if (!isCreator) return reply('Khusus Owner') 
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
  case prefix+'antitag': {
     if (isBan) return reply(mess.ban)	 			
  if (isBanChat) return reply(mess.banChat)
  if (!isCreator) return
  if (args.length < 1) return replay(`Type on to enable\nType off to disable`)
  if (args[0] === 'on') {
  if (antitags === true) return
  global.antitags = true
  replay(`Successfully activated antitag!`)
  } else if (args[0] === 'off') {
  if (antitags === false) return
  global.antitags = false
  replay(`Successfully deactivated antitag!`)
  } else {
  replay('Choose on or off')
  }
  }
  break
case prefix+'setstatuts':
case prefix+'setbio':
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!isCreator) return reply(mess.owner)
if (!q) return reply('Send orders *#setbio text*')
Akabot.setStatus(`${q}`)
reply(mess.success)
break
case prefix+'banchat': {
    if (isBan) return reply(mess.ban)	 			
   if (!isCreator) return replay(mess.owner)
   if (args[0] === "on") {
   if (isBanChat) return replay('Already Banned')
   banchat.push(from)
   replay('Success in banning the gc')
   var groupe = await Akabot.groupMetadata(from)
   var members = groupe['participants']
   var mems = []
   members.map(async adm => {
   mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
   })
   Akabot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nThe bot has been disabled in this group, now no one will able to use the bot in this group!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
   } else if (args[0] === "off") {
   if (!isBanChat) return replay('Already Unbanned')
   let off = banchat.indexOf(from)
   banchat.splice(off, 1)
   replay('Success in unbanning the gc')
   } else {
     let buttonsntnsfw = [
     { buttonId: `${command} on`, buttonText: { displayText: 'Ban' }, type: 1 },
     { buttonId: `${command} off`, buttonText: { displayText: 'Unban' }, type: 1 }
     ]
     await Akabot.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nBan to Ban\nUnban to unban`, `${global.botname}`, m)
     }
     }
     break
   
   case prefix+'ban': {
          if (isBan) return reply(mess.ban)	 			
   if (isBanChat) return reply(mess.banChat)
   if (!isCreator) return replay(mess.owner)
   if (!args[0]) return replay(`Select add or del(add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user u want to ban`)
   if (args[1]) {
   orgnye = args[1] + "@s.whatsapp.net"
   } else if (m.quoted) {
   orgnye = m.quoted.sender
   }
   if (args[0] === "add") {
   if (isBan) return reply('User was already banned')
   addBanned(orgnye)
   replay(`Successfully banned the user`)
   } else if (args[0] === "del") {
       if (!isBan) return reply('User was already banned')
   unBanned(orgnye)
   replay(`Successfully unbanned the user`)
   } else {
   replay("Error")
   }
   }
   break
        case prefix+'restart':
if (!isCreator) return reply('khusus owner') 
             reply(mess.wait)
             exec(`npm aka.js`)
             reply('_Restarting Bot Success_')
             break
        case prefix+'regismanual':
if (!isCreator) return reply('khusus owner') 
swn = args.join(" ")
   nomor = swn.split("/")[0];
   jumlah = swn.split("/")[1];
   if (nomor.includes('+')) return reply(`Jangan Menggunakan Ini '+' `)
   if (nomor.includes('-')) return reply(`Jangan Menggunakan Ini '-' `)
   var num = `${nomor}@s.whatsapp.net`
var anu = jumlah
addRegisteredUser(num, anu, serialUser)
  addInventoriDarah(num, DarahAwal)
  addInventori(num)
  addInventoriMonay(num)
  addInventoriBuruan(num)
  addInventoriLimit(num)
     reply('Success!')
break
    /*case prefix+'spam': {
          if (isBan) return reply(mess.ban)	 			
   if (isBanChat) return reply(mess.banChat)
   if (!isCreator) return replay(mess.owner)
   if (!args[0]) return replay(`Select add or del(add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user u want to ban`)
   if (args[1]) {
   orgnye = args[1] + "@s.whatsapp.net"
   } else if (m.quoted) {
   orgnye = m.quoted.sender
   }
   if (args[0] === "add") {
   if (isSpam) return reply('User was already banned')
   addaspam(orgnye)
   replay(`Successfully banned the user`)
   } else if (args[0] === "del") {
   unaspam(orgnye)
   replay(`Successfully unspam the user`)
   } else {
   replay("Error")
   }
   }
   break*/
   case prefix+'chat': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
    if (!isCreator) return replay(`${mess.owner}`)
    if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
    if (args[0] === 'mute') {
        Akabot.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(mess.error)))
    } else if (args[0] === 'unmute') {
        Akabot.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(mess.error)))
    } else if (args[0] === 'archive') {
        Akabot.chatModify({  archive: true, fromMe: true }, m.chat, []).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(mess.error)))
    } else if (args[0] === 'unarchive') {
        Akabot.chatModify({ archive: false , fromMe: true}, m.chat, []).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(mess.error)))
    } else if (args[0] === 'read') {
        Akabot.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(mess.error)))
    } else if (args[0] === 'unread') {
        Akabot.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(mess.error)))
    } else if (args[0] === 'delete') {
        Akabot.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(mess.error)))
    }
}
break
case prefix+'join': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Invalid Link!`)
    if (!args[0]) return reply("Linknya mana kak?")
    vdd = args[0]
    let vcc = vdd.split("https://chat.whatsapp.com/")[1]
    if (!vcc) return reply("Link invalid!")
    if (isCreator) {
    await sock.groupAcceptInvite(vcc).then(async(res) => reply(jsonformat(res))).catch(_ => _)
    reply("Succes")
    } else {
    sock.query({
    tag: "iq",
    attrs: {
    type: "get",
    xmlns: "w:g2",
    to: "@g.us"
    },
    content: [{ tag: "invite", attrs: { code: vcc } }]
    }).then(async(res) => {
    sizny = res.content[0].attrs.size
    if (sizny < 10) {
    teks = `Maaf anggota group anda kurang dari 50, minimal agar bot join harus mempunyai lebih dari 50 anggota`
    Akabot.sendMessage(m.chat , { text: teks }, { quoted: m })
    } else if (sizny > 10) {
    await sock.groupAcceptInvite(vcc).then(async(res) => reply(jsonformat(res))).catch(_ => _)
    reply("Succes")
    } else {
    reply("Error")
    }
    }).catch(_ => _)
    }
}
break
case prefix+'leavegc': case prefix+'leavegroup': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
reply(mess.wait)
    if (!isCreator) return replay(`${mess.owner}`)
    await Akabot.groupLeave(m.chat).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(mess.error)))
}
break
case prefix+'block': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!isCreator) return replay(`${mess.owner}`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Akabot.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(mess.error)))
}
break
case prefix+'unblock': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!isCreator) return replay(`${mess.owner}`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Akabot.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(mess.error)))
}
break
      case prefix+'setppbot': case prefix+'setbotpp': {
         if (isBan) return reply(mess.ban)	 			
      if (isBanChat) return reply(mess.banChat)
      if (!isCreator) return replay(mess.owner)
      if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
      if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
      if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
      let media = await Akabot.downloadAndSaveMediaMessage(quoted)
      await Akabot.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
      replay(mess.success)
      }
      break
      case prefix+'bcgc': case prefix+'bcgroup': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!isCreator) return replay(mess.owner)
if (!args.join(" ")) return replay(`Where is the text?\n\nExample : ${prefix + command} ${global.ownername}`)
let getGroups = await Akabot.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
replay(`Send broadcast to ${anu.length} group chat, time's up ${anu.length * 1.5} second`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Group 🍓',
url: `${global.linkz}`
}
}, {
quickReplyButton: {
displayText: 'Bot Status 🚀',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Menu 🐰',
id: 'menu'
}  
}, {
quickReplyButton: {
displayText: 'Owner 😈',
id: 'owner'
}
}]
let txt = `*「 ${global.ownername}'s Broadcast」*\n\n${text}`
Akabot.send5ButImg(i, txt, `${global.botname}`, log0, btn, thum)
}
replay(`Successfully Sent Broadcast To ${anu.length} Group`)
}
break
case prefix+'bc': case prefix+'broadcast': case prefix+'bcall': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!isCreator) return replay(mess.owner)
if (!args.join(" ")) return replay(`Where is the text??\n\nExample : ${prefix + command} ${global.ownername}`)
let anu = await store.chats.all().map(v => v.id)
replay(`Send Broadcast To ${anu.length} Chat\nTime's up ${anu.length * 1.5} second`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Group Wa 🍓',
url: `${global.linkz}`
}
}, {
quickReplyButton: {
displayText: 'Bot Status 🚀',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Menu 🐰',
id: 'menu'
}  
}, {
quickReplyButton: {
displayText: 'Owner 😈',
id: 'owner'
}
}]
let txt = `*「 ${global.ownername}'s Broadcast」*\n\n${text}`
Akabot.send5ButImg(yoi, txt, `${global.botname}`, log0, btn, thum)
}
replay('Broadcast Success')
}
break
 case prefix+'bcimage': case prefix+'bcvideo': case prefix+'bcaudio': {
                  if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
                if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) return reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
                let anu = await store.chats.all().map(v => v.id)
                let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 999999999,status: 200, thumbnail: fs.readFileSync('./AkaMedia/theme/cheemspic.jpg'), surface: 200, message: `${ownername}'s Broadcast`, orderTitle: `${botname}`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} secs*`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [{
                                urlButton: {
                                displayText: 'Group Wa 🍓',
url: `${global.linkz}`
                                }
                            }, {
quickReplyButton: {
displayText: 'Bot Status 🚀',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Menu 🐰',
id: 'menu'
}  
}, {
quickReplyButton: {
displayText: 'Owner 😈',
id: 'owner'
}
}]
                    let media = await Akabot.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                    Akabot.sendMessage(i, { sticker: { url: media } }, { quoted: ftroli })
                    } else if (/image/.test(mime)) {
                    let DGXeon = `*「 ${global.ownername}'s Broadcast」*${text ? '\n\n' + text : ''}`
                    Akabot.send5ButImg(i, DGXeon, `${global.botname}`, buffer, butoon)
                    } else if (/video/.test(mime)) {
                    let DGXeon = `*「 ${global.ownername}'s Broadcast」*${text ? '\n\n' + text : ''}`
                    Akabot.sendMessage(i, {video: buffer, caption: `${DGXeon}`}, { quoted: ftroli })
                    } else if (/audio/.test(mime)) {
                    Akabot.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : ftroli })
                    } else {
                    reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
                    }
                    await fs.unlinkSync(media)
                    }
                reply(` *Send Broadcast To* ${anu.length} *Chats*`)
            }
            break
case prefix+'bcloc': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!isCreator) return replay(mess.owner)
                if (!text) return reply(`Use ${prefix}bcloc text\n\nExample : ${prefix + command} attention everybody`)
                let anu = await store.chats.all().map(v => v.id)
                let [melo, melo2] = text.split`|`
                reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} sec`)
	     	for (let yoi of anu) {
	     	await sleep(1500)
		    var button = [{ buttonId: `${prefix}ho`, buttonText: { displayText: `${melo2}` }, type: 1 }]              
            Akabot.sendMessage(yoi, { caption: `${melo}`, location: { jpegThumbnail: await getBuffer(picak+`${ownername}'s Broadcast`) }, buttons: button, footer: `${botname}`, mentions: [m.sender] })
		}		
            }
            break
            case prefix+'public': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                Akabot.public = true
                reply('Successful Change To Public Usage')
            }
            break
            case prefix+'self': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                Akabot.public = false
                reply('Successful Change To Self Usage')
            }
            break
            case prefix+'setmenu': {
                          if (isBan) return reply(mess.ban)
              if (isBanChat) return reply(mess.banChat)
                      if (!isCreator) return reply(mess.owner)
                      let setbot = db.settings[botNumber]
                         if (args[0] === 'templateImage'){
                          setbot.templateImage = true
                          setbot.templateVideo = false
                          setbot.templateGif = false
                          setbot.templateMsg = false
                          setbot.templateDocument = false
                          reply(mess.success)
                          } else if (args[0] === 'templateVideo'){
                          setbot.templateImage = false
                          setbot.templateVideo = true
                          setbot.templateGif = false
                          setbot.templateMsg = false
                          setbot.templateLocation = false
                          reply(mess.success)
                          } else if (args[0] === 'templateGif'){
                          setbot.templateImage = false
                          setbot.templateVideo = false
                          setbot.templateGif = true
                          setbot.templateMsg = false
                          setbot.templateDocument = false
                          reply(mess.success)
                          //} else if (args[0] === 'templateMessage'){
                          /////setbot.templateImage = false
                          /////setbot.templateVideo = false
                          /////setbot.templateGif = false
                          /////setbot.templateMsg = true
                          //////setbot.templateDocument = false
                          //////reply(mess.success)
                          } else if (args[0] === 'templateDocument'){
                          setbot.templateImage = false
                          setbot.templateVideo = false
                          setbot.templateGif = false
                          setbot.templateMsg = false
                          setbot.templateDocument = true
                          reply(mess.success)
                          } else {
                          let sections = [
                          {
                          title: "😛CHANGE BOT MENU😛",
                          rows: [
                          {title: "Image Menu", rowId: `setmenu templateImage`, description: `Tap to change bot menu to Image Menu`},
                          {title: "Gif Menu", rowId: `setmenu templateGif`, description: `Tap to change bot menu to Gif Menu`},
                          {title: "Video Menu", rowId: `setmenu templateVideo`, description: `Tap to change bot menu to Video Menu`},
                          ///////////////{title: "Text Menu", rowId: `setmenu templateMessage`, description: `Tap to change bot menu to Text Menu`},
                          {title: "Document Menu", rowId: `setmenu templateDocument`, description: `Tap to change bot menu to Document Menu`}
                          ]
                          },
                          ]
                          Akabot.sendListMsg(m.chat, `Please select the menu you want to change!`, ` `, Akabot.user.name, `Click Here`, sections, m)
                          }
                      }
                      break
                      
            case prefix+'setexif': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
               if (!isCreator) return replay(`${mess.owner}`)
               if (!text) return replay(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif Has Been Successfully Changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
//------------------------------------

//-----------< Group Menu >-----------
case prefix+'getpp': {
    if (isBan) return reply(mess.ban)	 			
    if (isBanChat) return reply(mess.banChat)
    if (!m.isGroup) return replay(mess.group)
    if (qtod === "true") {
  try {
  pporg = await Akabot.profilePictureUrl(m.quoted.sender, 'image')
  } catch {
  pporg = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
  }
  Akabot.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
  } else if (qtod === "false") {
  try {
  pporgs = await Akabot.profilePictureUrl(from, 'image')
  } catch {
  pporgs = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
  }
  Akabot.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
  }
  }
  break
	    case prefix+'afk': {
            if (isBan) return reply(mess.ban)	 			
    if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
                    let user = global.db.users[m.sender]
                    user.afkTime = + new Date
                    user.afkReason = text
                    reply(`${m.pushName} Has Gone Afk/Offline${text ? ': ' + text : ''}`)
                }
                break	
case prefix+'resetlinkgc':
case prefix+'resetlinkgroup':
case prefix+'resetlinkgrup':
case prefix+'revoke':
case prefix+'resetlink':
case prefix+'resetgrouplink':
case prefix+'resetgclink':
case prefix+'resetgruplink': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
Akabot.groupRevokeInvite(m.chat)
}
break        
case prefix+'kick': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(`${mess.group}`)
if (!isBotAdmins) return replay(`${mess.botAdmin}`)
if (!isAdmins) return replay(`${mess.admin}`)
if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
reply(`1 limit terpakai\nlimit kamu Sekarang : ${getLimit(m.sender)}`) 
   // if (!isCreator) return reply('Banyak yang usil!!!')
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    await Akabot.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(mess.error)))
}
break
case prefix+'add': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(`${mess.group}`)
if (!isBotAdmins) return replay(`${mess.botAdmin}`)
if (!isAdmins) return replay(`${mess.admin}`)
if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
reply(`1 limit terpakai\nlimit kamu Sekarang : ${getLimit(m.sender)}`) 
 // if (!isCreator) return reply('Banyak yang usil!!!')
    if (text.includes('+')) return reply(`Jangan Menggunakan Ini '+' `)
    if (text.includes('-')) return reply(`Jangan Menggunakan Ini '-' `)
    if (text.includes('08')) return reply(`Jangan Menggunakan Ini '08', Gunakan '62'`)
    let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    await Akabot.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(mess.error)))
}
break
case prefix+'promote': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(`${mess.group}`)
if (!isBotAdmins) return replay(`${mess.botAdmin}`)
if (!isAdmins) return replay(`${mess.admin}`)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    await Akabot.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(mess.error)))
}
break
case prefix+'demote': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
    if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) return replay(`${mess.admin}`)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    await Akabot.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(mess.error)))
}
break
    case prefix+'setname': case prefix+'setgcname': case prefix+'setsubject': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) replay(`${mess.admin}`)
            if (!text) replay(`Where Is The Text?`)
            await Akabot.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(mess.error)))
        }
        break
      case prefix+'setdesc': case prefix+'setdescription': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) replay(`${mess.admin}`)
            if (!text) replay(`Where Is The Text?`)
            await Akabot.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(mess.error)))
        }
        break
       case prefix+'setgrouppp': case prefix+'setgruppp': case prefix+'setgcpp': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isAdmins) return replay(`${mess.admin}`)
            if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
            if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
            if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
            let media = await Akabot.downloadAndSaveMediaMessage(quoted)
            await Akabot.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
            reply(mess.success)
            }
            break
        case prefix+'tagall': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) return replay(`${mess.admin}`)
let teks = `╚»˙·٠•● Tag All ●•٠·˙«╝ 

➲ *Message : ${q ? q : 'no message'}*\n\n`
            for (let mem of participants) {
            teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
            }
            Akabot.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
            }
            break
            case prefix+'hidetag': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(`${mess.group}`)
if (!isBotAdmins) return replay(`${mess.botAdmin}`)
//if (!isAdmins) return replay(`${mess.admin}`)
        Akabot.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m })
        }
        break
        case prefix+'group': case prefix+'grup': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(`${mess.group}`)
if (!isBotAdmins) return replay(`${mess.botAdmin}`)
if (!isAdmins) return replay(`${mess.admin}`)
         if (args[0] === 'close'){
             await Akabot.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(mess.error)))
         } else if (args[0] === 'open'){
             await Akabot.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(mess.error)))
         } else {
         let buttons = [
                 { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                 { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
             ]
             await Akabot.sendButtonText(m.chat, buttons, `Group Mode`, Akabot.user.name, m)

      }
     }
     break
     case prefix+'editinfo': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
         if (!m.isGroup) return replay(`${mess.group}`)
         if (!isBotAdmins) return replay(`${mess.botAdmin}`)
         if (!isAdmins) return replay(`${mess.admin}`)
      if (args[0] === 'open'){
         await Akabot.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(mess.error)))
      } else if (args[0] === 'close'){
         await Akabot.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Edit Group Info`)).catch((err) => reply(jsonformat(mess.error)))
      } else {
      let buttons = [
                 { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                 { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
             ]
             await Akabot.sendButtonText(m.chat, buttons, `Mode Edit Info`, Akabot.user.name, m)

     }
     }
     break
      case prefix+'mute': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
         if (!m.isGroup) return replay(`${mess.group}`)
         if (!isBotAdmins) return replay(`${mess.botAdmin}`)
         if (!isAdmins) return replay(`${mess.admin}`)
         if (args[0] === "on") {
         if (db.chats[m.chat].mute) return reply(`Previously Active`)
         db.chats[m.chat].mute = true
         reply(`${Akabot.user.name} Has Been Muted In This Group !`)
         } else if (args[0] === "off") {
         if (!db.chats[m.chat].mute) return reply(`Previously Inactive`)
         db.chats[m.chat].mute = false
         reply(`${Akabot.user.name} Has Been Unmuted In This Group!`)
         } else {
          let buttons = [
                 { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                 { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
             ]
             await Akabot.sendButtonText(m.chat, buttons, `Mute Bot`, Akabot.user.name, m)
         }
      }
      break
     case prefix+'linkgroup': case prefix+'linkgc': case prefix+'gclink': case prefix+'grouplink': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)

         if (!m.isGroup) return replay(`${mess.group}`)
         if (!isBotAdmins) return replay(`${mess.botAdmin}`)
         if (!isAdmins) return replay(`${mess.admin}`)
         let response = await Akabot.groupInviteCode(m.chat)
         Akabot.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
     }
     break
     case prefix+'ephemeral': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
         if (!m.isGroup) replay(`${mess.group}`)
         if (!isBotAdmins) return replay(`${mess.botAdmin}`)
         if (!isAdmins) return replay(`${mess.admin}`)
         if (!text) return replay(`Enter The enable/disable Values`)
         if (args[0] === 'enable') {
             await Akabot.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(mess.error)))
         } else if (args[0] === 'disable') {
             await Akabot.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(mess.success))).catch((err) => reply(jsonformat(mess.error)))
         }
     }
     break
case prefix+'grupsetting':
     case prefix+'groupsetting':{
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(`${mess.group}`)
if (!isBotAdmins) return replay(`${mess.botAdmin}`)
if (!isAdmins) return replay(`${mess.admin}`)
             let sections = []
             let com = [`group open`,`autosticker on`,`welcome on`,`antilinkgc on`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`,`antitoxic on`,`antivirus on`,`autoreply on`,`group open`]
             let comm = [`group close`,`autosticker off`,`welcome off`,`antilinkgc off`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`,`antitoxic on`,`antivirus on`,`autoreply on`,`group close`]
             let listnya = [`Group open/close`,`Auto-Sticker on/off`,`Welcome/Left on/off`,`Antilink Group on/off`,`Antilink Telegram on/off`,`Antilink Tiktok on/off`,`Antilink Youtube Channel on/off`,`Antilink Youtube Video on/off`,`Antilink Instagram on/off`,`Antilink Facebook on/off`,`Antilink Twitter on/off`,`Antilink All on/off`,`Anti Wame on/off`,`Anti Toxic on/off`,`Anti Virus on/off`,`Auto Reply on/off`,`Group open/close`]
             let suruh = [`Enable`, `Disable`]
             let fiturname = [`Group`,`Auto Sticker`,`Welcome`,`Antilink Group`,`Antilink Telegram`,`Antilink Tiktok`,`Antilink Youtube Channel`,`Antilink Youtube Video`,`Antilink Instagram`,`Antilink Facebook`,`Antilink Twitter`,`Antilink All`,`Anti Wame`,`Anti Toxic`,`Anti Virus`,`Auto Reply`,`Group`]
             let startnum = 0; let startnu = 0; let startn = 0;let start = 0
             let startnumm = 1
             for (let x of com) {
                 const yy = {title: `${listnya[startnum++]}`,
             rows: [
                {
                 title: `${suruh[0]}`,
                 description: `Activate ${fiturname[startnu++]}`,
                 rowId: `${prefix}${x}`
               },{
                 title: `${suruh[1]}`,
                 description: `Deactivate ${fiturname[startn++]}`,
                 rowId: `${prefix}${comm[start++]}`
               }
             ]
            }
                 sections.push(yy)
             }
             const sendm =  Akabot.sendMessage(
from, 
{
text: "Group Settings",
footer: botname,
title: "Set your group settings here......",
buttonText: "Click Button",
sections
}, { quoted : m }
)  
}
break

     case prefix+'delete': case prefix+'del': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
         if (!m.quoted) reply(false)
         let { chat, fromMe, id, isBaileys } = m.quoted
         if (!isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
         Akabot.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
     }
     break
case prefix+'chatinfo': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.quoted) replay('Reply Message')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return replay('The message was not sent by a bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += ` @${i.userJid.split('@')[0]}\n`
teks += ` ┗━ *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
}
Akabot.sendTextWithMentions(m.chat, teks, m)
}
break
case prefix+'listonline': case prefix+'listaktif': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.isGroup) return replay(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    Akabot.sendText(m.chat, 'List Online:\n\n' + online.map(v => '➣ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
break
//------------------------------------

//----------< Database Menu >---------
            case prefix+'setcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                if (!text) return reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return reply(`You Have No Permission To Change This Sticker Command`)
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case prefix+'delcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No Hashes`)
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return reply(`You Have No Permission To Delete This Sticker Command`)
                delete global.db.sticker[hash]
                reply(`Done!`)
            }
            break
            case prefix+'listcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                Akabot.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case prefix+'lockcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) return reply(`Hash Not Found In Database`)
                global.db.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case prefix+'addmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
                if (!text) return reply(`Example : ${prefix + command} File Name`)
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}

View List Of Messages With ${prefix}listmsg`)
            }
            break
            case prefix+'getmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                Akabot.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case prefix+'listmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case prefix+'delmsg': case prefix+'deletemsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		reply(`Delete Successfully '${text}' From The Message list`)
            }
	    break
//-----------------------------------

//---------< Search Menu >-----------
case prefix+'ssweb':
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
        if (!q) return reply(`Penggunaan :\n*${prefix}ssweb* hp/tablet/pc link`)
        if (!args[1]) return reply("Linknya mana kak?")
        reply(mess.wait)
        if (args[0].toLowerCase() === 'hp'){
            try {
                var buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/ssweb?url=${args[1]}&device=phone&full=on`)
                Akabot.sendMessage(from, {image: buffer, caption:"Succes", contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./AkaMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, {quoted:m})
                } catch {
                    reply("Linknya Error")
                }
        } else if (args[0].toLowerCase() === 'tablet'){
            try {
                var buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/ssweb?url=${args[1]}&device=tablet&full=on`)
                Akabot.sendMessage(from, {image: buffer, caption:"Succes", contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./AkaMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, {quoted:m})
                } catch {
                    reply("Linknya Error")
                }
        } else if (args[0].toLowerCase() === 'pc'){
                try {
                   var buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/ssweb?url=${args[1]}&device=desktop&full=on`)
                    Akabot.sendMessage(from, {image: buffer, caption:"Succes", contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./AkaMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, {quoted:m})
                } catch {
                    reply("Linknya Error")
                }
              } else {
            reply(`Penggunaan :\n*${prefix}ssweb* hp/tablet/pc link`)}
          break
case prefix+'couplepp':  case prefix+'ppcouple': case prefix+'ppcp': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
         reply(mess.wait)
         let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
         let random = anu[Math.floor(Math.random() * anu.length)]
         Akabot.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male🙎🏻‍♂️` }, { quoted: m })
         setTimeout( () => {
         Akabot.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female🙎🏻‍♀️` }, { quoted: m })
            }, 2000)
     }
 break
case prefix+'pinterest': case prefix+'pinterest1': case prefix+'pin': {
   if (isBan) return reply(mess.ban)	 			
   if (isBanChat) return reply(mess.banChat)
   if (!args.join(" ")) return reply("What picture are you looking for?")
   hx.pinterest(args.join(" ")).then(async(res) => {
   imgnyee = res[Math.floor(Math.random() * res.length)]
   Akabot.sendMessage(m.chat, { image: { url: imgnyee }, caption: `${global.themeemoji} Title : ` + args.join(" ") + `\n${global.themeemoji} Media Url : `+imgnyee }, { quoted: m })
   }).catch ((err) => {
   reply("Error")
   Laporerr(err)
   })
   }
   break
//-----------------------------------

//---------< Sticker Menu >-----------

case prefix+'patrick':
case prefix+'patricksticker': {
	 if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    if (!isRegistered) return reply(mess.register)
    if (isAspam) return reply(mess.anspam)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Akabot.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
         case prefix+'attp': {
            if (isBan) return reply(mess.ban)
        if (isBanChat) return reply(mess.banChat)
        if (!isRegistered) return reply(mess.register)
        if (isAspam) return reply(mess.anspam)
        if (!q) return reply(`Mana Teksnya?`)
   reply(mess.wait)
         const buff = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
         Akabot.sendVideoAsSticker(from, buff, m, { packname: global.packname, author: global.author })
       }
         break
         case prefix+'ttp': {
            if (isBan) return reply(mess.ban)
        if (isBanChat) return reply(mess.banChat)
        if (!isRegistered) return reply(mess.register)
        //if (isAspam) return reply(mess.anspam)
        //if (!q) return reply(`Mana Teksnya?`)
   reply(mess.wait)
             var teksnya = encodeURIComponent(q) ? encodeURIComponent(q) : 'Mana Teksnya?'
       const buff = await (`http://zekais-api.herokuapp.com/text2png?text=${teksnya}&color=white&apikey=IsAr5wp8`)
         //const buff = await (`http://hadi-api.herokuapp.com/api/canvas/ttp?text=${encodeURIComponent(q)}`)
       //sock.sendMessage(m.chat, {sticker: buff, contextInfo: { "externalAdReply": { "title" : global.namebot, "mediaType" : 1, "renderLargerThumbnail" : false, "showAdAttribution": true, "mediaUrl": global.linkgrupss, "thumbnail": di, "sourceUrl" : global.linkgrupss }}}, {quoted: m})
       encmedia = await Akabot.sendImageAsSticker(from, buff, m, { packname: global.packname, author: global.author}, {quoted: m})
       await fs.unlinkSync(encmedia)
     }
       break
case prefix+'dogesticker':
case prefix+'dogestick':
	case prefix+'doge':{
        if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    if (!isRegistered) return reply(mess.register)
    if (isAspam) return reply(mess.anspam)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Akabot.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case prefix+'lovesticker':
case prefix+'lovestick' :{
	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    if (!isRegistered) return reply(mess.register)
    if (isAspam) return reply(mess.anspam)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Akabot.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case prefix+'gura':
case prefix+'gurastick':{
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Akabot.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case prefix+'emojimix': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!q) throw `*Example :* ${command} 😅+🤔`
if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
reply(`1 limit terpakai\nlimit kamu Sekarang : ${getLimit(m.sender)}\n${mess.wait}`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await Akabot.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.packname2, categories: res.tags})
await fs.unlinkSync(encmedia)
}
}
break
            case prefix+'sticker': case prefix+'s': case prefix+'stickergif': case prefix+'sgif': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Akabot.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await Akabot.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case prefix+'swm': case prefix+'take': case prefix+'stickerwm': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!m.quoted) return reply(`Send/Reply Photo/video/sticker With Caption ${prefix + command} *kamu tuh|Jomblo akut*`)
if (!args.join(" ")) return reply(`Example :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
 let media = await Akabot.downloadAndSaveMediaMessage(quoted)
  Akabot.sendMessage(from, {sticker: media, packname: pcknm, author: atnm },{quoted:m})
 } else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Akabot.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await Akabot.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case prefix+'smeme': case prefix+'stickermeme': case prefix+'stickmeme': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let { TelegraPh } = require('./lib/uploader')
if (!m.quoted) return reply(`Reply Photo With Caption ${command} *kamu tuh|Jomblo akut*`) 
swn = args.join(" ")
   atnm = swn.split("|")[0];
   pcknm = swn.split("|")[1];
    let atnmm = atnm ? atnm : ' '
    let pcknmm = pcknm ? pcknm : ' '
reply(mess.wait)
    if (/image/.test(mime)) {
   let media = await Akabot.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
meme = await getBuffer(`https://api.memegen.link/images/custom/${atnmm}/${pcknmm}.png?background=${mem}`)
let memek = await Akabot.sendVideoAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
   let media = await Akabot.downloadAndSaveMediaMessage(quoted)
 mem = await UploadFileUgu(media)
meme = `https://api.memegen.link/images/custom/${atnmm}/${pcknmm}.png?background=${mem}`
let memek = await Akabot.sendVideoAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
}
break
//------------------------------------

//-----------< Maker Menu >------------
case prefix+'jail': case prefix+'pixelate': case prefix+'blur': case prefix+'imagesketch': case prefix+'triggeredwebp': case prefix+'shit': case prefix+'burn': case prefix+'invert': case prefix+'wanted': case prefix+'rip': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await Akabot.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/${command}?url=${anu}`)
                Akabot.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case prefix+'gayeffect': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await Akabot.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/gay?url=${anu}`)
                Akabot.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case prefix+'deleteeffect': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await Akabot.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/delete?url=${anu}`)
                Akabot.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case prefix+'framed': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await Akabot.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/fotojatoh?url=${anu}`)
                Akabot.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case prefix+'beautifuleffect': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await Akabot.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/beautiful?url=${anu}`)
                Akabot.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
            case prefix+'readmore': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
                if (!text) return reply(`Example : ${prefix + command} halo gaes`)
                anu = await fetchJson(`https://cililitan.herokuapp.com/api/readmore?teks=${text}`)
               reply(`${anu.result}`)
            }
            break
case prefix+'toviewonce': case prefix+'toonce': { 
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
        if (!quoted) return reply(`Reply image`)
        if (/image/.test(mime)) {
anu = await Akabot.downloadAndSaveMediaMessage(quoted)
Akabot.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: m })
        } else if (/video/.test(mime)) {
        anu = await Akabot.downloadAndSaveMediaMessage(quoted)
        Akabot.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
        }
        }
        break
//------------------------------------

//-----------< Anime Menu >------------
case prefix+'waifu': case prefix+'loli':
					   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					Akabot.sendImage(m.chat, data.url, mess.success, m)
					})
					break
//-------------------------------------

//-----------< Download Menu >------------
case prefix+'soundcloud': case prefix+'scdl': { 
    msgFilter.addFilter(m.sender, 10000)    
   if (isBan) return reply(mess.ban)	 			
   if (isBanChat) return reply(mess.banChat)
   if (!isRegistered) return reply(mess.register)       
    if (!text) return reply(mess.linkm)
    if (!isUrl(args[0]) && !args[0].includes('soundcloud.com')) return reply(`*Not a soundcloud link*`)
    if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
    kurangLimit(m.sender, 1)
    reply(`1 limit terpakai\nlimit kamu Sekarang : ${getLimit(m.sender)}\n${mess.wait}`) 
    xeonkey.SoundCloud(`${text}`).then(async (data) => {
        let txt = `*SOUNDCLOUD DOWNLOADER*\n\n`
        txt += `*${themeemoji}Title :* ${data.title}\n`
        txt += `*${themeemoji}Quality :* ${data.medias[0].quality}\n`
        txt += `*${themeemoji}Type :* ${data.medias[0].extension}\n`
        txt += `*${themeemoji}Size :* ${data.medias[0].formattedSize}\n`
        txt += `*${themeemoji}Url Source :* ${data.url}\n\n`
        txt += `*${botname}*`
    buf = await getBuffer(data.thumbnail)   
    Akabot.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => reply(mess.error))    
    Akabot.sendMessage(m.chat, { audio: { url: data.medias[0].url }, mimetype: 'audio/mpeg', fileName: data.title+'.m4a' }, { quoted: m })
    }).catch((err) => {
        reply(mess.error)
        Laporerr(err)
    })
}
break
case prefix+'zippyshare': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('zippyshare.com')) return reply(`The link is not a zippyshare link`)
if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
reply(`1 limit terpakai\nlimit kamu Sekarang : ${getLimit(m.sender)}\n${mess.wait}`) 
anu = await fetchJson(`https://violetics.pw/api/downloader/zippyshare?apikey=df7d-425a-3bc8&url=${text}`)
m.reply(`*${util.format(anu)}*`)
linkyke = await getBuffer(anu.result.dlink)
Akabot.sendMessage(m.chat, {document: linkyke, mimetype: 'application/zip', fileName: `${anu.result.filename}`}, {quoted:m}).catch ((err) => reply(mess.error))     
}
break
case prefix+'savefrom': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
  if (!text) return m.reply(`Failed to download media and send audio ${prefix + command} url link`) 
  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is invalid`)
  if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
  kurangLimit(m.sender, 1)
  reply(`1 limit terpakai\nlimit kamu Sekarang : ${getLimit(m.sender)}\n${mess.wait}`) 
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data.url) {
  const list = {title: `${i.type}`,
  rows: [
	    {
	     title: `Quality ${i.subname}`, 
	     rowId: `${prefix}get ${text}`,
      description: `${data.hosting}`	     
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  Akabot.sendMessage(
      m.chat, 
      {
       text: `${data.meta.title} *Here is the list of videos, click the button below to choose*`,
       footer: `${botname}`,
       title: "*SAVE FROM*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    reply(mess.error)
                    Laporerr(err)
                })
            }
            break
            
case prefix+'mediafire': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
reply(`1 limit terpakai\nlimit kamu Sekarang : ${getLimit(m.sender)}\n${mess.wait}`) 
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 500) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
Akabot.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
case prefix+'igdl': case prefix+'ig': case prefix+'igvideo': case prefix+'igimage': case prefix+'igreels':case prefix+'instagram': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!args[0]) return reply(mess.linkm)
    if (!isUrl(args[0])) return reply(`Itu Bukan Link`)
    if (!args[0].includes('instagram.com')) return reply(`The link you provided is invalid`)
    if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
    kurangLimit(m.sender, 1)
    reply(`1 limit terpakai\nlimit kamu Sekarang : ${getLimit(m.sender)}\n${mess.wait}`) 
    const options = {
        method: 'GET',
        url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php',
        params: {url: args[0]},
        headers: {
          'X-RapidAPI-Key': global.rapidkey,
          'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        console.log(response.data);
          
          
       //let linck = response.data.video
       let linck = response.data.video ? response.data.video : response.data.image
       let linckk = response.data.image
       let desksz = response.data.caption
      if (linck.includes("webp")){
        Akabot.sendMessage(from, { image: { url : linck }, caption: `Caption : ${desksz}`}, { quoted: m } )
      } else 
        if (linck.includes("mp4")){
        Akabot.sendMessage(from, { video: { url : linck }, caption: `Caption : ${desksz}`}, { quoted: m } )
       } else
      if (linck.includes("jpg")){
        Akabot.sendMessage(from, { image: { url : linck }, caption: `Caption : ${desksz}`}, { quoted: m } )
      }
      }).catch(function (error) { 
            console.error(error);
            Laporerr(error)
            reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
        });
}
    break
    case prefix+'fbdl': case prefix+'fb': case prefix+'facebook': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
    if (!text) return reply(mess.linkm)
        if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is invalid`)
        if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
        kurangLimit(m.sender, 1)
        reply(`1 limit terpakai\nlimit kamu Sekarang : ${getLimit(m.sender)}\n${mess.wait}`) 
          var options = {
      method: 'POST',
      url: 'https://facebook17.p.rapidapi.com/api/facebook/links',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': global.rapidkey,
        'X-RapidAPI-Host': 'facebook17.p.rapidapi.com'
      },
      data: {"url": args[0]}
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
           let hacho = response.data.url[0].url
           let aerrors = response.data.message
           let desksz = `Success`
          if (hacho.includes("mp4")){
            Akabot.sendMessage(from, { video: { url : hacho }, caption: desksz}, { quoted: m } )
           } else 
          if (hacho.includes("jpg")){
            Akabot.sendMessage(from, { image: { url : hacho }, caption: desksz}, { quoted: m } )
          } else
           if (aerrors.includes('The given data was invalid.')){
               teks = `Linknya Rusak Atau Private`
               Akabot.sendMessage(from, { text: teks}, { quoted: m } )
           }
          }).catch(function (error) { 
                console.error(error);
                Laporerr(error)
                reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
            });
    }
        break
        case prefix+'tt': case prefix+'ttnowm': case prefix+'ttdl': case prefix+'tiktok': case prefix+'tiktokaudio': case prefix+'tiktokvideo': case prefix+'ttmp4': case prefix+'ttmp3': case prefix+'tiktoknowm':{
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
        if (!text) return reply(mess.linkm)
            if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(`The link you provided is invalid`)
            if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
            kurangLimit(m.sender, 1)
            reply(`1 limit terpakai\nlimit kamu Sekarang : ${getLimit(m.sender)}\n${mess.wait}`) 
            ikyy.downloader.tiktok(args[0]).then(function (res) {
              console.log(res)
              const musim_duren_as = res.result.video.nowm.video_url
              teks = `Author : ${res.author}\nDescription : ${res.desc}`
              Akabot.sendMessage(from, { video: { url: musim_duren_as }, caption: `Author : ${res.author}\nDescription : ${res.desc}\n\nAudionya Dikirim Ke Pesan Pribadi Kamu` }, { quoted: m })
              setTimeout( () => {
              Akabot.sendMessage(m.sender, { audio: { url: musim_duren_as }, mimetype: 'audio/mp4' }, { quoted: m })
              }, 2000)
            }).catch(function (error) { 
                console.error(error);
                reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
                Laporerr(error)
            });
          }
break
          case prefix+'play': case prefix+'ytplay':
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
reply(`1 limit terpakai\nlimit kamu Sekarang : ${getLimit(m.sender)}\n${mess.wait}`) 
let res = await yts(text).catch(function (error) { 
  console.error(error);
  reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
});
//let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
teks = `*| YOUTUBE PLAY |*

*😹 Title :* ${res.all[0].title}
*😸 ID Video :* ${res.all[0].videoId}
*😻 Views :* ${res.all[0].views}
*😼 Durasi :* ${res.all[0].timestamp}
*😿 Diupload Pada :* ${res.all[0].ago}
*😽 Author :* ${res.all[0].author.name}
*😽 Link Channel :* ${res.all[0].author.url}
*😾 Url :* ${res.all[0].url}
*🙀 Desc :* ${res.all[0].description}`

let buttons = [
{buttonId: `.playy mp4 ${res.all[0].url}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `.playy mp3 ${res.all[0].url}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]

let buttonMessage = {
image: { url: res.all[0].thumbnail },
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
Akabot.sendMessage(m.chat, buttonMessage, { quoted: m })
break

case prefix+'ytshorts': case prefix+'ytshort': case prefix+'shorts': {
msgFilter.addFilter(m.sender, 10000)
    if (isBan) return reply(mess.ban)	 			
 if (isBanChat) return reply(mess.banChat)
 if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
   if (!text) return reply(`*Use ${prefix + command} put yt shorts link*`)
   if (!isUrl(args[0]) && !args[0].includes('youtube')) return reply(`The link you provided is not valid`)
   if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
   kurangLimit(m.sender, 1)
   reply(`1 limit terpakai\nlimit kamu Sekarang : ${getLimit(m.sender)}\n${mess.wait}`) 
   const options = {
    method: 'GET',
    url: 'https://youtube-shorts-downloader.p.rapidapi.com/getVideo',
    params: {url: args[0]},
    headers: {
      'X-RapidAPI-Key': '463dbc2754msh0edcce776730996p15e089jsnb8a3a15ca92d',
      'X-RapidAPI-Host': 'youtube-shorts-downloader.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data)
   cap = `
 *YOUTUBE SHORTS*
 
 *${themeemoji}Tittle :* ${response.data.title}\n*${themeemoji}Author :* ${response.data.author}\n*${themeemoji}Desc :* ${response.data.desc}\n*${themeemoji}Durasi :* ${response.data.duration}\n*${themeemoji}View :* ${response.data.views}\n\n*${botname}*`
   buf = getBuffer(response.data.thumbnail_urls[3].url)
   Akabot.sendMessage(m.chat, { video: { url: response.data.video_url }, jpegThumbnail:buf, caption: cap }, { quoted: m })  
                 }).catch((err) => {
                     reply(mess.reply)
                     Laporerr(err)
                 })
             }
break
case prefix+'yts': case prefix+'ytsearch':     
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!args.join(" ")) return reply(`Example : ${command} dj 30 detik`)
if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
reply(`1 limit terpakai\nlimit kamu Sekarang : ${getLimit(m.sender)}\n${mess.wait}`) 
let search = await yts(args.join(" ")).catch(function (error) { 
  console.error(error);
  reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
});
        var sections = [];
           var urut = 1
           for (let i of search.all) {
            const list = {title: 'Youtube Search',
            rows: [
                {
                 title: `⭔ No : ${urut++} Video`, 
                 rowId: `.playy mp4 ${i.url}`,
                 description: `⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Video ID : ${i.videoId}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author}\n⭔ Url : ${i.url}`
                }, {
                 title: `⭔ No : ${urut++} Audio`, 
                 rowId: `.playy mp3 ${i.url}`,
                 description: `⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Video ID : ${i.videoId}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author}\n⭔ Url : ${i.url}`
                },
                ]
               }
               sections.push(list)   
           }
            var sendm10 =  Akabot.sendMessage(
                from, 
                {
                 text: `Berikut Yt Search`,
                 footer: global.namebot,
                 title: "[ Yt Search 🔎 ]",
                 buttonText: "Click and see search results➡️",
                 sections
                }, { quoted : m }
              ) 
break
case prefix+'playy':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (!text) return reply(mess.linkm)
if (!isUrl(args[1])) return reply(`Itu Bukan Link Youtube`)
reply(mess.wait) 
        if (args[0].toLowerCase() === 'mp4'){
    var mp4 = await fetchJson(`http://hadi-api.herokuapp.com/api/yt2/video?url=${args[1]}`)
    var ress = mp4.result.download_video
    Akabot.sendMessage(m.chat, { video: { url: ress }, mimetype: 'video/mp4', fileName: `${mp4.result.title}.mp4`, caption: `⭔ Title : ${mp4.result.title}\n⭔ Size : ${mp4.result.size}\n⭔ Resolusi : ${mp4.result.resolution}\n⭔ Type : ${mp4.result.ext}` }, { quoted: m })
        } else if (args[0].toLowerCase() === 'mp3'){
            var mp3 = await fetchJson(`http://hadi-api.herokuapp.com/api/yt2/audio?url=${args[1]}`)
            var ress = mp3.result.download_audio
    Akabot.sendMessage(m.chat, { audio: { url: ress }, mimetype: 'audio/mpeg', fileName: `${mp3.result.title}.mp3` }, { quoted: m })
                }
          break
case prefix+'ytdl': case prefix+'yt': case prefix+'youtube': case prefix+'ytmp4': case prefix+'ytmp3': {
            msgFilter.addFilter(m.sender, 10000)
            if (isBan) return reply(mess.ban)
            if (isBanChat) return reply(mess.banChat)
        if (!isRegistered) return reply(mess.register)
        if (isAspam) return reply(mess.anspam)
            if (!text) return reply(mess.linkm)
            if (!isUrl(args[0])) return reply(`Itu Bukan Link Youtube`)
            let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) return reply (`Mungkin Pesan Yang Anda Kirim Tidak Mengandung Link Yt`)
            if (isLimit < 2) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
            kurangLimit(m.sender, 1)
            reply(`1 limit terpakai\nlimit kamu Sekarang : ${getLimit(m.sender)}\n${mess.wait}`) 
           var quality = args[1] ? args[1] : '360p'
           var media = await ytv(args[0], quality)
            console.log(media)
            if (media.filesize >= 700000) return reply('File Melebihi Batas '+util.format(media))
            Akabot.sendMessage(from, { video: { url: media.dl_link },  mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${args[0]}\n⭔ Ext : MP4\n⭔ Resolusi : ${args[1] || '360p'}`}, { quoted: m })
            //var mp4 = await fetchJson(`http://hadi-api.herokuapp.com/api/yt2/video?url=${args[0]}`)
         //Akabot.sendMessage(m.chat, { video: { url: mp4.result.download_video }, mimetype: 'video/mp4', fileName: `${mp4.result.title}.mp4`, caption: `_Audio Akan Dikirim Ke Pesan Pribadi Kamu_\n\n⭔ Title : ${mp4.result.title}\n⭔ Size : ${mp4.result.size}\n⭔ Resolusi : ${mp4.result.resolution}\n⭔ Type : ${mp4.result.ext}` }, { quoted: m })
         //var mp3 = await fetchJson(`http://hadi-api.herokuapp.com/api/yt2/audio?url=${args[0]}`)
            //Akabot.sendMessage(m.sender, { audio: { url: mp3.result.download_audio }, mimetype: 'audio/mpeg', fileName: `${mp3.result.title}.mp3` }, { quoted: m })
        
            var quality = args[1] ? args[1] : '128kbps'
           var media = await yta(args[0], quality)
            console.log(media)
            if (media.filesize >= 700000) return reply('File Melebihi Batas '+util.format(media))
            Akabot.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
        }
        break
//----------------------------------------

        case prefix+'guess': {
    if (isBan) return reply(mess.ban)	 			
 if (isBanChat) return reply(mess.banChat)
 if (!args.join(" ")) return replay(`Example : ${prefix + command} song\n\nOption : \n1.song\n2. picture\n3. saying\n4. sentence\n5. lyrics\n6.food`)
 if (args[0] === "song") {
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
 let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 console.log(result)//hasil di tampilkan di cmd 
 let msg = await Akabot.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
 Akabot.sendText(m.chat, `What is the name of this song?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Answer: " + result.jawaban)
 Akabot.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess the song' }, type: 1 }], `Time has run out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
 delete tebaklagu[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'picture') {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 Akabot.sendImage(m.chat, result.img, `Please answer the question above\n\nDescription : ${result.deskripsi}\nTime : 60s`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Answer: " + result.jawaban)
 Akabot.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess the picture' }, type: 1 }], `Time has run out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`,`${global.botname}`, m)
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'word') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
 let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheWord.js')
 let result = anu[Math.floor(Math.random() * anu.length)]
 Akabot.sendText(m.chat, `Please answer the following question\n\n${result.soal}\nTime : 60s`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Answer: " + result.jawaban)
 Akabot.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `Time Out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'sentence') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
 let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheSentence.js')
 let result = anu[Math.floor(Math.random() * anu.length)]
 Akabot.sendText(m.chat, `Please answer the following question\n\n${result.soal}\nTime : 60s`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Answer: " + result.jawaban)
 Akabot.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess the Sentence' }, type: 1 }], `Time Out\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lyrics') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 Akabot.sendText(m.chat, `Fill the missing lyrics below : *${result.soal}*?\nTime : 60s`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Answer: " + result.jawaban)
 Akabot.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'guess saying') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 Akabot.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(60000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Answer: " + result.jawaban)
 Akabot.sendButtonText(m.chat, [{ buttonId: 'guess saying', buttonText: { displayText: 'Guess The Saying' }, type: 1 }], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
 delete caklontong[m.sender.split('@')[0]]
 delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
 }
 break	
        
//-----------< list Menu >------------
case prefix+'owner': case prefix+'creator': 	
if (isBanChat) return reply(mess.banChat)
reply(`Jika Ingin Bertanya Dengan Owner Silahkan \nKetik .tanya (apa yang mau ditanya)`)
    /*for (let x of global.ownerr) {
        Akabot.sendContact(from, x.split('@s.whatsapp.net')[0], `Owner Aka`, m)
        setTimeout( () => {
            reply(`itu No Owner\nKalo Ada Masalah Pada Bot Silahkan Hubungi Owner`)
                }, 2000)
       }*/
break
case prefix+'tanyaown':
    if (!isCreator) return ads(mess.owner)
  reply(`Success.. Tinggal Menunggu Jawaban`)
  if (!args.join(" ")) return reply(`Example :\n.tanyaown numberphone|pesan`)
   swn = args.join(" ")
   pcknm = swn.split("|")[1];
   atnm = swn.split("|")[0];
  teks1 = `Pesan : ${pcknm}`
  Akabot.sendMessage(`${atnm}@s.whatsapp.net`, {text: teks1, mentions:[m.sender]}), {quoted: m}
  break 
  case prefix+'tanya':
  reply(`Success.. Tinggal Menunggu Jawaban Owner`)
  if (!args.join(" ")) return reply(`Example :\n.tanya pesannya`)
  tnya = args.join(" ")
  teks1 = `Nomor : @${m.sender.split("@")[0]}\nPesan : ${tnya}`
  Akabot.sendMessage("62895704151428@s.whatsapp.net", {text: teks1, mentions:[m.sender]}, {quoted:m})
  break 
case prefix+'request': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!args.join(" ")) return replay(`Example : ${prefix + command} hello dev please add a downloader feature`)
teks = `*| REQUEST |*`
teks1 = `\n\nNumber : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSuccessfully sent to owner`
for (let i of owner) {
Akabot.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
Akabot.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
        case prefix+'bug': case prefix+'report': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
            if(!text) return reply(`Enter The Bug\n\nExample: ${command} Menu Error`)
            Akabot.sendMessage(`${owner}@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
        }
        break
case prefix+'ping': case prefix+'p': case prefix+'botstatus': case prefix+'statusbot': {
    if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
    const used = process.memoryUsage()
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
        return cpu
    })
    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total
        last.speed += cpu.speed / length
        last.times.user += cpu.times.user
        last.times.nice += cpu.times.nice
        last.times.sys += cpu.times.sys
        last.times.idle += cpu.times.idle
        last.times.irq += cpu.times.irq
        return last
    }, {
        speed: 0,
        total: 0,
        times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
    }
    })
    let timestamp = speed()
    let latensi = speed() - timestamp
    neww = performance.now()
    oldd = performance.now()
    respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
    `.trim()
    reply(respon)
}
break
case prefix+'speedtest': {
       if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python speed.py')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) reply(stdout)
if (stderr.trim()) reply(stderr)
}
}
break
/*case prefix+'alive': case prefix+'panel': case prefix+'list': case prefix+'menu': case prefix+'help': case prefix+'?': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
Akabot.sendMessage(from, { react: { text: `${global.reactmoji}`, key: m.key }})
                let btn = [{
                            urlButton: {
                                displayText: 'Group Wa 🍒',
                                url: `${global.linkz}`
                            }
                        }, {
                            quickReplyButton: {
                                displayText: 'All Menu 🍱',
                                id: 'allmenu'
                            }
                        }, {
                            quickReplyButton: {
                                displayText: 'List Menu 🍢',
                                id: 'command'
                            }  
                        }, {
                            quickReplyButton: {
                                displayText: 'Owner 🤣',
                                id: 'owner'
                            }
                        }]
                     let setbot = db.settings[botNumber]
                    if (setbot.templateImage) {
                    Akabot.send5ButImg(m.chat, menulist, global.botname, global.thumb, btn, global.thumb)
                    } else if (setbot.templateGif) {
                    Akabot.send5ButGif(m.chat, menulist, global.botname, global.vidmenu, btn, global.thumb)
                    } else if (setbot.templateVid) {
                    Akabot.send5ButVid(m.chat, anu, global.botname, global.vidmenu, btn, global.thumb)
                    } else if (setbot.templateVideo) {
                    Akabot.send5ButVid(m.chat, menulist, global.botname, global.vidmenu, btn, global.thumb)
                    /////////} else if (setbot.templateMsg) {
                    /////////Akabot.send5ButMsg(m.chat, menulist, global.botname, btn)
                    } else if (setbot.templateDocument) {
                    let buttonmenu = [
        { urlButton: { displayText: `YouTube 🍒`, url : `${websitex}` } },
        { urlButton: { displayText: `Script 🍜`, url: `${botscript}` } },
        { quickReplyButton: { displayText: `All Menu 🍱`, id: 'allmenu'} },
        { quickReplyButton: { displayText: `List Menu 🍢`, id: 'command'} },
        { quickReplyButton: { displayText: `Owner 🤣`, id: 'owner'} }
        ]
        Akabot.sendMessage(m.chat, { caption: menulist, document: fs.readFileSync('./AkaMedia/theme/cheems.xlsx'), mimetype: `${docs}`, fileName: `${ownername}`, templateButtons: buttonmenu, footer: `${botname}`, mentionedJid: [m.sender] })
                    }
                 }
        break
            case prefix+'command': {
                   if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            listMessage :{
                title: `Hi ${pushname}`,
                description: `Please Choose The Menu\n\n`,
                buttonText: "Menu",
                footerText: `${global.botname}`,
                listType: "SINGLE_SELECT",
                sections: [{
                            "title": "Initial Features Of Bot 🦄",
                            "rows": [
                                {
                                    "title": "Other ☕",
                                    "description": "Displays The List Of Other Features",
                                    "rowId": `${prefix}othermenu`
                                }
                            ]
                        },
                        {
                            "title": "Bot Features ❤️",
                            "rows": [
                                {
                                    "title": "All Menu 🥀",
                                    "description": "Displays The List Of All The Features!",
                                    "rowId": `${prefix}allmenu`
                                },
                                {
                                    "title": "Owner Menu 💠",
                                    "description": "Displays The List Of Owner Features",
                                    "rowId": `${prefix}ownermenu`
                                    },
                                {
                                    "title": "Group Menu ✨",
                                    "description": "Displays The List Of Main Features",
                                    "rowId": `${prefix}groupmenu`
                                    },
                                    {
                                    "title": "Maker Menu 🌈",
                                    "description": "Displays The List Of Logo Making Features",
                                    "rowId": `${prefix}indomenu`
                                },
                                {
                                    "title": "Sound Menu 🎵",
                                    "description": "Displays The List Of Sound Features",
                                    "rowId": `${prefix}soundmenu`
                                },
                                {
                                    "title": "Download Menu ↘️",
                                    "description": "Displays The List Of Download Features",
                                    "rowId": `${prefix}downloadmenu`
                                },
                                {
                                    "title": "Sticker Menu 🃏",
                                    "description": "Displays The List Of Sticker Features",
                                    "rowId": `${prefix}indomenu`
                                },
                                {
                                    "title": "Search Menu 🔎",
                                    "description": "Displays The List Of Searching Features",
                                    "rowId": `${prefix}searchmenu`
                                },
                                {
                                    "title": "Tool Menu ⚙️",
                                    "description": "Displays The List Of Tool Features",
                                    "rowId": `${prefix}toolmenu`
                                },
                                {
                                    "title": "Random Image Menu 🌆",
                                    "description": "Displays The List Of Random Image Features",
                                    "rowId": `${prefix}randomimagemenu`
                                },
                                {
                                    "title": "Image Effect Menu 🖼️",
                                    "description": "Displays The List Of Image Effect Features",
                                    "rowId": `${prefix}imageeffectmenu`
                                },
                                    {
                                        "title": "Anime Menu 😘",
                                    "description": "Displays The List Of Random Anime Features",
                                    "rowId": `${prefix}animemenu`
                                    },
                                    {
                                        "title": "Emote Menu 😀",
                                    "description": "Displays The List Of Emote Features",
                                    "rowId": `${prefix}emotemenu`
                                    },
                                    {
                                    "title": "Anime Sticker Menu ☺️",
                                    "description": "Displays The List Of Anime Sticker Features",
                                    "rowId": `${prefix}animestickermenu`
                                     },
                                {
                                    "title": "Nsfw Menu 🤓",
                                    "description": "Displays The List Of Nsfe Features",
                                    "rowId": `${prefix}nsfwmenu`
                                     },
                                    {
                                        "title": "Fun Menu 🕺",
                                    "description": "Displays The List Of Fun Features",
                                    "rowId": `${prefix}funmenu`
                                    },
                                    {
                                    "title": "Game Menu 🎮",
                                    "description": "Displays The List Of Game Features",
                                    "rowId": `${prefix}indomenu`
                                },
                                    {
                                        "title": "Convert Menu ⚒️",
                                    "description": "Displays The List Of Convert Features",
                                    "rowId": `${prefix}convertmenu`
                                    },
                                    {
                                        "title": "Database Menu ♻️",
                                    "description": "Displays The List Of Database Features",
                                    "rowId": `${prefix}databasemenu`
                                    },
                                    {
                                    "title": "Indo Menu  🦜",
                                    "description": "Displays The List Of Indo Features",
                                    "rowId": `${prefix}indomenu`
                                },
                                    {
                                        "title": "Horoscope Menu 🕊️",
                                    "description": "Displays The List Of Horoscope Features",
                                    "rowId": `${prefix}indohoroscopemenu`
                                    }
                            ]
                        },
                        {
                            "title": "Chat With Fellow Users 🌝",
                            "rows": [
                                {
                                    "title": "Anonymous Chat Menu 🙎🏻‍♂️",
                                    "description": "Displays The List Of Anonymous Chat Features",
                                    "rowId": `${prefix}anonymousmenu`
                                }
                            ]
                        },
                        {
                            "title": "Credit ©️",
                            "rows": [
                                {
                                    "title": "Thanks To ❤️",
                                    "description": "Displays The List Of Credit Of The Bot !!",
                                    "rowId": `${prefix}tqtt`
                                }
                            ]
                        }
                    ],
      listType: 1
            }
        }), {})
        Akabot.relayMessage(m.chat, template.message, { messageId: template.key.id })
        }
        break*/
case prefix+'allmenu': case prefix+'command': case prefix+'menu':
if (isBanChat) return reply(mess.banChat)	
var unicorn = await getBuffer(global.flaming+'All Menu')
teks = `┌─❑「 *𝗬𝗢𝗨𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡* 」
│   │
│   ├❏ _*𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲 : ${pushname}*_
│   ├❑ _*𝗡𝗼 : @${m.sender.split('@')[0]}*_
│   ├❑ _*𝗟𝗶𝗺𝗶𝘁 : ${getLimit(m.sender)}*_
│   ├❑ _*𝗨𝗮𝗻𝗴 : ${getMonay(m.sender)}*_
│   ├❑ _*𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds*_
│   ├❑ _*𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}*_
│   ├❑ _*𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${jumlahcmd}*_
│   └❑ _*𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 𝗧𝗼𝗱𝗮𝘆 : ${jumlahharian}*_
└────────────❑

┌───────❑「 Owner Menu」	
├❑ ${prefix}self
├❑ ${prefix}public
├❑ ${prefix}antitag
├❑ ${prefix}ban [add/del]
├❑ ${prefix}banchat [on/off]
├❑ ${prefix}join [link]
├❑ ${prefix}leavegc
├❑ ${prefix}setbio
├❑ ${prefix}block [user]
├❑ ${prefix}unblock [user]
├❑ ${prefix}bcgroup [text]
├❑ ${prefix}bcall [text]
├❑ ${prefix}bcimage [image]
├❑ ${prefix}bcvideo [video]
├❑ ${prefix}bcaudio [audio]
├❑ ${prefix}bcloc [text]
├❑ ${prefix}setppbot [image]
├❑ ${prefix}setexif
│
├───────❑「 Group Menu」
├❑ ${prefix}groupsetting
├❑ ${prefix}grouplink
├❑ ${prefix}ephemeral [option]
├❑ ${prefix}setgcpp [image]
├❑ ${prefix}setname [text]
├❑ ${prefix}setdesc [text]
├❑ ${prefix}group
├❑ ${prefix}botgroups
├❑ ${prefix}resetgrouplink
├❑ ${prefix}editinfo [option]
├❑ ${prefix}add [user]
├❑ ${prefix}kick [reply/tag]
├❑ ${prefix}hidetag [text]
├❑ ${prefix}tagall [text]
├❑ ${prefix}autosticker [on/off]
├❑ ${prefix}autostickerpc [on/off]
├❑ ${prefix}leveling [on/off]
├❑ ${prefix}antilinkgc [on/off]
├❑ ${prefix}antilinktg [on/off]
├❑ ${prefix}antilinktt [on/off]
├❑ ${prefix}antilinkytch [on/off]
├❑ ${prefix}antilinkytvid [on/off]
├❑ ${prefix}antilinkig [on/off]
├❑ ${prefix}antilinkfb [on/off]
├❑ ${prefix}antilinktwit [on/off]
├❑ ${prefix}antilinkall [on/off]
├❑ ${prefix}antivirus [on/off]
├❑ ${prefix}antitoxic [on/off]
├❑ ${prefix}antiwame [on/off]
├❑ ${prefix}nsfw [on/off]
├❑ ${prefix}promote [reply/tag]
├❑ ${prefix}demote [reply/tag]
├❑ ${prefix}react [reply emoji]
├❑ ${prefix}getpp [reply user]
│
├───────❑「 Download Menu」
├❑ ${prefix}instagram [url]
├❑ ${prefix}facebook [url]
├❑ ${prefix}twitter [url]
├❑ ${prefix}ytdl [url]
├❑ ${prefix}ytshort [url]
├❑ ${prefix}yts [query]
├❑ ${prefix}play [query]
├❑ ${prefix}tiktoknowm [url]
├❑ ${prefix}mediafire [url]
├❑ ${prefix}gitclone [repo link]
├❑ ${prefix}soundcloud [url]
├❑ ${prefix}zippyshare [url]
│
├───────❑「 Sticker Menu」
├❑ ${prefix}patrick
├❑ ${prefix}emojimix
├❑ ${prefix}attp
├❑ ${prefix}ttp
├❑ ${prefix}doge
├❑ ${prefix}gura
├❑ ${prefix}lovestick 
├❑ ${prefix}sticker [Reply Gambar/video]
├❑ ${prefix}smeme
├❑ ${prefix}swm
│
├───────❑「 Audio Menu」
├❑ ${prefix}bass
├❑ ${prefix}blown
├❑ ${prefix}deep
├❑ ${prefix}earrape
├❑ ${prefix}fast
├❑ ${prefix}fat
├❑ ${prefix}nihgtcore
├❑ ${prefix}reverse
├❑ ${prefix}robot
├❑ ${prefix}slow
├❑ ${prefix}smooth
├❑ ${prefix}tupai
├❑ ${prefix}volume
│
├───────❑「 Anonymous Menu」
├❑ ${prefix}anonymous
├❑ ${prefix}start
├❑ ${prefix}next
├❑ ${prefix}leave
│
├───────❑「 Search Menu」
├❑ ${prefix}pinterest
├❑ ${prefix}ppcp
│
├───────❑「 Database Menu」
├❑ ${prefix}setcmd
├❑ ${prefix}listcmd
├❑ ${prefix}delcmd
├❑ ${prefix}lockcmd
├❑ ${prefix}addmsg
├❑ ${prefix}listmsg
├❑ ${prefix}getmsg
├❑ ${prefix}delmsg
│
├───────❑「 Other Menu」
├❑ ${prefix}afk
├❑ ${prefix}readmore [text]
├❑ ${prefix}toviewonce
├❑ ${prefix}chatinfo
├❑ ${prefix}alive
├❑ ${prefix}speedtest
├❑ ${prefix}ping
├❑ ${prefix}owner
├❑ ${prefix}menu
├❑ ${prefix}delete
├❑ ${prefix}chatinfo
├❑ ${prefix}quoted
├❑ ${prefix}listpc
├❑ ${prefix}listgc
├❑ ${prefix}request
├❑ ${prefix}report [bug]
└─────────────────────❑`
Akabot.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
break
case prefix+'tqtt': 
   if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
reply(`Thanks to
LORD BUDDHA
Xeon (Me)
My family
And all friends who helped assemble this sexy script !!!`)
break
//------------------------------------

//--------< Convert Menu >--------
case prefix+'q': case prefix+'quoted': {
    if (isBan) return reply(mess.ban)	 			
 if (isBanChat) return reply(mess.banChat)
 if (!m.quoted) return replay('Reply Message!!')
 let wokwol = await Akabot.serializeM(await m.getQuotedObj())
 if (!wokwol.quoted) return replay('The message you replied to does not contain a reply')
 await wokwol.quoted.copyNForward(m.chat, true)
 }
 break
 case prefix+'listpc': {
    if (isBan) return reply(mess.ban)	 			
 if (isBanChat) return reply(mess.banChat)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
 let teks = `     「 Personal Chat List 」\n\nThere are ${anu.length} users using bot in personal chat`
 for (let i of anu) {
  teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`
 }
 Akabot.sendTextWithMentions(m.chat, teks, m)
 }
 break
 case prefix+'listgc': {
    if (isBan) return reply(mess.ban)	 			
 if (isBanChat) return reply(mess.banChat)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `     「 Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
 for (let i of anu) {
  let metadata = await Akabot.groupMetadata(i)
  if (metadata.owner === "undefined") {
  loldd = false
  } else {
  loldd = metadata.owner
  }
  teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
 }
 Akabot.sendTextWithMentions(m.chat, teks, m)
 }
 break
case prefix+'unduh':
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
        if (!q) return reply(`Penggunaan :\n*${prefix}unduh* mp4/jpg/mp3 link`)
        if (!args[1]) return reply("Linknya mana kak?")
        reply(mess.wait)
        if (args[0].toLowerCase() === 'mp4'){
            try {
                Akabot.sendMessage(from, {video:{url:args[1]}, caption:"Succes", contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./AkaMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, {quoted:m})
                } catch {
                    reply("Linknya Error")
                }
        } else if (args[0].toLowerCase() === 'jpg'){
            try {
                Akabot.sendMessage(from, {image:{url:args[1]}, caption:"Succes", contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./AkaMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, {quoted:m})
                } catch {
                    reply("Linknya Error")
                }
        } else if (args[0].toLowerCase() === 'mp3'){
                try {
                    Akabot.sendMessage(m.chat, {audio: {url:args[1]}, mimetype:'audio/mpeg',  contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./AkaMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, {quoted:m})
                } catch {
                    reply("Linknya Error")
                }
              } else {
            reply(`Penggunaan :\n*${prefix}unduh* mp4/jpg/mp3 link`)}
          break
case prefix+'ringtone': {
    if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
if (!text) return reply(`Where is the ringtone name noob?, Example : ${prefix + command} charlie puth`)
let { ringtone } = require('./lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
Akabot.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
}
break
case prefix+'tempo': {
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
var req = args.join(' ')
media = await Akabot.downloadAndSaveMediaMessage(quoted, "tempo")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Akabot.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Akabot.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
fs.unlinkSync(ran)
})
} else {
reply("Send video/audio")
}
}
break
case prefix+'volume': {
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
media = await Akabot.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
Akabot.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
Akabot.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
reply("Send video/audio")
}
}
break
   case prefix+'bass': case prefix+'blown': case prefix+'deep': case prefix+'earrape': case prefix+'fast': case prefix+'fat': case prefix+'nightcore': case prefix+'reverse': case prefix+'robot': case prefix+'slow': case prefix+'smooth': case prefix+'squirrel':
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
        try {
        let set
        if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
        if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
        if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
        if (/earrape/.test(command)) set = '-af volume=12'
        if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
        if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
        if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
        if (/reverse/.test(command)) set = '-filter_complex "areverse"'
        if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
        if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
        if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
        if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
        if (/audio/.test(mime)) {
        reply(mess.wait)
        let media = await Akabot.downloadAndSaveMediaMessage(quoted)
        let ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return reply(err)
        let buff = fs.readFileSync(ran)
        Akabot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
        fs.unlinkSync(ran)
        })
        } else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
        } catch (e) {
        reply(e)
        }
        break
        case prefix+'to':
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
         if (isBan) return reply(mess.ban)	 			
         if (isBanChat) return reply(mess.banChat)
        if (!m.quoted) return reply('Reply Image')
        if (!q) return reply(`Penggunaan :\n*${prefix}to* image/video/audio reply pesannya`)
        if (args[0].toLowerCase() === 'image'){
            try {
        if (!m.quoted) return reply('Reply sticker')
        if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${command}*`)
        reply(mess.wait)
        let media = await Akabot.downloadAndSaveMediaMessage(quoted)
        let ran = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
        fs.unlinkSync(media)
        if (err) throw err
        let buffer = fs.readFileSync(ran)
        Akabot.sendMessage(m.chat, { image: buffer}, { quoted: m })
        fs.unlinkSync(ran)
        })
                } catch {
                    reply("Linknya Error")
                }
        } else if (args[0].toLowerCase() === 'video'){
            try {
        if (!m.quoted) return reply('Reply sticker')
        if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${command}*`)
        reply(mess.wait)
        let media = await Akabot.downloadAndSaveMediaMessage(quoted)
        let webpToMp4 = await webp2mp4File(media)
        await Akabot.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }}, { quoted: m })
        await fs.unlinkSync(media)
                } catch {
                    reply("Linknya Error")
                }
        } else if (args[0].toLowerCase() === 'audio'){
                try {
        if (!m.quoted) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${command}`)
        if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${command}`)
        reply(mess.wait)
        let media = await quoted.download()
        let { toAudio } = require('./lib/converter')
        let audio = await toAudio(media, 'mp4')
        Akabot.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
                } catch {
                    reply("Linknya Error")
                }
              } else {
            reply(`Penggunaan :\n*${prefix}to* image/video/audio reply pesannya`)}
          break
        
        
        case prefix+'toimage': case prefix+'toimg': {
            if (isBan) return reply(mess.ban)	 			
         if (isBanChat) return reply(mess.banChat)
        if (!m.quoted) return reply('Reply Image')
        if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${command}*`)
        reply(mess.wait)
        let media = await Akabot.downloadAndSaveMediaMessage(quoted)
        let ran = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
        fs.unlinkSync(media)
        if (err) throw err
        let buffer = fs.readFileSync(ran)
        Akabot.sendMessage(m.chat, { image: buffer}, { quoted: m })
        fs.unlinkSync(ran)
        })
        }
        break
        case prefix+'tomp4': case prefix+'tovideo': {
            if (isBan) return reply(mess.ban)	 			
         if (isBanChat) return reply(mess.banChat)
        if (!m.quoted) return reply('Reply Image')
        if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${command}*`)
        reply(mess.wait)
        let media = await Akabot.downloadAndSaveMediaMessage(quoted)
        let webpToMp4 = await webp2mp4File(media)
        await Akabot.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }}, { quoted: m })
        reply(webpToMp4.result)
        await fs.unlinkSync(media)
        }
        break
        case prefix+'tomp3': case prefix+'toaudio': {
            if (isBan) return reply(mess.ban)	 			
         if (isBanChat) return reply(mess.banChat)
        if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${command}`)
        if (!m.quoted) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${command}`)
        reply(mess.wait)
        let media = await quoted.download()
        let { toAudio } = require('./lib/converter')
        let audio = await toAudio(media, 'mp4')
        Akabot.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
        }
        break
        /*case prefix+'tomp3': {
            if (isBan) return reply(mess.ban)
      if(!isRegistered) return sendButMessage(from, daftar1, daftar2, daftar3, {quoted: m})
        if (/document/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`)
        if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`)
        if (!m.quoted) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`)
        reply(mess.wait)
        let media = await quoted.download()
        let { toAudio } = require('./lib/converter')
        let audio = await toAudio(media, 'mp4')
        sock.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${sock.user.name} (${m.id}).mp3`, contextInfo: { "externalAdReply": { "title" : global.namebot, "mediaType" : 1, "renderLargerThumbnail" : false, "showAdAttribution": true, "mediaUrl": global.linkgrupss, "thumbnail": di, "sourceUrl" : global.linkgrupss }}}, { quoted : m })
        }
        addCmd(command.slice(1), 1, commund)
        break*/
        case prefix+'tovn': case prefix+'toptt': {
            if (isBan) return reply(mess.ban)	 			
         if (isBanChat) return reply(mess.banChat)
        if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${command}`)
        if (!m.quoted) return reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${command}`)
        reply(mess.wait)
        let media = await quoted.download()
        let { toPTT } = require('./lib/converter')
        let audio = await toPTT(media, 'mp4')
        Akabot.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true}, {quoted:m})
        }
        break
        case prefix+'togif': {
            if (isBan) return reply(mess.ban)	 			
         if (isBanChat) return reply(mess.banChat)
        if (!m.quoted) return reply('Reply Image')
        if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${command}*`)
        reply(mess.wait)
        let { webp2mp4File } = require('./lib/uploader')
        let media = await Akabot.downloadAndSaveMediaMessage(quoted)
        let webpToMp4 = await webp2mp4File(media)
        await Akabot.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true}, { quoted: m })
        await fs.unlinkSync(media)
        }
        break
        case prefix+'tourl': {
       if (isBan) return reply(mess.ban)	 			
    if (isBanChat) return reply(mess.banChat)
    reply(mess.wait)
    let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
    let media = await Akabot.downloadAndSaveMediaMessage(quoted)
    if (/image/.test(mime)) {
    let anu = await TelegraPh(media)
    reply(util.format(anu))
    } else if (!/video/.test(mime)) {
    let anu = await UploadFileUgu(media)
    reply(util.format(anu))
    }
    await fs.unlinkSync(media)
    }
    break
                case prefix+'imagenobgxxx': case prefix+'removebgxxx': case prefix+'remove-bgxxx': {
                    if (isBan) return reply(mess.ban)	 			
                 if (isBanChat) return reply(mess.banChat)
            if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
            if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
            if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
            let remobg = require('remove.bg')
            let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
            let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
            hmm = await './src/remobg-'+getRandom('')
            localFile = await Akabot.downloadAndSaveMediaMessage(quoted, hmm)
            outputFile = await './src/hremo-'+getRandom('.png')
            reply(mess.wait)
            remobg.removeBackgroundFromImageFile({
              path: localFile,
              apiKey: apinobg,
              size: "regular",
              type: "auto",
              scale: "100%",
              outputFile 
            }).then(async result => {
            Akabot.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
            await fs.unlinkSync(localFile)
            await fs.unlinkSync(outputFile)
            }).catch()
            }
            break
//------------------------------------

//--------< Inv/limit/money Menu >----------
  //transaction\\
 case prefix+'beli': case prefix+'buy':{
 	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!isDarah) return reply(mess.register)
if (!isInventory) return reply(mess.register)
if (!isInventoryLimit) return reply(mess.register)
if (!isInventoryLimit) return reply(mess.register)
if (!isInventoryMonay) return reply(mess.register)
if (!isInventoriBuruan) return reply(mess.register)
 if (!args[0]) return reply(`Mau Beli Apa?\n\n1. potion, 1 Potion = 10000 Uang\n2. umpan, 1 umpan = 2500 Uang\n3. limit, 1 Limit = 25000 Uang\n\nExample: ${command} limit 2`)
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 10000 * anu
 if (!args[1]) return reply(`Example : ${command} potion 2\n 1 Potion = 10000 Money`)
 if (isMonay < noh) return reply('Sisa Uang kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Sisa Uang kamu* : ${getMonay(m.sender)}\n*Potion Kamu* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'umpan'){
  let noh = 2500 * anu
 if (!args[1]) return reply(`Example : ${command} umpan 2\n 1 umpan = 2500 Money`)
 if (isMonay < noh) return reply('Sisa Uang kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Sisa Uang kamu* : ${getMonay(m.sender)}\n*umpan kamu* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 25000 * anu
 if (!args[1]) return reply(`Example : ${command} limit 2\n 1 Limit = 25000 Money`)
 if (isMonay < noh) return reply('Sisa Uang kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Sisa Uang kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply(`Format Salah!\nContoh ${command}jual ikan 1`) }
 }
 break
 case prefix+'sel': case prefix+'jual':{
 	 if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!isDarah) return reply(mess.register)
if (!isInventory) return reply(mess.register)
if (!isInventoryLimit) return reply(mess.register)
if (!isInventoryLimit) return reply(mess.register)
if (!isInventoryMonay) return reply(mess.register)
if (!isInventoriBuruan) return reply(mess.register)
 if (!args[0]) return  reply(`Mau Jual Apa??\n1. ikan, 1 ikan = 1500 Uang\n2. ayam, 1 ayam = 2500 Uang\n3. kelinci, 1 kelinci = 3000 Uang\n4. domba, 1 domba = 5000 Uang\n5. sapi, 1 sapi = 10000 Uang\n6. gajah, 1 gajah = 15000 Uang\n7. besi, 1 besi = 15000 Uang\n8. emas, 1 emas = 50000 Uang\n9. emerald, 1 Emerald = 100000 Uang\nExample : ${command} ikan 2`)
 var anu = args[1]
 if (args[0] === 'ikan'){ 
 if (isIkan < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Ikan Kamu* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Ayam Kamu* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa kelinci Kamu* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 domba = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa domba Kamu* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Sapi Kamu* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} gajag 2\n 1 gajah = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Gajah Kamu* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} besi 2\n 1 besi = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Besi Kamu* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} emas 2\n 1 emas = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Emas Kamu* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => { 
  reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Emerald Kamu* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { reply(`Format Salah!\nContoh ${command}jual ikan 1`) }

 }
 break
 case prefix+'transfer': case prefix+'tf':{
    if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!isCreator) return reply(mess.owner)
if (!isDarah) return reply(mess.register)
if (!isInventory) return reply(mess.register)
if (!isInventoryLimit) return reply(mess.register)
if (!isInventoryLimit) return reply(mess.register)
if (!isInventoryMonay) return reply(mess.register)
if (!isInventoriBuruan) return reply(mess.register)
if (!q) return  reply(`Mau Tf Kemana? \nExample : ${prefix + command} uang atau limit nonya/jumlah`)
swn = args.join(" ")
   apanya = swn.split("/")[0];
   nomor = swn.split("/")[1];
   jumlah = swn.split("/")[2];
if (!q.includes('/')) return reply(`Wajib Menggunakan /`)
     if (nomor.includes('+')) return reply(`Jangan Menggunakan Ini '+' `)
     if (nomor.includes('-')) return reply(`Jangan Menggunakan Ini '-' `)
var num = `${nomor}@s.whatsapp.net`
var anu = jumlah
if (apanya === 'uang'){
if (isMonay < anu) return reply(`Kau Tidak Mempunyai Uang Lagi Untuk Transksi Ini`)
if (!nomor) return reply(`Example : ${prefix + command} uang 6281248249833/1000`)
kurangMonay(m.sender, anu)
let monaynya = 1 * anu
addMonay(`${nomor}@s.whatsapp.net`, monaynya)
setTimeout( () => {
reply(`Transfer Uang sebanyak ${anu} berhasil\n\nSisa Uang Kamu : ${getMonay(m.sender)}\nSisa Uang Tujuan : ${getMonay(`${nomor}@s.whatsapp.net`)}`)
}, 2000) 
} else
if (apanya === 'limit'){
if (isLimit < anu) return reply(`Kau Tidak Mempunyai Limit Lagi Untuk Transksi Ini`)
if (!nomor) return reply(`Example : ${prefix + command} limit 6281248249833/1000`)
kurangLimit(m.sender, anu)
let monaynya = 1 * anu
addLimit(`${nomor}@s.whatsapp.net`, monaynya)
setTimeout( () => {
reply(`Transfer Limit sebanyak ${jumlah} berhasil\n\nSisa Limit Kamu : ${getLimit(m.sender)}\nSisa Limit Tujuan : ${getLimit(`${nomor}@s.whatsapp.net`)}`)
}, 2000) 
}
 }
break
 case prefix+'inventori': case prefix+'inventory': case prefix+'profile':{
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (!isDarah) return reply(mess.register)
if (!isInventory) return reply(mess.register)
if (!isInventoryLimit) return reply(mess.register)
if (!isInventoryLimit) return reply(mess.register)
if (!isInventoryMonay) return reply(mess.register)
if (!isInventoriBuruan) return reply(mess.register)
var XeonBotInc1 = await getBuffer(picak+`User's Inventory`)
let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n*❤️Your Blood* : ${getDarah(m.sender)}\n*◻️️Your besi* : ${getBesi(m.sender)}\n*🌟Your emas* : ${getEmas(m.sender)}\n*💎Your Emerald* : ${getEmerald(m.sender)}\n*⏺️Your Limit* : ${getLimit(m.sender)}\n*🧪Your Potion* : ${getPotion(m.sender)}\n\n_[ 🐺HUNT RESULT🐺 ]_\n*🐟ikan* : ${getIkan(m.sender)}\n*🐔ayam* : ${getAyam(m.sender)}\n*🐇kelinci* : ${getKelinci(m.sender)}\n*🐑domba* : ${getDomba(m.sender)}\n*🐄sapi* : ${getSapi(m.sender)}\n*🐘gajaht* : ${getGajah(m.sender)}\n\n_*${pushname}*_`
Akabot.sendMessage(from, {image: XeonBotInc1, caption: teksehmazeh}, {quoted: m})
}
break
case prefix+'heal':{
   if (isBan) return reply(mess.ban)	 			
   if (isBanChat) return reply(mess.banChat)
   if (!isRegistered) return reply(mess.register)
   if (isAspam) return reply(mess.anspam)
    if (!isCekDarah < 1) return reply('Kamu hanya bisa heal ketika darah kamu 0')
    if (isCekDarah > 100) return reply('Darah kamu sudah penuh')
    if (isPotion < 1) return reply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
    addDarah(m.sender, 100)
    kurangPotion(m.sender, 1)
    reply('Berhasil, darah kamu sudah full')
    }
    break
case prefix+'mining': case prefix+'mine':{
msgFilter.addFilter(m.sender, 10000)
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isRegistered) return reply(mess.register)
if (isAspam) return reply(mess.anspam)
if (q.includes('--help')) return reply(examkosong) 
  if (isCekDarah < 1) return reply(`You're Tired!, Try To Heal Using Potions`) 
  let besi = [0,1,3,0,2,0,1,0,3,1,4,0,0]
  let emas = [0,0,1,2,0,0,0,0,1,0,0,2]
  let emerald = [0,0,0,0,0,1,0,1,0,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
Akabot.sendMessage(from, {image: {url: './storage/image/tambang.jpg'}, caption: `[ MINING RESULT ]\n*Darah Berkurang 10*\n*besi* : ${besinya}\n*emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`}, {quoted: m})
   }, 7000)  
  setTimeout( () => {
Akabot.sendMessage(from, {text: `@${m.sender.split("@")[0]} Started Mining🎣`, mentions:[m.sender]}, {quoted: m})
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
case prefix+'berburu':{
    if (isBan) return reply(mess.ban)	 			
 if (isBanChat) return reply(mess.banChat)
 if (!isRegistered) return reply(mess.register)
 if (isAspam) return reply(mess.anspam)
    //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
    if (isCekDarah < 1) return reply('Darah kamu habis, cobalah heal menggunakan potion') 
    let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
    let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
    var darahmu = Math.ceil(Math.random() * 15)
    var ikanmu = Math.ceil(Math.random() * 10)
    var ayam = Math.ceil(Math.random() * 8)
    var kelinci = Math.ceil(Math.random() * 7)
    var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
    var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
    var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
    var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
    var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
    var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
    var lukanya = luka[Math.floor(Math.random() * luka.length)]
    var lokasinya = location[Math.floor(Math.random() * location.length)]
    if (lokasinya === 'Hutan rimba') {
    var image = './storage/image/rimba.jpg'
    } else
    if (lokasinya === 'Hutan Amazon') {
    var image =  './storage/image/amazon.jpg'
    } else
    if (lokasinya === 'Hutan tropis') {
    var image = './storage/image/tropis.jpg'
    } else
    if (lokasinya === 'Padang rumput') {
    var image = './storage/image/padang_rumput.jpg'
    } else
    if (lokasinya === 'Hutan afrika') {
    var image = './storage/image/afrika.jpg'
    } else
    if (lokasinya === 'Pegunungan') {
    var image = './storage/image/pegunungan.jpg'
    }
    setTimeout( () => {
    let teksehmazeh = `_[ HASIL BURUAN ]_\n*🐟Ikan* : ${ikanmu}\n*🐔Ayam* : ${ayam}\n*🐇Kelinci* : ${kelinci}\n*🐑Domba* : ${domba}\n*🐄Sapi* : ${sapi}\n*🐘Gajah* : ${gajah}\n\n_[ INFO ]_\n*Lokasi* : ${lokasinya}\n*Terluka* : ${lukanya}, darah ${darahmu}\n*Sisa darah* : ${getDarah(m.sender)}\n`
    Akabot.sendMessage(from, {image: {url: image}, caption: teksehmazeh}, {quoted: m})
    }, 5000)  
    setTimeout( () => {
        Akabot.sendMessage(from, {text: `@${m.sender.split("@")[0]} Mulai berburu di ${lokasinya}`, mentions:[m.sender]}, {quoted: m})
    }, 1000) 
    addIkan(m.sender, ikanmu) 
    addAyam(m.sender, ayam) 
    addKelinci(m.sender, kelinci)
    addDomba(m.sender, domba)
    addSapi(m.sender, sapi)
    addGajah(m.sender, gajah)
    kurangDarah(m.sender, darahmu)
    }
    break
    case prefix+'mininguang':
        if (isCreator | m.key.fromMe) {
            var one = Math.ceil(Math.random() * 1000000000)
            addMonay(m.sender, one)
            await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one} Uang* untuk anda`)
        } else {
            var mining = Math.ceil(Math.random() * 500)
        addMonay(m.sender, mining)
        reply(`*Selamat* ${pushname} kamu mendapatkan *${mining} Uang*`)
    }
            break
    case prefix+'claim':
    claimFilter.addClaim(m.sender, cooldownhari)
            if (isBan) return reply(mess.ban)	 			
         if (isBanChat) return reply(mess.banChat)
         if (!isRegistered) return reply(mess.register)
if (isAclaim) return reply(`Kamu Udah Mengeclaim Hari Ini Tunggu Hingga Esok Hari`)
        if (isCreator) {
            var one = Math.ceil(Math.random() * 10000000)
            addMonay(m.sender, one)
            await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one} Uang* untuk anda`)
        } else {
            var mining = Math.ceil(Math.random() * 200000)
        addMonay(m.sender, mining)
        reply(`*Selamat* ${pushname} kamu mendapatkan *${mining} Uang*`)
    }
            break
//------------------------------------------

//--------< Anonymous Menu >----------

case prefix+'anonymous': {
    if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
            if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
            this.anonymous = this.anonymous ? this.anonymous : {}
            let buttons = [
                { buttonId: 'Start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
            ]
            Akabot.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await Akabot.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, Akabot.user.name, m)
        }
        break
        case prefix+'keluar': case prefix+'leave': {
            if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
            if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
            this.anonymous = this.anonymous ? this.anonymous : {}
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) {
                let buttons = [
                    { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                ]
                await Akabot.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
               reply(false)
            }
            reply('Ok')
            let other = room.other(m.sender)
            if (other) await Akabot.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case prefix+'mulai': case prefix+'start': {
            if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
            if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
            this.anonymous = this.anonymous ? this.anonymous : {}
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                let buttons = [
                    { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                ]
                await Akabot.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Terminate Your Anonymous Session\`\`\``, Akabot.user.name, m)
                reply(false)
            }
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                let buttons = [
                    { buttonId: 'next', buttonText: { displayText: '⏩Skip⏩' }, type: 1 },
                    { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                ]
                await Akabot.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, Akabot.user.name, m)
                room.b = m.sender
                room.state = 'CHATTING'
                await Akabot.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, Akabot.user.name, m)
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                let buttons = [
                    { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                ]
                await Akabot.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, Akabot.user.name, m)
            }
            break
        }
        case prefix+'next': case prefix+'lanjut': {
            if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
            if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
            this.anonymous = this.anonymous ? this.anonymous : {}
            let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!romeo) {
                let buttons = [
                    { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                ]
                await Akabot.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\``)
                reply(false)
            }
            let other = romeo.other(m.sender)
            if (other) await Akabot.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
            delete this.anonymous[romeo.id]
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                let buttons = [
                    { buttonId: 'next', buttonText: { displayText: '⏩Skip⏩' }, type: 1 },
                    { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                ]
                await Akabot.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, Akabot.user.name, m)
                room.b = m.sender
                room.state = 'CHATTING'
                await Akabot.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, Akabot.user.name, m)
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                let buttons = [
                    { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                ]
                await Akabot.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, Akabot.user.name, m)
            }
            break
        }
//------------------------------------
    default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			/*//anti-tag
const listTag = [`${global.ownertag}@s.whatsapp.net`]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''

//anti-tag 2
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./AkaMedia/theme/yourtag.webp')
Akabot.sendReadReceipt(m.chat, m.sender, [m.key.id])
Akabot.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}*/
//anti-tag 3
if (budy.includes(`${global.ownertag}`)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./AkaMedia/theme/yourtag.webp')
Akabot.sendReadReceipt(m.chat, m.sender, [m.key.id])
Akabot.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    Akabot.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})