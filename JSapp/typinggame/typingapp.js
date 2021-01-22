let count={word:0,type:0,miss:0,zone:0,rankUp:20,rank:10,stress:0,combo:0,maxCombo:0,time:120,initialTime:0,score:0,isPlaying:false,n:true}
let nWords=['a','i','u','e','o','y',]
let word;
let t=0;let p=0;let setC=0;
let startTime;
let elapsedTime;
let words;
let subWords;

const score = document.getElementById('score');
const clockD = document.getElementById('clock');
const hundredthPlaces =document.getElementById('hundredthPlaces');
const tensPlaces =document.getElementById('tensPlaces');
const onesPlaces =document.getElementById('onesPlaces');
const read = document.getElementById('read');
const write = document.getElementById('write');
const combo = document.getElementById('combo');
const result = document.getElementById('result');
const hyouka = document.getElementById('hyouka');
const seikairitu =document.getElementById('seikairitu');
const wps = document.getElementById('wps');
const strings = document.getElementById('strings');
const gurge = document.getElementById('gurge');
const clockHand = document.getElementById('clockHand');
const td = document.getElementsByTagName('li');
const amusingWord = document.getElementsByTagName('LI');
const scoreBoxC = document.getElementById('scoreBoxC');
const comboBox = document.getElementById('comboBox');
const resultBox = document.getElementById('resultBox');
const salaryBox = document.getElementById('salaryBox');
const returngame = document.getElementById('returngame');
const book = [
  document.getElementById('page0'),
  document.getElementById('page1'),
  document.getElementById('page2'),
  document.getElementById('page3'),
  document.getElementById('page4'),
  document.getElementById('page5'),
  document.getElementById('page6'),
];
const customer = [
  document.getElementById('customer0'),
  document.getElementById('customer1'),
  document.getElementById('customer2'),
  document.getElementById('customer3'),
  document.getElementById('customer4'),
  document.getElementById('customer5'),
]
const cl = customer.length;
// 効果音
let startSe = new Audio('seApp/カウントダウン電子音.mp3');
let missSe = new Audio('seApp/キャンセル4.mp3');
let writeSe = new Audio('seApp/pushing_a_key.mp3');
let lastSe = new Audio('seApp/決定、ボタン押下1.mp3');
let finishSe = new Audio('seApp/試合終了のゴング.mp3');
let chargeSe = new Audio('seApp/ワープ.mp3');
let zoneSe = new Audio('seApp/atari.mp3');
let resultSe = new Audio('seApp/flying_pan.mp3');
let newWord = new Audio('seApp/putting_a_water_glass2.mp3');
let kyuuryou = new Audio('seApp/歓声と拍手1.mp3');
let setCanSe = new Audio('seApp/short_punch1.mp3')
let bgm = new Audio('seApp/game_maoudamashii_5_casino04.mp3');
const se =(se,t=0)=>{
  se.pause();
  se.currentTime=t;
  se.play();
}
// 演出にかかわる関数
// ゲージの増減
const gurgeUp = ()=>{
  if(count.zone<0){
    count.zone=0;
    return;
  }
  if(count.zone>=count.rankUp){
    zoneSe.addEventListener('ended',()=>{
      document.getElementById('gurgeLabel').classList.remove('rankUp');
    })
    document.getElementById('gurgeLabel').classList.add('rankUp');
    zoneSe.currentTime=0;
    zoneSe.play();
    count.zone=0;
    count.rank++;
    count.rankUp+=5;
  }
  gurge.style.height=`${count.zone*100/count.rankUp}%`

}
// 時計
// 画像の変更
const clockAdvances=()=>{
  let x =count.time*360/count.initialTime;
  clockHand.style.transform=`rotate(${x}deg)`
  let hp = `${count.time}`[0];
  let tp = `${count.time}`[1];
  let op = `${count.time}`[2];
  if(count.time>=100){
    hundredthPlaces.style.visibility='visible'
    tensPlaces.style.visibility='visible'
  }
  if(count.time<100){
    hundredthPlaces.style.visibility='hidden'
    tp=`${count.time}`[0];
    op=`${count.time}`[1];
  }
  if(count.time<10){
    tensPlaces.style.visibility='hidden'
    onesPlaces.src=`imgApp/number/${tp}a.png`
    return;
  }
  hundredthPlaces.src=`imgApp/number/${hp}.png`;
  tensPlaces.src=`imgApp/number/${tp}.png`;
  onesPlaces.src=`imgApp/number/${op}.png`;
}
// サイズの変更
const clockSize = ()=>{
  if(count.time>=100){
    clockD.className='clock100'
    tensPlaces.className='tensPlaces100'
    onesPlaces.className='onesPlaces100'
    return;
  }
  if(count.time<100){
    clockD.className='clock'
    tensPlaces.className='tensPlaces10'
    onesPlaces.className='onesPlaces10'
  }
  if(count.time<10){
    onesPlaces.className='onesPlaces1'
  }
}
// お客さんがめぐる
const shopping =()=>{
  let x = Math.floor(Math.random()*12);
  let y = Math.floor(Math.random()*6);
  document.getElementById('cookBox').classList.toggle('rotate')
  document.getElementById('foods').src=`imgApp/foods/${y}.png`
  document.getElementsByClassName('customer0')[0].src=`imgApp/animals/${x}.png`
  for(i=0;i<cl;i++){
    customer[i].className=`customer${(i+t%cl)%cl}`;
  }
  t++;
}
// ページをめくる
const turn = ()=>{
  setTimeout(curtain,2000)
  setTimeout(shopping,2000)
  for(i=0;i<book.length;i++){
    book[i].classList.add(`turn${p}`);
    p++;
  }
}
const curtain =()=>{
  let x=document.getElementById('bannerBox').className;
  switch(x){
    case 'bannerBox':document.getElementById('bannerBox').className='bannerBox0';
    break;
    case 'bannerBox0':document.getElementById('bannerBox').className='bannerBox';
    break;
  }
}
const ending = ()=>{
  const results =Math.round(1000-count.miss/count.type*1000)/10;
  const wpm=Math.round((count.type-count.miss)/(elapsedTime/1000))*60;
  hyouka.textContent=`${Math.round(Math.pow(results/100,3)*wpm)}`;
  seikairitu.textContent=`${results}%`;
  wps.textContent=`${(wpm/6)/10}回／秒`;
  document.getElementById('catImg3').src='imgApp/question.png';

  setTimeout(()=>{
    scoreBoxC.style.visibility='visible';
    se(resultSe);
  },100)
  setTimeout(()=>{comboBox.style.visibility='visible';se(resultSe);},600)
  setTimeout(()=>{resultBox.style.visibility='visible';se(resultSe);},1100)
  setTimeout(()=>{
    salaryBox.style.visibility='visible';
    returngame.style.visibility='visible';
    document.getElementById('catImg3').src='imgApp/goodjob.png';
    setCan();
  },1600)
}


