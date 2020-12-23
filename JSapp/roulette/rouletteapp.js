let syojikin = 100;
let sisyutu = 0;
let syuunyuu = 0;
let syuusi = syuunyuu-sisyutu;
let t=0;
let bet = document.getElementsByClassName('bet')
document.getElementById('syojikin').textContent=syojikin;
document.getElementById('result').style.visibility ="hidden";
document.getElementById('newgame').style.visibility ="hidden";
document.getElementById('fukidasibox').style.visibility ='hidden';
document.getElementById('sound').style.visibility='hidden';
const kakekinsum =()=>{
  for(k=0;k<bet.length;k++){
  sisyutu=sisyutu+betAtari[k].kakekin;
  document.getElementById('sisyutu').textContent=sisyutu;}
};
const newgame = ()=>{
  kakekinreset();
  syuunyuu =0;
  document.getElementById('syuusi').textContent=syuusi;
  document.getElementById('syuunyuu').textContent=syuunyuu;
  document.getElementById('newgame').style.visibility='hidden';
  document.getElementById('spin').style.visibility ="visible";
  document.getElementById('reset').style.visibility ="visible";
  document.getElementById("syuusi").style.color = "azure";
  document.getElementById('fukidasibox').style.visibility ='hidden';
}
let imgA =[
  'imgapp/ikasama1.png',
  'imgapp/ikasama1.png',
  'imgapp/ikasama1.png',
  'imgapp/ikasama2.png',
  'imgapp/ikasama2.png',
  'imgapp/ikasama3.png',
  'imgapp/ikasama3.png',
  'imgapp/ikasama4.png',
  'imgapp/ikasama1.png'];
let soundA =[
  'imgapp/sound1.png',
  'imgapp/sound1.png',
  'imgapp/sound1.png',
  'imgapp/sound2.png',
  'imgapp/sound2.png',
  'imgapp/sound4.png',
  'imgapp/sound4.png',
  'imgapp/sound3.png',
  'imgapp/sound3.png'];
let soundB =[
  'imgapp/sound1.png',
  'imgapp/sound1.png',
  'imgapp/sound1.png',
  'imgapp/sound2.png',
  'imgapp/sound2.png',
  'imgapp/sound2.png',
  'imgapp/sound2.png',
  'imgapp/sound3.png',
  'imgapp/sound3.png'];
let soundC =[
  'imgapp/sound1.png',
  'imgapp/sound1.png',
  'imgapp/sound1.png',
  'imgapp/sound2.png',
  'imgapp/sound2.png',
  'imgapp/sound5.png',
  'imgapp/sound5.png',
  'imgapp/sound3.png',
  'imgapp/sound3.png'];
let soundD =[
  'imgapp/sound1.png',
  'imgapp/sound1.png',
  'imgapp/sound1.png',
  'imgapp/sound2.png',
  'imgapp/sound2.png',
  'imgapp/sound4.png',
  'imgapp/sound4.png',
  'imgapp/sound3.png',
  'imgapp/sound3.png'];
// 画像の変更関数
const timeA = ()=>{
  if(t>8){
    clearInterval(timerA);
    document.getElementById('sound').style.visibility='hidden';
    t=0;
    document.getElementById('sound').src=soundA[t];
    document.getElementById('fukidasibox').style.visibility ='visible';
    document.getElementById('result').style.visibility='visible';
  }else{
    document.getElementById('imgR').src=imgA[t];
    document.getElementById('sound').src=soundA[t];
    t++;
  }
} 
const timeB =()=>{
  if(t>8){
    clearInterval(timerB);
    document.getElementById('sound').style.visibility='hidden';
    t=0;
    document.getElementById('sound').src=soundA[t];
    document.getElementById('fukidasibox').style.visibility ='visible';
    document.getElementById('result').style.visibility='visible';
  }else{
    document.getElementById('sound').src=soundB[t];
    t++;
  }
};
const timeC = ()=>{
  if(t>8){
    clearInterval(timerC);
    document.getElementById('sound').style.visibility='hidden';
    t=0;
    document.getElementById('sound').src=soundC[t];
    document.getElementById('fukidasibox').style.visibility ='visible';
    document.getElementById('result').style.visibility='visible';
  }else{
    document.getElementById('imgR').src=imgA[t];
    document.getElementById('sound').src=soundC[t];
    t++;
  }
};
const timeD = ()=>{
  if(t>8){
    clearInterval(timerD);
    document.getElementById('sound').style.visibility='hidden';
    t=0;
    document.getElementById('sound').src=soundD[t];
    document.getElementById('fukidasibox').style.visibility ='visible';
    document.getElementById('result').style.visibility='visible';
  }else{
    document.getElementById('imgR').src=imgA[t];
    document.getElementById('sound').src=soundD[t];
    t++;
  }
};
const changeimgA =()=>{
  timerA=setInterval(timeA,400);}
