const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const { Client, Util } = require('discord.js');  
const getYoutubeID = require('get-youtube-id'); 
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const request = require('request');
const queue = new Map(); 
const client = new Discord.Client(); 
const db = require('quick.db');
const giphy = require('giphy-api')();    
const googl = require('goo.gl'); 
const translate = require('google-translate-api');   
const fs = require("fs"); 
const moment = require("moment");
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const zalgo = require('zalgolize');   
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const pretty = require('pretty-ms') 
var Canvas = require('canvas')
var port = process.env.PORT || 5000;



client.on('ready', function(){
    var ms = 15000 ;
    var setGame = [`${client.guilds.size} Server`,'invite bot | for add this bot👾 in your server',`${client.users.size} Members`,'اوامر البوت 📌 G-help | G-مساعدة','Bot By: DEX Gamer'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i]);
    }, ms);
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});












// رسالة الى ادمن البوت
client.on('message' , message => {
if (message.author.bot) return;
if (message.content.startsWith("-admin")) {
if (!message.channel.guild) return;
let args = message.content.split(" ").slice(1).join(" ");
client.users.get("556833562549026816").send(
	"\n" + "**" + "📮 السيرفر :" + "**" +
	"🔸" + "**" + "» " + message.guild.name + "**" +
	"\n" + "**" + "🗣 المرسل : " + "**" +
	"🔸" + "**" + "» " + message.author.tag + "**" +
	"\n" + "**" + "🗒 الرسالة : " + "**" +
	"\n" + "**" + args + "**"
)
let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('**:mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح**')
     .setThumbnail(message.author.avatarURL)
     .setFooter("شكرا لك")
message.channel.send(embed);
}});



// كود الترحيب بالخاص
client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`**:rose:  ولكم نورت السيرفر:rose: 
  :crown: ${member} :crown:  
  انت العضو رقم ${member.guild.memberCount}
 
 نتمنى أنك تستانس معانا ويعجبك السيرفر
 أوامر البوت حقنا هي
G-help | G-مساعدة

بوت الألعاب
-العاب
 
 ولازم تشوف قانون السيرفر اول شي ☺
اكتب  قانون السيرفر
 
 وبس ان شاء الله ترتاح معانا
 **`) 
  }).catch(console.error)
  })





// كود دعوة بواسطة
const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);
  client.guilds.forEach(king => {
    king.fetchInvites().then(guildInvites => {
      invites[king.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const gamer = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const welcome = member.guild.channels.find(channel => channel.name === "general");
    welcome.send(` ${member.user.tag} تم دعوته بواسطة : ||${inviter.tag}|| عدد الدعوات = ${invite.uses} `)
  });
});















// البوت
client.on('guildCreate', guild => {
client.channels.get("558736018434687006").send(`✅ **${client.user.tag} دخل سيرفر جديد
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
}); //Codes
client.on('guildDelete', guild => {
  client.channels.get("558736018434687006").send(`❎ **${client.user.tag} خرج من سيرفر
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});//Codes



// برودكاست
 client.on('message', message => {
	    var prefix = "G-";
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "رسالة جديدة";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... قد أرسلت رسالتك الى :  __${message.guild.members.size}__ عضو **`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
  
  var bc = new
       Discord.RichEmbed()
       .setColor('000000')
       .setTitle(':small_orange_diamond: **__رسالة جديدة__**  :small_orange_diamond:')
       .addField(':file_cabinet:  **__سيرفر__**', message.guild.name)
       .addField(':passport_control:  **__المرسل__**', message.author.username)
       .addField(':incoming_envelope:  **__الرسالة__**', args)
       .setImage('https://img.roro44.net/imgcache/2013/11/9810.gif')
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**البرودكاست تكنسل ☺**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });     





// الرد على الرسائل
client.on('message', message => {
    if(message.content === 'عمي البوت'){
        message.channel.send('**🍉 نعٍم حٍبيَ ۆشُ تبيَ**')
    }
});
client.on('message', message => {
    if(message.content === 'باك'){
        message.channel.send('**🍉 وُيلُِڪوُوُوُوُوُوُم بَآڪ**')
    }
});
client.on('message', message => {
    if(message.content === 'هلا بالعيال'){
        message.channel.send('**يْآ ﮬ̲̣̐لْآآآآآ بْڪْ مْنْوْوْوْرْ حْبْيْ**')
    }
});
client.on('message', message => {
    if(message.content === 'هلا'){
        message.channel.send(':watermelon:** هـلُِآ وُغلُِآ منوُوُوُوُرٍ **:watermelon:')
    }
});
client.on('message', message => {
    if(message.content === 'مع السلامة'){
        message.channel.send('**🌟 آلُِلُِهـ يسلُِمڪ وُآن شُآء آلُِلُِهـ نشُوُفُڪ فُي أقٌرٍبَ وُقٌت 🌟**')
    }
});
client.on('message', message => {
    if(message.content === 'صباح الخير'){
        message.channel.send('**`صبَآحٍ آلُِوُرٍرٍرٍرٍدِ منوُرٍ حٍبَيبَي 👳`**')
    }
});
client.on('message', message => {
    if(message.content === 'مساء الخير'){
        message.channel.send('**`منوُوُوُوُرٍ آلُِمسآء ڪلُِوُ 💖 مسآء آلُِسعٍآدِة`**')
    }
});
client.on('message', message => {
    if(message.content === 'منور'){
        message.channel.send('**آإلنور نورگ♥̨̥̬̩**')
    }
});
client.on('message', message => {
    if(message.content === 'السلام عليكم'){
        message.channel.send('**وعليكم السلام ورحمة الله تعالى وبركاته**')
    }
});
client.on('message', message => {
    if(message.content === 'اهلين'){
        message.channel.send('**آهـلُِين وُسهـلُِين وُمرٍحٍبَتين 😎**')
    }
});
client.on('message', message => {
    if(message.content === 'تصبح على خير'){
        message.channel.send('**وانت من اهل الخير حبي ♥**')
    }
});
client.on('message', message => {
    if(message.content === 'تصبحو على خير'){
        message.channel.send('**نوم العوافي وشكراً على وقتك الحلو ياحلو :relaxed:**')
    }
});

client.on('message', message => {
    if (message.content.startsWith("<@556967912104263686>"))
    
    message.reply("**هـلُِآ وُغلُِآ**");
 });

client.on('message', message => {
            if (message.content === 'ارحب') {
              message.channel.sendFile("https://orig00.deviantart.net/f531/f/2013/021/5/a/miku_welcome_sign__free_to_use__by_pinkbunnii-d5s9380.gif");
            }
         });
client.on('message', message => {
            if (message.content === 'حياك') {
            message.channel.sendFile("https://pa1.narvii.com/6872/b7d232511ac768a1f60d5e38aefd58236ee09402r1-736-544_hq.gif");
            }
         });
client.on('message', message => {
            if (message.content === 'اضحك اضحك') {
            message.channel.sendFile("https://www.bancuri.lol/wp-content/themes/bancuri/images/logo.gif");
            }
         });
client.on('message', message => {
            if (message.content === 'ارقص') {
            message.channel.sendFile("https://66.media.tumblr.com/tumblr_lefflpx6cz1qcmdmi.gif");
            }
         });
client.on('message', message => {
            if (message.content === 'اضحك') {
            message.channel.sendFile("https://66.media.tumblr.com/tumblr_leffh4gYO71qcmdmi.gif");
            }
         });
client.on('message', message => {
            if (message.content === 'أرقص') {
            message.channel.sendFile("https://66.media.tumblr.com/tumblr_leffgtlWYv1qcmdmi.gif");
            }
         });
client.on('message', message => {
            if (message.content === 'كيوت') {
            message.channel.sendFile("https://66.media.tumblr.com/tumblr_leffi7zZO41qcmdmi.gif");
            }
         });
client.on('message', message => {
            if (message.content === 'فرحان') {
            message.channel.sendFile("https://66.media.tumblr.com/tumblr_lefflhISA11qcmdmi.gif");
            }
         });
client.on('message', message => {
            if (message.content === 'مشاكل') {
            message.channel.sendFile("https://66.media.tumblr.com/tumblr_leffl9tvmh1qcmdmi.gif");
            }
         });
client.on('message', message => {
            if (message.content === 'احبك') {
            message.channel.sendFile("https://upload.3dlat.com/uploads/3dlat.net_13_15_1654_t3835038.gif");
            }
         });
client.on('message', message => {
            if (message.content === 'باك') {
            message.channel.sendFile("https://media.giphy.com/media/l1J9urAfGd3grKV6E/giphy.gif");
            }
         });

client.on('message' , async (message) => {
       if(message.content.startsWith(`<@${client.user.id}>`)) {
              message.channel.startTyping()
 let responses = [
       'كيف يمكن اساعدك' ,
       'الحشيش تماااام ؟!' ,
       'ابي اساعدك بس مدري كيف اقلك انك ناشبلي ...' ,
       'وش اكلت قبل شوي بالله عليك' ,
       'تدري انو وراك واحد يشوف فيك ولا لا .. شوف بس ولا تنفزع' ,
       'أقرب خزانة لك لا تفتح بابها لانو في شي ما راح يعجبك' ,
       'احس انو صوتك حلو لو طليت من الشباك وصارخت انا مجنووووووون' ,
       'انت ناشب لأهلي كل شوي تمنشني ... لا حول ولا قوة الا بالله' ,
       'معك امير العرش ولي عهد مملكة البطيخ شخصيا ' ,
	   'تفضل ماذا تريد ',
	   'كيفك' ,
	   'يقولك الشاعر الملك يبقى ملك ',
	   'تبي شي ',
	   'منشنتي صح !!',
	   '☺',
	   'يقووول ... لا ما قال شي اسف ☺',
	   'انت مين ',
	   'تعرفني صح ؟!',
	   'أنت وش أنت ',
	   'ماني فاضيلك .. أنجز',
	   'اذا تبي مساعدة اكتب Go-help أو G-مساعدة ||ولا تمنشني مرة ثانية||',
	   'أقول ليش ما تروح تشوفلك لعبة تلعبها أحسن من أنك تمنشني كل شوي ',
	   'هذا قسم الألعاب شوفلك لعبة وفكني منك يلا -العاب',
	   'منشن مرة ثانية يلا ابي اقلك شي',
	   'تدري انك حلو ما شاء الله عليك ..',
	   'تراني قاعد اسلكلك بس حتى ماتطفش هههههههه',
	   'ماخذ حقه بدق خشوووووم',
	   'بلا تعليق...',
	   'سيارتي جيب يركب بها عشراااا نفر هههههه',
	   'ابي أسألك عن حظك وش مسوي معك بالحياة',
	   'هذي صورتك الي عاملها ولا صورة ابن جيرانكم هههههه',
	   'اهم شي بالحياة اني قاعد احكي معك وانت واحد من المحظوظين للأسف',
	   'تحزم تحزم خويي تحزم ... اقول قم قم خلك من الهبل حقك يلا',
	   'ياعيوني انت يا قلبي وروح العب بعيد يلا امشي',
	   'زمان كان واحد مثلك كذا يمنشني وبعدين انتهت الحكاية بس',
	   'وش تبي ..',
	   '🤷‍♀️',
	   '👀',
	   'عندي لك اقتراح حلو ... منشني مرة ثانية',
	   'تعال ناخذ سيلفي انا وانا 🤳',
	   '1+1 كام يساوي هههههه',
	   'كنت ابي انام بس ماتركتني بحالي دقيقتين 😴',
	   'يالييييييييييل ماراح يروح يلعب ويفكني منو شويتين',
	   'ليش انا احلى منك ههههههه',
	   '||هههههههه||',
	   'من الاخير كذا في نص جبهتك F||or|| You ||💋|| ☺',
	   'اخلص وراية شغل .. ',
	   '💋',
	   '🙄 يازين وجهك الي شبه وجهك',
	   'باليز ,,,, لاتمنشني',
	   'هلا ... نعم ... خير ... تبيني بشي !!',
	   'ولا شي خلاص',
	   'انا رايح',
	   'انا جييييييت ☺',
	   'لا حوووول ,,, نعم 😒',
	   'وش ذا العسل ما  شاء الله عليك ☺',
	   'هلا بالذيب ♥',
	   'خوذلك لايك كبر وجهك 👍',
	   'يانشبة وش تبي كل شوي تمنشني 😡',
	   'الخيل والليل والبيداء تعرفني ... بس انت الي قاعد تزعجني بالمنشن 🤦‍♂️',
	   'لو منك اثنين راح يكون للقمر اخو اسمو اخو القمر ... يعني تبيه يصير اسمو عمر مثلا هههههه',

]
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
   message.channel.stopTyping()
       }
  
});


client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        
        ch.send(`${user} من ايش مستخبي حاطط اوفلاين وتكتب هههههههه`)
        .then(msg => {
            msg.delete(10000)
        })
    }
})



// لما تجي رسالة للبوت في الخاص
client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var Dark = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``! لقد تلقيت رساله جديدة في الخاص !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
    client.channels.get("558736018434687006").send({embed:Dark});
    }
});

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك وهذا أمر المساعدة | G-help او G-مساعدة**`)
        guild.owner.send(embed)
  });


// رسالة لاصحاب السيرفرات
client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('bc-all')){
if(!message.author.id === '556833562549026816') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});




