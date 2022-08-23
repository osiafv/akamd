  const { getBuffer } = require('../../lib/myfunc')
  const Jimp = require('jimp')
function _0x2e21(_0x413a7d,_0x19950c){var _0x5ada94=_0x5ada();return _0x2e21=function(_0x2e2155,_0x2c7ef2){_0x2e2155=_0x2e2155-0xb8;var _0x54a6b4=_0x5ada94[_0x2e2155];return _0x54a6b4;},_0x2e21(_0x413a7d,_0x19950c);}(function(_0x414191,_0x187e39){var _0x1b8c51=_0x2e21,_0x3d593b=_0x414191();while(!![]){try{var _0x25a4c9=parseInt(_0x1b8c51(0xbf))/0x1+parseInt(_0x1b8c51(0xb8))/0x2*(parseInt(_0x1b8c51(0xc4))/0x3)+parseInt(_0x1b8c51(0xba))/0x4+-parseInt(_0x1b8c51(0xb9))/0x5+parseInt(_0x1b8c51(0xc0))/0x6*(-parseInt(_0x1b8c51(0xbe))/0x7)+parseInt(_0x1b8c51(0xc1))/0x8*(parseInt(_0x1b8c51(0xc3))/0x9)+parseInt(_0x1b8c51(0xbc))/0xa*(parseInt(_0x1b8c51(0xc5))/0xb);if(_0x25a4c9===_0x187e39)break;else _0x3d593b['push'](_0x3d593b['shift']());}catch(_0x5c4012){_0x3d593b['push'](_0x3d593b['shift']());}}}(_0x5ada,0x5ba27));function _0x5ada(){var _0x19b06b=['8OTZkrD','resize','1632303jweZnI','6537MeJlLT','805607UeVRcl','570HAaoRI','2702575ynCtjG','373280rlnoQO','getBufferAsync','30ZjMpMk','MIME_JPEG','21jRucxK','234816wbFIXf','868758jGTHIx'];_0x5ada=function(){return _0x19b06b;};return _0x5ada();}const reSize=async(_0xe12412,_0x127225,_0x2dd976)=>{return new Promise(async(_0x2f8a81,_0x36be9e)=>{var _0x28a336=_0x2e21,_0x1d788f=await Jimp['read'](_0xe12412),_0x160d50=await _0x1d788f[_0x28a336(0xc2)](_0x127225,_0x2dd976)[_0x28a336(0xbb)](Jimp[_0x28a336(0xbd)]);_0x2f8a81(_0x160d50);});};
  const groupResponse = async (sock, update) => {
   const metadata = await sock.groupMetadata(update.id)   
   for (let participant of update.participants) {
    try{
       let metadata = await sock.groupMetadata(update.id)
       let participants = update.participants
       for (let num of participants) {
         try {
           ppuser = await sock.profilePictureUrl(num, 'image')
         } catch {
           ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
         }
         if (update.action == 'add') {
          var button = [
             { 
              buttonId: `ahsudahlah`, 
              buttonText: { 
               displayText: `WelcomeðŸ‘‹` 
               }, type: 1 
              }
             ]
        sock.sendMessage(
         update.id, 
         { 
         caption: `*Hello @${num.split("@")[0]} Welcome to ${metadata.subject} *`, 
         location: { 
          jpegThumbnail: await reSize(ppuser, 200, 200) 
         }, 
         buttons: button, 
         footer: 'AKAbotz ~ Aka', mentions: [num] })
         } 
        else 
        if (update.action == 'remove') {
          var button = [
             { 
              buttonId: `ahsudahlah`, 
              buttonText: { 
               displayText: `Bye‘‹` 
               }, type: 1 
              }
             ]
        sock.sendMessage(
           update.id, 
          { 
           caption: `*@${num.split("@")[0]} leave the group ${metadata.subject}*`, 
           location: { jpegThumbnail: await reSize(ppuser, 200, 200) 
          }, 
           buttons: button, 
           footer: 'AKAbotz ~ Aka', 
           mentions: [num] 
             }
             )
             }
            }
        } catch (err) {
        console.log(err)
      }
    }   
  }
module.exports = { groupResponse }  