const changeimgB =()=>{
  timerB=setInterval(timeB,400);}
const changeimgC =()=>{
  timerC=setInterval(timeC,400);}
const changeimgD =()=>{
  timerD=setInterval(timeD,400);}
const kakekinreset = ()=>{
  for(kr=0;kr<bet.length;kr++){
    betAtari[kr].kakekin=0;
  }
  sisyutu=0;
  document.getElementById('sisyutu').textContent=sisyutu;}
// tyちゃんの言葉
let tymesage =[
  '本当にそこでいいの？',
  'へぇ～',
  'おお～なるほど',
  'え～ないわ～',
  '次は赤が出ますよ',
  '（おなかすいた）',
  '！？',
  '（そこの隣なんだけどな…）',
  '思い切りましたね～',
  'いいですね～',
  '・・・・・・・・・・・'];
// おめでとう
let omedetou =[
  'おめでとうございます！！',
  'やりますね～',
  'ほほう',
  'まずまずですね',
  '次も頑張りましょう',
  'すごいっ',
  '次は負けませんよ',
  '冴えてますね',
  'congratulation！'];
// 引き分け
let hikiwake =[
  'むむっ',
  '気が合いますね',
  'さあもうひと勝負です',
  '引き分けです',
  'こんなこともあるんですね'];
  // いかさま後の言葉
let tyikasama =[
    'バレなきゃあイカサマじゃあねえんだぜ',
    '不正はなかった',
    'どうかしましたか',
    'どんまい',
    '惜しかったですね～',
    'さ、次行きましょ',
    '・・・・・・・・・ナニカ？',
    '次は当たりますよ',
    'あらら残念',
    'ガンバッテネオウエンシテルヨ',
    '不思議なこともあるものですね'];
  // 冷やかしへの反応
let hiyakasi =[
    '掛金が０ですよ？',
    '？・・・賭けないんですか？',
    'まずは掛金を入力してください'];
let hasan =[
  'お金が足りないですよ',
  'そんなにお金持ってないでしょ',
  '所持金が足りません',
  '無理無理無理無理無理'];
let jougen=[
  '賭けられるのは10枚までですよ',
  '掛けすぎですよ',
  'コインは10枚までしか掛けられませんよ'];
let funsitu =[
  'ボールはなくなりましたが私の勝ちです',
  'ボールどこ行ったんでしょう',
  'ボールなくなりましたね・・・',
  '私の勝ちですよ　ちゃんと見ましたから',
  'はい、ボールがきえました',
  'ボールが見えませんが私の勝ちです'];
// あたりの紐づけ
const betAtari=[];
  betAtari.push({atari:[37],ataritxt:'00',kakekin:0,bairitu:36,win:0})
  betAtari.push({atari:[0],ataritxt:0,kakekin:0,bairitu:36,win:0})
