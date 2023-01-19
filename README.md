## Installation

```bash
$ npm install canvas-fatih
```

## Example Welcome V1

```js
const cf = require("canvas-fatih");
const fs = require('fs');

const image = await new cf.Welcome()
    .setAvatar("https://api.fatiharridho.my.id/images/logo.png")
    .setUsername("Fatih Arridho")
    .setGuildName("CpdXSeven")
    .setGuildIcon("https://cdn.dribbble.com/users/1051393/screenshots/7011829/media/f19892ea228d4dfafd5a0abf273f6b3c.png")
    .setBackground("https://telegra.ph/file/3f4993d39b9994c54da94.jpg")
    .setMemberCount("404")
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/welcome-v1.png', data)
 
```
## Result Welcome V1
<img src="https://api.fatiharridho.my.id/api/canvas/welcome/v1?pp=https://api.fatiharridho.my.id/images/logo.png&nama=Fatih%20Arridho&namagc=CpdXSeven&ppgc=https://cdn.dribbble.com/users/1051393/screenshots/7011829/media/f19892ea228d4dfafd5a0abf273f6b3c.png&bg=https://telegra.ph/file/3f4993d39b9994c54da94.jpg&member=404" height="145"></img>

## Example Welcome V2

```js
const cf = require("canvas-fatih");
const fs = require('fs');

const image = await new cf.Welcome2()
    .setAvatar("https://api.fatiharridho.my.id/images/logo.png")
    .setUsername("Fatih Arridho")
    .setBg("https://img.freepik.com/free-vector/perspective-japanese-street-neon-lights_52683-44988.jpg")
    .setGroupname("CpdXSeven")
    .setMember("404")
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/welcome-v2.png', data)
 
```
## Result Welcome V2
<img src="https://api.fatiharridho.my.id/api/canvas/welcome/v2?pp=https://api.fatiharridho.my.id/images/logo.png&nama=Fatih%20Arridho&bg=https://img.freepik.com/free-vector/perspective-japanese-street-neon-lights_52683-44988.jpg&namagc=CpdXSeven&member=404" height="145"></img>

## Example Welcome V3

```js
const cf = require("canvas-fatih");
const fs = require('fs');

const image = await new cf.Welcome3()
    .setAvatar("https://api.fatiharridho.my.id/images/logo.png")
    .setUsername("Fatih Arridho")
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/welcome-v3.png', data)
 
```
## Result Welcome V3
<img src="https://api.fatiharridho.my.id/api/canvas/welcome/v3?pp=https://api.fatiharridho.my.id/images/logo.png&nama=Fatih%20Arridho" height="145"></img>

## Example Goodbye V1

```js
const cf = require("canvas-fatih");
const fs = require('fs');

const image = await new cf.Goodbye()
    .setAvatar("https://api.fatiharridho.my.id/images/logo.png")
    .setUsername("Fatih Arridho")
    .setGuildName("CpdXSeven")
    .setGuildIcon("https://cdn.dribbble.com/users/1051393/screenshots/7011829/media/f19892ea228d4dfafd5a0abf273f6b3c.png")
    .setBackground("https://telegra.ph/file/3f4993d39b9994c54da94.jpg")
    .setMemberCount("404")
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/goodbye-v1.png', data)
 
```
## Result Goodbye V1
<img src="https://api.fatiharridho.my.id/api/canvas/goodbye/v1?pp=https://api.fatiharridho.my.id/images/logo.png&nama=Fatih%20Arridho&namagc=CpdXSeven&ppgc=https://cdn.dribbble.com/users/1051393/screenshots/7011829/media/f19892ea228d4dfafd5a0abf273f6b3c.png&bg=https://telegra.ph/file/3f4993d39b9994c54da94.jpg&member=404" height="145"></img>

## Example Goodbye V2

```js
const cf = require("canvas-fatih");
const fs = require('fs');

const image = await new cf.Goodbye2()
    .setAvatar("https://api.fatiharridho.my.id/images/logo.png")
    .setUsername("Fatih Arridho")
    .setBg("https://img.freepik.com/free-vector/perspective-japanese-street-neon-lights_52683-44988.jpg")
    .setGroupname("CpdXSeven")
    .setMember("404")
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/goodbye-v2.png', data)
 
```
## Result Goodbye V2
<img src="https://api.fatiharridho.my.id/api/canvas/goodbye/v2?pp=https://api.fatiharridho.my.id/images/logo.png&nama=Fatih%20Arridho&bg=https://img.freepik.com/free-vector/perspective-japanese-street-neon-lights_52683-44988.jpg&namagc=CpdXSeven&member=404" height="145"></img>

## Example Goodbye V3

