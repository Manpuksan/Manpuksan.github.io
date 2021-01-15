let count={word:0,type:0,miss:0,zone:0,stress:0,isPlaying:false}
let word;
let startTime;
const write=document.getElementById('write');
document.getElementById('selfWord').style.visibility='hidden'


let words =[
  {read:'赤',	kana:'あか',write:'aka'},
  {read:'青',	kana:'あお',write:'ao'},
  {read:'黒',	kana:'くろ',write:'kuro'},
];
const startGame=()=>{
  count.isPlaying=true;
  document.removeEventListener('keyup',startGame)
}
const opening = (e)=>{
  if(e.key==='f'||e.key==='j'){
  startTime=Date.now();
  setWord();
  document.removeEventListener('keydown',opening);
  document.addEventListener('keyup',startGame);
  }
}

const setWord=()=>{
  let n=Math.floor(Math.random()*words.length);
  console.log(n);
  document.getElementById('read').textContent=words[n].read;
  document.getElementById('kana').textContent=words[n].kana;
  word=words.splice(n,1)[0].write;
  write.textContent=word;
  count.word=0;
}
document.addEventListener('keydown',opening)

// const newWord= document.getElementById('newWord');
// const readText = new FileReader();
// let newWords;
// readText.addEventListener('load',()=>{
//   document.getElementById('change').style.visibility='visible'
// })
// newWord.addEventListener('change',()=>{
//   readText.readAsText(newWord.files[0],'UTF-8');
// })
// document.getElementById('change').addEventListener('click',()=>{
//   newWords=readText.result.split('/');
//   words.write.splice(0,words.write.length,...newWords);
//   document.getElementById('change').style.visibility='hidden'
// })

document.addEventListener('keydown',e=>{
  if(count.isPlaying===false){
    return;
  }
  count.type++;
  if(e.key!==word[count.word]){
    count.miss++;
    return;
  }
  count.word++;
  write.textContent='_'.repeat(count.word)+word.substring(count.word);
  if(count.word===word.length){
    if(words.length===0){
      const elapsedTime = Date.now() - startTime;
      const result = document.getElementById('result');
      result.textContent=`正解率${Math.round(1000-count.miss/count.type*1000)/10}%　${Math.round((count.type-count.miss)/(elapsedTime/10000))/10}回／秒でした`;
      return;
    }
    setWord();
  }
}
)