// معلوما ت السيرفر //
client.on('message', function(msg) {
    if(msg.content.startsWith ('G-server') || msg.content.startsWith ('G-سيرفر')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`معلومات عن :  **${msg.guild.name}**`)
      .addField('🌐**__ نوع السيرفر__**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`[**${msg.guild.owner}**]`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString(),true)
      .addField('🙃**__ الايموجيات :__**', `[**${msg.guild.emojis.size}**] \`[\` **${msg.guild.emojis.map(m => m).join('**|**')} \`]\`**`, true);

      msg.channel.send({embed:embed});
    }
  });

// افاتار
client.on('message', message => {
    var prefix = 'G-'
    if (message.content.startsWith(prefix + "avatar") || message.content.startsWith("prefix + صورة")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

// ترحيب
client.on('guildMemberAdd', Sal => { 
    var embed = new Discord.RichEmbed()
    .setAuthor(Sal.user.username, Sal.user.avatarURL)
    .setThumbnail(Sal.user.avatarURL)
    .setImage('https://v.3bir.net/3bir/2016/10/1413483953714-1.gif') //هنا حط الصوره الي تبيها
    .setTitle('**عضو جديد!**')
    .setDescription('**ּٵهــﻻ ּبــگ ۛ ּڣــۑْ ڛــېْــڕڣــڕنــ̍ا ۛ ּاڷــمــٿــﯣاڞــ؏**')
    .addField('** 👤  انت العضو رقم **',`**[ ${Sal.guild.memberCount} ]**`)
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('name', 'general') 
    if (!channel) return;
    channel.send({embed : embed});
    });

client.on('guildMemberAdd', Sal => { 
    var embed = new Discord.RichEmbed()
    .setAuthor(Sal.user.username, Sal.user.avatarURL)
    .setThumbnail(Sal.user.avatarURL)
    .setTitle('**نورت السيرفر ☺ يالحبيب**')
    .setDescription('**حتى تفعل حسابك بالسيرفر وتقدر تشوف باقي الرومات اكتب | G-active أو G-تفعيل**')
    .addField('**انت العضو :**',`**[ ${Sal.guild.memberCount} ]**`)
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('name', 'activation') 
    if (!channel) return;
    channel.send({embed : embed});
    });






// هوية
client.on("message", msg => {
  if(msg.content === 'G-' + "use2" || msg.content === 'G-' + "هوية") {
      const embed = new Discord.RichEmbed();
  embed.addField("**🔱| اسم الحساب :**", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("**🆔| الاي دي :**", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('**📛| الحالة :**', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('**🎲| بلاينج :**', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('**🏅| الرتب : **', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('**📅| تم الانضمام للديسكورد في :**', `${msg.createdAt}`,true)
          .addField('**🤖| هل هو بوت ؟**', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});

// مسح الشات بالعدد
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear" || command === "مسح") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("**```ضع عدد الرسائل التي تريد مسحها 👌```**").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

// بينق
client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('G-ping') || message.content.startsWith('G-بينق')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });

// ميوت شات
client.on('message', async message =>{
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES')) return
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute" || command == "اسكت") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
    await(tomute.addRole(muterole.id));
    message.reply(`**<@${tomute.id}> لقد تم اعطاء ميوت شات مدته : ${ms(ms(mutetime))}**`);
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **لقد انتهى وقت الميوت يمكنك الكتابة الآن** :white_check_mark:`);
    }, ms(mutetime));
}
if(command === `unmute` || command === `تكلم`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك الصلاحية لفك الميوت** :x:").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
  let role = message.guild.roles.find (r => r.name === "Muted");
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت يمكنك الكتابة**");
  return;
  }
});


// قفل الشات
client.on('message', message => {
 
    if (message.content === "G-close chat" || message.content === "G-قفل الشات") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
 
           }).then(() => {
               message.reply("  **تم تقفيل الشات  :white_check_mark:**  ")
           });
             }
if (message.content === "G-open chat" || message.content === "G-افتح الشات") {
    if(!message.channel.guild) return message.reply(' This command only for servers');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
 
           }).then(() => {
               message.reply("  **تم فتح الشات  :white_check_mark:**  ")
           });
             }
 
 
 
});

// كود الباند مع سبب
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
 
  if (command == "ban" || command == "باند") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن الشخص واكتب سبب الباند بعد المنشن**");
  if(!reason) return message.reply ("**لم تكتب سبب الباند**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`**تم تبنيد العضو**`, user.displayAvatarURL)
  .setColor("FF0000")
  .setTimestamp()
  .addField("**العضو المتبند :**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**تم تبنيده من طرف :**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب :**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


// كود كيك مع سبب
var prefix = "G-"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick" || command == "طرد") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن الشخص واكتب سبب الطرد بعد المنشن**");
  if(!reason) return message.reply ("**لم تكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).kick();
 
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`**تم طرد !**`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**العضو المطرود :**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**تم طرده من طرف :**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب :**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});


// انفايت رابط
client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith("رابط")) {

        message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send(`** تم أرسال الرابط برسالة خاصة **`)

      message.author.send(`**هـذَآ هـوُ رٍآبَطُ سيرٍفُرٍنآ آذَآ حٍآبَبَ تجٍيبَ آصدِقٌآء وُترٍبَح رٍتبَ زْيآدِة معٍنآ
مدة الرابط : يـوم
 عدد استخدامات الرابط : 10 **`)
    }
});

// تقديم هوية الاعضاء
var guilds = {};
client.on('message',async message => {
 var prefix2 = '#';//البرفكس
  if(message.content.startsWith(prefix2 + "تقديم")) {
if(!message.channel.guild) return message.reply(' ');
  let submite = message.guild.channels.find(`name`, "التقديمات");
  if(!submite) return message.channel.send("❌ أنا آسف لا يوجد روم كتابي اسمه `التقديمات`");
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
    message.channel.send('📝 **| من فضلك اكتب اسمك الأن... ✏ **').then(msg => {
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 90000,
      errors: ['time']
    })
    .then(collected => {
      collected.first().delete();
      thisMessage = collected.first().content;
      let boi;
      msg.edit('📜 **| من فضلك اكتب عمرك  الأن... ✏ **').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 90000,
            errors: ['time']
          })
          .then(collected => {
            collected.first().delete();
            boi = collected.first().content;
            let boi2;
            msg.edit('🤵 **| من فضلك اكتب من اي بلد انت الأن... ✏ **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ['time']
              })
              .then(collected => {
                collected.first().delete();
              boi2 = collected.first().content;
      msg.edit('🛡 **|  هل انت متأكد من تقديمك؟ |  نعم  او  لا**');
 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        if(collected.first().content === 'لا') {
          msg.delete();
          message.delete();
          thisFalse = false;
        }
        if(collected.first().content === 'نعم') {
          if(thisFalse === false) return;
          msg.edit('🕊 **| Done ✅, تم بنجاح نشر تقديم في روم التقديمات**');
          collected.first().delete();
          submite.send(`**[:arrow_down: ${message.guild.name} :arrow_down:]**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
:sunglasses: **__اسم العضو__** : **${thisMessage}**
:boy:  **__العمر__** : **${boi}**
:earth_africa: **__من بلد__** : **${boi2}**
:thumbsup: **__تم التقديم بواسطة__** : **${message.author}**
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
@everyone | @here
`);
        }
      }
  );
});
    });
  }
    );
  });
}
);
})}});

// كود انفايت البوت
client.on('message', message => {
  if (true) {
if (message.content === '-invite bot') {
      message.author.send('  **هذا هو رابط البوت وتستطيع اضافته الى سيرفرك بنجاع** |	  https://discordapp.com/api/oauth2/authorize?client_id=595062267746189352&permissions=8&scope=bot  ').catch(e => console.log(e.stack));
    }
   }
  }); 
client.on('message', message => {
     if (message.content === "-invite bot") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField("** Done | تــــم **" , "**تم ارسال رابط انفايت البوت في الخاص**")
  message.channel.sendEmbed(embed);
    }
});

// سحب الكل لروم الصوت
 client.on('message', message => {
     if(message.content.startsWith(prefix + 'move all') || message.content.startsWith(prefix + 'سحب الكل')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
     if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
     if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي أولا**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)
     }
     });

// سحب عضو
client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move') || message.content.startsWith('prefix + سحب')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("**``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "سحب [منشن العضو]``**")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("**لا تستطيع سحب **"+ message.mentions.members.first() +"** يجب ان يكون هذه العضو في روم صوتي**")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});

// ميوت شات انفايت سيرفر
 client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers **');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("أنت معاقب")
            .addField(`**لقد تسببت لنفسك بميوت شات **` , `**بسبب نشرك لرابط سيرفر ثاني في سيرفرنا**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('**` انت معاقب ميوت شات بسبب نشر سيرفرات ان كان عن طريق الخطا من فضلك تكلم مع الادارة `**');
   
       
    }
})

// ايموجي البوت يكتب
const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};
'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});
client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "اكتب")) {
          let args = message.content.split(" ").slice(1);
  if (args.length < 1) {
    message.channel.send('**وش تبيني اكتب طيب !!**');
}

message.channel.send(
    args.join(' ')
        .split('')
        .map(c => mapping[c] || c)
        .join('')
);
};
});

// امر تذكير بالوقت
var attentions = {};
var times = {
    "1⃣": "m",
    "2⃣": "h",
    "3⃣": "d"
}
var times_ms = {
    "m": 1000 * 60,
    "h": 1000 * 60 * 60,
    "d": 1000 * 60 * 60 * 24
}
var times_name = {
    "m": "الدقائق",
    "h": "الساعات",
    "d": "الأيام"
}
console.log('Alarm Code . By NorElden..');
client.on('message',( message )=>{
    if( message.content.startsWith( prefix + 'ذكرني' ) ){
        if( attentions[ message.member ] ) {
            message.channel.send( message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( (m) =>{
                m.react('1⃣').then( r1 => {
                    m.react('2⃣').then( r2 => {
                        setTimeout(function ( ){
                            m.edit( message.member +', ** يوجد تذكير مضاف بالفعل, هل تريد حذفه ؟ ** \n**:one: نعم** \n **:two: لا** ' );
                            m.awaitReactions((reaction, user) => user.id == message.author.id, {time: 60000, maxEmojis: 1})
                            .then(result => {
                                var reaction = result.firstKey();
                                if( reaction == "1⃣" || reaction == "2⃣" ){
                                    if( reaction == "1⃣" ){
                                        clearTimeout(attentions[message.member]['timer']);
                                        attentions[message.member] = undefined;
                                        m.edit(message.member + '**:white_check_mark: تم حذف التذكير, يمكنك الآن أضافة واحد**');
                                    } else if( reaction == "2⃣" ){
                                        m.edit(message.member + '** لن يتم حذف التذكير **')
                                    }
                                    m.clearReactions();
                                }
                            });
                        },1000);
                    });
                });
            });
           
        } else {
            attentions[message.member] = { };
            message.channel.send( message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( (m) =>{
                m.edit( message.member + ', **:writing_hand: ماذا تريد ان يكون عنوان التذكير **' )
                m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                    m1 = m1.first();
                    attentions[message.member]['title'] = m1.content;
                    m1.delete();
                    m.edit(message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( (m) =>{
                        m.edit( message.member + ', **:writing_hand: ماذا تريد ان يكون وصف التذكير **' )
                        m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                            m2 = m2.first();
                            attentions[message.member]['desc'] = m2.content;
                            m2.delete()
                            m.edit(message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( ()=>{
                                m.react('1⃣').then( r1 => {
                                    m.react('2⃣').then( r2 => {
                                        m.react('3⃣').then( r2 => {
                                            setTimeout(function ( ){
                                                m.edit(message.member + ', **:writing_hand: حدد موعد التذكير التقريبي**\n **:one: بعد دقائق ** \n **:two: بعد ساعات ** \n **:three: بعد أيام**');
                                                m.awaitReactions((reaction, user) => user.id == message.author.id, {time: 60000, maxEmojis: 1})
                                                    .then(result => {
                                                        var reaction = result.firstKey();
                                                        if( reaction == "1⃣" || reaction == "2⃣" || reaction == "3⃣" ){
                                                            attentions[message.member]['time'] = times_ms[times[reaction]];
                                                            m.edit(message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then ( ( ) =>{
                                                            m.clearReactions().then( () =>{
                                                                m.edit(message.member + ', **:timer: اذكر عدد '+times_name[times[reaction]]+'**' )
                                                                    m.channel.awaitMessages( m3 => m3.author == message.author && !isNaN(m3.content),{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                                                        m3 = m3.first();
                                                                        attentions[message.member]['time_num'] = m3.content;
                                                                        m3.delete();
                                                                        attentions[message.member]['timer'] = setTimeout(function( ){
                                                                            message.member.send('** '+message.member+' تذكير !! **')
                                                                            var embed = new Discord.RichEmbed( );
                                                                            embed.setTitle( attentions[message.member]['title'] );
                                                                            embed.setDescription( attentions[message.member]['desc'] );
                                                                            embed.setTimestamp();
                                                                            message.member.send({embed});
                                                                            message.member.send('** '+message.member+' تذكير !! **')
                                                                        }, attentions[message.member]['time_num'] * attentions[message.member]['time'] );
                                                                       
                                                                        message.reply('** :white_check_mark: تم أضافة التذكير, سيتم تذكيرك لاحقاً **');
                                                                        m.delete();
                                                                        message.delete();
                                                                    }).catch(function(){ m.delete( ); attentions[message.member] = undefined; } );
                                                                });
                                                            });
                                                        }
                                                    });
                                            },1000);
                                        });
                                    });
                                });
                            }).catch(function() { m.delete();attentions[message.member] = undefined;  });
                        }).catch(function() { m.delete(); attentions[message.member] = undefined;  });
                    });
                   
                }).catch(function( ) {m.delete(); attentions[message.member] = undefined; });
            });
        }
    }
});


// اعضاء السيرفر المتصلين والاوفلاين
client.on('message',function(message) {
if (message.author.bot) return;
if(!message.channel.guild) return;
if (message.content === prefix + "members" || message.content === prefix + "اعضاء السيرفر") {
 const embed = new Discord.RichEmbed()
.setDescription(`**الأعضاء والبوتات الموجودة بالسيرفر 💯

:diamond_shape_with_a_dot_inside:   عدد الأعضاء :  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
-=-=-=-=-=-=-=-=-=-=-
:green_heart: المتصلين :     ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:yellow_heart:  مشغولين :     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:heart:  ممنوع الإزعاج :     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:space_invader: البوتات :     ${message.guild.members.filter(m=>m.user.bot).size} 
-=-=-=-=-=-=-=-=-=-=-**`)
message.channel.send({embed});
}
});


// انشاء رومات صوتية وكتابية
client.on("message",async msg => {
  let Alpha = 'G-';
  if(msg.content.startsWith(Alpha + "create") || msg.content.startsWith(Alpha + "انشاء")){
    if(!msg.guild.members.get(msg.author.id).hasPermission('ADMINISTRATOR')) return msg.reply("**You Don't Have Administrator Permission**").then(a => {
      a.delete(2222)
    })
    if(!msg.guild.members.get(client.user.id).hasPermission('ADMINISTRATOR')) return msg.reply("**I'm Don't Have Administrator Permission**").then(b => {
      b.delete(2222)
    })
    let fltr = m => m.author.id === msg.author.id
    let name = '';
    await msg.reply("**اكتب اسم الروم الان**").then(e => {
      msg.channel.awaitMessages(fltr, {
        time: 60000,
        max:1
      })
      .then(co => {
      name = co.first().content
      co.first().delete();
      let type = '';
      e.edit(`${msg.author},**اكتب نوع الروم الان | Text Or Voice**`).then(e => {
      msg.channel.awaitMessages(fltr, {
        time: 600000,
        max: 1
      })
      .then(co => {
        type = co.first().content 
        co.first().delete();
        e.edit(`${msg.author},**هل انت متاْكد؟**| ✔ | | ❌ |`).then(od => {
          od.react("✔")
          .then(()=> od.react("✔"))
          .then(()=> od.react("❌"))
          let reaction1Filter = (reaction, user) => reaction.emoji.name === '✔' && user.id === msg.author.id;
          let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
          let reaction1 = od.createReactionCollector(reaction1Filter, { time: 12000 });
          let reaction2 = od.createReactionCollector(reaction2Filter, { time: 12000 });
          reaction1.on("collect", r => {
            msg.reply("**تم صنع الروم بنجاح ✔**").then(op => {
              op.delete(2222)
              od.delete(2222)
              msg.guild.createChannel(name,type);
            })
          })    
          reaction2.on("collect", r => {
            msg.reply("**تم الغاء صنع الروم بنجاح ✔**").then(de => {
              de.delete(2222)
              od.delete(2222)
            })
          }) 
        })
      })
      })
      })
    })
  }
})


// السيرفرات التي فيها بوتنا
client.on('message', message => {
    if(message.content == 'G-bot GO') {
             if(!message.author.id === '556833562549026816') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    gbots = g.members.filter(m=>m.bot).size;
    groles = g.roles.map(r=> {return r.name});
    let serv = new Discord.RichEmbed()
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('**عدد الأعضاء** ',gmemb = g.members.size)
    .setColor('RANDOM')
     message.channel.sendEmbed(serv);
    }) 
    }
    });
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "bot GO")) {
       message.channel.send(`**متواجد حاليا في : \`\`${client.guilds.size}\`\` سيرفرات مختلفة**`);
   } 
});

