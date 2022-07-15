module.exports = {
  app: {
    px: "!",
    token:
      "OTkyNjMwOTM1ODg5NjQ1NTc5.GY3Vfz.GGf5caS7Mw6VtG427KZYTQFu5Yg-Ut2AVIhUK0",
    playing: "COMENDO CU ❤️",
  },

  opt: {
    DJ: {
      enabled: false,
      roleName: "DJ",
      commands: [
        "back",
        "clear",

        "loop",
        "pause",
        "resume",
        "seek",

        "skip",
        "stop",
        "volume",
      ],
    },
    maxVol: 100,
    loopMessage: false,
    discordPlayer: {
      ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25,
      },
    },
  },
};
