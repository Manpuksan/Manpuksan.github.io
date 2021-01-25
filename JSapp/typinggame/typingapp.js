
let count={word:0,type:0,miss:0,zone:0,rankUp:20,rank:0,stress:0,limit:7,combo:0,maxCombo:0,time:120,initialTime:0,score:0,isPlaying:false,n:true,check:[]}
let nWords=['a','i','u','e','o','y',];
let missKey=[]
let word;
let wordNext;
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
const readNext = document.getElementById('readNext');
const write = document.getElementById('write');
const combo = document.getElementById('combo');
const result = document.getElementById('result');
const hyouka = document.getElementById('hyouka');
const seikairitu =document.getElementById('seikairitu');
const wps = document.getElementById('wps');
const strings = document.getElementsByName('strings');
const gurge = document.getElementById('gurge');
const clockHand = document.getElementById('clockHand');
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
];
const cl = customer.length;
const HIT = document.getElementById('hitBox');
const hit = [
  document.getElementById('hit0'),
  document.getElementById('hit1'),
  document.getElementById('hit2'),
  document.getElementById('hit3'),
];
const stringsChecked = ()=>{
  for(i=0;i<strings.length;i++){count.check[i]=strings[i].checked;}
  if(count.check.indexOf(true)===-1){return true;}
  return false;
}
// 文字列を配列に逆からいれる
const arr =(str)=>{
  return(`${str}`.split('').reverse());
}
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
let mukyuu = new Audio('seApp/クイズ不正解1.mp3')
let setCanSe = new Audio('seApp/short_punch1.mp3')
let bgm = new Audio('seApp/game_maoudamashii_5_casino04.mp3');
const se =(se,t=0)=>{
  try{
    se.pause();
    se.currentTime=t;
    se.play();
  }catch{
    return;
  }
}
// 演出にかかわる関数
// ゲージの増減
const gurgeUp = ()=>{
  if(count.zone<0){
    count.zone=0;
    return;
  }
  setHit();
  if(count.zone>=count.rankUp){
    zoneSe.addEventListener('ended',()=>{
      document.getElementById('gurgeLabel').classList.remove('rankUp');
    })
    document.getElementById('gurgeLabel').classList.add('rankUp');
    zoneSe.currentTime=0;
    zoneSe.play();
    count.zone=0;
    count.rank++;
  }
  gurge.style.height=`${count.zone*100/count.rankUp}%`

}
// 時計
// 画像の変更
const clockAdvances=()=>{
  let x =count.time*360/count.initialTime;
  clockHand.style.transform=`rotate(${x}deg)`
  let hp = arr(count.time)[2];
  let tp = arr(count.time)[1];
  let op = arr(count.time)[0];
  if(count.time>=100){
    hundredthPlaces.style.visibility='visible'
    tensPlaces.style.visibility='visible'
  }
  if(count.time<100){
    hundredthPlaces.style.visibility='hidden'
  }
  if(count.time<10){
    tensPlaces.style.visibility='hidden'
    onesPlaces.src=`imgApp/number/${op}a.png`
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
const advance = (elm,img='')=>{
  let adN =0;
  const ad =()=>{
    if(adN<10){elm.src=`imgApp/number/${adN}${img}.png`;adN++;console.log(adN);}else{elm.removeEventListener('load',ad);adN=0;}}
  elm.addEventListener('load',ad);
  elm.src=`imgApp/number/${adN}${img}.png`;
  }

  // hundredthPlaces.src=`imgApp/number/${i}a.png`;
  // tensPlaces.src=`imgApp/number/${i}g.png`;
  // onesPlaces.src=`imgApp/number/${i}.png`;
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
// 幕の開け閉め
const curtain =()=>{
  let x=document.getElementById('bannerBox').className;
  switch(x){
    case 'bannerBox':document.getElementById('bannerBox').className='bannerBox0';
    break;
    case 'bannerBox0':document.getElementById('bannerBox').className='bannerBox';
    break;
  }
}
// 結果発表
const ending = ()=>{
  const results =Math.round(1000-count.miss/count.type*1000)/10;
  const wpm=(count.type-count.miss)/(elapsedTime/1000)*60;
  hyouka.textContent=`${Math.round(Math.pow(results/100,3)*wpm)}`;
  seikairitu.textContent=`${results}%`;
  wps.textContent=`${Math.round(wpm/6)/10}回／秒`;
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
    document.addEventListener('keydown',(e)=>{if(e.key===' '){esc()}});
    document.getElementById('returnTop').style.visibility='visible';
    setCan();
  },1600)
}

