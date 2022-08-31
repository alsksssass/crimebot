const { SlashCommandBuilder, PermissionFlagsBits, PermissionsBitField, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId } = require('./config.json');



const commands = [
  new SlashCommandBuilder().setName('청소').setDescription('청소갯수').addNumberOption(option => option.setName('숫자').setDescription('최대 99개')).setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('청소기').setDescription('메시지300개 삭제').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('말').setDescription('진행자말 일반').addStringOption(option => option.setName('그냥말').setDescription('메시지넣기')).setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('진행').setDescription('진행자말 박스').addStringOption(option => option.setName('박스말').setDescription('메시지넣기')).setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('딜레이').setDescription('지연 전송할 말').addStringOption(option => option.setName('딜레이말').setDescription('메시지넣기')).addNumberOption(option => option.setName('시간').setDescription('ex)1분=60,max15분')).setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('딜레이박스').setDescription('지연 전송할 말').addStringOption(option => option.setName('딜레이말1').setDescription('메시지넣기')).addNumberOption(option => option.setName('시간1').setDescription('ex)1분=60,max15분')).setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('1').setDescription('용의자 카운트!').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('2').setDescription('용의자 카운트').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('3').setDescription('용의자 카운트').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('4').setDescription('용의자 카운트').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('5').setDescription('용의자 카운트').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('6').setDescription('용의자 카운트').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('0').setDescription('용의자 카운트 리셋').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('뷰').setDescription('카운트 현황').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('타이머').setDescription('타이머').addNumberOption(option => option.setName('타임').setDescription('ex)1분=60,max15분')).setDefaultMemberPermissions(0),
  
]
  .map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
  .then(() => console.log('코멘드 등록 성공!'))
  .catch(console.error);
