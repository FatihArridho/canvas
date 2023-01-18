## Installation

```bash
$ npm install canvas-fatih
```

## Example Promote

```js
const cf = require("canvas-fatih");
const fs = require('fs');

const image = await new cf.Promote()
    .setAvatar("https://api.fatiharridho.my.id/images/logo.png")
    .setUsername("Fatih Arridho")
    .setGuildName("CpdXSeven")
    .setGuildIcon("https://cdn.dribbble.com/users/1051393/screenshots/7011829/media/f19892ea228d4dfafd5a0abf273f6b3c.png")
    .setBackground("https://telegra.ph/file/3f4993d39b9994c54da94.jpg")
    .setMemberCount("404")
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/promote.png', data)
 
```
## Result Promote
<img src="https://api.fatiharridho.my.id/api/canvas/promote?pp=https://api.fatiharridho.my.id/images/logo.png&nama=Fatih%20Arridho&namagc=CpdXSeven&ppgc=https://cdn.dribbble.com/users/1051393/screenshots/7011829/media/f19892ea228d4dfafd5a0abf273f6b3c.png&bg=https://telegra.ph/file/3f4993d39b9994c54da94.jpg&member=404" height="145"></img>

## Example Demote

```js
const cf = require("canvas-fatih");
const fs = require('fs');

const image = await new cf.Demote()
    .setAvatar("https://api.fatiharridho.my.id/images/logo.png")
    .setUsername("Fatih Arridho")
    .setGuildName("CpdXSeven")
    .setGuildIcon("https://cdn.dribbble.com/users/1051393/screenshots/7011829/media/f19892ea228d4dfafd5a0abf273f6b3c.png")
    .setBackground("https://telegra.ph/file/3f4993d39b9994c54da94.jpg")
    .setMemberCount("404")
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/demote.png', data)
 
```
## Result Demote
<img src="https://api.fatiharridho.my.id/api/canvas/demote?pp=https://api.fatiharridho.my.id/images/logo.png&nama=Fatih%20Arridho&namagc=CpdXSeven&ppgc=https://cdn.dribbble.com/users/1051393/screenshots/7011829/media/f19892ea228d4dfafd5a0abf273f6b3c.png&bg=https://telegra.ph/file/3f4993d39b9994c54da94.jpg&member=404" height="145"></img>
