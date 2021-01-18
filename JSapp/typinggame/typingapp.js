let count={word:0,type:0,miss:0,zone:0,stress:0,combo:0,maxCombo:0,time:60,initialTime:60,score:0,isPlaying:false}
let word;
let startTime;
let elapsedTime;
let words =[];
// let $id={
//   score : document.getElementById('score'),
//   clockD : document.getElementById('clock'),
//   tensPlaces :document.getElementById('tensPlaces'),
//   onesPlaces :document.getElementById('onesPlaces'),
//   read : document.getElementById('read'),
//   kana : document.getElementById('kana'),
//   write : document.getElementById('write'),
//   combo : document.getElementById('combo'),
//   result : document.getElementById('result'),
//   strings : document.getElementById('strings'),
//   gurge : document.getElementById('gurge'),
//   clockHand : document.getElementById('clockHand'),
//   td : document.getElementsByTagName('td'),
// }
const score = document.getElementById('score');
const clockD = document.getElementById('clock');
const tensPlaces =document.getElementById('tensPlaces');
const onesPlaces =document.getElementById('onesPlaces');
const read = document.getElementById('read');
const kana = document.getElementById('kana');
const write = document.getElementById('write');
const combo = document.getElementById('combo');
const result = document.getElementById('result');
const strings = document.getElementById('strings');
const gurge = document.getElementById('gurge');
const clockHand = document.getElementById('clockHand');
const td = document.getElementsByTagName('li');
const catImg = document.getElementById('catImg');
// 演出にかかわる関数
// ゲージの増減
const gurgeUp = ()=>{
  gurge.style.width=`(${count.zone}%)`
}
// 時計
const clockAdvances=()=>{
  let tp = Math.floor(count.time/10);
  let op = count.time%10;
  tensPlaces.src=`imgApp/number/${tp}.png`;
  onesPlaces.src=`imgApp/number/${op}.png`;
  let x =count.time*360/count.initialTime;
  clockHand.style.transform=`rotate(${x}deg)`
}
// 効果音
let startSe = new Audio('seApp/カウントダウン電子音.mp3');
let missSe = new Audio('seApp/キャンセル4.mp3');
let writeSe = new Audio('seApp/pushing_a_key.mp3');
let lastSe = new Audio('seApp/決定、ボタン押下1.mp3');
let finishSe = new Audio('seApp/試合終了のゴング.mp3');
let chargeSe = new Audio('seApp/ワープ.mp3');
let zoneSe = new Audio('seApp/回復魔法1.mp3');
let bgm = new Audio('seApp/game_maoudamashii_5_casino04.mp3')

// エラー探し用関数
const checkCount =()=>{
  console.log(count);
}

// タイピングセット作成
for(i=0;i<td.length/4;i++){
  words.push({read:td[4*i+1].textContent,kana:td[4*i+2].textContent,write:td[4*i+3].textContent})
}
let subWords=[...words];

const setWord=()=>{
  let n=Math.floor(Math.random()*words.length);
  console.log(n);
  read.textContent=words[n].read;
  kana.textContent=words[n].kana;
  word=words.splice(n,1)[0].write;
  write.textContent=word;
  count.word=0;
  document.getElementById('focus').value=''
}
// オープニング
strings.style.visibility='hidden'
const opening = (e)=>{
  if(e.key!=='f'&&e.key!=='j'){
    return;
  }
  if(e.key==='f'||e.key==='j'){
    startSe.play();
    catImg.src='imgApp/wakeup.png'
    document.removeEventListener('keydown',opening);
    setTimeout(() => {
      catImg.src='imgApp/working.png'
      bgm.volume=0.3;
      bgm.loop=true;
      bgm.play();
      startTime=Date.now();
      setWord();
      const countDown=()=>{
        count.time--;
        count.zone--;
        gurgeUp();
        clockAdvances();
        if(1<=count.time && count.time<=10){
          bgm.playbackRate=1.5;
          lastSe.pause();
          lastSe.currentTime=0;
          lastSe.play();
        }
        if(count.time===9){
          document.getElementById('tensPlaces').classList.toggle('tensPlaces0');
          document.getElementById('onesPlaces').classList.toggle('onesPlaces0');
        }
        if(count.time<=0){
          clearInterval(clock)
          bgm.pause();
          elapsedTime = Date.now() - startTime;
          if(count.type===0){count.type=1;count.miss=1}
          if(count.miss===0){combo.textContent=`${count.type}HITs`}
          finishSe.play();
          catImg.src='imgApp/tired.png'
          const results =Math.round(1000-count.miss/count.type*1000)/10;
          const wpm=Math.round((count.type-count.miss)/(elapsedTime/1000))*60;
          result.textContent=`評価${Math.round(Math.pow(results/100,3)*wpm)}　正解率${results}%　${(wpm/6)/10}回／秒でした`;
          count.isPlaying=false;
          return;
        }
      }
      const clock=setInterval(countDown,1000);
      document.addEventListener('keydown',checkType)
      count.isPlaying=true;
    }, 3000);
  }
}
const zone=()=>{
  zoneSe.play();
  count.time+=Math.floor(4*count.zone*count.zone/10000);
  clockAdvances();
  count.zone=0;
  gurgeUp();
}
// 正誤判定
const checkType = (e)=>{
    if(count.isPlaying===false){
      return;
    }
    if(e.key===' ' && count.zone>50){
      zone();
      return;
    }else if(e.key===' '){
      return;
    }
    count.type++;
    combo.textContent=`${count.maxCombo}HITs`
    if(e.key!==word[count.word]){
      if(count.combo>count.maxCombo){
        count.maxCombo=count.combo;
      }
      missSe.pause();
      missSe.currentTime=0;
      missSe.play();
      count.combo=0;
      count.miss++;
      count.zone=0;
      gurgeUp();
      return;
    }
    count.word++;
    count.combo++;
    count.zone++;
    gurgeUp();
    writeSe.pause();
    writeSe.currentTime=0;
    writeSe.play();
    write.textContent='_'.repeat(count.word)+word.substring(count.word);
    if(count.zone>=100){
      zone();
    }
    if(count.zone===52||count.zone===73||count.zone===89){
      chargeSe.pause();
      chargeSe.currentTime=0;
      chargeSe.play();
    }
    if(count.word===word.length){
      if(words.length===0){
        words=[...subWords];
      }
      count.score+=count.word*100;
      score.textContent=count.score;
      setWord();
    }
}
// ゲーム部分
document.addEventListener('keydown',opening);
document.addEventListener('click',()=>{
  document.getElementById('focus').focus();
})
clockAdvances();
gurgeUp();