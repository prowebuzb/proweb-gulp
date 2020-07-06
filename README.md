<p align="center"><img src="https://proweb.uz/assets/img/favicons/proweb-fb.jpg" width="500"></p>

[En](#install)<br>
[Ru](#устанока)<br>
[Uz](#o'rnatish)<br>

## Install

```bash
$ npm init
```


<p> Install <b>gulp-cli</b> </p>

```bash
$ npm i gulp-cli -g
```
<p> Install <b>gulp full plagin</b> </p>

```bash
$ npm i gulp gulp-autoprefixer @babel/core gulp-babel @babel/preset-env babel-preset-minify gulp-group-css-media-queries browser-sync gulp-sourcemaps node-sass gulp-sass gulp-include gulp-rename -D
```
<p> Install <b>proweb gulp</b> </p>

```bash
$ npm i gulp-proweb
```
Create the <b>gulpfile.js</b> file

```bash
$ npx https://gist.github.com/nibltaov/cc020cc26de2a6765798908cbc88fa24
```

<p>The <b>gulp-proweb</b> module creates the app folder on its own for the first time</p>

He creates his own directory of folders

```text
app/
├── src/
│   ├── fonts/
│   ├── images/
│   ├── script/
│   │    └── common.js
│   ├──style/
│   │    └── main.scss
│   ├──view/
│   └──index.html

```
<p>And to start working with gulp after all the entries in the terminal described above. Write in the terminal gulp</p>

```bash
$ gulp
```
<p>The gulp-proweb module monitors all files and their changes and reboots the server using browser-sync</p>

## Устанока

В первую очередь Вы должны инициализировать проект

```bash
$ npm init
```


<p> Установка <b>gulp-cli</b> в Ваш проект</p>

```bash
$ npm i gulp-cli -g
```

<p> Для работы без ошибок Вы должны установить все плагины</p>

```bash
$ npm i gulp gulp-autoprefixer @babel/core gulp-babel @babel/preset-env babel-preset-minify gulp-group-css-media-queries browser-sync gulp-sourcemaps node-sass gulp-sass gulp-include gulp-rename -D
```
<p> А теперь устанока самого плагина <b>proweb gulp</b> </p>

```bash
$ npm i gulp-proweb
```

Далее мы должны создать файл <b>gulpfile.js</b> при помощи команды:

```bash
$ npx https://gist.github.com/prowebuzb/9eb50686f871e2f4276e5005e1d5b0f7
```

<p>Для запуска gulp Вы должны в терминале написать следующую команду</p>

```bash
$ gulp
```

<p>Модуль <b>gulp-proweb</b> самостоятельео создает папки для работы проекта</p>

Ниже представлена иерархия директории для работы gulp`a

```text
app/
├── src/
│   ├── fonts/
│   ├── images/
│   ├── script/
│   │    └── common.js
│   ├──style/
│   │    └── main.scss
│   ├──view/
│   └──index.html

```

<p>После запуска у Вас автоматически будет создаваться сервер browser-sync который будет следить за файлами и автоматически перезагружать страницу в брузере</p>


## O'rnatish

Avvalo, Siz loyihaingizni o'rnatishingiz kerak

```bash
$ npm init
```


<p> Sizning lolihangizga <b>gulp-cli</b>  o'rnatish </p>

```bash
$ npm i gulp-cli -g
```

<p>Xatolarsiz ishlashingiz uchun Siz barcha plaginlarni o'rnatishingiz kerak</p>

```bash
$ npm i gulp gulp-autoprefixer @babel/core gulp-babel @babel/preset-env babel-preset-minify gulp-group-css-media-queries browser-sync gulp-sourcemaps node-sass gulp-sass gulp-include gulp-rename -D
```
<p>Endi plaginni o'zini o'rnatamiz <b>proweb gulp</b> </p>

```bash
$ npm i gulp-proweb
```

Keyinchalik pastda keltirilgan buyruq yordamida <b>gulpfile.js</b> fayl yaratishimiz kerak:

```bash
$ npx https://gist.github.com/prowebuzb/9eb50686f871e2f4276e5005e1d5b0f7
```

<p> Gulp ni ishga tushirish uchun Biz keyingi buyruqni terminalga  yozishinmiz kerak</p>

```bash
$ gulp
```
Loyiha mustaqil ravishda ishlashi uchun Modul papkalarni yaratadi                

<p>Loyiha <b>gulp-proweb</b>mustaqil ravishda ishlashi uchun Modul papkalarni yaratadi </p>

Gulp ni ishlashi uchun pastda kataloglar ierarxiyasi ko'rsatilgan

```text
app/
├── src/
│   ├── fonts/
│   ├── images/
│   ├── script/
│   │    └── common.js
│   ├──style/
│   │    └── main.scss
│   ├──view/
│   └──index.html

```

<p>Boshlaganizdan so'ng, siz fayllarni kuzatadigan va brauzerda sahifasini avtomatik ravishda qayta tiklaydigan browser-sync serveri avtomatik yaratiladi </p>