for(st3No=3;st3No<39;st3No+=3){
  betAtari.push({atari:[st3No],ataritxt:st3No,kakekin:0,bairitu:36,win:0})
};
for(st2No=2;st2No<38;st2No+=3){
  betAtari.push({atari:[st2No],ataritxt:st2No,kakekin:0,bairitu:36,win:0})
};
for(st1No=1;st1No<37;st1No+=3){
  betAtari.push({atari:[st1No],ataritxt:st1No,kakekin:0,bairitu:36,win:0})
};
for(sp3No=3;sp3No<36;sp3No+=3){
  betAtari.push({atari:[sp3No,sp3No+3],ataritxt:[sp3No,sp3No+3],kakekin:0,bairitu:18,win:0})
};
for(sp2No=2;sp2No<35;sp2No+=3){
  betAtari.push({atari:[sp2No,sp2No+3],ataritxt:[sp2No,sp2No+3],kakekin:0,bairitu:18,win:0})
};
for(sp1No=1;sp1No<34;sp1No+=3){
  betAtari.push({atari:[sp1No,sp1No+3],ataritxt:[sp1No,sp1No+3],kakekin:0,bairitu:18,win:0})
};
for(sph2No=3;sph2No<39;sph2No+=3){
  betAtari.push({atari:[sph2No-1,sph2No],ataritxt:[sph2No-1,sph2No],kakekin:0,bairitu:18,win:0})
};
for(sph1No=2;sph1No<38;sph1No+=3){
  betAtari.push({atari:[sph1No-1,sph1No],ataritxt:[sph1No-1,sph1No],kakekin:0,bairitu:18,win:0})
};
for(stNo=3;stNo<39;stNo+=3){
  betAtari.push({atari:[stNo-2,stNo-1,stNo],ataritxt:[stNo-2,stNo-1,stNo],kakekin:0,bairitu:12,win:0})
};
for(coNo2=2;coNo2<35;coNo2+=3){
  betAtari.push({atari:[coNo2,coNo2+1,coNo2+3,coNo2+4],ataritxt:[coNo2,coNo2+1,coNo2+3,coNo2+4],kakekin:0,bairitu:9,win:0})
};
for(coNo1=1;coNo1<34;coNo1+=3){
  betAtari.push({atari:[coNo1,coNo1+1,coNo1+3,coNo1+4],ataritxt:[coNo1,coNo1+1,coNo1+3,coNo1+4],kakekin:0,bairitu:9,win:0})
};
for(liNo=3;liNo<36;liNo+=3){
  betAtari.push({atari:[liNo-2,liNo-1,liNo,liNo+1,liNo+2,liNo+3],ataritxt:[liNo-2,liNo-1,liNo,liNo+1,liNo+2,liNo+3],kakekin:0,bairitu:6,win:0})
};
const cl3ar =[];
for(cl3=3;cl3<39;cl3+=3){
  cl3ar.push(cl3);
};
  betAtari.push({atari:cl3ar,ataritxt:'この列の数字',kakekin:0,bairitu:3,win:0});

const cl2ar =[];
for(cl2=2;cl2<38;cl2+=3){
  cl2ar.push(cl2);
};
  betAtari.push({atari:cl2ar,ataritxt:'この列の数字',kakekin:0,bairitu:3,win:0});

const cl1ar =[];
for(cl1=1;cl1<37;cl1+=3){
  cl1ar.push(cl1);
}
  betAtari.push({atari:cl1ar,ataritxt:'この列の数字',kakekin:0,bairitu:3,win:0});

const do1ar=[];
for(do1=1;do1<13;do1++){
  do1ar.push(do1);
};
betAtari.push({atari:do1ar,ataritxt:'１～12',kakekin:0,bairitu:3,win:0});

const do2ar=[];
for(do2=13;do2<25;do2++){
  do2ar.push(do2);
};
betAtari.push({atari:do2ar,ataritxt:'13～24',kakekin:0,bairitu:3,win:0});

const do3ar=[];
for(do3=25;do3<37;do3++){
  do3ar.push(do3);
};
betAtari.push({atari:do3ar,ataritxt:'25～36',kakekin:0,bairitu:3,win:0});