// エラー探し用関数
const checkCount =()=>{
  console.log(count);
}

// タイピングセット作成
const setWord=()=>{
  let n=Math.floor(Math.random()*words.length);
  console.log(n);
  read.textContent=words[n].read;
  word=words.splice(n,1)[0].write;
  write.textContent=word;
  count.word=0;
}
// オープニング
const opening = (e)=>{
  if(e.key!=='f'&&e.key!=='j'){
    return;
  }
  if(e.key==='f'||e.key==='j'){
    document.getElementById('manual').style.visibility='hidden'
    startSe.play();
    turn();
    document.removeEventListener('keydown',opening);
    setTimeout(() => {
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
        clockSize();
        if(1<=count.time && count.time<=10){
          bgm.playbackRate=1.5;
          se(lastSe);
        }
        if(count.time<=0){
          count.isPlaying=false;
          document.getElementById('catImg3').src='imgApp/tired.png';
          curtain();
          clearInterval(clock)
          bgm.pause();
          elapsedTime = Date.now() - startTime;
          if(count.type===0){count.type=1;count.miss=1}
          if(count.miss===0){combo.textContent=`${count.type}HITs`}
          finishSe.addEventListener('ended',ending)
          finishSe.play();
          return;
        }
      }
      const clock=setInterval(countDown,1000);
      document.addEventListener('keydown',checkType)
      count.isPlaying=true;
    }, 3000);
  }
}
// エンディング
// 正誤判定
const esc = ()=>{
  document.location.reload();
}
const checkType = (e)=>{

    if(count.isPlaying===false){
      return;
    }
    if(e.key==="Backspace"){
      esc();
    }
    count.type++;
    combo.textContent=`${count.maxCombo}HITs`
    if(e.key!==word[count.word]){
      if(e.key==='n' && nWords.indexOf(word[count.word])===-1 && word[count.word-1]==='n' && count.n===true){
        count.combo++;
        count.zone++;
        gurgeUp();
        se(writeSe);
        write.textContent='_'.repeat(count.word)+word.substring(count.word);
        count.n=false;
        return;
      }
      if(count.combo>count.maxCombo){
        count.maxCombo=count.combo;
      }
      se(missSe);
      count.combo=0;
      count.miss++;
      count.zone=0;
      gurgeUp();
      return;
    }
    count.word++;
    count.combo++;
    count.zone++;
    count.n=true;
    gurgeUp();
    se(writeSe);
    write.textContent='_'.repeat(count.word)+word.substring(count.word);
    if(count.word===word.length){
      if(words.length===0){
        words=[...subWords];
      }
      count.score+=count.word*100;
      score.textContent=count.score;
      se(newWord);
      shopping();
      setWord();
    }
}
// ゲーム部分
const reset = ()=>{
  count={word:0,type:0,miss:0,zone:0,rankUp:10,rank:0,stress:0,combo:0,maxCombo:0,time:120,initialTime:0,score:0,isPlaying:false,n:true}
  word=[];
  words=[];
  for(i=0;i<amusingWord.length/4;i++){
    words.push({read:amusingWord[4*i+1].textContent,write:amusingWord[4*i+3].textContent})
  }
  subWords=[...words];
  document.addEventListener('keydown',opening);
  strings.style.visibility='hidden';
  scoreBoxC.style.visibility='hidden';
  comboBox.style.visibility='hidden';
  resultBox.style.visibility='hidden';
  salaryBox.style.visibility='hidden';
  returngame.style.visibility='hidden';
  count.initialTime=count.time
  clockAdvances();
  clockSize();
  gurgeUp();
  let a = Math.floor(Math.random()*12)
  let b = Math.floor(Math.random()*12)
  let c = Math.floor(Math.random()*12)
  let d = Math.floor(Math.random()*12)
  customer[1].src=`imgApp/animals/${a}.png`
  customer[2].src=`imgApp/animals/${b}.png`
  customer[3].src=`imgApp/animals/${c}.png`
  customer[4].src=`imgApp/animals/${d}.png`
}
const setCanN = (x)=>{
  if(x>9){
    let tp = `${x}`[0];
    let op = `${x}`[1];
    document.getElementById('salaryNTens').style.backgroundImage=`url(imgApp/number/${tp}a.png)`;
    document.getElementById('salaryNOnes').style.backgroundImage=`url(imgApp/number/${op}a.png)`;
    return;
  }
  let op = `${x}`[0];
  document.getElementById('salaryNOnes').style.backgroundImage=`url(imgApp/number/${op}a.png)`;
}
const setCan =()=>{
  if(setC<count.rank){
    const can = document.createElement('img');
    const salaryImgBox = document.getElementById('salaryImgBox');
    let r =Math.random()*20;
    salaryImgBox.appendChild(can);
    salaryImgBox.children[setC].src=`imgApp/can.png`;
    salaryImgBox.children[setC].style.transform=`rotate(${10-r}deg)`;
    se(setCanSe);
    setCanN(setC+1);
    setTimeout(setCan,200);
    setC++
    return;
  }
  se(kyuuryou);
}
reset();