// انشاء غرف بالوقت
 client.on('message', async message => {
  if(message.content.startsWith(prefix + "فعالية")) {
    await message.channel.send("**ارسل اسم الروم**").then(e => {
    let filter = m => m.author.id === message.author.id
    let name = '';
    let time = '';
    let type = '';
    let limit = '';
  
    message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
    .then(collected => {
      name = collected.first().content
      collected.first().delete()

e.edit("**ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180**")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("**الوقت بالدقائق ! ارقام فقطٍ**");
if(co.first().content > 180 || co.first().content < 2) return message.channel.send("**لا اقل من دقيقتان ولا اكثر من 180 دقيقه**")
  time = co.first().content
co.first().delete()
  e.edit("**ارسل نوع الروم text, voice**")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(col => {
  type = col.first().content
col.first().delete()
e.edit("**ارسل عدد الاعضاء الذين يستطيعون الدخول**")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(coll => {
  if(isNaN(coll.first().content)) return message.reply("**عدد الاعضاء يكون بالارقام فقط**");
    limit = coll.first().content
coll.first().delete()
  e.edit("**جاري اعداد الغرفه الرجاء الانتضار...**")
  message.guild.createChannel(name, type).then(c => {
    c.edit({
      userLimit: limit
    })
    setTimeout(() => {
      c.delete()
      message.channel.send("**تم انقضاء الوقت**")
    }, Math.floor(time*60000))
    
  })
  e.edit("**تم انشاء الغرفه استمتع**")
})
})
})
})
})
}
})

