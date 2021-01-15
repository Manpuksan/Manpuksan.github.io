let count={word:0,type:0,miss:0,zone:2,stress:0,combo:0,maxCombo:0,time:60,score:0,isPlaying:false}
let word;
let startTime;
const score = document.getElementById('score');
const write=document.getElementById('write');
const result = document.getElementById('result');
document.getElementById('strings').style.visibility='hidden'
// エラー探し用関数
const checkCount =()=>{
  console.log(count);
}

// タイピングセット作成
let words =[];
const td=document.getElementsByTagName('td');
for(i=0;i<td.length/4;i++){
  words.push({read:td[4*i+1].textContent,kana:td[4*i+2].textContent,write:td[4*i+3].textContent})
}
let subWords=[...words];

const setWord=()=>{
  let n=Math.floor(Math.random()*words.length);
  console.log(n);
  document.getElementById('read').textContent=words[n].read;
  document.getElementById('kana').textContent=words[n].kana;
  word=words.splice(n,1)[0].write;
  write.textContent=word;
  count.word=0;
  
}
// オープニング
const startGame=()=>{
  count.isPlaying=true;
  document.removeEventListener('keyup',startGame)
}
const opening = (e)=>{
  if(e.key==='f'||e.key==='j'){
  startTime=Date.now();
  setWord();
  const countDown=()=>{
    count.time--;
    document.getElementById('clock').textContent=count.time;
    if(count.time<=0){
      clearInterval(clock)
      elapsedTime = Date.now() - startTime;
      if(count.type===0){count.type=1;count.miss=1}
      const results =Math.round(1000-count.miss/count.type*1000)/10;
      const wpm=Math.round((count.type-count.miss)/(elapsedTime/10000))/10*60;
      result.textContent=`評価${Math.round(Math.pow(results/100,3)*wpm)}　正解率${results}%　${Math.round((count.type-count.miss)/(elapsedTime/10000))/10}回／秒でした`;
      count.isPlaying=false;
      return;
    }
  }
  const clock=setInterval(countDown,1000);
  document.removeEventListener('keydown',opening);
  document.addEventListener('keyup',startGame);
  }
}
const zone=()=>{
  count.time+=Math.floor(4*count.zone*count.zone/10000);
  count.zone=0;
}
// 正誤判定

let elapsedTime;
document.addEventListener('keydown',e=>{
    if(count.isPlaying===false){
      return;
    }
    if(e.key===' ' && count.zone>100){
      zone();
      return;
    }else if(e.key===' '){
      return;
    }
    count.type++;
    document.getElementById('combo').textContent=`${count.combo}Combo Max${count.maxCombo}`
    if(e.key!==word[count.word]){
      if(count.combo>count.maxCombo){
        count.maxCombo=count.combo;
      }
      count.combo=0;
      count.miss++;
      count.zone=0;
      return;
    }
    count.word++;
    count.combo++;
    count.zone++;
    write.textContent='_'.repeat(count.word)+word.substring(count.word);
    if(count.zone>=200){
      zone();
    }
    if(count.word===word.length){
      if(words.length===0){
        words=[...subWords];
      }
      count.score+=count.word*100;
      document.getElementById('score').textContent=count.score;
      setWord();
    }
  }
)
// ゲーム部分
document.addEventListener('keydown',opening)
document.getElementById('clock').textContent=count.time;