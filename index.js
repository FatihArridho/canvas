const Canvas = require("canvas");
// Register Bold font
Canvas.registerFont(`${__dirname}/assets/fonts/theboldfont.ttf`, { family: "Bold" });
// Register SketchMatch font
Canvas.registerFont(`${__dirname}/assets/fonts/SketchMatch.ttf`, { family: "SketchMatch" });
// Register SketchMatch font
Canvas.registerFont(`${__dirname}/assets/fonts/LuckiestGuy-Regular.ttf`, { family: "luckiest guy" });
// Register KeepCalm font
Canvas.registerFont(`${__dirname}/assets/fonts/KeepCalm-Medium.ttf`, { family: "KeepCalm" });
// Register CubestMedium font
Canvas.registerFont(`${__dirname}/assets/fonts/CubestMedium.otf`, { family: "CubestMedium" });
//unitalic
Canvas.registerFont(`${__dirname}/assets/fonts/Uni-Italic.ttf`, { family: "Unitalic" });
//built
Canvas.registerFont(`${__dirname}/assets/fonts/Bult.ttf`, { family: "Built" });
//Beam
Canvas.registerFont(`${__dirname}/assets/fonts/beamweaponital.ttf`, { family: "BeamweaponItal" });
Canvas.registerFont(`${__dirname}/assets/fonts/BrushKing.otf`, { family: "brush" });

module.exports.Lickanime = require('./src/linz/Lick');
module.exports.Burn = require('./src/linz/Burn');
module.exports.Rank = require('./src/rank/Rank');
module.exports.Hacker1 = require('./src/linz/Hacker1');
module.exports.Hacker2 = require('./src/linz/Hacker2');
module.exports.Hacker3 = require('./src/linz/Hacker3');
module.exports.Patrick = require('./src/linz/Patrick');
module.exports.Signup = require('./src/update/Signup');
module.exports.Up = require('./src/premium/Up');
module.exports.Ig = require('./src/update/Ig');
module.exports.Inv = require('./src/update/Inv');
//greetings
module.exports.Base = require('./src/greetings/Base');
module.exports.Promote = require('./src/greetings/Promote');
module.exports.Demote = require('./src/greetings/Demote');
module.exports.Verification = require('./src/greetings/Verification');
module.exports.Goodbye = require('./src/greetings/Goodbye');
module.exports.Goodbye2 = require('./src/greetings2/Goodbye2');
module.exports.Goodbye3 = require('./src/greetings3/Goodbye3');
module.exports.Welcome = require('./src/greetings/Welcome');
module.exports.Welcome2 = require('./src/greetings2/Welcome2');
module.exports.Welcome3 = require('./src/greetings3/Welcome3');
//gfx
module.exports.Gura = require('./src/gfx/Gura');
module.exports.Gfx1 = require('./src/gfx/Gfx1');
module.exports.Gfx2 = require('./src/gfx/Gfx2');
module.exports.Gfx3 = require('./src/gfx/Gfx3');
module.exports.Gfx4 = require('./src/gfx/Gfx4');
module.exports.Gfx5 = require('./src/gfx/Gfx5');
module.exports.customGfx = require('./src/gfx/gfxcustom')
module.exports.customGfx2 = require('./src/gfx/gfxCustom2')
//MyBot
module.exports.Bag = require('./src/premium/Bag');
module.exports.Stat = require('./src/premium/Stat');
module.exports.Xnxx = require('./src/premium/Xnxx');










