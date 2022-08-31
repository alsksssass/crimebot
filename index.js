const { Client, GatewayIntentBits } = require('discord.js');
const { ekdha } = require('./config.json');
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const { RESTJSONErrorCodes } = require('discord.js');
////랜덤구문

////랜덤구문
////참가자 코드부분(추가조사권)
let qjadls1 = 0  ///범인1
let qjadls11 = '1번 용의자'
let qjadls2 = 0   ///범인2
let qjadls22 = '2번 용의자'   ///범인2
let qjadls3 = 0  ///범인3
let qjadls33 = '3번 용의자'  ///범인3
let qjadls4 = 0  ////범인4
let qjadls44 = '4번 용의자'  ////범인4
let qjadls5 = 0
let qjadls55 = '5번 용의자'
let xkawjd = 0    ///탐정
let xkawjd1 = '6번 용의자'    ///탐정
let skadma = '개 카운트 됨'
/////////

/////////
/////단서변수




// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('준비됨');
});


client.on('interactionCreate', interaction => {
  // ...
});
////비밀번호

const tkrwpehla = "개 삭제됨"

/////

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === '진행') {
    const string = interaction.options.getString('박스말');
    const message = await interaction.reply({ content: ekdha + string + ekdha, fetchReply: true })
    message.react('❤️').then(console.log).catch(console.error);
  }////말 성공!!!

  else if (commandName === '청소') {
    const number = interaction.options.getNumber('숫자');
    console.log(number)
    await interaction.reply(number + tkrwpehla);
    await interaction.channel.bulkDelete(number)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
  }
  else if (commandName === '청소기') {
    await interaction.reply('300개 삭제');
    await interaction.channel.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await interaction.channel.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await interaction.channel.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
  }
  else if (commandName === '말') {
    const string2 = interaction.options.getString('그냥말');
    const message2 = await interaction.reply({ content: string2, fetchReply: true });
    message2.react('❤️').then(console.log).catch(console.error);
  }////말 성공!!!  

  if (commandName === '딜레이') {
    const string3 = interaction.options.getString('딜레이말');
    const number = interaction.options.getNumber('시간');
    let time2 = number * 1000
    let time3 = time2 -= 1000
    await interaction.deferReply();
    await wait(time3);
    const message3 = await interaction.channel.send({ content: string3, fetchReply: true })
    message3.react('❤️').then(console.log).catch(console.error);
  }
  if (commandName === '딜레이박스') {
    const string3 = interaction.options.getString('딜레이말1');
    const number = interaction.options.getNumber('시간1');
    let time = number * 1000
    let time1 = time -= 1000
    await interaction.deferReply();
    await wait(time1);
    const message3 = await interaction.channel.send({ content: ekdha + string3 + ekdha, fetchReply: true })
    message3.react('❤️').then(console.log).catch(console.error);
  }
    else if (commandName === '1') {
      qjadls1 += 1
      await interaction.reply(qjadls11 + qjadls1 + skadma);
    }

    else if (commandName === '2') {
      qjadls2 += 1
      await interaction.reply(qjadls22 + qjadls2 + skadma);
    }

    else if (commandName === '3') {
      qjadls3 += 1
      await interaction.reply(qjadls33 + qjadls3 + skadma);
    }

    else if (commandName === '4') {
      qjadls4 += 1
      await interaction.reply(qjadls44 + qjadls4 + skadma);
    }

    else if (commandName === '5') {
      qjadls5 += 1
      await interaction.reply(qjadls55 + qjadls5 + skadma);
    }

    else if (commandName === '6') {
      xkawjd += 1
      await interaction.reply(xkawjd1 + xkawjd + skadma);
    }

    else if (commandName === '0') {
      qjadls1 *= 0
      qjadls2 *= 0
      qjadls3 *= 0
      qjadls4 *= 0
      qjadls5 *= 0
       xkawjd *= 0 
      await interaction.reply('카운트 리셋');
          

    }
  else if (commandName === '뷰') {
      await interaction.reply(qjadls11 + qjadls1 + skadma);
      await interaction.channel.send(qjadls22 + qjadls2 + skadma);
      await interaction.channel.send(qjadls33 + qjadls3 + skadma);
      await interaction.channel.send(qjadls44 + qjadls4 + skadma);
      await interaction.channel.send(qjadls55 + qjadls5 + skadma);
      await interaction.channel.send(xkawjd1 + xkawjd + skadma);
  }
   else if (commandName === '타이머') {
    const number = interaction.options.getNumber('타임');
    const string = interaction.options.getString('시간명명');
    const wait = require('node:timers/promises').setTimeout;///딜레이 구문
    const whdfy = '타이머 종료되었습니다!'
    var time1 = number * 1000
    var qks = time1 / 2
    var ch = qks / 1000
    var fktmxmch = time1 / 10
    var fktmxmzkdns = qks - fktmxmch
    var wlsfk = fktmxmch / 1000
    var akakr = wlsfk / 10
    console.log(akakr)
    const wndrks = '⌛'
    const tlwkr = '초 카운트 시작'
    const skadma55 = '초 남음'
    const message1 = await interaction.reply({ content: ekdha + wndrks + string + wndrks + number + tlwkr + ekdha, fetchReply: true })
    message1.react('❤️')
    await wait(qks);
    const message2 = await interaction.channel.send(ekdha + wndrks + string + wndrks + ch + skadma55 + ekdha)
    message2.react('❤️')
    await wait(fktmxmzkdns);
    const message3 = await interaction.channel.send(ekdha + wndrks + string + wndrks + wlsfk +  skadma55 + ekdha)
    message3.react('❤️')
    await wait(wlsfk*1000);
    const message5 = await interaction.channel.send(ekdha + wndrks + string + wndrks + akakr+  skadma55 + ekdha)
    message5.react('❤️')
    await wait(akakr*1000);
    const message4 = await interaction.channel.send(ekdha + wndrks + string + wndrks + whdfy + ekdha)
    message4.react('❤️').then(console.log).catch(console.error);
 
  }
  else if (commandName === '자동단서') {
    const rmx = '설정하신 단서가 끝이 났습니다'
    const string = interaction.options.getString('그냥말');
    const string1 = interaction.options.getString('그냥말1');
    const string2 = interaction.options.getString('그냥말2');
    const string3 = interaction.options.getString('그냥말3');
    const string4 = interaction.options.getString('그냥말4');
    const string5 = interaction.options.getString('그냥말5');
    const string6 = interaction.options.getString('그냥말6');
    const string7 = interaction.options.getString('그냥말7');
    const string8 = interaction.options.getString('그냥말8');
    const string9 = interaction.options.getString('그냥말9');
    const number = interaction.options.getNumber('타임');
    console.log(number)
    const message1 = await interaction.reply({ content: string, fetchReply: true })
    message1.react('❤️')
    await wait(number*1000);
    const message2 = await interaction.channel.send(string1)
    message2.react('❤️')
    await wait(number*1000);
    const message3 = await interaction.channel.send(string2)
    message3.react('❤️')
    await wait(number*1000);
    const message4 = await interaction.channel.send(string3)
    message4.react('❤️')
    await wait(number*1000);
    const message5 = await interaction.channel.send(string4)
    message5.react('❤️')
    await wait(number*1000);
    const message6 = await interaction.channel.send(string5)
    message6.react('❤️')
    await wait(number*1000);
    const message7 = await interaction.channel.send(string6)
    message7.react('❤️')
    await wait(number*1000);
    const message8 = await interaction.channel.send(string7)
    message8.react('❤️')
    await wait(number*1000);
    const message9 = await interaction.channel.send(string8)
    message9.react('❤️')
    await wait(number*1000);
    const message99 = await interaction.channel.send(string9)
    message99.react('❤️')
    const message10 = await interaction.channel.send(ekdha + rmx + ekdha)
    message10.react('❤️')
  }
  

});
//////코멘드 라인 끝

// Login to Discord with your client's token
client.login(process.env.token);
