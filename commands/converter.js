/**
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：１．０．１                                                // 
//                                                                                                      // 
//            ███████╗██╗   ██╗██╗  ██╗ █████╗ ██╗██╗         ███╗   ███╗██████╗                        //
//            ██╔════╝██║   ██║██║  ██║██╔══██╗██║██║         ████╗ ████║██╔══██╗                       //
//            ███████╗██║   ██║███████║███████║██║██║         ██╔████╔██║██║  ██║                       //
//            ╚════██║██║   ██║██╔══██║██╔══██║██║██║         ██║╚██╔╝██║██║  ██║                       //
//            ███████║╚██████╔╝██║  ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║██████╔╝                       //
//            ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Suhail-Md
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo0
   * @description : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.2.3
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By Suhail Tech Info.
   * © 2023 Suhail-Md.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.

 **/
function _0x5800(_0x438dba,_0x478b9a){const _0x54b988=_0x54b9();return _0x5800=function(_0x5800b8,_0x430142){_0x5800b8=_0x5800b8-0xa0;let _0x24d967=_0x54b988[_0x5800b8];return _0x24d967;},_0x5800(_0x438dba,_0x478b9a);}const _0x1fb67c=_0x5800;(function(_0xd4cdfe,_0xcba26b){const _0x3e5d5b=_0x5800,_0x174422=_0xd4cdfe();while(!![]){try{const _0x51cd48=-parseInt(_0x3e5d5b(0xe4))/0x1*(parseInt(_0x3e5d5b(0xc2))/0x2)+-parseInt(_0x3e5d5b(0x12f))/0x3+-parseInt(_0x3e5d5b(0x17a))/0x4+parseInt(_0x3e5d5b(0xab))/0x5+parseInt(_0x3e5d5b(0xfe))/0x6+-parseInt(_0x3e5d5b(0x12c))/0x7*(-parseInt(_0x3e5d5b(0x141))/0x8)+parseInt(_0x3e5d5b(0xcb))/0x9;if(_0x51cd48===_0xcba26b)break;else _0x174422['push'](_0x174422['shift']());}catch(_0x57ef94){_0x174422['push'](_0x174422['shift']());}}}(_0x54b9,0xbbaf8));const axios=require(_0x1fb67c(0xf1)),fs=require(_0x1fb67c(0x136)),{exec}=require(_0x1fb67c(0x131)),{Sticker,createSticker,StickerTypes}=require(_0x1fb67c(0x170)),fetch=require(_0x1fb67c(0x164)),{userdb,tiny,fancytext,smdBuffer,getBuffer,sleep,listall,getRandom,prefix,smd,generateSticker,TelegraPh,Config,tlang}=require(_0x1fb67c(0x176));let s_ser=Config[_0x1fb67c(0x177)]===_0x1fb67c(0xd0)?![]:!![],mtypes=[_0x1fb67c(0x139),_0x1fb67c(0xa2),_0x1fb67c(0x144)];smd({'cmdname':_0x1fb67c(0xd2),'alias':['s'],'info':_0x1fb67c(0x11a),'type':_0x1fb67c(0xd2),'fromMe':s_ser,'filename':__filename,'use':_0x1fb67c(0x16c)},async _0x1ed9dc=>{const _0x1ca520=_0x1fb67c;try{let _0x35efea=mtypes[_0x1ca520(0x112)](_0x1ed9dc[_0x1ca520(0x178)])?_0x1ed9dc:_0x1ed9dc['reply_message'];if(_0x35efea&&mtypes[_0x1ca520(0x112)](_0x35efea?.['mtype']||_0x1ca520(0xdf))){let _0x499c2c=await _0x35efea['download'](),_0x450746={'pack':Config[_0x1ca520(0x12b)],'author':Config[_0x1ca520(0x15a)],'type':StickerTypes[_0x1ca520(0xe0)],'quality':0xa};return await generateSticker(_0x1ed9dc,_0x499c2c,_0x450746),_0x499c2c=![];}else return _0x1ed9dc[_0x1ca520(0x16b)]('*_Uhh\x20Dear,\x20Reply\x20to\x20image/video!!_*');}catch(_0x3a7be5){return await _0x1ed9dc[_0x1ca520(0xff)](_0x3a7be5+_0x1ca520(0x108));}}),smd({'cmdname':_0x1fb67c(0xbd),'info':_0x1fb67c(0x11a),'type':_0x1fb67c(0xd2),'fromMe':s_ser,'filename':__filename,'use':_0x1fb67c(0x14d)},async(_0x3cf292,_0x346606)=>{const _0x23668c=_0x1fb67c;try{let _0x4318f7=_0x3cf292[_0x23668c(0x135)];if(!_0x4318f7||_0x4318f7?.[_0x23668c(0x178)]!='stickerMessage')return await _0x3cf292[_0x23668c(0x16b)](_0x23668c(0x150));let _0x3f4bbc=_0x346606[_0x23668c(0xd9)]('|'),_0x58d18b=_0x3f4bbc[0x0]?.[_0x23668c(0x14e)]()!==''?_0x3f4bbc[0x0]:_0x3cf292['pushName'],_0x239cb7=_0x3f4bbc[0x1]&&_0x3f4bbc[0x1]!==''?_0x3f4bbc[0x1]:_0x23668c(0xb8),_0x2d3018=await _0x4318f7[_0x23668c(0xfd)](),_0x1913d2={'pack':_0x58d18b,'author':_0x239cb7,'type':StickerTypes[_0x23668c(0xe0)],'quality':0xa};return await generateSticker(_0x3cf292,_0x2d3018,_0x1913d2),_0x2d3018=![];}catch(_0x48ad5b){return await _0x3cf292[_0x23668c(0xff)](_0x48ad5b+'\x0a\x0acmdName:\x20take\x0a');}}),smd({'cmdname':_0x1fb67c(0xa3),'info':_0x1fb67c(0xcf),'type':_0x1fb67c(0xd2),'fromMe':s_ser,'filename':__filename,'use':_0x1fb67c(0xcd)},async(_0x4b306f,_0x5a41b8)=>{const _0x40a527=_0x1fb67c;try{let _0xc12a91=await smdBuffer(_0x40a527(0xb9)+(_0x5a41b8?_0x5a41b8:_0x40a527(0x147))+_0x40a527(0x13d));return await generateSticker(_0x4b306f,_0xc12a91);}catch(_0x1657c4){return await _0x4b306f['error'](_0x1657c4+_0x40a527(0xad));}}),smd({'cmdname':_0x1fb67c(0x11d),'alias':[_0x1fb67c(0xc8)],'info':_0x1fb67c(0xb4),'type':_0x1fb67c(0xd2),'fromMe':s_ser,'filename':__filename,'use':_0x1fb67c(0xec)},async _0x2d770a=>{const _0x4e4b0b=_0x1fb67c;try{let _0x3b8ae0=mtypes[_0x4e4b0b(0x112)](_0x2d770a['mtype'])?_0x2d770a:_0x2d770a[_0x4e4b0b(0x135)];if(_0x3b8ae0&&mtypes[_0x4e4b0b(0x112)](_0x2d770a?.['mtype']||_0x4e4b0b(0xdf))){let _0x152b54=await _0x3b8ae0['download'](),_0x409981={'pack':Config[_0x4e4b0b(0x12b)],'author':Config[_0x4e4b0b(0x15a)],'type':StickerTypes[_0x4e4b0b(0xdd)],'quality':0x32};return await generateSticker(_0x2d770a,_0x152b54,_0x409981),_0x152b54=![];}else return _0x2d770a['reply']('*_Uhh\x20Dear,\x20Reply\x20to\x20image!!_*');}catch(_0x251216){return await _0x2d770a[_0x4e4b0b(0xff)](_0x251216+_0x4e4b0b(0x11b),_0x4e4b0b(0x12a));}}),smd({'cmdname':_0x1fb67c(0xd5),'alias':[_0x1fb67c(0xe5),_0x1fb67c(0x103),'cs'],'info':_0x1fb67c(0x13a),'type':_0x1fb67c(0xd2),'fromMe':s_ser,'filename':__filename,'use':_0x1fb67c(0xec)},async _0x562f84=>{const _0x40f788=_0x1fb67c;try{let _0x4d96d0=mtypes[_0x40f788(0x112)](_0x562f84[_0x40f788(0x178)])?_0x562f84:_0x562f84['reply_message'];if(_0x4d96d0&&mtypes[_0x40f788(0x112)](_0x562f84?.[_0x40f788(0x178)]||'need_Media')){let _0x5a6878=await _0x4d96d0[_0x40f788(0xfd)](),_0x4362c6={'pack':Config[_0x40f788(0x12b)],'author':Config[_0x40f788(0x15a)],'type':StickerTypes[_0x40f788(0x114)],'quality':0x32};return await generateSticker(_0x562f84,_0x5a6878,_0x4362c6),_0x5a6878=![];}else return _0x562f84[_0x40f788(0x16b)]('*_Uhh\x20Dear,\x20Reply\x20to\x20image!!_*');}catch(_0x3cc69e){return await _0x562f84[_0x40f788(0xff)](_0x3cc69e+_0x40f788(0xba),_0x40f788(0xb0));}}),smd({'cmdname':_0x1fb67c(0xe3),'alias':['roundstic',_0x1fb67c(0x111)],'info':_0x1fb67c(0x11a),'type':_0x1fb67c(0xd2),'fromMe':s_ser,'filename':__filename,'use':_0x1fb67c(0xec)},async _0x23e332=>{const _0x2e7ed6=_0x1fb67c;try{let _0x451f57=mtypes[_0x2e7ed6(0x112)](_0x23e332[_0x2e7ed6(0x178)])?_0x23e332:_0x23e332[_0x2e7ed6(0x135)];if(_0x451f57&&mtypes['includes'](_0x23e332?.['mtype']||_0x2e7ed6(0xdf))){let _0x2133c1=await _0x451f57[_0x2e7ed6(0xfd)](),_0x5978a7={'pack':Config[_0x2e7ed6(0x12b)],'author':Config[_0x2e7ed6(0x15a)],'type':StickerTypes[_0x2e7ed6(0x166)],'quality':0x32};return await generateSticker(_0x23e332,_0x2133c1,_0x5978a7),_0x2133c1=![];}else return _0x23e332[_0x2e7ed6(0x16b)](_0x2e7ed6(0x14c));}catch(_0x4571ef){return await _0x23e332[_0x2e7ed6(0xff)](_0x4571ef+_0x2e7ed6(0x168),'*_Request\x20Failed,\x20Make\x20sure\x20You\x20replied\x20an\x20image!_*');}}),smd({'cmdname':_0x1fb67c(0x129),'info':'To\x20get\x20Random\x20Pics','type':_0x1fb67c(0xd3),'fromMe':s_ser,'filename':__filename},async _0x392594=>{const _0xb4c4c=_0x1fb67c;try{const _0x24538e=await(await fetch(_0xb4c4c(0x10d)))?.[_0xb4c4c(0x143)](),_0x21b1fb=_0x24538e?.['urls']?.['regular']||![];_0x21b1fb?await _0x392594['sendUi'](_0x392594[_0xb4c4c(0x132)],{'caption':_0xb4c4c(0x172)},{'quoted':_0x392594},'image',_0x21b1fb):await _0x392594[_0xb4c4c(0xde)](_0xb4c4c(0x160));}catch(_0x59211b){return await _0x392594[_0xb4c4c(0xff)](_0x59211b+_0xb4c4c(0x113));}}),smd({'pattern':_0x1fb67c(0xf9),'desc':'Write\x20text\x20on\x20quoted\x20image.','category':_0x1fb67c(0xd2),'filename':__filename,'use':'<text>'},async(_0x90ccdb,_0x387cd8)=>{const _0x10cf4b=_0x1fb67c;try{let _0x45321f=pmtypes[_0x10cf4b(0x112)](_0x90ccdb['mtype'])?_0x90ccdb:_0x90ccdb['reply_message'];if(!_0x387cd8)return await _0x90ccdb[_0x10cf4b(0x16b)](_0x10cf4b(0xbb));if(!_0x45321f||!pmtypes[_0x10cf4b(0x112)](_0x45321f['mtype']))return _0x90ccdb[_0x10cf4b(0x16b)](_0x10cf4b(0xe2));let _0x198430=_0x387cd8[_0x10cf4b(0xd9)]('|')[0x0]||'',_0x5840c2=(_0x387cd8[_0x10cf4b(0xd9)]('|')[0x1]||_0x10cf4b(0xd2))[_0x10cf4b(0x138)](),_0x24c5a6=_0x198430['split'](';')[0x0]||'_',_0xf2bbd9=_0x198430['split'](';')[0x1]||'_',_0xc213f=await _0x90ccdb[_0x10cf4b(0x124)][_0x10cf4b(0x162)](_0x45321f),_0x1857e2=await TelegraPh(_0xc213f);try{fs[_0x10cf4b(0xb2)](_0xc213f);}catch(_0x31e42c){}console['log'](_0x10cf4b(0x104),_0x387cd8);let _0x32e779=await getBuffer(_0x10cf4b(0x121)+_0x24c5a6+'/'+_0xf2bbd9+_0x10cf4b(0x10c)+_0x1857e2);_0x5840c2?.[_0x10cf4b(0x137)]('p')&&await _0x90ccdb[_0x10cf4b(0xde)](_0x32e779,{'caption':Config[_0x10cf4b(0x159)]},'image');let _0x5397ec={'pack':Config[_0x10cf4b(0x12b)],'author':Config[_0x10cf4b(0x15a)],'type':StickerTypes[_0x10cf4b(0xe0)],'quality':0x46};return await generateSticker(_0x90ccdb,_0x32e779,_0x5397ec),_0x32e779=![];}catch(_0x68a864){return await _0x90ccdb['error'](_0x68a864+_0x10cf4b(0x158)),console[_0x10cf4b(0x14b)](_0x68a864);}}),smd({'pattern':_0x1fb67c(0xc7),'desc':_0x1fb67c(0xce),'category':_0x1fb67c(0xd2),'use':_0x1fb67c(0x12e),'filename':__filename},async(_0x157aa6,_0x58cc42)=>{const _0x12b577=_0x1fb67c;try{let _0x3e64ba=_0x58cc42[_0x12b577(0xd9)](',')[0x0]||![],_0x487f40=_0x58cc42[_0x12b577(0xd9)](',')[0x1]||![];if(!_0x58cc42||!_0x3e64ba||!_0x487f40)return _0x157aa6[_0x12b577(0x16b)](_0x12b577(0xf4)+prefix+_0x12b577(0x106));const _0x13d720=await fetch(_0x12b577(0xa0)+_0x3e64ba+'_'+_0x487f40),_0x262274=await _0x13d720?.[_0x12b577(0x143)]();if(!_0x262274||_0x262274?.['locale']=='')return _0x157aa6[_0x12b577(0xde)](_0x12b577(0xda));else{let _0x4df543=await smdBuffer(_0x262274[_0x12b577(0x105)][0x0]['url']),_0x4149c9={'pack':Config[_0x12b577(0x12b)],'author':Config[_0x12b577(0x15a)],'type':StickerTypes[_0x12b577(0xe0)],'quality':0x46};return await generateSticker(_0x157aa6,_0x4df543,_0x4149c9),_0x4df543=![];}}catch(_0x9d8469){return await _0x157aa6['error'](_0x9d8469+'\x0a\x0acmdName:\x20emix');}}),smd({'pattern':_0x1fb67c(0xc0),'desc':_0x1fb67c(0xdb),'alias':['q'],'category':_0x1fb67c(0xd2),'use':_0x1fb67c(0x15d),'filename':__filename},async(_0x5c8866,_0x5a07b0)=>{const _0x1a14b0=_0x1fb67c;try{let _0x3e9838=_0x5c8866[_0x1a14b0(0x135)]?_0x5c8866[_0x1a14b0(0x135)]:_0x5c8866&&_0x5a07b0?_0x5c8866:![],_0x3c773d=_0x5c8866[_0x1a14b0(0x135)]?_0x5c8866[_0x1a14b0(0x135)]['text']:_0x5a07b0;if(!_0x3e9838||!_0x3c773d)return _0x5c8866[_0x1a14b0(0x16b)]('*_Please\x20quote/reply\x20to\x20any\x20message!!!_*');let _0x2dea09=await _0x5c8866[_0x1a14b0(0x153)](_0x3e9838['sender']),_0x1f00b1=[_0x1a14b0(0xb1),_0x1a14b0(0x16f)],_0x33ab97=_0x5a07b0===_0x1a14b0(0xf7)?_0x1f00b1[0x0]:_0x5a07b0===_0x1a14b0(0x10e)?_0x1f00b1[0x1]:_0x1f00b1[Math['floor'](Math[_0x1a14b0(0x14a)]()*_0x1f00b1[_0x1a14b0(0x13b)])],_0x30fa2e=_0x5c8866['bot'][_0x1a14b0(0xb6)](_0x3e9838[_0x1a14b0(0xf8)]),_0x12ef5e={'type':'quote','format':_0x1a14b0(0x11c),'backgroundColor':_0x33ab97,'width':0x200,'height':0x200,'scale':0x3,'messages':[{'avatar':!![],'from':{'first_name':_0x30fa2e,'language_code':'en','name':_0x30fa2e,'photo':{'url':_0x2dea09}},'text':_0x3c773d,'replyMessage':{}}]},_0x1a923c=await axios[_0x1a14b0(0x13f)](_0x1a14b0(0x15b),_0x12ef5e);if(!_0x1a923c||_0x1a923c[_0x1a14b0(0x165)]!==0xc8||!_0x1a923c['data']||!_0x1a923c[_0x1a14b0(0xaf)]['ok'])return await _0x5c8866['send']('*_Can\x27t\x20create\x20quote\x20sticker!_*');let _0x5c3489=Buffer[_0x1a14b0(0x151)](_0x1a923c[_0x1a14b0(0xaf)][_0x1a14b0(0xc4)][_0x1a14b0(0x123)][_0x1a14b0(0x13b)],_0x1a923c['data'][_0x1a14b0(0xc4)][_0x1a14b0(0x123)],_0x1a14b0(0xd1));try{await _0x5c8866[_0x1a14b0(0xde)](_0x5c3489,{'packname':Config['packname'],'author':'Suhail-Md'},_0x1a14b0(0xd2));}catch(_0xe9e39e){console[_0x1a14b0(0x14b)](_0x1a14b0(0x101),_0xe9e39e);let _0x5758a5={'pack':Config[_0x1a14b0(0x12b)],'author':Config[_0x1a14b0(0x15a)],'type':StickerTypes[_0x1a14b0(0xe0)],'quality':0x46};return await generateSticker(_0x5c8866,_0x5c3489,_0x5758a5);}}catch(_0x2accba){return await _0x5c8866[_0x1a14b0(0xff)](_0x2accba+_0x1a14b0(0x175),_0x2accba);}}),smd({'pattern':_0x1fb67c(0x148),'desc':_0x1fb67c(0xe8),'category':_0x1fb67c(0xbe),'use':'56\x20Suhail','filename':__filename},async(_0x5156f4,_0x42b67c)=>{const _0x5b2bc3=_0x1fb67c;try{let _0x389140='┏━━━━━━━━━━━━━━━━━━━━━━━━\x0a┃\x09*💬SUHAIL-MD_FANCY_TEXT💬*\x20\x0a┗━━━━━━━━━━━━━━━━━━━━━━━━\x0a\x0a\x20'+(_0x42b67c?_0x5b2bc3(0x134):'```\x09\x09'+prefix+'fancy\x20Suhail(For\x20all\x20text)\x0a\x09\x09'+prefix+_0x5b2bc3(0x154)),_0x39f329=parseInt(_0x42b67c);if(isNaN(_0x39f329)){let _0x18c791=_0x42b67c?_0x42b67c:_0x5b2bc3(0xf3);listall(_0x18c791)['forEach']((_0x1ba2e0,_0x54474b)=>{_0x389140+='\x0a'+(_0x54474b+=0x1)+'\x20'+_0x1ba2e0+'\x0a';});try{return await _0x5156f4['send'](_0x389140,{'caption':_0x389140},'',msg);}catch{return await _0x5156f4[_0x5b2bc3(0x16b)](_0x389140);}}let _0x414749=await fancytext(''+_0x42b67c['slice'](0x2),_0x39f329);return await _0x5156f4[_0x5b2bc3(0xde)](_0x414749,{},'',_0x5156f4);}catch(_0x54f659){return await _0x5156f4[_0x5b2bc3(0xff)](_0x54f659+'\x0a\x0acmdName:\x20fancy',_0x54f659);}}),smd({'pattern':_0x1fb67c(0x152),'desc':_0x1fb67c(0x125),'category':_0x1fb67c(0x115),'filename':__filename,'use':_0x1fb67c(0xef)},async(_0x437bae,_0x170cec)=>{const _0x5b6603=_0x1fb67c;try{let _0x2c2ef5=_0x170cec[_0x5b6603(0x14e)](),_0x108971=_0x5b6603(0x149)+(_0x2c2ef5?_0x5b6603(0x134):_0x5b6603(0xeb)+prefix+_0x5b6603(0xae)+prefix+_0x5b6603(0x12d)),{styletext:_0x53c4d2}=require('../lib/scraper'),_0x5a60da=_0x2c2ef5?parseInt(_0x2c2ef5):'';_0x2c2ef5=_0x5a60da&&!isNaN(_0x5a60da)?_0x2c2ef5[_0x5b6603(0xa8)](0x2):_0x2c2ef5;let _0x5df0b=await _0x53c4d2(_0x2c2ef5?_0x2c2ef5:_0x5b6603(0xf3))||[];if(!_0x5df0b||!_0x5df0b[0x0])return await _0x437bae[_0x5b6603(0xde)](_0x5b6603(0xed));let _0x223768='';if(isNaN(_0x5a60da)||_0x5a60da>_0x5df0b[_0x5b6603(0x13b)]||_0x5a60da<0x0||!_0x2c2ef5){for(let _0x591323=0x0;_0x591323<_0x5df0b[_0x5b6603(0x13b)];_0x591323++){_0x223768+='\x0a'+_0x591323+'\x20'+_0x5df0b[_0x591323][_0x5b6603(0xc4)]+'\x20'+(_0x2c2ef5['length']>0x32?'\x0a':'');}return await _0x437bae['send'](_0x108971+_0x223768);}return await _0x437bae['send'](_0x5df0b[_0x5a60da][_0x5b6603(0xc4)],{},'',_0x437bae);}catch(_0x3ce11b){await _0x437bae[_0x5b6603(0xff)](_0x3ce11b+'\x0a\x0acommand:\x20styly',_0x3ce11b);}}),smd({'pattern':'tiny','desc':_0x1fb67c(0x126),'category':_0x1fb67c(0xbe),'use':'<url>','react':'✅','filename':__filename},async(_0x3363d5,_0x67644e)=>{const _0x4c3178=_0x1fb67c;try{if(!_0x67644e||!_0x67644e[_0x4c3178(0x138)]()['includes']('https'))return _0x3363d5['reply'](_0x4c3178(0xbf));let _0x5edf77=_0x67644e[_0x4c3178(0xd9)]('\x20')[0x0],_0x3cac2d=await axios[_0x4c3178(0x16a)](_0x4c3178(0x157)+_0x5edf77);_0x3363d5[_0x4c3178(0x16b)]('*🛡️Your\x20Shortened\x20URL*\x0a\x0a'+_0x3cac2d[_0x4c3178(0xaf)]);}catch(_0x4aa4d9){return await _0x3363d5[_0x4c3178(0xff)](_0x4aa4d9+_0x4c3178(0x107),_0x4aa4d9);}}),smd({'pattern':'fliptext','desc':'Flips\x20given\x20text.','category':_0x1fb67c(0xbe),'use':_0x1fb67c(0x12e),'filename':__filename},async(_0x40c0dd,_0x4b44c3)=>{const _0x3bc943=_0x1fb67c;try{let _0x50d439=_0x4b44c3?_0x4b44c3:_0x40c0dd[_0x3bc943(0x156)];if(!_0x50d439)return _0x40c0dd['reply'](_0x3bc943(0x171)+prefix+_0x3bc943(0x10a));let _0x41976b=_0x50d439[_0x3bc943(0xd9)]('')['reverse']()[_0x3bc943(0xa9)]('');await _0x40c0dd[_0x3bc943(0x16b)](_0x3bc943(0xb7)+_0x50d439+_0x3bc943(0xaa)+_0x41976b);}catch(_0x59c879){await _0x40c0dd[_0x3bc943(0xff)](_0x59c879+_0x3bc943(0x116),_0x59c879);}}),smd({'pattern':'ebinary','desc':'encode\x20binary','category':_0x1fb67c(0xbe),'use':'<query>','filename':__filename},async(_0xf07286,_0x55ad99)=>{const _0x3b2ae1=_0x1fb67c;try{let _0x567086=_0x55ad99?_0x55ad99:_0xf07286[_0x3b2ae1(0x156)];if(!_0x567086)return _0xf07286['reply'](_0x3b2ae1(0x117));let _0x3b4a39=_0x567086['split']('')['map'](_0x95e2ea=>{const _0xcde783=_0x3b2ae1;return _0x95e2ea['charCodeAt'](0x0)[_0xcde783(0x146)](0x2);})['join']('\x20');await _0xf07286[_0x3b2ae1(0x16b)](_0x3b4a39);}catch(_0xa21c11){await _0xf07286[_0x3b2ae1(0xff)](_0xa21c11+_0x3b2ae1(0x13e),_0xa21c11);}}),smd({'pattern':_0x1fb67c(0x100),'desc':'decode\x20binary','category':_0x1fb67c(0xbe),'use':_0x1fb67c(0x12e),'filename':__filename},async(_0x5590f0,_0x38275f)=>{const _0x1d33bf=_0x1fb67c;try{let _0xf56c22=_0x38275f?_0x38275f:_0x5590f0[_0x1d33bf(0x156)];if(!_0xf56c22)return _0x5590f0[_0x1d33bf(0x16b)]('Send\x20text\x20to\x20be\x20decoded.');var _0x2c621d=_0xf56c22[_0x1d33bf(0xd9)]('\x20'),_0x5bbf9c=[];for(i=0x0;i<_0x2c621d['length'];i++){_0x5bbf9c[_0x1d33bf(0x142)](String[_0x1d33bf(0xea)](parseInt(_0x2c621d[i],0x2)));}await _0x5590f0[_0x1d33bf(0x16b)](_0x5bbf9c['join'](''));}catch(_0x593e2e){await _0x5590f0[_0x1d33bf(0xff)](_0x593e2e+'\x0a\x0acommand\x20:\x20dbinary',_0x593e2e);}}),smd({'pattern':'qr','category':_0x1fb67c(0xbe),'filename':__filename,'use':_0x1fb67c(0xc9),'desc':_0x1fb67c(0xd7)},async(_0x5c23f7,_0x4d7194)=>{const _0x56b9a9=_0x1fb67c;try{if(!_0x4d7194)return _0x5c23f7['reply']('*Provide\x20Text\x20To\x20generate\x20QR!*');let _0x5eff70=_0x56b9a9(0xb3)+text;await _0x5c23f7[_0x56b9a9(0x124)][_0x56b9a9(0xf0)](_0x5c23f7[_0x56b9a9(0x132)],{'caption':_0x56b9a9(0x10f)},{'quoted':_0x5c23f7},_0x56b9a9(0x123),_0x5eff70);}catch(_0x37514c){await _0x5c23f7[_0x56b9a9(0xff)](_0x37514c+_0x56b9a9(0xee),_0x37514c);}});const PastebinAPI=require('pastebin-js');let pastebin=new PastebinAPI(_0x1fb67c(0x120));smd({'pattern':_0x1fb67c(0xf6),'desc':'create\x20paste\x20of\x20text.','category':'converter','use':_0x1fb67c(0xc9),'filename':__filename},async(_0x5479ee,_0x517d80)=>{const _0x5f22ee=_0x1fb67c;try{let _0x605ed2=_0x517d80?_0x517d80:_0x5479ee[_0x5f22ee(0x156)];if(!_0x605ed2)return _0x5479ee['reply'](_0x5f22ee(0x122));let _0x492561=await pastebin[_0x5f22ee(0xa5)](_0x605ed2,_0x5f22ee(0x167));return _0x5479ee[_0x5f22ee(0x16b)](_0x5f22ee(0x140)+_0x492561+_0x5f22ee(0x13c));}catch(_0x5232f8){await _0x5479ee[_0x5f22ee(0xff)](_0x5232f8+'\x0a\x0acommand:\x20pastebin\x20',_0x5232f8);}}),smd({'pattern':_0x1fb67c(0xca),'desc':'create\x20paste\x20of\x20text.','category':_0x1fb67c(0xbe),'use':_0x1fb67c(0xc9),'filename':__filename},async(_0x3a09c6,_0x2ec839)=>{const _0x37a086=_0x1fb67c;try{let _0x53dc07=_0x2ec839?_0x2ec839:_0x3a09c6[_0x37a086(0x156)],{data:_0x2ba0ed}=await axios['get']('https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=Suhail-Md+Bot&author_name=Suhail_Tech_Info&content=[%7B\x22tag\x22:\x22p\x22,\x22children\x22:[\x22'+_0x53dc07[_0x37a086(0x173)](/ /g,'+')+_0x37a086(0xfa));return _0x3a09c6[_0x37a086(0x16b)]('*Paste\x20created\x20on\x20telegraph*\x0aName:-'+util[_0x37a086(0x14f)](_0x2ba0ed[_0x37a086(0xc4)]['title'])+_0x37a086(0x179)+util[_0x37a086(0x14f)](_0x2ba0ed[_0x37a086(0xc4)][_0x37a086(0xc6)]));}catch(_0x47d188){await _0x3a09c6[_0x37a086(0xff)](_0x47d188+_0x37a086(0x11f),_0x47d188);}});let pmtypes=[_0x1fb67c(0x139),'stickerMessage'];smd({'cmdname':_0x1fb67c(0x127),'info':_0x1fb67c(0x163),'type':_0x1fb67c(0xbe),'use':_0x1fb67c(0xa1),'filename':__filename},async _0x31249c=>{const _0x3e7cca=_0x1fb67c;try{let _0x15c1a8=pmtypes['includes'](_0x31249c[_0x3e7cca(0x178)])?_0x31249c:_0x31249c[_0x3e7cca(0x135)];if(!_0x15c1a8||!pmtypes[_0x3e7cca(0x112)](_0x15c1a8?.[_0x3e7cca(0x178)]))return _0x31249c[_0x3e7cca(0x16b)](_0x3e7cca(0x16d));let _0x32e090=await _0x31249c[_0x3e7cca(0x124)]['downloadAndSaveMediaMessage'](_0x15c1a8);return await _0x31249c[_0x3e7cca(0x124)][_0x3e7cca(0x119)](_0x31249c['jid'],{'image':{'url':_0x32e090},'mimetype':'image/jpeg'});try{fs[_0x3e7cca(0xc5)](_0x32e090);}catch{}}catch(_0x5e6dd0){return await _0x31249c[_0x3e7cca(0xff)](_0x5e6dd0+'\x0a\x0acmdName:\x20photo\x0a');}});let audtypes=[_0x1fb67c(0xc1),'videoMessage'];function _0x54b9(){const _0x2bf4d6=['textAlign','sendMessage','Makes\x20sticker\x20of\x20replied\x20image/video.','\x0a\x0acmdName:\x20crop\x0a','png','crop','ptt','\x0a\x0acommand:\x20paste\x20','EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL','https://api.memegen.link/images/custom/','Please\x20reply\x20to\x20any\x20text\x20to\x20get\x20link.','image','bot','Downloads\x20wikimedia\x20images.','Makes\x20url\x20tiny.','photo','./temp/ttp.png','wallpaper','*_Request\x20Failed,\x20Reply\x20to\x20an\x20image\x20only!_*','packname','133PRuauT','styly\x2019\x20Suhail(For\x20specific\x20text)```\x0a\x0a','<query>','1854603qKgCJN','../lib','child_process','jid','createPNGStream','```🔢Reply\x20the\x20number\x20you\x20wants\x20to\x20select```\x20\x0a\x0a','reply_message','fs-extra','startsWith','toLowerCase','imageMessage','circle\x20sticker\x20of\x20image.','length','\x0a*Click\x20to\x20Get\x20Your\x20Text*','&apikey=with_love_souravkl11','\x0a\x0acommand\x20:\x20ebinary','post','_Here\x20is\x20your\x20link._\x0a','291448bfNECs','push','json','stickerMessage','tomp3','toString','Please\x20provide\x20text\x20to\x20generate\x20sticker','fancy','┏━━━━━━━━━━━━━━━━━━━━━━━━\x0a┃\x09*💬SUHAIL-MD_FANCY_TEXT💬*\x20\x0a┗━━━━━━━━━━━━━━━━━━━━━━━━\x0a\x0a\x20','random','log','*_Uhh\x20Dear,\x20Reply\x20to\x20an\x20image!!_*','<reply\x20to\x20sticker.>','trim','format','*Uhh\x20Please,\x20Reply\x20to\x20sticker*','alloc','styly','getpp','fancy\x2025\x20Suhail(For\x20specific\x20text)```\x0a\x0a','mimetype','reply_text','https://tinyurl.com/api-create.php?url=','\x0a\x0acmdName:\x20memegen\x0a','caption','author','https://bot.lyo.su/quote/generate','\x0a\x0acmdName:\x20ttp\x0a','<reply\x20to\x20any\x20message.>','audio/mpeg','clearRect','*_Request\x20Failed,\x20Wallpaper\x20not\x20be\x20fetched!_*','mp3','downloadAndSaveMediaMessage','Makes\x20photo\x20of\x20replied\x20sticker.','node-fetch','status','ROUNDED','Suhail\x20Tech\x20Info','\x0a\x0acmdName:\x20round\x0a','roundstic','get','reply','<reply\x20to\x20any\x20image/video.>','*_Uhh\x20Dear,\x20Reply\x20to\x20Any\x20Sticker.!!_*','adds\x20bass\x20in\x20given\x20sound','#000000','wa-sticker-formatter','*_Example\x20:\x20','*---Random\x20Wallpapers\x20Here---*','replace','\x0a\x0acmdName:\x20voice','\x0a\x0acmdName:\x20emix','../lib/','WORKTYPE','mtype','\x20\x0aUrl:-\x20','5205720oauLco','https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=','<reply\x20to\x20any\x20gif>','videoMessage','attp','convert\x20sticker\x20to\x20mp4.','createPaste','tomp4','createWriteStream','slice','join','\x0a\x0a*Fliped\x20text\x20:*\x0a','4324830AwFhAQ','fillStyle','\x0a\x0acmdName:\x20attp\x0a','styly\x20Suhail(For\x20all\x20text)\x0a\x09\x09','data','*_Request\x20Failed,\x20Make\x20sure\x20You\x20replied\x20an\x20image_*','#FFFFFF','unlinkSync','https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=','Makes\x20sticker\x20of\x20replied\x20image.','*Damn...\x20Reply\x20To\x20An\x20Animated\x20Sticker\x20or\x20Gif\x20*','getName','*「\x20\x20Text\x20Flipper\x20Tool\x20\x20」*\x20\x0a*IGiven\x20text\x20:*\x0a','sᴜʜᴀɪʟ-ᴍᴅ\x20♥️','https://raganork-api.onrender.com/api/attp?text=','\x0a\x0acmdName:\x20circle\x0a','*please\x20provide\x20text\x20and\x20image*','*_Uhh\x20Dear,\x20Reply\x20To\x20Animated\x20Sticker\x20or\x20Gif!!_*','take','converter','Provide\x20me\x20a\x20link','quotely','audioMessage','8048JyVRrr','toptt','result','unlink','url','emix','cropsticker','<\x20text\x20>','paste','4169133tqzxcu','readFileSync','<\x20text.>','Mixes\x20two\x20emojies.','Makes\x20sticker\x20of\x20given\x20text.','public','base64','sticker','Anime\x20Pics','Image\x20created:','circle','width','Sends\x20CitelsVoid\x20Qr\x20code\x20to\x20scan\x20and\x20get\x20your\x20session\x20id.','mp4','split','*_Can\x27t\x20create\x20mixture,\x20try\x20other\x20emojies_*','Makes\x20Sticker\x20of\x20quoted\x20text.','getContext','CROPPED','send','need_Media','FULL','test','*Uhh\x20please,\x20Reply\x20to\x20an\x20image*','round','5fAESre','circlestic','fillText','<reply\x20to\x20any\x20audio>','Makes\x20stylish/fancy\x20given\x20text','center','fromCharCode','```\x09\x09','<reply\x20to\x20image.>','*_No\x20Results\x20Found!_*','\x0a\x0acommand\x20:\x20qr','<text|search.>','sendUi','axios','*_Uhh\x20Dear,\x20Reply\x20to\x20Any\x20Video.!!_*','Suhail','Example\x20:\x20','<reply\x20to\x20any\x20Video>','pastebin','white','sender','memegen','\x22]%7D]&return_content=true','20px\x20Arial','voice','download','4128714xbGZKK','error','dbinary','error\x20in\x20quotely\x20:\x20','error\x20while\x20converting\x20sticker\x20to\x20mp4\x0a','circlesticker','match','results','emix\x20😅,🤔','\x0a\x0acmdName:\x20tiny','\x0a\x0acmdName:\x20sticker\x0a','pipe','fliptext\x20Suhail\x20MD!_*','tovideo','.png?background=','https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc','black','*_Scan\x20Qr\x20To\x20Get\x20You\x20Text_*','\x0a\x0acmdName:\x20toaudio','roundsticker','includes','\x0a\x0acmdName:\x20wallpaper\x0a','CIRCLE','downloader','\x0a\x0acommand\x20:\x20fliptext','*_Send\x20text\x20to\x20be\x20encoded.!_*'];_0x54b9=function(){return _0x2bf4d6;};return _0x54b9();}smd({'pattern':'toaudio','alias':[_0x1fb67c(0x161),_0x1fb67c(0x145)],'desc':'changes\x20type\x20to\x20audio.','category':_0x1fb67c(0xbe),'use':_0x1fb67c(0xf5),'filename':__filename},async _0x50ed1f=>{const _0x5e2c0a=_0x1fb67c;try{let _0x149bc9=audtypes[_0x5e2c0a(0x112)](_0x50ed1f[_0x5e2c0a(0x178)])?_0x50ed1f:_0x50ed1f[_0x5e2c0a(0x135)];if(!_0x149bc9||!audtypes[_0x5e2c0a(0x112)](_0x149bc9?.[_0x5e2c0a(0x178)]))return _0x50ed1f['reply'](_0x5e2c0a(0xf2));let _0x5b7c1e=await _0x50ed1f[_0x5e2c0a(0x124)][_0x5e2c0a(0x162)](_0x149bc9);const {toAudio:_0x3667e6}=require(_0x5e2c0a(0x130));let _0x294315=fs[_0x5e2c0a(0xcc)](_0x5b7c1e),_0x133462=await _0x3667e6(_0x294315);try{fs[_0x5e2c0a(0xc5)](_0x5b7c1e);}catch{}return await _0x50ed1f[_0x5e2c0a(0x124)][_0x5e2c0a(0x119)](_0x50ed1f['jid'],{'audio':_0x133462,'mimetype':_0x5e2c0a(0x15e)});}catch(_0x234184){return await _0x50ed1f[_0x5e2c0a(0xff)](_0x234184+_0x5e2c0a(0x110),_0x234184);}}),smd({'pattern':_0x1fb67c(0xfc),'alias':[_0x1fb67c(0x11e),_0x1fb67c(0xc3)],'desc':_0x1fb67c(0x16e),'category':'audio','use':_0x1fb67c(0xe7)},async _0x53ce0b=>{const _0x49875b=_0x1fb67c;try{let _0x758f42=audtypes[_0x49875b(0x112)](_0x53ce0b[_0x49875b(0x178)])?_0x53ce0b:_0x53ce0b[_0x49875b(0x135)];if(!_0x758f42||!audtypes[_0x49875b(0x112)](_0x758f42?.[_0x49875b(0x178)]))return _0x53ce0b[_0x49875b(0x16b)]('*_Uhh\x20Please,\x20Reply\x20to\x20audio/video_*');let _0x47558f=await _0x758f42['download']();return await _0x53ce0b[_0x49875b(0x124)]['sendMessage'](_0x53ce0b[_0x49875b(0x132)],{'audio':_0x47558f,'mimetype':_0x49875b(0x15e),'ptt':!![]},{'quoted':_0x53ce0b});}catch(_0x4fc603){return await _0x53ce0b[_0x49875b(0xff)](_0x4fc603+_0x49875b(0x174),_0x4fc603);}}),smd({'pattern':_0x1fb67c(0xa6),'alias':[_0x1fb67c(0xd8),_0x1fb67c(0x10b)],'desc':_0x1fb67c(0xa4),'category':_0x1fb67c(0xbe),'use':'<reply\x20to\x20any\x20Video>','filename':__filename},async _0x53f8fc=>{const _0xed62c1=_0x1fb67c;let _0x1a2aba=_0x53f8fc['mtype']===_0xed62c1(0xa2)?_0x53f8fc:_0x53f8fc[_0xed62c1(0x135)];if(!_0x1a2aba)return _0x53f8fc[_0xed62c1(0x16b)](_0xed62c1(0xbc));const {webp2mp4File:_0x1f5101}=require(_0xed62c1(0x130));let _0x3b3186=_0x1a2aba?.[_0xed62c1(0x155)]||'';if(_0x1a2aba?.['mtype']!=_0xed62c1(0xa2)&&!/webp/[_0xed62c1(0xe1)](_0x3b3186))return await _0x53f8fc[_0xed62c1(0xde)](_0xed62c1(0xb5));let _0x30fbb9=await _0x53f8fc[_0xed62c1(0x124)]['downloadAndSaveMediaMessage'](_0x1a2aba);try{try{if(/webp/[_0xed62c1(0xe1)](_0x3b3186)){let _0x281bfb=await _0x1f5101(_0x30fbb9);_0x30fbb9=_0x281bfb[_0xed62c1(0xc4)];}}catch(_0x3b605b){console[_0xed62c1(0x14b)](_0xed62c1(0x102),_0x3b605b);}await _0x53f8fc[_0xed62c1(0x124)][_0xed62c1(0x119)](_0x53f8fc[_0xed62c1(0x132)],{'video':{'url':_0x30fbb9},'caption':Config['caption']});try{return await fs[_0xed62c1(0xc5)](_0x30fbb9);}catch{}}catch(_0x1f3309){return await _0x53f8fc['error'](_0x1f3309+'\x0a\x0acmdName:\x20tomp4',_0x1f3309);}});function splitTextIntoLines(_0x11152a,_0x3a4e8d,_0x547f94){const _0x3c98cf=_0x1fb67c,_0x5129a6=_0x11152a[_0x3c98cf(0xd9)]('\x20'),_0x4368fc=[];let _0x457dbc='';for(const _0x233a3a of _0x5129a6){const _0x112304=_0x457dbc===''?_0x233a3a:_0x457dbc+'\x20'+_0x233a3a,_0x53fe4b=_0x3a4e8d['measureText'](_0x112304)[_0x3c98cf(0xd6)];_0x53fe4b<=_0x547f94?_0x457dbc=_0x112304:(_0x4368fc[_0x3c98cf(0x142)](_0x457dbc),_0x457dbc=_0x233a3a);}return _0x457dbc!==''&&_0x4368fc[_0x3c98cf(0x142)](_0x457dbc),_0x4368fc;}smd({'cmdname':'ttp','alias':[_0x1fb67c(0x169),'roundsticker'],'info':'Makes\x20sticker\x20of\x20replied\x20image/video.','type':_0x1fb67c(0xd2),'fromMe':s_ser,'filename':__filename,'use':_0x1fb67c(0xec)},async(_0x2192b2,_0x149986)=>{const _0x496055=_0x1fb67c;try{let _0x12e550=_0x149986||_0x2192b2[_0x496055(0x156)];if(_0x12e550){let _0x15d74a=parseInt(_0x12e550)||'';_0x15d74a&&!isNaN(_0x15d74a)&&(_0x12e550=await fancytext(''+_0x12e550[_0x496055(0xa8)](0x2),_0x15d74a));const {createCanvas:_0x115607}=require('canvas'),_0x2585d6=require('fs'),_0x1ecdfc=0x12c,_0x56a568=0x12c,_0x56aa06=_0x496055(0x128),_0xdb35d=_0x115607(_0x1ecdfc,_0x56a568),_0x30d379=_0xdb35d[_0x496055(0xdc)]('2d');_0x30d379[_0x496055(0x15f)](0x0,0x0,_0xdb35d[_0x496055(0xd6)],_0xdb35d['height']),_0x30d379['font']=_0x496055(0xfb),_0x30d379[_0x496055(0xac)]=_0x496055(0x10e),_0x30d379[_0x496055(0x118)]=_0x496055(0xe9);const _0x3f6c66=_0x1ecdfc-0x14,_0x998b70=splitTextIntoLines(_0x12e550,_0x30d379,_0x3f6c66),_0x246681=_0x998b70[_0x496055(0x13b)]*0x19,_0x142833=(_0x56a568-_0x246681)/0x2;_0x998b70['forEach']((_0x47429c,_0x456162)=>{const _0x21b8c5=_0x496055,_0xbbdcd4=_0x142833+_0x456162*0x19;_0x30d379[_0x21b8c5(0xe6)](_0x47429c,_0x1ecdfc/0x2,_0xbbdcd4);});const _0x3a9b91=_0xdb35d[_0x496055(0x133)](),_0x2a17f6=_0x2585d6[_0x496055(0xa7)](_0x56aa06);_0x3a9b91[_0x496055(0x109)](_0x2a17f6),_0x2a17f6['on']('finish',async()=>{const _0x1f05c4=_0x496055;console[_0x1f05c4(0x14b)](_0x1f05c4(0xd4),_0x56aa06);let _0x5c79c3=_0x2585d6[_0x1f05c4(0xcc)](_0x56aa06);_0x2192b2[_0x1f05c4(0xde)](_0x5c79c3,{},_0x1f05c4(0x123));let _0x22bd5e={'pack':Config[_0x1f05c4(0x12b)],'author':Config[_0x1f05c4(0x15a)],'type':StickerTypes[_0x1f05c4(0x166)],'quality':0x32};return await generateSticker(_0x2192b2,_0x5c79c3,_0x22bd5e),_0x5c79c3=![];});}else return _0x2192b2[_0x496055(0x16b)]('*_Uhh\x20Dear,\x20provide\x20text,\x20ex\x20.ttp\x204\x20hii\x20im\x20suhail!!_*');}catch(_0x2a0cc8){return await _0x2192b2[_0x496055(0xff)](_0x2a0cc8+_0x496055(0x15c));}});