// كود منع دخول الرومات الصوتية
client.on('message', eyad => {
  if (eyad.content.startsWith('G-out') || eyad.content.startsWith('G-اخرج')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
let men = eyad.mentions.users.first()
let mas = eyad.author
if(!men) return eyad.channel.send('`منشن الشخص الذي تود منعه من دخول الرومات الصوتية`');
eyad.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
لقد تم منعك من دخول الرومات الصوتيه 
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`**          <@${men.id}>
لقد تم منعك من دخول الرومات الصوتيه 
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(10000)})
    }
})
client.on('message', eyad => {
  if (eyad.content.startsWith('G-enter') || eyad.content.startsWith('G-ادخل')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
 let men = eyad.mentions.users.first()
 let mas = eyad.author
 if(!men) return eyad.channel.send('`منشن الشخص الذي تود نزع منع دخوله الى الرومات الصوتية`');
 eyad.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
 الان يمكنك الدخول الي الرومات الصوتيه :)
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
الان يمكنك الدخول الي الرومات الصوتيه
بواسطة : <@${eyad.author.id}>
`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(15000)})
    }
})

// لاعطاء رتبة بالرياكشن
client.on('message', async message => {//alpha codes & Mrx -Dev
    if (message.content.startsWith(prefix + 'giveroll') || message.content.startsWith('prefix + رتبة')) {//alpha codes & Mrx -Dev
      var args = message.content.split(' ').slice(2);
      let member = message.mentions.members.first();
      let role = message.guild.roles.find(r => r.name == args);
      if(!role) return message.channel.send('**:no_entry: | لم تكتب الأمر بشكل صحيح أو أن الرتبة فيها زخرفات لم أقبلها**');
      if(role.name === '@everyone') return message.channel.send('**:no_entry: | لم تكتب الأمر بشكل صحيح أو أن الرتبة فيها زخرفات لم أقبلها**');
        if (!args) message.reply(`أكتب إسم الرتبة`)
        if (!member) message.reply(`منشن الشخص الذي تود أن تعطيه رتبة`)
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('**You Do not have permission** `MANAGE_ROLES`' );
        await message.channel.sendMessage(`**🎁 لإعطاء الرتبة
:x: إلغاء الأمر**`).then(e => {//alpha codes & Mrx -Dev
            e.react("🎁")//alpha codes & Mrx -Dev
            .then(()=> e.react("❌"))//alpha codes & Mrx -Dev
            .then(()=> e.react("🎁")).then(() => c.delete(20000))//alpha codes & Mrx -Dev
            let reaction1Filter = (reaction, user) => reaction.emoji.name === '🎁' && user.id === message.author.id;//alpha codes & Mrx -Dev
            let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;//alpha codes & Mrx -Dev
            let reaction1 = e.createReactionCollector(reaction1Filter, { time: 20000 });//alpha codes & Mrx -Dev
            let reaction2 =e.createReactionCollector(reaction2Filter, { time: 20000 });//alpha codes & Mrx -Dev
            reaction1.on("collect", c => {//alpha codes & Mrx -Dev
              member.addRole(role);
              e.edit(`:white_check_mark: | <@${member.id}> مبروك عليك رتبة **${role.name}** .`).then(c => {
                 c.delete(5000).then(()=>{
                   msg.delete()
                         })
                 })
                }
  
                    )//alpha codes & Mrx -Dev
                    reaction2.on("collect", c => {//alpha codes & Mrx -Dev
                      e.edit('**تم إلغاء الأمر :x:**').then(c => {
                        c.delete(10000)
                        message.delete()
})})})}});

// كود التصويت مع منشنت الروم
client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "vote") || message.content.startsWith(prefix + "تصويت")) {
                if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`لا يوجد لديك صلاحيه`)
    let args = message.content.split(" ").slice(1);


    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {
        return message.reply("أكتب الأمر كاتالي : G-vote #<منشن الروم> اكتب التصويت هنا")
    }

    if (!suggestmessage) {
        return message.reply("لم تكتب التصويت على ماذا!!")
    
         
    }
     message.delete();