const hl1ar=[];
for(hl1=1;hl1<19;hl1++){
  hl1ar.push(hl1);
};
betAtari.push({atari:hl1ar,ataritxt:'1～18',kakekin:0,bairitu:2,win:0});

const hl2ar=[];
for(hl2=19;hl2<37;hl2++){
  hl2ar.push(hl2);
};
betAtari.push({atari:hl2ar,ataritxt:'19～36',kakekin:0,bairitu:2,win:0});

const eo1ar=[];
for(eo1=2;eo1<37;eo1+=2){
  eo1ar.push(eo1);
};
betAtari.push({atari:eo1ar,ataritxt:'偶数',kakekin:0,bairitu:2,win:0});

const eo2ar=[];
for(eo2=1;eo2<36;eo2+=2){
  eo2ar.push(eo2);
};
betAtari.push({atari:eo2ar,ataritxt:'奇数',kakekin:0,bairitu:2,win:0});
// 赤黒のあたりをかく
const rar=[];
for(rNo=0;rNo<18;rNo++){
  rar.push(parseInt(document.getElementsByClassName('r')[rNo].textContent) )
}
betAtari.push({atari:rar,ataritxt:'赤',kakekin:0,bairitu:2,win:0});

const blar=[];
for(bNo=0;bNo<18;bNo++){
  blar.push(parseInt(document.getElementsByClassName('b')[bNo].textContent) )
}
betAtari.push({atari:blar,ataritxt:'黒',kakekin:0,bairitu:2,win:0});



// クリックするとダイアログ表示で掛け金を入力＆所持金から掛け金をひく
const betOkane =(n)=>{
  betAtari[n].kakekin=parseInt(prompt(betAtari[n].bairitu+'倍　'+betAtari[n].ataritxt+'がでたらあたり'+'\n※キャンセルを押すと掛金が0に戻ります',betAtari[n].kakekin));
  
  if(isNaN(betAtari[n].kakekin) || betAtari[n].kakekin<0){
    betAtari[n].kakekin=0;
    sisyutu=0;
    kakekinsum();};
  sisyutu=0;
  kakekinsum();
  if(betAtari[n].kakekin===0){let w = Math.floor(Math.random()*hiyakasi.length);
    document.getElementById('fukidasibox').style.visibility ='visible';
    document.getElementById('fukidasi').textContent=hiyakasi[w];
  }else if(betAtari[n].kakekin>10){
    let w = Math.floor(Math.random()*jougen.length);
    document.getElementById('fukidasibox').style.visibility ='visible';
    document.getElementById('fukidasi').textContent=jougen[w];
    betAtari[n].kakekin=0;
    sisyutu=0;
    kakekinsum();
  }else{
    let w = Math.floor(Math.random()*tyikasama.length);
    document.getElementById('fukidasibox').style.visibility ='visible';
    document.getElementById('fukidasi').textContent=tymesage[w];
  }
}
  for(let betNo=0;betNo<bet.length;betNo++){
    bet[betNo].addEventListener('click',()=>{parseInt(betOkane(betNo))})
  }
