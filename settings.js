/*
███╗   ██╗ █████╗ ██████╗ ██╗   ██╗████████╗ ██████╗ 
████╗  ██║██╔══██╗██╔══██╗██║   ██║╚══██╔══╝██╔═══██╗
██╔██╗ ██║███████║██████╔╝██║   ██║   ██║   ██║   ██║
██║╚██╗██║██╔══██║██╔═══╝ ██║   ██║   ██║   ██║   ██║
██║ ╚████║██║  ██║██║     ╚██████╔╝   ██║   ╚██████╔╝
╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝      ╚═════╝    ╚═╝    ╚═════╝
//   * Created By Github: DGXeon.
//   * Credit To Xeon
//   * © 2024 XLICON-V3-MD.

//base by DGXeon
//re-upload? recode? copy code? give credit ya :)\
// MX-GΔMΞCØDΞR
THE THIEF KING WAS HERE
**/ 

//~~~~~~~~~~~~~~~< SETTINGS >~~~~~~~~~~~~~~~\\
const fs = require('fs');
const chalk = require('chalk');


//~~~~~~~~< Owner Information>~~~~~~~~~~~~~~\\
global.ytname = process.env.YT_NAME || "YT: mxgamecoder";

global.socialm = process.env.GITHUB_USERNAME || "GitHub: MXKPCODE";

global.location = process.env.LOCATION || "Pakistan, Lahore, Sabzazar";


//~~~~~~~~<Session and Bot Details>~~~~~~~~~~~~~\\
global.SESSION_ID = process.env.SESSION_ID || '';

global.botname = process.env.BOT_NAME || 'NARUTO-V1';

global.ownernumber = [process.env.OWNER_NUMBER || '2349021506036'];

global.ownername = process.env.OWNER_NAME || 'MXKPCODE';


//~~~~~~<Website and Social Links>~~~~~~~~~~\\
global.websitex = process.env.WEBSITE_URL || "https://youtube.com/@mxgamecoder";

global.wagc = process.env.WHATSAPP_CHANNEL || "https://whatsapp.com/channel/0029Vavz0e6E50Ugp30Z6z0W";


//~~~~~~~~<Theme and Miscellaneous>~~~~~~~~~~\\
global.themeemoji = process.env.THEME_EMOJI || '⛩';

global.wm = process.env.WATERMARK || "NARUTO-V1";

global.botscript = process.env.SCRIPT_LINK || 'https://github.com/MXKPCODE/NARUTO-V1';

global.packname = process.env.PACK_NAME || "MXKPCODE";

global.author = process.env.AUTHOR_NAME || "MΛDΣ BY MXKPCODE";

global.creator = process.env.CREATOR_NUMBER || "2349021506036@s.whatsapp.net";


//~~~~~~~~~~~~~<Bot Settings>~~~~~~~~~~~~~~~\\
global.xprefix = process.env.PREFIX || '.';

global.premium = [process.env.PREMIUM_NUMBER || '2349021506036'];

global.typemenu = process.env.MENU_TYPE || 'v7';

global.typereply = process.env.REPLY_TYPE || 'v4';

global.autoblocknumber = process.env.AUTOBLOCK_COUNTRYCODE || '212';

global.antiforeignnumber = process.env.ANTIFOREIGN_COUNTRYCODE || '91';

global.antidelete = process.env.ANTI_DELETE === 'true';


global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆'];


global.tempatDB = process.env.DB_FILE || 'database.json';


global.limit = {
  free: parseInt(process.env.FREE_LIMIT || 100),
  premium: parseInt(process.env.PREMIUM_LIMIT || 999),
  vip: process.env.VIP_LIMIT || 'VIP'
};


global.uang = {
  free: parseInt(process.env.FREE_UANG || 10000),
  premium: parseInt(process.env.PREMIUM_UANG || 1000000),
  vip: parseInt(process.env.VIP_UANG || 10000000)
};


global.mess = {
  error: process.env.ERROR_MESSAGE || 'Error!',
  nsfw: process.env.NSFW_MESSAGE || 'Nsfw is disabled in this group, Please tell the admin to enable',
  done: process.env.DONE_MESSAGE || 'Done'
};


global.bot = {
  limit: 0,
  uang: 0
};


global.game = {
  suit: {},
  menfes: {},
  tictactoe: {},
  kuismath: {},
  tebakbom: {},
};


//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\
// Watch for file changes
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Updated ${__filename}`));
  delete require.cache[file];
  require(file);
});