```js
const cf = require("canvas-fatih");
const fs = require('fs');

const image = await new cf.Goodbye3()
    .setAvatar("https://api.fatiharridho.my.id/images/logo.png")
    .setUsername("Fatih Arridho")
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/goodbye-v3.png', data)
 
```
## Result Goodbye V3
<img src="https://api.fatiharridho.my.id/api/canvas/goodbye/v3?pp=https://api.fatiharridho.my.id/images/logo.png&nama=Fatih%20Arridho" height="145"></img>

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

## Example Verification

```js
const cf = require("canvas-fatih");
const fs = require('fs');

const image = await new cf.Verification()
    .setAvatar("https://api.fatiharridho.my.id/images/logo.png")
    .setUsername("Fatih Arridho")
    .setGuildName("CpdXSeven")
    .setGuildIcon("https://cdn.dribbble.com/users/1051393/screenshots/7011829/media/f19892ea228d4dfafd5a0abf273f6b3c.png")
    .setBackground("https://telegra.ph/file/3f4993d39b9994c54da94.jpg")
    .setMemberCount("404")
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/verification.png', data)
 
```
## Result Verification
<img src="https://api.fatiharridho.my.id/api/canvas/verification?pp=https://api.fatiharridho.my.id/images/logo.png&nama=Fatih%20Arridho&namagc=CpdXSeven&ppgc=https://cdn.dribbble.com/users/1051393/screenshots/7011829/media/f19892ea228d4dfafd5a0abf273f6b3c.png&bg=https://telegra.ph/file/3f4993d39b9994c54da94.jpg&member=404" height="145"></img>

## Example Signup

```js
const cf = require("canvas-fatih");
const fs = require('fs');

const image = await new cf.Signup()
    .setAvatar("https://api.fatiharridho.my.id/images/logo.png")
    .setName("Fatih Arridho")
    .setBackground("https://telegra.ph/file/3f4993d39b9994c54da94.jpg")
    .setEmail("admin@fth.my.id")
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/signup.png', data)
 
```
## Result Signup
<img src="https://api.fatiharridho.my.id/api/canvas/signup?pp=https://api.fatiharridho.my.id/images/logo.png&nama=Fatih%20Arridho&bg=https://telegra.ph/file/3f4993d39b9994c54da94.jpg&email=admin@fth.my.id" height="145"></img>

## Example Hacker V1

```js
const cf = require("canvas-fatih");
const fs = require('fs');

const image = await new cf.Hacker1()
    .setName("Fatih Arridho")
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/hacker-v1.png', data)
 
```
## Result Hacker V1
<img src="https://api.fatiharridho.my.id/api/canvas/hacker/v1?nama=Fatih%20Arridho" height="145"></img>

## Example Hacker V2

```js
const cf = require("canvas-fatih");
const fs = require('fs');

const image = await new cf.Hacker2()
    .setAvatar("https://api.fatiharridho.my.id/images/logo.png")
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/hacker-v2.png', data)
 
```
## Result Hacker V2
<img src="https://api.fatiharridho.my.id/api/canvas/hacker/v2?bg=https://api.fatiharridho.my.id/images/logo.png" height="145"></img>

## Example Hacker V3

```js
const cf = require("canvas-fatih");
const fs = require('fs');

const image = await new cf.Hacker3()
    .setAvatar("https://api.fatiharridho.my.id/images/logo.png")
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/hacker-v3.png', data)
 
```
## Result Hacker V3
<img src="https://api.fatiharridho.my.id/api/canvas/hacker/v3?bg=https://api.fatiharridho.my.id/images/logo.png" height="145"></img>

## Example Rank

```js
const cf = require("canvas-fatih");
const fs = require('fs');

const image = await new cf.Rank()
    .setAvatar("https://api.fatiharridho.my.id/images/logo.png")
    .setUsername("Fatih Arridho")
    .setBg("https://telegra.ph/file/3f4993d39b9994c54da94.jpg")
    .setNeedexp("5000")
    .setCurrxp("6000")
    .setLevel("9")
    .setRank("https://i.pinimg.com/originals/b2/fc/1d/b2fc1da4a7c50bcc2f48fc75b54c1fee.png")
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/rank.png', data)
 
```
## Result Rank
<img src="https://api.fatiharridho.my.id/api/canvas/rank?pp=https://api.fatiharridho.my.id/images/logo.png&nama=Fatih%20Arridho&bg=https://telegra.ph/file/3f4993d39b9994c54da94.jpg&needxp=5000&currxp=6000&level=9&logorank=https://i.pinimg.com/originals/b2/fc/1d/b2fc1da4a7c50bcc2f48fc75b54c1fee.png" height="145"></img>