// ルーレットを回す関数
const spin =()=>{
  document.getElementById('fukidasibox').style.visibility ='hidden';
  if(syojikin<sisyutu){
    let w = Math.floor(Math.random()*hasan.length);
    document.getElementById('fukidasibox').style.visibility ='visible';
    document.getElementById('fukidasi').textContent = hasan[w];
  }else if(sisyutu===0){
    let w = Math.floor(Math.random()*hiyakasi.length);
    document.getElementById('fukidasibox').style.visibility ='visible';
    document.getElementById('fukidasi').textContent = hiyakasi[w];
  }else{
    document.getElementById('fukidasibox').style.visibility ='hidden';
    const roulette = Math.floor(Math.random()*38);
    const roulettesuuji = ()=>{
      if(roulette===0){
        return('0');
      }else if(roulette===37){
        return('00');
      }else;{
        return(roulette);
      }
    }
    const rouletteiro = ()=>{
      if(roulette===0 || roulette===37){
        document.getElementById('fukidasi').style.color='green';
        return('　')
      }else if(roulette % 2 ===1 && roulette <=9){
        document.getElementById('fukidasi').style.color='red';
        return('赤の');
      }else if(roulette % 2 ===0 && roulette <=18 && roulette >10){
        document.getElementById('fukidasi').style.color='red';
        return('赤の');
      }else if(roulette % 2 ===1 && roulette <=27 && roulette >=19){
        document.getElementById('fukidasi').style.color='red';
        return('赤の');
      }else if(roulette % 2 ===0 && roulette <=36 && roulette >29){
        document.getElementById('fukidasi').style.color='red';
        return('赤の');
      }else{
        document.getElementById('fukidasi').style.color='midnightblue';
        return('黒の');}
      }
      for(let hn=0;hn<152;hn++){
      if(betAtari[hn].atari.indexOf(parseInt(roulettesuuji())) !== -1){
          syuunyuu=syuunyuu+(betAtari[hn].bairitu*betAtari[hn].kakekin);
          betAtari[hn].kakekin=0;
        }else{
          betAtari[hn].kakekin=0;}
      }
      syuusi =syuunyuu-sisyutu;
      syojikin=syojikin+syuusi;
      document.getElementById('sound').style.visibility='visible';
      if(syuusi<0 && Math.random()*5>1){
        changeimgA();
        document.getElementById('fukidasi').textContent = rouletteiro()+roulettesuuji()+'デス';
      // }else if(syuusi<0 && Math.random()*5>2){
      //   changeimgD();
      //   let w = Math.floor(Math.random()*hiyakasi.length);
      //   document.getElementById('fukidasi').textContent =funsitu[w]
      }else if(syuusi>0 && Math.random()*2>1){
        changeimgC();
        document.getElementById('fukidasi').textContent = rouletteiro()+roulettesuuji()+'です (ﾁｯ)';
      }else{
        changeimgB();
        document.getElementById('fukidasi').textContent = rouletteiro()+roulettesuuji()+'です';
      }
      document.getElementById('spin').style.visibility ="hidden";
      document.getElementById('reset').style.visibility ="hidden";
    }
  }

  // あたりを判定
  const result=()=>{
      if(syuusi<0){
        document.getElementById("syuusi").style.color = "red";
        document.getElementById('syuusi').textContent=syuusi;
      }else if(syuusi>0){
        document.getElementById("syuusi").style.color = "green";
        document.getElementById('syuusi').textContent='+'+syuusi;
      }else{
        document.getElementById("syuusi").style.color = "midnightblue";
        document.getElementById('syuusi').textContent=syuusi;
      }
      document.getElementById('syuunyuu').textContent=syuunyuu;
      document.getElementById('syojikin').textContent=syojikin;
      document.getElementById('result').style.visibility='hidden';
      document.getElementById('newgame').style.visibility='visible';
      document.getElementById('fukidasibox').style.visibility='visible';
      document.getElementById('fukidasi').style.color='midnightblue';
      
      if(syuusi<0){
        let w = Math.floor(Math.random()*tyikasama.length);
        document.getElementById('fukidasi').textContent=tyikasama[w];
      }else if(syuusi>0){
        let w = Math.floor(Math.random()*omedetou.length);
        document.getElementById('fukidasi').textContent=omedetou[w];
      }else{
        let w = Math.floor(Math.random()*tyikasama.length);
        document.getElementById('fukidasi').textContent=hikiwake[w];
      }
    }
// spinボタン
document.getElementById('spin').onclick = ()=>{spin();};
// 結果ボタン
document.getElementById('result').onclick = ()=>{result();};
// 次のゲームボタン
document.getElementById('newgame').onclick = ()=>{newgame();};
// 掛金リセットボタン
document.getElementById('reset').onclick = ()=>{kakekinreset();};