// タイピングセット作成
const makeWords=()=>{
  word=[];
  words=[];
  if(document.getElementById('todoufuken').checked){
    for(i=0;i<todoufuken.length;i++){
      words.push(todoufuken[i]);
    }
  }
  if(document.getElementById('hennnakotoba').checked){
    for(i=0;i<hennnakotoba.length;i++){
      words.push(hennnakotoba[i]);
    }
  }
  if(document.getElementById('hayakuti').checked){
    for(i=0;i<hayakuti.length;i++){
      words.push(hayakuti[i]);
    }
  }
  if(document.getElementById('ryuukou').checked){
    for(i=0;i<ryuukou.length;i++){
      words.push(ryuukou[i]);
    }
  }
  subWords=[ ...words];
  for(i=0;i<4;i++){
    if(document.getElementsByClassName('difficulty')[i].checked){
      count.limit=document.getElementsByClassName('difficulty')[i].value;
    }
  }
}
const setWord=()=>{
  count.stress=0;
  document.getElementById('balloon').style.backgroundColor=`rgba(255,255,255,0.8)`
  let n=Math.floor(Math.random()*words.length);
  console.log(n);
  read.textContent=readNext.textContent;
  write.textContent=wordNext;
  word=wordNext;
  readNext.textContent=words[n].read;
  wordNext=words.splice(n,1)[0].write;
  count.word=0;
}
// オープニング
const opening = (e)=>{
  if(e.key!=='f'&&e.key!=='j'){
    return;
  }
  if(e.key==='f'||e.key==='j'){
    if(stringsChecked()){alert('最低でも一つ文字列を選んでください');return;}
    makeWords();
    clockAdvances();
    document.getElementById('returnTop').style.visibility='hidden'
    document.getElementById('manual').style.visibility='hidden'
    document.getElementById('settingBox').style.visibility='hidden'
    startSe.play();
    turn();
    document.getElementById('playingManual').style.visibility='hidden'
    document.removeEventListener('keydown',opening);
    setTimeout(() => {
      bgm.volume=0.3;
      bgm.loop=true;
      bgm.play();
      startTime=Date.now();
      setWord();
      setWord();
      const countDown=()=>{
        count.time--;
        count.zone-=1+Math.floor(count.rank/3);
        count.stress++;
        gurgeUp();
        clockAdvances();
        clockSize();
        if(3<count.limit-count.stress && count.limit-count.stress<7){
          document.getElementById('balloon').style.backgroundColor=`rgba(255,255,${255-(count.stress-2)*30},0.8)`
        }
        if(count.limit-count.stress<4){
          document.getElementById('balloon').style.backgroundColor=`rgba(255,${255-(count.stress-4)*30},135,0.8)`
        }
        if(count.stress>count.limit){
          setWord();
          shopping();
          se(mukyuu);
        }
        if(1<=count.time && count.time<10){
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
// リセット
const esc = ()=>{
  document.location.reload();
}
// タイプok処理
const atari = ()=>{
  count.word++;
  count.combo++;
  count.zone++;
  count.n=true;
  gurgeUp();
  se(writeSe);
  write.textContent=''.repeat(count.word)+word.substring(count.word);
  if(count.word===word.length){
    if(words.length===0){
      words=[...subWords];
    }
    count.score+=(count.word-count.stress)*100;
    score.textContent=count.score;
    se(newWord);
    shopping();
    setWord();
  }
}
// 正誤判定
const checkType = (e)=>{
    if(count.isPlaying===false){
      return;
    }
    if(e.key==="Backspace"){
      esc();
    }
    if(e.key===' '){return;}
    if(`${e.key}`.length!==1){return;}
    count.type++;
    combo.textContent=`${count.maxCombo}HITs`
    if(e.key!==word[count.word]){
      if(e.key==='n' && nWords.indexOf(word[count.word])===-1 && word[count.word-1]==='n' && count.n===true){
        count.combo++;
        count.zone++;
        gurgeUp();
        se(writeSe);
        write.textContent=''.repeat(count.word)+word.substring(count.word);
        count.n=false;
        return;
      }
      if(e.key==='x' && word[count.word]==='l'){atari();return;}
      if(e.key==='c' && word[count.word]==='k' && ['a','u','o'].indexOf(word[count.word+1])!==-1){atari();return;}
      if(e.key==='c' && word[count.word]==='s' && ['i','e'].indexOf(word[count.word+1])!==-1){atari();return;}
      if(e.key==='h' && word[count.word]==='f' && word[count.word+1]==='u'){atari();return;}
      if(e.key==='h' && word[count.word]==='y' && word[count.word+1]==='i'){atari();return;}
      if(e.key==='z' && word[count.word]==='j' && word[count.word+1]==='i'){atari();return;}
      if(e.key==='z' && word[count.word]==='j' && nWords.indexOf(word[count.word+1])!==-1){
        count.combo++;
        count.zone++;
        gurgeUp();
        se(writeSe);
        count.word++;
        word=''.repeat(count.word)+'y'+word.substring(count.word);
        count.word=0;
        write.textContent=word;

        return;}
      if(e.key==='c' && word[count.word]==='t' && word[count.word+1]==='y'){
        count.combo++;
        count.zone++;
        gurgeUp();
        se(writeSe);
        count.word++;
        word=''.repeat(count.word)+'h'+word.substring(count.word+1);
        count.word=0;
        write.textContent=word;

        return;}
      if(count.combo>count.maxCombo){
        count.maxCombo=count.combo;
      }
      se(missSe);
      document.getElementById('ase').style.visibility='visible'
      setTimeout(()=>{document.getElementById('ase').style.visibility='hidden'},500)
      count.combo=0;
      count.miss++;
      count.zone-=5;
      gurgeUp();
      return;
    }
   atari();
}
// ゲーム部分
const reset = ()=>{
  document.addEventListener('keydown',opening);
  document.getElementById('playingManual').addEventListener('click',()=>{
    document.getElementById('playingManual').children[0].classList.toggle('hidden');
    document.getElementById('playingManual').children[1].classList.toggle('hidden');
    document.getElementById('pMbox').classList.toggle('hidden');
  })
  scoreBoxC.style.visibility='hidden';
  comboBox.style.visibility='hidden';
  resultBox.style.visibility='hidden';
  salaryBox.style.visibility='hidden';
  returngame.style.visibility='hidden';
  hit[0].style.visibility='hidden';
  hit[1].style.visibility='hidden';
  document.getElementById('ase').style.visibility='hidden'
  count.initialTime=count.time
  clockAdvances();
  clockSize();
  gurgeUp();
  for(x=1;x<5;x++){
    let y = Math.floor(Math.random()*12);
    customer[x].src=`imgApp/animals/${y}.png`
  }
}
const setCanN = (x)=>{
  let tp = arr(x)[1];
  let op = arr(x)[0];
  if(x>9){
    document.getElementById('salaryNTens').style.backgroundImage=`url(imgApp/number/${tp}a.png)`;
    document.getElementById('salaryNOnes').style.backgroundImage=`url(imgApp/number/${op}a.png)`;
    return;
  }
  document.getElementById('salaryNOnes').style.backgroundImage=`url(imgApp/number/${op}a.png)`;
}
const setCan =()=>{
  if(count.rank===0){
    document.getElementById('salaryNOnes').style.backgroundImage=`url(imgApp/number/0a.png)`;
    document.getElementById('catImg3').src='imgApp/tired.png';
    se(mukyuu);
    return;
  }
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
const setHit =()=>{
  let hp = arr(count.combo)[2]
  let tp = arr(count.combo)[1]
  let op = arr(count.combo)[0]
  if(count.combo===50){se(chargeSe);}
  if(count.combo===100){se(chargeSe);}
  if(count.combo>1000){
    return;
  }
  if(count.combo<10){
    HIT.style.transform='scale(0.8,0.8)'
    hit[0].style.visibility='hidden';
    hit[1].style.visibility='hidden';
    hit[0].classList.remove('radius');
    hit[1].classList.remove('radius');
    hit[2].classList.add('radius');
    for(i=0;i<4;i++){hit[i].style.backgroundColor='azure'}
    hit[2].style.backgroundImage=`url(imgApp/number/${op}.png)`;
    return;
  }
  if(100>count.combo && count.combo>=10){
    if(count.combo<50){
      for(i=0;i<4;i++){hit[i].style.backgroundColor='lightyellow'}
    }
    if(count.combo>50){
      for(i=0;i<4;i++){hit[i].style.backgroundColor='hkaki'}
    }
    HIT.style.transform='scale(0.9,0.9)'
    hit[1].style.visibility='visible'
    hit[0].classList.remove('radius');
    hit[1].classList.add('radius');
    hit[2].classList.remove('radius');
    hit[1].style.backgroundImage=`url(imgApp/number/${tp}g.png)`;
    hit[2].style.backgroundImage=`url(imgApp/number/${op}g.png)`;
    return;
  }
  if(count.combo>=100){
  HIT.style.transform='none'
  hit[0].style.visibility='visible'
  hit[0].classList.add('radius');
  hit[1].classList.remove('radius');
  hit[2].classList.remove('radius');
  for(i=0;i<4;i++){hit[i].style.backgroundColor='gold'}
  hit[0].style.backgroundImage=`url(imgApp/number/${hp}a.png)`;
  hit[1].style.backgroundImage=`url(imgApp/number/${tp}a.png)`;
  hit[2].style.backgroundImage=`url(imgApp/number/${op}a.png)`;
  return;
  }
}

// 編集用戻す↓
reset();
window.addEventListener('load',()=>{console.log('ok');advance(hundredthPlaces,'a');advance(tensPlaces,'g');advance(onesPlaces);})
// 編集　消す↓
// document.getElementById('scoreBox').style.visibility='hidden'
// document.getElementById('bannerBox').className='bannerBox0';
// ending()
// for(x=1;x<5;x++){
//   let y = Math.floor(Math.random()*12);
//   customer[x].src=`imgApp/animals/${y}.png`
// }
// shopping();