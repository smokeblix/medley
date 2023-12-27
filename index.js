const { Panel } = require("@akarui/aoi.panel");
const aoijs = require("aoi.js");
const { Util } = require('aoi.js');
const { setup } = require("aoi.parser");
 
setup(Util);

const {
    AoiVoice,
    PlayerEvents,
    PluginName,
    Cacher,
    Filter,
} = require('@akarui/aoi.music');




const bot = new aoijs.AoiClient({
    token: process.env.token,
    prefix: "!",
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
    events: ["onMessage","onInteractionCreate","onVoiceStateUpdate"],
  database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
  }
})

bot.readyCommand({
code: `$log[Bot Ready]`
})

bot.status({
  text: "Music", 
  type: "LISTENING"
})

bot.functionManager.createFunction({
    name: '$ytsearch',
    type: 'djs',
    code: async d => {
      const axios = require('axios');
      const data = d.util.aoiFunc(d);
      const [search] = data.inside.splits;
      if(!search) return d.aoiError.fnError(d, 'custom', {}, 'unable to fetch avatar url');

      try {
        const response = await axios.get(`https://apiv2.spapi.ga/fun/ytsearch?search=${search}`);
        data.result = response.data.items[0].author.bestAvatar.url;
        console.log(data.result);
        return {
          code: d.util.setCode(data)
        };
      } catch (e) {
        console.error(e);
        return d.aoiError.fnError(d, 'custom', {}, 'Something went wrong');
      }
    }
  });

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

const voice = new AoiVoice(bot, {
    searchOptions: {
        // soundcloudClientId: "Sound Cloud Id",
        youtubegl: "US",
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
});

voice.addPlugin(PluginName.Cacher, new Cacher("memory"));

voice.addPlugin(
    PluginName.Filter,
    new Filter({
        filterFromStart: false,
    }),
);

voice.bindExecutor(bot.functionManager.interpreter);

loader.load(voice.cmds,"./commands/voice");
bot.variables(require("./handler/variables.js"));

voice.addEvent(PlayerEvents.TRACK_START);
voice.addEvent(PlayerEvents.TRACK_END);

const panel = new Panel({
    username: process.env.username,
    password: process.env.password,
    secret: require('crypto').randomBytes(16).toString("hex"),
    port: 3000,
    bot: bot,
    mainFile: "index.js",
    commands: "./commands",
    interaction: "./interactions"
});
panel.loadPanel();
panel.onError();