suggestchannel.send("@everyone  `||` @here ");
    let embed = new Discord.RichEmbed()
        .addField("**تصويت**", `${suggestmessage}`)
        .setFooter(`من قبل : ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("✅").then(r => msg.react("❎"))
    });


    message.reply(`Your message is sended.`).then(msg => msg.delete(1000));
    return;
}
});




// كود الشكوى ايمبد
client.on('message', function(message) {
    if(message.content.startsWith(prefix + "اشتكي") || message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**اكتب كذا -اشتكي @<منشن الشخص> اكتب الشكوى**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`إبلاغ جديد`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ للعقوبة")
message.channel.send(Rembed)
message.channel.send("__لو انك تمزح وتبلغ راح تتعرض للعقوبة أنت ... هل أنت متأكد انك صحيح ؟؟__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - تم إرسال الشكوى! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - تم إلغاء الشكوى!**");
})
})
}
});




// قانون السيرفر
client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith("قانون السيرفر")) {

        message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send(`**تم ارسال قانون السيرفر في الخاص**`)

      message.author.send(`**هلا وسهلا بك(ي) في سيرفرنا المتواضع
أرجوا ان تقضي وقتا ممتعا وان تستفيد(ي) معنا في اسرتنا المتواضعة التي هي اسرتك من الآن ان شاء الله
اسرتنا اسرة محترمة فيرجى منك التقيد بما هو مذكور في الأسفل فنحن نراعي ظروف ومشاعر الاخرين فكونك(ي) مميزا(ة) بأخلاقك لكي ترفع(ي) فوق رؤوسنا 
قوانيننا بسيطة وهي كالتالي :

:small_orange_diamond: : المحافظة على الاحترام المتبادل. 
:small_orange_diamond: : يمنع نشر صور لأعلام أو رايات أو أشخاص أو مقولات تحمل طابع طائفي . 
:small_orange_diamond: : يمنع نشر صور شخصية أو أرقام جوالات أو ايميلات او نشر روابط صفحات أو سيرفرات أخرى .
:small_orange_diamond: : سيتم حذف أي عضو صورته الشخصية غير لائقة او غير أخلاقية . 
:small_orange_diamond: : الأدمن هو اللي يقرر حذف المنشور وحظر الأعضاء ولا يحق لأي عضو يتدخل بهذا الشي مهما كانت رتبته .
:small_orange_diamond: : ممنوع أي شاب يطلب اضافه من بنت في السيرفر او يقول لها تعالي خاص اما خارج سيرفرنا انت حر . 
:small_orange_diamond: : يمنع نشر منشورات تسبب الفتنة بين الأعضاء او منشورات لا أخلاقية . 
:small_orange_diamond: : عليك التزام الأدب اثناء النقاشات واحترام أراء الأخرين ويمنع السب والشتم داخل السيرفر . 
:small_orange_diamond: : المسؤولون لهم الحق في حذف ما يرونه مسيئا دون الرجوع الى صاحب الرسالة . 
:small_orange_diamond: : ممنوع تعمل سبام في الشات او راح تاخذ ميوت شات . 
:small_orange_diamond: : لا ترسل اي رابط سيرفر في الشات او الخاص لأي عضو من الأعضاء . 
:small_orange_diamond: : أي عضو يتعرض للإهانة أو التجريح عليه أن يتوجه بالشكوى لإدارة المجموعة وسيتم حظر أي عضو يخالف القوانين .
**`)
    }
});



// كود تفعيل الحساب
client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'not active'));
});


client.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'active') || message.content.startsWith(prefix + 'تفعيل')) {
        let modlog = client.channels.find('name', 'activation');
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendMessage(`**لتفعيل حسابك بالسيرفر إضغط على علامة الصح تحت | لديك 15 ثانية فقط للتفعيل**`).then(msg => {
        
        
        msg.react('✅')
       .then(() => msg.react('✅'))
     
     

       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
     
                                                        
                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "GO"));
                                   message.member.removeRole(message.guild.roles.find("name", "not active"));
                                   msg.delete();
                                   message.channel.send(`**لقد تم تفعيل حسابك.**`).then(m => m.delete(1000));
     
                                   })
                                   })
                                   }
                                   });






// الوان
client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == 'G-لون'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number ** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});




// قائمة ايموجي السيرفر
client.on('message', message => { 
    if (message.content.startsWith(prefix + 'emojilist') || message.content.startsWith(prefix + 'ايموجي')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 

    }
});



// سيرفر الدعم
   client.on('message', message => {
     if (message.content === "G-support" || message.content === "G-دعم") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: سيرفر الدعم :gear: **" , "  **https://discord.gg/XQUZ6Xa**")
     
     
  message.channel.sendEmbed(embed);
    }
});




// user probot
 client.on('message', message => {
    if(message.content.startsWith (prefix  + 'user') || message.content.startsWith (prefix + 'هويه')) {
     moment.locale('ar-ly');
var args = message.content.split(" ").slice(1); 
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}
let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 
  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
  message.guild.fetchInvites().then(invs => {
    let member = client.guilds.get(message.guild.id).members.get(oi);
    let personalInvites = invs.filter(i => i.inviter.id === oi);
    let urll = invs.filter(i => i.inviter.id === oi);
    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   let exec = personalInvites.reduce((p, v) => v.inviter);
 let possibleInvites = [['Total de membros recrutados:']];
possibleInvites.push([inviteCount, exec]);
        let user = message.mentions.users.first() || message.author;
        let mem = message.guild.member(user);
        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(':دخولك لديسكورد', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
        .addField(':انضمامك لسيرفنا', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
        .setTitle(`__${z.username}__ **Info**`)
         .addField('عدد الدعوات', `**${Number(inviteCount)}**`, true)
.setThumbnail(imagemm)
.setFooter(message.author.username, message.author.avatarURL);

     message.channel.send({embed:heroo});    
    });

};
});





        client.on('guildMemberRemove', member => {
            var embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .setThumbnail(member.user.avatarURL)
            .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
            .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
            .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
            .setColor('RED')
            .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
        
        var channel =member.guild.channels.find('name', 'leave')
        if (!channel) return;
        channel.send({embed : embed});
        })



/*
// Rainbow
client.on('message', message => {
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'set')) {
	  let role = message.guild.roles.find('name', 'VIP Rainbow.')
    if(role) return message.channel.send(`This Step Already Completed !`)
  if(!role){
    rainbow =  message.guild.createRole({
   name: "VIP Rainbow.",
   color: "#000000",
   permissions:[]
})

}
message.channel.send('**Done The Rainbow Role Setup Has Been Completed**')
}})

client.on('ready', () => {
  setInterval(function(){
      client.guilds.forEach(g => {
                  var role = g.roles.find('name', 'VIP Rainbow.');
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 5000);
})
client.on("message", message => {
  if (message.content === "-Rainbow help") {
      message.react('🌈')
        let rainembed = new Discord.RichEmbed()
        .setDescription(`**
========🌈 Rainbow Bot. 🌈========

G-set 
لإنشاء رتبة الرينبو وبدا الرينبو
To create the role of the Rainbow & Start The Rainbow

خطوات لو الرتبة م أشتغلت .!!
1 ضع رتبة الرينبو فوق الالوان أو الرتب الملونه لو فيه
2 ضع رتبة البوت __GO Bot__ فوق رتبة الرينبو
The steps of the role did not worked .!!
1 Place the role of the Rainbow above the colors or colored ranks if it
2 Put the bot role __GO Bot__ above the role of the Rainbow 

========🌈 Rainbow Bot. 🌈========
**`)
message.author.sendEmbed(rainembed)
    }})

*/



// امر help
   client.on("message", function(message) {
    var prefix = "G-";
   if(message.content.startsWith(prefix + "help") || message.content.startsWith(prefix + "مساعدة")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .setTitle('**تفضل أوامر البوتات حقنا وان شاء الله تعجبك **')
    .addField("Puplic | عامه","🗣",true)
    .addField("Admin | ادمنيه","🔴",true)
    .addField("Games | العاب","🕹",true)
    .addField("Orders | قانون السيرفر","🚧",true)
     message.channel.send(RpsEmbed).then(msg => {
     msg.react('🗣')
     msg.react("🔴")
     msg.react("🕹")
     msg.react("🚧")
.then(() => msg.react('🗣'))
.then(() => msg.react('🔴'))
.then(() => msg.react('🕹'))
.then(() => msg.react('🚧'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🗣' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🔴' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🕹' && user.id === message.author.id;
let reaction4Filter = (reaction, user) => reaction.emoji.name === '🚧' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 20000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 19000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 18000 });
let reaction4 = msg.createReactionCollector(reaction4Filter, { time: 17000 });
reaction1.on("collect", r => {
  const embed = new Discord.RichEmbed()
      .setThumbnail('https://images-ext-2.discordapp.net/external/JD7xvknBVacXHoC2re78AtJN4PUY5IjUZy1uWIqzObI/https/s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2015/08/25155834/people-icon.png')
      .setColor("#000000")
      .setDescription(`
**:small_orange_diamond: هذي قائمة المساعدة لبوت Gamer's Offic وراح نضيف اشياء ثانية عن قريب ..**
:sparkles: **G-admin** :point_left: **لارسال رسالة الى ادمن البوت __اكتب الامر وبعده الرسالة__**
:sparkles: **invite bot** :point_left: **إذا تبي تضيف البوت في سيرفرك راح يرسلك في الخاص**
:sparkles: **قانون السيرفر** :point_left: **للإطلاع على قانون السيرفر**
:sparkles: **G-server | G-سيرفر** :point_left: **لرؤية معلومات مفصلة عن السيرفر**
:sparkles: **G-members | G-اعضاء السيرفر** :point_left: **احصائيات بحالة اعضاء السيرفر**
:sparkles: **G-profile | G-بروفايل** :point_left: **لرؤية البروفايل حقك**
:sparkles: **G-avatar | G-صورة** :point_left: **لرؤية صورتك الشخصية**
:sparkles: **G-user | G-هوية** :point_left: **لرؤية معلومات عنك بسيط**
:sparkles: **G-use2 | G-هويه** :point_left: **لرؤية معلومات عنك مطور**
:sparkles: **#تقديم** :point_left: **عرف بنفسك في روم خاصة بالتقديمات**
:sparkles: **G-ping | G-بينق** :point_left: **لمعرفة البينق لك وللبوت**
:sparkles: **رابط** :point_left: **يرسل لك البوت رابط اينفايت بالخاص**
:sparkles: **G-emojilist | G-ايموجي** :point_left: **لرؤية ايموجيهات السيرفر**
:sparkles: **G-اكتب** :point_left: **تأمر البوت يكتبلك اي شي تريده**
:sparkles: **G-ذكرني** :point_left: **رسالة تذكير في الخاص لاي شي تريده**
:sparkles: **G-support | G-دعم** :point_left: **سيرفر البوت والدعم**
:sparkles: **G-report | G-اشتكي** :point_left: **ارسال شكوى الى ادمن السيرفر على واحد سبك مثلا**


:sparkles: **ارحب** :point_left: **ترحيب بعضو جديد بالصورة**
:sparkles: **حياك** :point_left: **ترحيب بعضو جديد بالصورة**

**

__ملاحظة :__
في حالة لم يشتغل معك امر ارسل رسالة لادمن البوت وقلو انو الكود لم يشتغل معك
G-admin ( اكتب الرسالة هنا ) | او ارسل رسالتك للبوت
مع تحيات : DEX Gamer
**
**شكرا لك**`)
   message.author.sendEmbed(embed)
      message.reply('**تم ارسالك بلخاص**')
})
reaction2.on("collect", r => {
      const embed = new Discord.RichEmbed()
      .setThumbnail('https://images-ext-1.discordapp.net/external/DbPeTYlfGrBFd0B-SDcdVZPbPJRE8xiNcH9sG2sC5sA/http/www.expertizacontabila.com/images/staffmap-icon.png')
      .setColor("#000000")
      .setDescription(`

:name_badge: __**هذه المعلومات للاداريين في السيرفر فقط**__ :name_badge:

:beginner: **G-bc** :point_left: **أكتب الأمر وبعده الرسالة التي سترسلها الى كل أعضاء السيرفر**
:beginner: **G-create | G-انشاء** :point_left: **انشاء رومات كتابية او صوتية**
:beginner: **G-فعالية** :point_left: **انشاء رومات صوتية او كتابية بالوقت**
:beginner: **G-vote | G-تصويت** :point_left: **انشاء تصويت على اي شي تختارو**
:beginner: **G-mute | G-اسكت** :point_left: **لاعطاء شخص ميوت شات مع تحديد المدة**
:beginner: **G-unmute | G-تكلم** :point_left: **لنزع الميوت عن الشخص الذي تريده**
:beginner: **G-out | G-اخرج** :point_left: **لمعاقبة شخص ومنعه من دخول الرومات الصوتية**
:beginner: **G-enter | G-ادخل** :point_left: **لنزع المنع عن الشخص المعاقب من دخول الرومات الصوتية**
:beginner: **G-kick | G-طرد** :point_left: **لطرد العضو مع السبب بعد المنشن**
:beginner: **G-ban | G-باند** :point_left: **لحظر العضو مع السبب بعد المنشن**
:beginner: **G-close chat | G-قفل الشات >> G-open chat | G-افتح الشات** :point_left: **اغلاق الشات او فتحها على الاعضاء**
:beginner: **G-move | G-سحب** :point_left: **اكتب الامر ومنشن العضو**
:beginner: **G-move all | G-سحب الكل** :point_left: **سحب كل الاعضاء من كل الرومات**
:beginner: **G-giveroll | G-رتبة** :point_left: **لاعطاء عضو رتبة منشنه واكتب اسم الرتبة**
:sparkles: **G-admin** :point_left: **لارسال رسالة الى ادمن البوت __اكتب الامر وبعده الرسالة__**
:sparkles: **invite bot** :point_left: **إذا تبي تضيف البوت في سيرفرك راح يرسلك في الخاص**

**

__ملاحظة :__
في حالة لم يشتغل معك امر ارسل رسالة لادمن البوت وقلو انو الكود لم يشتغل معك
G-admin ( اكتب الرسالة هنا ) | او ارسل رسالتك للبوت
مع تحيات : DEX Gamer

**`)
   message.author.sendEmbed(embed)
      message.reply('**تم ارسالك بلخاص**')
})
reaction3.on("collect", r => {
  const embed = new Discord.RichEmbed()
  .setThumbnail('https://images-ext-1.discordapp.net/external/4IGqoA1bqVqu_o2I-jY51fqJFy2S8f8NrzcnzxhFtVU/http/reli.sh/wp-content/themes/relish/assets/img/services/icon-games.png')
      .setColor("#000000")
      .setDescription(`
═════ஜ۩۞۩ஜ════════════ஜ۩۞۩ஜ═════
	  
**:joystick: استمتع بالالعاب الموجودة بالبوت :joystick:**
**
:game_die: -فري فاير 
أسئلة منوعة عن فري فاير وهي للمعلومات فقط
:game_die: -صراحة
لعبة الصراحة الجميلة باسئلة منوعة
:game_die: -تحدي
أنصحك اذا انت مش قد التحدي لاتشارك فيها ابدا ☺
:game_die: -فكك
كلمات يكتبها البوت وانت تفككها بس انتبه على الحروف جيدا
:game_die: -اسرع
لعبة اسرع واحد يكتب الكلمة او الجملة الي يكتبها البوت
:game_die: -لغز
لعبة ألغاز جميلة ولازم تجاوب على اللغز قبل الوقت
:game_die: -سؤال
أسئلة عن لعبة فري فاير وهي بالوقت بسرررعة اجب
:game_die: -لو خيروك
لعبة لو خيروك بس خيارين واختار واحد فيهم
:game_die: -rps
لعبة حجر ورقة مقص وتلعبها ضد البوت
:game_die: -رقم
اكتب الأمر وبعده الرقم والبوت يختار رقم عشوائي
:new: :game_die: -حظ
لعبة حظ عشوائية اذا جبت 3 نفس الشكل انت الفائز


-invite bot يرسلك رابط البوت في الخاص

__ملاحظة :__
في حالة لم يشتغل معك امر ارسل رسالة لادمن البوت وقلو انو الكود لم يشتغل معك
G-admin ( اكتب الرسالة هنا )
مع تحيات : DEX Gamer

**═════ஜ۩۞۩ஜ════════════ஜ۩۞۩ஜ═════
`)
   message.author.sendEmbed(embed)
   message.reply('**تم ارسالك بلخاص**')
})
reaction4.on("collect", r => {
  const embed = new Discord.RichEmbed()
      .setThumbnail('https://images-ext-2.discordapp.net/external/JD7xvknBVacXHoC2re78AtJN4PUY5IjUZy1uWIqzObI/https/s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2015/08/25155834/people-icon.png')
      .setColor("#000000")
      .setDescription(`
**هلا وسهلا بك(ي) في سيرفرنا المتواضع
أرجوا ان تقضي وقتا ممتعا وان تستفيد(ي) معنا في اسرتنا المتواضعة التي هي اسرتك من الآن ان شاء الله
اسرتنا اسرة محترمة فيرجى منك التقيد بما هو مذكور في الأسفل فنحن نراعي ظروف ومشاعر الاخرين فكونك(ي) مميزا(ة) بأخلاقك لكي ترفع(ي) فوق رؤوسنا 
قوانيننا بسيطة وهي كالتالي :
:small_orange_diamond: : المحافظة على الاحترام المتبادل. 
:small_orange_diamond: : يمنع نشر صور لأعلام أو رايات أو أشخاص أو مقولات تحمل طابع طائفي . 
:small_orange_diamond: : يمنع نشر صور شخصية أو أرقام جوالات أو ايميلات او نشر روابط صفحات أو سيرفرات أخرى .
:small_orange_diamond: : سيتم حذف أي عضو صورته الشخصية غير لائقة او غير أخلاقية . 
:small_orange_diamond: : الأدمن هو اللي يقرر حذف المنشور وحظر الأعضاء ولا يحق لأي عضو يتدخل بهذا الشي مهما كانت رتبته .
:small_orange_diamond: : ممنوع أي شاب يطلب اضافه من بنت في السيرفر او يقول لها تعالي خاص اما خارج سيرفرنا انت حر . 
:small_orange_diamond: : يمنع نشر منشورات تسبب الفتنة بين الأعضاء او منشورات لا أخلاقية . 
:small_orange_diamond: : عليك التزام الأدب اثناء النقاشات واحترام أراء الأخرين ويمنع السب والشتم داخل السيرفر . 
:small_orange_diamond: : المسؤولون لهم الحق في حذف ما يرونه مسيئا دون الرجوع الى صاحب الرسالة . 
:small_orange_diamond: : ممنوع تعمل سبام في الشات او راح تاخذ ميوت شات . 
:small_orange_diamond: : لا ترسل اي رابط سيرفر في الشات او الخاص لأي عضو من الأعضاء . 
:small_orange_diamond: : أي عضو يتعرض للإهانة أو التجريح عليه أن يتوجه بالشكوى لإدارة المجموعة وسيتم حظر أي عضو يخالف القوانين .
**`)
   message.author.sendEmbed(embed)
      message.reply('**تم ارسالك بلخاص**')
})

	     
    })
}
});






// امر بروفايل

client.on('message', message => {
    if(message.content == ('G-profile') || message.content == ('G-بروفايل')) {    
 
             if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');   
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');
    
     const w = ['ID1.png','ID2.png','ID3.png','ID4.png','ID5.png'];
    
             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);
    
     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//ما خصك ,_,
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);
                            
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 335, 3, 160, 169);
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";
                                                    
                            
                                                     ctx.font = '30px Arial Bold';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);
                                                                            
                                                                        
                                                          moment.locale('ar-ly');        
                                            
                                            
                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);
                                                              
                                                              
                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170); 
                            
                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'Online';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'dnd';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'idle';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'offline';
     }
     
     
                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)
                  
                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "No playing" : h.presence.game.name}`,390,390);
                            
                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)
                            
                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());
                            
                            
                          
                            
                             })
                            
                             })
 }
 });




