(function(){"use strict";var e=require("crypto"),n=require("base64url"),i=require("fs"),r=Date.now(),t=n(e.randomBytes(64));i.appendFile("./config/app.js","\n//UNIX="+r+"\n//APP_KEY="+t,function(e){if(e)throw e}),i.appendFile(".env","\n#UNIX="+r+"\n#APP_KEY="+t,function(e){if(e)throw e;process.exit(0)})}).call(this);

//UNIX=1643641329027
//APP_KEY=KBQoJ3XN7mTKa189rZY73P0X7gEGvXJRXYxhddakoXe_uh2DkiaIOoDQXR0YYAfUiA3jYCozH4k2S8JcIf0Z0A