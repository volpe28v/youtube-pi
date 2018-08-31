Download and play youtube video on raspberry pi.

## Install
```
$ npm install
```

## Download video
```
$ node download.js https://www.youtube.com/watch?v=xxxxxxx videos/hoge.mp4
```

## Play video
Currently supports shuffle play and infinite loop playback.

```
$ node play.js videos/hoge.mp4

or to play multi videos 

$ node play.js videos/*.mp4
```