client.login(process.env.BOT_TOKEN);






//===================================================================================== - [ log ] - ===================================


 
 




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









client.on('message', message => {
    if (message.content.startsWith('تحقق مني')) {
 
        var activated_servers = ['558729759002198026'];///لا تنسى تغير السيرفر الى سيرفر السبورت حقك
 
        if (activated_servers.includes('' + message.guild.id + '') || activated_servers.includes(message.guild.id)) {
 
            let guildr = client.guilds.filter(r => r.ownerID === message.author.id).size;
            if (guildr === 0) {
                message.channel.send(`**:x: | أنت لست أونر في اي سيرفر أنا موجود فيه ☺**`)
 
            } else if (guildr >= 1) {///لا تنسى تغير اسم الرتبة
                if (message.guild.member(message.author).roles.find(x => x.name === `VIP+`)) return message.channel.send(`**${f} | ${message.author}, انت تملك الرتبة بالفعل**`);;
                message.channel.send(`**:white_check_mark: | لقد تم اثبات وجود سيرفر انت اونر فيه ’ مبروك الرتبة ☺**`)
                message.member.addRole(message.guild.roles.find(x => x.name === `VIP+`));
            }
        } else {
            return;
        }
 
    }
});














//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







 
////////////////////////////////////////////////////////////////// log 
client.on('messageDelete', message => {

	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
	if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;

	var logChannel = message.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	let messageDelete = new Discord.RichEmbed()
	.setTitle('**[MESSAGE DELETE]**')
	.setColor('RED')
	.setThumbnail(message.author.avatarURL)
	.setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n**Sent By:** <@${message.author.id}> \n**Message:**\n\`\`\`${message}\`\`\``)
	.setTimestamp()
	.setFooter(message.guild.name, message.guild.iconURL)

	logChannel.send(messageDelete);
});
client.on('messageUpdate', (oldMessage, newMessage) => {

	if(oldMessage.author.bot) return;
	if(!oldMessage.channel.type === 'dm') return;
	if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;

	var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	if(oldMessage.content.startsWith('https://')) return;

	let messageUpdate = new Discord.RichEmbed()
	.setTitle('**[MESSAGE EDIT]**')
	.setThumbnail(oldMessage.author.avatarURL)
	.setColor('BLUE')
	.setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n**Sent By:** <@${oldMessage.author.id}> \n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
	.setTimestamp()
	.setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)

	logChannel.send(messageUpdate);
});


client.on('roleCreate', role => {

	if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = role.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	role.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		let roleCreate = new Discord.RichEmbed()
		.setTitle('**[ROLE CREATE]**')
		.setThumbnail(userAvatar)
		.setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n**Role Name:** \`\`${role.name}\`\` \n**By:** <@${userID}> `)
		.setColor('GREEN')
		.setTimestamp()
		.setFooter(role.guild.name, role.guild.iconURL)

		logChannel.send(roleCreate);
	})
});
client.on('roleDelete', role => {

	if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = role.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	role.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		let roleDelete = new Discord.RichEmbed()
		.setTitle('**[ROLE DELETE]**')
		.setThumbnail(userAvatar)
		.setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n**Role Name:** \`\`${role.name}\`\` \n**By:** <@${userID}> `)
		.setColor('RED')
		.setTimestamp()
		.setFooter(role.guild.name, role.guild.iconURL)

		logChannel.send(roleDelete);
	})
});



client.on('channelCreate', channel => {

	if(!channel.guild) return;
	if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = channel.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	if(channel.type === 'text') {
		var roomType = 'Text';
	}else
	if(channel.type === 'voice') {
		var roomType = 'Voice';
	}else
	if(channel.type === 'category') {
		var roomType = 'Category';
	}

	channel.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		let channelCreate = new Discord.RichEmbed()
		.setTitle('**[CHANNEL CREATE]**')
		.setThumbnail(userAvatar)
		.setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n**Channel Name:** \`\`${channel.name}\`\` \n**By:** <@${userID}> `)
		.setColor('GREEN')
		.setTimestamp()
		.setFooter(channel.guild.name, channel.guild.iconURL)

		logChannel.send(channelCreate);
	})
});
client.on('channelDelete', channel => {
	if(!channel.guild) return;
	if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = channel.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	if(channel.type === 'text') {
		var roomType = 'Text';
	}else
	if(channel.type === 'voice') {
		var roomType = 'Voice';
	}else
	if(channel.type === 'category') {
		var roomType = 'Category';
	}

	channel.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		let channelDelete = new Discord.RichEmbed()
		.setTitle('**[CHANNEL DELETE]**')
		.setThumbnail(userAvatar)
		.setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n**Channel Name:** \`\`${channel.name}\`\` \n**By:** <@${userID}> `)
		.setColor('RED')
		.setTimestamp()
		.setFooter(channel.guild.name, channel.guild.iconURL)

		logChannel.send(channelDelete);
	})
});
client.on('channelUpdate', (oldChannel, newChannel) => {
	if(!oldChannel.guild) return;

	var logChannel = oldChannel.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	if(oldChannel.type === 'text') {
		var channelType = 'Text';
	}else
	if(oldChannel.type === 'voice') {
		var channelType = 'Voice';
	}else
	if(oldChannel.type === 'category') {
		var channelType = 'Category';
	}

	oldChannel.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(oldChannel.name !== newChannel.name) {
			let newName = new Discord.RichEmbed()
			.setTitle('**[CHANNEL EDIT]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> `)
			.setTimestamp()
			.setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)

			logChannel.send(newName);
		}
		if(oldChannel.topic !== newChannel.topic) {
			let newTopic = new Discord.RichEmbed()
			.setTitle('**[CHANNEL EDIT]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} \n**By:** <@${userID}> `)
			.setTimestamp()
			.setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)

			logChannel.send(newTopic);
		}
	})
});


