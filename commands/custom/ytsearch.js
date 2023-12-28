module.exports = function(bot) {
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
        data.result = response.data.avatars.url;
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
};