client.on('guildBanAdd', (guild, user) => {

	if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(userID === client.user.id) return;

		let banInfo = new Discord.RichEmbed()
		.setTitle('**[BANNED]**')
		.setThumbnail(userAvatar)
		.setColor('DARK_RED')
		.setDescription(`**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n**User:** <@${user.id}> \n**By:** <@${userID}> `)
		.setTimestamp()
		.setFooter(guild.name, guild.iconURL)

		logChannel.send(banInfo);
	})
});
client.on('guildBanRemove', (guild, user) => {
	if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(userID === client.user.id) return;

		let unBanInfo = new Discord.RichEmbed()
		.setTitle('**[UNBANNED]**')
		.setThumbnail(userAvatar)
		.setColor('GREEN')
		.setDescription(`**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n**User:** <@${user.id}> \n**By:** <@${userID}> `)
		.setTimestamp()
		.setFooter(guild.name, guild.iconURL)

		logChannel.send(unBanInfo);
	})
});
client.on('guildUpdate', (oldGuild, newGuild) => {

	if(!oldGuild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!oldGuild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = oldGuild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	oldGuild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(oldGuild.name !== newGuild.name) {
			let guildName = new Discord.RichEmbed()
			.setTitle('**[CHANGE GUILD NAME]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild name.\n**Old Name:** \`\`${oldGuild.name}\`\`\n**New Name:** \`\`${newGuild.name}\`\`\n**By:** <@${userID}> `)
			.setTimestamp()
			.setFooter(newGuild.name, oldGuild.iconURL)

			logChannel.send(guildName)
		}
		if(oldGuild.region !== newGuild.region) {
			let guildRegion = new Discord.RichEmbed()
			.setTitle('**[CHANGE GUILD REGION]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild region.\n**Old Region:** ${oldGuild.region}\n**New Region:** ${newGuild.region}\n**By:** <@${userID}> `)
			.setTimestamp()
			.setFooter(oldGuild.name, oldGuild.iconURL)

			logChannel.send(guildRegion);
		}
		if(oldGuild.verificationLevel !== newGuild.verificationLevel) {
			if(oldGuild.verificationLevel === 0) {
				var oldVerLvl = 'Very Easy';
			}else
			if(oldGuild.verificationLevel === 1) {
				var oldVerLvl = 'Easy';
			}else
			if(oldGuild.verificationLevel === 2) {
				var oldVerLvl = 'Medium';
			}else
			if(oldGuild.verificationLevel === 3) {
				var oldVerLvl = 'Hard';
			}else
			if(oldGuild.verificationLevel === 4) {
				var oldVerLvl = 'Very Hard';
			}

			if(newGuild.verificationLevel === 0) {
				var newVerLvl = 'Very Easy';
			}else
			if(newGuild.verificationLevel === 1) {
				var newVerLvl = 'Easy';
			}else
			if(newGuild.verificationLevel === 2) {
				var newVerLvl = 'Medium';
			}else
			if(newGuild.verificationLevel === 3) {
				var newVerLvl = 'Hard';
			}else
			if(newGuild.verificationLevel === 4) {
				var newVerLvl = 'Very Hard';
			}

			let verLog = new Discord.RichEmbed()
			.setTitle('**[GUILD VERIFICATION LEVEL CHANGE]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Guild Verification level.\n**Old Verification Level:** ${oldVerLvl}\n**New Verification Level:** ${newVerLvl}\n**By:** <@${userID}> `)
			.setTimestamp()
			.setFooter(oldGuild.name, oldGuild.iconURL)

			logChannel.send(verLog);
		}
	})
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
	if(!oldMember.guild) return;

	var logChannel = oldMember.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	oldMember.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;
		var userTag = logs.entries.first().executor.tag;

		if(oldMember.nickname !== newMember.nickname) {
			if(oldMember.nickname === null) {
				var oldNM = '`اسمه الاصلي`';
			}else {
				var oldNM = oldMember.nickname;
			}
			if(newMember.nickname === null) {
				var newNM = '`اسمه الاصلي`';
			}else {
				var newNM = newMember.nickname;
			}

			let updateNickname = new Discord.RichEmbed()
			.setTitle('**[UPDATE MEMBER NICKNAME]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n**User:** ${oldMember} \n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> `)
			.setTimestamp()
			.setFooter(oldMember.guild.name, oldMember.guild.iconURL)

			logChannel.send(updateNickname);
		}
		if(oldMember.roles.size < newMember.roles.size) {
			let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();

			let roleAdded = new Discord.RichEmbed()
			.setTitle('**[ADDED ROLE TO MEMBER]**')
			.setThumbnail(oldMember.guild.iconURL)
			.setColor('GREEN')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n**User:** <@${oldMember.id}> \n**Role:** \`\`${role.name}\`\` \n**By:** <@${userID}> `)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(roleAdded);
		}
		if(oldMember.roles.size > newMember.roles.size) {
			let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();

			let roleRemoved = new Discord.RichEmbed()
			.setTitle('**[REMOVED ROLE FROM MEMBER]**')
			.setThumbnail(oldMember.guild.iconURL)
			.setColor('RED')
			.setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n**User:** <@${oldMember.user.id}> \n**Role:** \`\`${role.name}\`\` \n**By:** <@${userID}> `)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(roleRemoved);
		}
	})
	if(oldMember.guild.owner.id !== newMember.guild.owner.id) {
		let newOwner = new Discord.RichEmbed()
		.setTitle('**[UPDATE GUILD OWNER]**')
		.setThumbnail(oldMember.guild.iconURL)
		.setColor('GREEN')
		.setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n**Old Owner:** <@${oldMember.user.id}> \n**New Owner:** <@${newMember.user.id}> `)
		.setTimestamp()
		.setFooter(oldMember.guild.name, oldMember.guild.iconURL)

		logChannel.send(newOwner);
	}
});


client.on('voiceStateUpdate', (voiceOld, voiceNew) => {

	if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	voiceOld.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userTag = logs.entries.first().executor.tag;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
			let serverMutev = new Discord.RichEmbed()
			.setTitle('**[VOICE MUTE]**')
			.setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
			.setColor('RED')
			.setDescription(`**User:** ${voiceOld} \n**By:** <@${userID}> \n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` `)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(serverMutev);
		}
		if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
			let serverUnmutev = new Discord.RichEmbed()
			.setTitle('**[VOICE UNMUTE]**')
			.setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
			.setColor('GREEN')
			.setDescription(`**User:** ${voiceOld} \n**By:** <@${userID}> \n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` `)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(serverUnmutev);
		}
		if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
			let serverDeafv = new Discord.RichEmbed()
			.setTitle('**[VOICE DEAF]**')
			.setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
			.setColor('RED')
			.setDescription(`**User:** ${voiceOld} \n**By:** <@${userID}> \n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` `)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(serverDeafv);
		}
		if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
			let serverUndeafv = new Discord.RichEmbed()
			.setTitle('**[VOICE UNDEAF]**')
			.setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
			.setColor('GREEN')
			.setDescription(`**User:** ${voiceOld} \n**By:** <@${userID}> \n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` `)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(serverUndeafv);
		}
	})
	if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
		let voiceJoin = new Discord.RichEmbed()
		.setTitle('**[JOIN VOICE ROOM]**')
		.setColor('GREEN')
		.setThumbnail(voiceOld.user.avatarURL)
		.setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` \n**User:** ${voiceOld} `)
		.setTimestamp()
		.setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)

		logChannel.send(voiceJoin);
	}
	if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
		let voiceLeave = new Discord.RichEmbed()
		.setTitle('**[LEAVE VOICE ROOM]**')
		.setColor('GREEN')
		.setThumbnail(voiceOld.user.avatarURL)
		.setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` \n**User:** ${voiceOld} `)
		.setTimestamp()
		.setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)

		logChannel.send(voiceLeave);
	}
	if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
		let voiceLeave = new Discord.RichEmbed()
		.setTitle('**[CHANGED VOICE ROOM]**')
		.setColor('GREEN')
		.setThumbnail(voiceOld.user.avatarURL)
		.setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` \n**To:** \`\`${voiceNew.voiceChannel.name}\`\` \n**User:** ${voiceOld} `)
		.setTimestamp()
		.setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)

		logChannel.send(voiceLeave);
	}
});




/*
const bannedwords = [
    "كسمك",
    "خول",
    "متناك",
    "احا",
    "a7a",
    "kosomk"

  ];
///// منع الشتايم 
client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(" احترم نفسك , يمنج الشتايم تمامنا هنا  ").then(msg => {msg.delete(5000)});;
  };
});
*/















client.on('message', msg => {
  if (msg.content === 'أفغانستان') {      
    msg.channel.send("🇦🇫")
  }
});
client.on('message', msg => {
  if (msg.content === 'جزر الاند') {      
    msg.channel.send("🇦🇽")
  }
});
client.on('message', msg => {
  if (msg.content === 'البانيا') {      
    msg.channel.send("🇦🇱")
  }
});
client.on('message', msg => {
  if (msg.content === 'الجزائر') {      
    msg.channel.send("🇩🇿")
  }
});
client.on('message', msg => {
  if (msg.content === 'ساموا الامريكية') {      
    msg.channel.send("🇦🇸")
  }
});
client.on('message', msg => {
  if (msg.content === 'اندورا') {      
    msg.channel.send("🇦🇩")
  }
});
client.on('message', msg => {
  if (msg.content === 'انغولا') {      
    msg.channel.send("🇦🇴")
  }
});
client.on('message', msg => {
  if (msg.content === 'انغويلا') {      
    msg.channel.send("🇦🇮")
  }
});
client.on('message', msg => {
  if (msg.content === 'انتاركتيكا') {      
    msg.channel.send("🇦🇶")
  }
});
client.on('message', msg => {
  if (msg.content === 'الارجنتين') {      
    msg.channel.send("🇦🇷")
  }
});
client.on('message', msg => {
  if (msg.content === 'ارمينيا') {      
    msg.channel.send("🇦🇲")
  }
});
client.on('message', msg => {
  if (msg.content === 'اروبا') {      
    msg.channel.send("🇦🇼")
  }
});
client.on('message', msg => {
  if (msg.content === 'استراليا') {      
    msg.channel.send("🇦🇺")
  }
});
client.on('message', msg => {
  if (msg.content === 'النمسا') {      
    msg.channel.send("🇦🇹")
  }
});
client.on('message', msg => {
  if (msg.content === 'اذربيجان') {      
    msg.channel.send("🇦🇿")
  }
});
client.on('message', msg => {
  if (msg.content === 'الباهاما') {      
    msg.channel.send("🇧🇸")
  }
});
client.on('message', msg => {
  if (msg.content === 'البحرين') {      
    msg.channel.send("🇧🇭")
  }
});
client.on('message', msg => {
  if (msg.content === 'بنغلاديش') {      
    msg.channel.send("🇧🇩")
  }
});
client.on('message', msg => {
  if (msg.content === 'بربادوس') {      
    msg.channel.send("🇧🇧")
  }
});
client.on('message', msg => {
  if (msg.content === 'روسيا البيضاء') {      
    msg.channel.send("🇧🇾")
  }
});
client.on('message', msg => {
  if (msg.content === 'بلجيكا') {      
    msg.channel.send("🇧🇪")
  }
});
client.on('message', msg => {
  if (msg.content === 'بليز') {      
    msg.channel.send("🇧🇿")
  }
});
client.on('message', msg => {
  if (msg.content === 'بينين') {      
    msg.channel.send("🇧🇯")
  }
});
client.on('message', msg => {
  if (msg.content === 'برمودا') {      
    msg.channel.send("🇧🇲")
  }
});
client.on('message', msg => {
  if (msg.content === 'بوتان') {      
    msg.channel.send("🇧🇹")
  }
});
client.on('message', msg => {
  if (msg.content === 'بوليفيا') {      
    msg.channel.send("🇧🇴")
  }
});
client.on('message', msg => {
  if (msg.content === 'البوسنة والهرسك') {      
    msg.channel.send("🇧🇦")
  }
});
client.on('message', msg => {
  if (msg.content === 'بتسوانا') {      
    msg.channel.send("🇧🇼")
  }
});
client.on('message', msg => {
  if (msg.content === 'البرازيل') {      
    msg.channel.send("🇧🇷")
  }
});
client.on('message', msg => {
  if (msg.content === 'بروناي') {      
    msg.channel.send("🇧🇳")
  }
});
client.on('message', msg => {
  if (msg.content === 'بلغاريا') {      
    msg.channel.send("🇧🇬")
  }
});
client.on('message', msg => {
  if (msg.content === 'بوركينا فاسو') {      
    msg.channel.send("🇧🇫")
  }
});
client.on('message', msg => {
  if (msg.content === 'بوروندي') {      
    msg.channel.send("🇧🇮")
  }
});
client.on('message', msg => {
  if (msg.content === 'كمبوديا') {      
    msg.channel.send("🇰🇭")
  }
});
client.on('message', msg => {
  if (msg.content === 'الكاميرون') {      
    msg.channel.send("🇨🇲")
  }
});
client.on('message', msg => {
  if (msg.content === 'كندا') {      
    msg.channel.send("🇨🇦")
  }
});
client.on('message', msg => {
  if (msg.content === 'جزر الكناري') {      
    msg.channel.send("🇮🇨")
  }
});
client.on('message', msg => {
  if (msg.content === 'تشاد') {      
    msg.channel.send("🇹🇩")
  }
});
client.on('message', msg => {
  if (msg.content === 'تشيلي') {      
    msg.channel.send("🇨🇱")
  }
});
client.on('message', msg => {
  if (msg.content === 'الصين') {      
    msg.channel.send("🇨🇳")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});
client.on('message', msg => {
  if (msg.content === 'aaaaa') {      
    msg.channel.send("aaaaa")
  }
});







client.on('message', message => {
    
if(message.content.split(' ')[0] == '-بروفايل') {
if(!message.channel.guild) return;

let args = message.content.split(' ').slice(1).join(' ');

       let defineduser = '';
       if (!args[1]) { 
           defineduser = message.author;
       } else { // Run this if they did define someone...
           let firstMentioned = message.mentions.users.first();
           defineduser = firstMentioned;
       }

       const w = ['./id5.png','./id6.png'];
       var Canvas = require('canvas')
var jimp = require('jimp')

        const millis = new Date().getTime() - defineduser.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy');
const stats2 = ['online', 'Low', 'Medium', 'Insane'];
const days = millis / 1000 / 60 / 60 / 24;
         dateFormat(now, 'dddd, mmmm dS, yyyy');
             let time = `${dateFormat(defineduser.createdAt)}`
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
            var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
       let Image = Canvas.Image,
           canvas = new Canvas(300, 300),
           ctx = canvas.getContext('2d');
       ctx.patternQuality = 'bilinear';
       ctx.filter = 'bilinear';
       ctx.antialias = 'subpixel';
 
       fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
           if (err) return console.log(err);
           let BG = Canvas.Image;
           let ground = new Image;
           ground.src = Background;
           ctx.drawImage(ground, 0, 0, 300, 300);

})
  var mentionned = message.mentions.users.first();

   var client;
     if(mentionned){
         var client = mentionned;
     } else {
         var client = message.author;
         
     }

var men = message.mentions.users.first();
           var heg;
           if(men) {
               heg = men
           } else {
               heg = message.author
           }
               let url = defineduser.displayAvatarURL.endsWith(".webp") ? defineduser.displayAvatarURL.slice(20, 20) + ".png" : defineduser.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                   if (err) return console.log(err);
                   ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                       if (err) return console.log(err);

                       let Avatar = Canvas.Image;
                       let ava = new Avatar;
                       ava.src = buf;
                       ctx.drawImage(ava, 112 , 40, 75, 75);
                       
                       
                       
                       
                       var status;
   if (defineduser.presence.status === 'online') {
       status = 'ONLINE';
ctx.fillStyle = `#2ce032`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
 
   } else if (defineduser.presence.status === 'dnd') {
       status = 'DND';
       ctx.fillStyle = `#ff0000`;
ctx.beginPath();
ctx.arc(179, 107, 8, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   } else if (defineduser.presence.status === 'idle') {
       status = 'IDLE';
       ctx.fillStyle = `#f4d32e`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   } else if (defineduser.presence.status === 'offline') {
       status = 'INVISIABLE';
       ctx.fillStyle = `#898988`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   }
                       
                       
                                             var time2;
     if(mentionned){
         var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
     } else {
         var time2 = `${dateFormat(message.member.joinedAt)}`;
         
     }  
                          
   
                       ctx.font = 'Bold 15px Arial ';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(status, 70 , 108 );
                       
                        ctx.font = 'Bold 13px Arial';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${message.author.presence.game === null ? "No Status" : message.author.presence.game.name}`, 150.00   , 180  );

                      
                       ctx.font = 'Bold 20px Arial ';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${defineduser.username}`, 150.50 , 140);


                       ctx.font = 'Bold 15px Arial';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`#${defineduser.discriminator}`, 227  , 108);

                       var time2;
     if(mentionned){
         var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
     } else {
         var time2 = `${dateFormat(message.member.joinedAt)}`;
         
     }

                       ctx.font = 'Bold 13px Arial ';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${moment(defineduser.createdTimestamp).fromNow()}`, 179 , 226 );
                       
                       
    
          
                       ctx.font = 'Bold 13px Arial ';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}`, 179 , 253);
                       
message.channel.sendFile(canvas.toBuffer())


       })
   })




}

})





client.on('message', message => {

    if(message.content.startsWith(prefix + 'id')) {
if(!message.channel.guild) return;
      var args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first();
      var men = message.mentions.users.first();
         var heg;
         if(men) {
             heg = men
         } else {
             heg = message.author
         }
       var mentionned = message.mentions.members.first();
          var h;
         if(mentionned) {
             h = mentionned
         } else {
             h = message.member
         }
  moment.locale('ar');
    const w = ['./id1.png','./id2.png','./id3.png','./id4.png','./id5.png']
        let Image = Canvas.Image,
            canvas = new Canvas(500, 500),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 500, 500);

})
                let url = h.user.displayAvatarURL.endsWith(".webp") ? h.user.displayAvatarURL.slice(5, -20) + ".png" : h.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
  //time dateformet
  const millis = new Date().getTime() - h.user.createdAt.getTime();
  const now = new Date();
  dateFormat(now, 'dddd, mmmm dS, yyyy');
  const stats2 = ['online', 'Low', 'Medium', 'Insane'];
  const days = millis / 1000 / 60 / 60 / 24;
            dateFormat(now, 'dddd, mmmm dS, yyyy');
            
        
                          //دخولك الديسكورد
                          var day = `${days.toFixed(0)} Days ago`
                          ctx.font = '27px Arial Bold';
                          ctx.fontSize = '30px';
                          ctx.fillStyle = "#ffffff";
                          ctx.textAlign = "center";
                          ctx.fillText(day, 109, 97)
              //wl
              var millis1;
        if(mentionned){
            var millis1 = new Date().getTime() - mentionned.joinedAt
        } else {
            var millis1 = new Date().getTime() - moment(message.member.joinedAt);;
            
        }

  const days1 = millis1 / 1000 / 60 / 60 / 24;
  
                        //دخولك السيرفر
                        var day2 = `${days1.toFixed(0)} Days ago`
                        ctx.font = '27px Arial Bold';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(day2, 388, 97); 

                        //ur name
                        ctx.font = '27px BlowBrush';
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(h.user.username, 245, 365);
                        //tag
                        ctx.font = '27px Arial Bold';
                        ctx.fontSize = '45px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`#${heg.discriminator}`, 120, 450);
                        
                        //حالتك
                           let status;
    if (h.presence.status === 'online') {
        status = 'online';
    } else if (h.presence.status === 'dnd') {
        status = 'dnd';
    } else if (h.presence.status === 'idle') {
        status = 'idle';
    } else if (h.presence.status === 'offline') {
        status = 'offline';
    }
                        ctx.font = '27px Arial Bold';
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`${status}`, 380, 450);
                        
                        //Avatar
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(250, 238, 64, 0, Math.PI*2, true); 
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 185, 172, 130, 130 );
                         
     message.channel.sendFile(canvas.toBuffer())
})
   })

} });
