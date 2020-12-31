let syojikin = 100;
let sisyutu = 0;
let syuunyuu = 0;
let syuusi = syuunyuu-sisyutu;
let t=0;
let stressp = 0;
let life =0;
let lifeT=3;
let n=-0;
let vn=-1;
let vdt=0;
let vut =0;
let rouletteresult = 0;
let $bet = document.getElementsByClassName('bet');
let $bbet = document.getElementsByClassName('bbet');
let $fukidasi = document.getElementById('fukidasi');
let $fukidasibox = document.getElementById('fukidasibox');
let $sound = document.getElementById('sound');
let $spin = document.getElementById('spin')
let $result = document.getElementById('result');
let $reset = document.getElementById('reset');
let $newgame = document.getElementById('newgame');
let $syuunyuu = document.getElementById('syuunyuu');
let $sisyutu= document.getElementById('sisyutu');
let $syuusi = document.getElementById('syuusi');
let $ikari = document.getElementById('ikariL');
let $mahou = document.getElementById('mahou');
let $mahoujin = document.getElementById('mahoujinbox');
let $mahoujinC = document.getElementById('mahoujinC');
let $tyimg = document.getElementById('imgR');
let $blackout = document.getElementById('blackout');
let $boQ = document.getElementById('blackoutQ');
let $opening = document.getElementById('opening');
let $open = document.getElementById('open');
document.getElementById('piko').style.visibility='hidden';
const boon=()=>{document.getElementsByClassName('betguard')[0].style.visibility='visible'};
const booff=()=>{document.getElementsByClassName('betguard')[0].style.visibility='hidden'};
booff()
const usuallymusic = new Audio('music/game_maoudamashii_5_casino04.mp3');
usuallymusic.volume=0.1;
usuallymusic.loop=true;
const bossmusic=new Audio('music/game_maoudamashii_2_boss06.mp3');
bossmusic.volume=0.5;
bossmusic.loop=true;
const chargese =new Audio('seapp/eisyou.mp3');
const mahoujinse =new Audio('seapp/mahoujin.mp3');
const blackoutse =new Audio('seapp/se_explode_buooa.mp3');
const roulettese =new Audio('seapp/roulette.mp3');
const tentense =new Audio('seapp/tenten.mp3');
const powerupse =new Audio('seapp/se_powerup11.mp3')
const betse = new Audio('seapp/putting_a_water_glass2.mp3');
const pikohanse = new Audio('seapp/pikohan.mp3');
const ikarise = new Audio('seapp/ikari.mp3');
const pasi = new Audio('seapp/pasi.mp3');
const suka = new Audio('seapp/suka.mp3');
const nyoki = new Audio('seapp/nyoki.mp3');
const spinse = new Audio('seapp/spin.mp3')
const bossspinse =new Audio('seapp/刀で打ち合う1.mp3');
const betbreak =new Audio('seapp/destruction1.mp3');
const hpdownse =new Audio('seapp/hpdown.mp3');
const bossbetse =new Audio('seapp/刀を構える.mp3');
const explode =new Audio('seapp/launcher6.mp3');
const timestop =new Audio('seapp/timestop.mp3');
const timestope =new Audio('seapp/timestope.mp3');
const watch =new Audio('seapp/watch.mp3');
const lifedown =new Audio('seapp/breaking_a_cup.mp3');
const kuroji =new Audio('seapp/atari.mp3');
const akaji =new Audio('seapp/hazure.mp3');
const modoru =new Audio('seapp/modoru.mp3');
const end0 = new Audio('seapp/ending0.mp3');
const end1 = new Audio('seapp/ending1.mp3');
const end2 = new Audio('seapp/ending2.mp3');
const end3 = new Audio('seapp/ending3.mp3');
const endingse = new Audio('seapp/endingse.mp3')

document.getElementById('syojikin').textContent=syojikin;
$result.style.visibility ="hidden";
$newgame.style.visibility ="hidden";
$fukidasibox.style.visibility ='hidden';
$sound.style.visibility='hidden';
$ikari.style.visibility='hidden'
$blackout.style.visibility='hidden'
document.getElementById('atamaG').style.visibility='hidden';
document.getElementById('ikari').style.visibility='hidden';
document.getElementById('manualtext').style.visibility='hidden';
document.getElementById('bossbetbox').style.visibility='hidden'
document.getElementsByName('bdguard')[0].style.visibility='hidden';
document.getElementsByName('bdguard')[1].style.visibility='hidden';
document.getElementsByName('bdguard')[2].style.visibility='hidden';
document.getElementsByName('beoguard')[0].style.visibility='hidden';
document.getElementsByName('beoguard')[1].style.visibility='hidden';
document.getElementsByName('brbguard')[0].style.visibility='hidden';
document.getElementsByName('brbguard')[1].style.visibility='hidden';
// 編集用のオブジェクト隠し
// $tyimg.src='imgapp/ikasama2.png'
// document.getElementById('suutibox').style.visibility='hidden'
// document.getElementsByClassName('betbox')[0].style.visibility='hidden'

// オープニングボタン
const startgame=()=>{$opening.className='opening0';
usuallymusic.volume=0.3;
usuallymusic.play()
}
$open.addEventListener('click',startgame);
// マニュアルボタン
const openmanual =()=>{
  document.getElementById('manualtext').style.visibility='visible';
}
const closemanual =()=>{
  document.getElementById('manualtext').style.visibility='hidden';
}
document.getElementById('manual').addEventListener('click',openmanual);
document.getElementById('returntitle').addEventListener('click',closemanual);


// 音量をだんだん小さく
const Fvdown=()=>{if(vdt<4){bossmusic.volume=bossmusic.volume-0.1;vdt++}else{clearInterval(Svdown);vdt=0}};
const vdown=()=>{Svdown=setInterval(Fvdown,200)}
// 音量をだんだん大きく
const Fvup=()=>{if(vut<4){bossmusic.volume=bossmusic.volume+0.1;vut++}else{clearInterval(Svup)}};
const vup=()=>{Svup=setInterval(Fvup,200)}
// 掛金をリセット
const kakekinsum =()=>{
  for(k=0;k<$bet.length;k++){
  sisyutu=sisyutu+betAtari[k].kakekin;
  $sisyutu.textContent=sisyutu;}
};
// 掛金がないところの色を戻す
const betCReset =(n)=>{
  betAtari[n].betp=0;
  betAtari[n].win=0;
  if(n>1 && n<38 && betAtari[150].atari.indexOf(parseInt($bet[n].textContent))!==-1){
    $bet[n].style.backgroundColor='red'
  }
  else if(n>1 && n<38 && betAtari[151].atari.indexOf(parseInt($bet[n].textContent))!==-1){
    $bet[n].style.backgroundColor='black'
  }else if(n>37 && n<140){
    $bet[n].style.backgroundColor='white'
  }else{
    $bet[n].style.backgroundColor='unset'
  }
};
// ニューゲーム
const newgame = ()=>{
  if(syojikin<=0){
    ending();
  }else{
    kakekinreset();
    syuunyuu =0;
    $syuusi.textContent=syuusi;
    $syuunyuu.textContent=syuunyuu;
    $newgame.style.visibility='hidden';
    $syuusi.style.color = "azure";
    $fukidasibox.style.visibility ='hidden';
    booff();
    for(let n=0;n<152;n++){betCReset(n);};
    if(stressp>8 || syojikin>250){bossmode();
    }else{
      $spin.style.visibility ="visible";
      $reset.style.visibility ="visible";
    }
  }
}
// ルーレットを回す
const roulette =()=>{rouletteresult=Math.floor(Math.random()*38);return(rouletteresult)};
// ルーレットの結果に応じて数字と色を返す
const roulettesuuji = ()=>{
  if(rouletteresult===0){
    return('0');
  }else if(rouletteresult===37){
    return('00');
  }else;{
    return(rouletteresult);
  }
}
const rouletteiro = ()=>{
  if(rouletteresult===0 || rouletteresult===37){
    $fukidasi.style.color='green';
    return('　')
  }else if(rouletteresult % 2 ===1 && rouletteresult <=9){
    $fukidasi.style.color='red';
    return('赤の');
  }else if(rouletteresult % 2 ===0 && rouletteresult <=18 && rouletteresult >10){
    $fukidasi.style.color='red';
    return('赤の');
  }else if(rouletteresult % 2 ===1 && rouletteresult <=27 && rouletteresult >=19){
    $fukidasi.style.color='red';
    return('赤の');
  }else if(rouletteresult % 2 ===0 && rouletteresult <=36 && rouletteresult >29){
    $fukidasi.style.color='red';
    return('赤の');
  }else{
    $fukidasi.style.color='midnightblue';
    return('黒の');}
  }

// ストレスが溜まって怒りマークが出る
const limitbreak =()=>{
  $ikari.style.visibility='visible'
  if($ikari.className==='ikariL'){
    $ikari.className='ikariL0';
  }else{$ikari.className='ikariL';}
}
// ボスモードの画面へ
const bossscreen =()=>{
  $result.style.visibility ="hidden";
  $newgame.style.visibility ="hidden";
  $spin.style.visibility ="hidden";
  $reset.style.visibility ="hidden";
  $fukidasibox.style.visibility='hidden'
  $fukidasi.textContent='ここからは本気でいきますよ'
  $mahoujin.style.visibility='hidden'
  $mahoujinC.className='mahoujinC';
  $tyimg.src='imgapp/ikasama0.png'
  $boQ.className='blackoutQ'
  document.getElementById('suutibox').style.visibility='hidden'
  document.getElementsByClassName('betbox')[0].style.visibility='hidden'
  document.getElementById('bossbetbox').style.visibility='visible'
  document.getElementsByClassName('headerB')[0].style.backgroundColor='black'
  document.getElementById('blackout').style.visibility='hidden'
}
// bossscreen()
let imgset =[
  'imgapp/ikasama0.png',
  'imgapp/ikasama1.png',
  'imgapp/ikasama2.png',
  'imgapp/ikasama3.png'];
let soundset =[
  'imgapp/sound0.png',
  'imgapp/sound1.png',
  'imgapp/sound2.png',
  'imgapp/sound3.png',
  'imgapp/sound4.png',
  'imgapp/sound5.png'];
let mahouset =[
  ['imgapp/mahoujin.png','imgapp/enblack.png','imgapp/qen.png'],
  ['imgapp/mahoujinred.png','imgapp/enred.png','imgapp/qenred.png'],
  ['imgapp/mahoujinblue.png','imgapp/enblue.png','imgapp/qenblue.png'],
  ['imgapp/mahoujingrey.png','imgapp/engrey.png','imgapp/qengrey.png']
];

// 画像の変更関数
// 魔法陣、魔法の色を変更
const mahoucolor =(mc)=>{
  document.getElementById('mhj').src=mahouset[mc][0];
  $mahou.src=mahouset[mc][1];
  $boQ.src=mahouset[mc][2];
}
// 普通のあたり
let EciA =[
  ()=>{
    roulettese.play();
    $sound.style.visibility='visible'
    $sound.src=soundset[0]},
  ()=>{
    $sound.src=soundset[1];
    roulettese.pause();
    roulettese.currentTime=9.5;
    roulettese.play()},
  ()=>{
    $sound.src=soundset[2]},
  ()=>{
    $sound.style.visibility='hidden'
    $sound.src=soundset[0];
    $fukidasibox.style.visibility='visible';
    $result.style.visibility='visible'}
]
let ELciA=[]
const MciA=(m,f)=>{ELciA[m]=EciA[f]}
MciA(0,0);
MciA(16,1);
MciA(20,2);
MciA(28,3);
let cia =0;
const FciA=()=>{if(cia>ELciA.length){clearInterval(SciA);cia=0}
  else if(ELciA[cia]!==undefined){ELciA[cia]();cia++}
  else{cia++}}
const changeimgA =()=>{SciA=setInterval(FciA,250)}

// いかさまぱしっ
let EciB =[
  ()=>{
    roulettese.play();
    $sound.style.visibility='visible'
    $sound.src=soundset[0]},
  ()=>{
    $sound.src=soundset[1];
    $tyimg.src=imgset[1];
    nyoki.play();
    roulettese.pause();
    roulettese.currentTime=9.5;
    roulettese.play()},
  ()=>{
    $sound.src=soundset[3];
    $tyimg.src=imgset[2];
    pasi.play()
    },
  ()=>{
    $sound.src=soundset[2];
    $tyimg.src=imgset[3];
    modoru.play()
    roulettese.currentTime=10.5;
    roulettese.play()
  },
  ()=>{
    $tyimg.src=imgset[0]
  },
  ()=>{$sound.style.visibility='hidden'
    $sound.src=soundset[0];
    $fukidasibox.style.visibility='visible';
    $result.style.visibility='visible'}
]
let ELciB=[]
const MciB=(m,f)=>{ELciB[m]=EciB[f]}
MciB(0,0);
MciB(16,1);
MciB(20,2);
MciB(24,3)
MciB(28,4)
MciB(32,5);
let cib =0;
const FciB=()=>{if(cib>ELciB.length){clearInterval(SciB);cib=0}
  else if(ELciB[cib]!==undefined){ELciB[cib]();cib++}
  else{cib++}}
const changeimgB =()=>{SciB=setInterval(FciB,250)};

// いかさますかっ
let EciC =[
  ()=>{
    roulettese.play();
    $sound.style.visibility='visible'
    $sound.src=soundset[0]},
  ()=>{
    $sound.src=soundset[1];
    $tyimg.src=imgset[1];
    nyoki.play();
    roulettese.pause();
    roulettese.currentTime=9.5;
    roulettese.play()},
  ()=>{
    $sound.src=soundset[4];
    $tyimg.src=imgset[2];
    suka.play()
    },
  ()=>{
    $sound.src=soundset[2];
    $tyimg.src=imgset[3];
    modoru.play();
  },
  ()=>{
    $tyimg.src=imgset[0]
  },
  ()=>{$sound.style.visibility='hidden'
    $sound.src=soundset[0];
    $fukidasibox.style.visibility='visible';
    $result.style.visibility='visible';
    $tyimg.src=imgset[0]}
]
let ELciC=[]
const MciC=(m,f)=>{ELciC[m]=EciC[f]}
MciC(0,0);
MciC(16,1);
MciC(20,2);
MciC(24,3);
MciC(28,4)
MciC(32,5);
let cic =0;
const FciC=()=>{if(cic>ELciC.length){clearInterval(SciC);cic=0}
  else if(ELciC[cic]!==undefined){ELciC[cic]();cic++}
  else{cic++}}
const changeimgC =()=>{SciC=setInterval(FciC,250)};

// 掛金をリセット
const kakekinreset = ()=>{
  for(n=0;n<152;n++){betCReset(n);}
  for(kr=0;kr<$bet.length;kr++){
    betAtari[kr].kakekin=0;
  }
  sisyutu=0;
  $sisyutu.textContent=sisyutu;}

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
    '賭け金が０ですよ？',
    '？・・・賭けないんですか？',
    'まずは賭け金を入力してください'];
let hasan =[
  'コインが足りないですよ',
  'そんなにお金持ってないでしょ',
  'コインが足りません',
  '無理無理無理無理無理'];
let jougen=[
  '1か所に賭けられるのは10枚までですよ',
  '賭けすぎですよ',
  '1か所に10枚までしか賭けられませんよ'];
let funsitu =[
  'ボールはなくなりましたが私の勝ちです',
  'ボールどこ行ったんでしょう',
  'ボールなくなりましたね・・・',
  '私の勝ちですよ　ちゃんと見ましたから',
  'はい、ボールがきえました',
  'ボールが見えませんが私の勝ちです'];
let hatama =[
  'あいたっ','いたっ','いたいですって','なにするんですか'
];
let brokenbet=[
  'この場所はもう賭けられませんよ',
  'ここは壊れています',
  '別の場所を選んでください',
  '壊れています'
]
// あたりの紐づけ
const betAtari=[];
  betAtari.push({atari:[37],ataritxt:'00',kakekin:0,bairitu:36,betp:0,win:0})
  betAtari.push({atari:[0],ataritxt:0,kakekin:0,bairitu:36,betp:0,win:0})
for(st3No=3;st3No<39;st3No+=3){
  betAtari.push({atari:[st3No],ataritxt:st3No,kakekin:0,bairitu:36,betp:0,win:0})
};
for(st2No=2;st2No<38;st2No+=3){
  betAtari.push({atari:[st2No],ataritxt:st2No,kakekin:0,bairitu:36,betp:0,win:0})
};
for(st1No=1;st1No<37;st1No+=3){
  betAtari.push({atari:[st1No],ataritxt:st1No,kakekin:0,bairitu:36,betp:0,win:0})
};
for(sp3No=3;sp3No<36;sp3No+=3){
  betAtari.push({atari:[sp3No,sp3No+3],ataritxt:[sp3No,sp3No+3],kakekin:0,bairitu:18,betp:0,win:0})
};
for(sp2No=2;sp2No<35;sp2No+=3){
  betAtari.push({atari:[sp2No,sp2No+3],ataritxt:[sp2No,sp2No+3],kakekin:0,bairitu:18,betp:0,win:0})
};
for(sp1No=1;sp1No<34;sp1No+=3){
  betAtari.push({atari:[sp1No,sp1No+3],ataritxt:[sp1No,sp1No+3],kakekin:0,bairitu:18,betp:0,win:0})
};
for(sph2No=3;sph2No<39;sph2No+=3){
  betAtari.push({atari:[sph2No-1,sph2No],ataritxt:[sph2No-1,sph2No],kakekin:0,bairitu:18,betp:0,win:0})
};
for(sph1No=2;sph1No<38;sph1No+=3){
  betAtari.push({atari:[sph1No-1,sph1No],ataritxt:[sph1No-1,sph1No],kakekin:0,bairitu:18,betp:0,win:0})
};
for(stNo=3;stNo<39;stNo+=3){
  betAtari.push({atari:[stNo-2,stNo-1,stNo],ataritxt:[stNo-2,stNo-1,stNo],kakekin:0,bairitu:12,betp:0,win:0})
};
for(coNo2=2;coNo2<35;coNo2+=3){
  betAtari.push({atari:[coNo2,coNo2+1,coNo2+3,coNo2+4],ataritxt:[coNo2,coNo2+1,coNo2+3,coNo2+4],kakekin:0,bairitu:9,betp:0,win:0})
};
for(coNo1=1;coNo1<34;coNo1+=3){
  betAtari.push({atari:[coNo1,coNo1+1,coNo1+3,coNo1+4],ataritxt:[coNo1,coNo1+1,coNo1+3,coNo1+4],kakekin:0,bairitu:9,betp:0,win:0})
};
for(liNo=3;liNo<36;liNo+=3){
  betAtari.push({atari:[liNo-2,liNo-1,liNo,liNo+1,liNo+2,liNo+3],ataritxt:[liNo-2,liNo-1,liNo,liNo+1,liNo+2,liNo+3],kakekin:0,bairitu:6,betp:0,win:0})
};
const cl3ar =[];
for(cl3=3;cl3<39;cl3+=3){
  cl3ar.push(cl3);
};
  betAtari.push({atari:cl3ar,ataritxt:'この列の数字',kakekin:0,bairitu:3,betp:0,win:0});

const cl2ar =[];
for(cl2=2;cl2<38;cl2+=3){
  cl2ar.push(cl2);
};
  betAtari.push({atari:cl2ar,ataritxt:'この列の数字',kakekin:0,bairitu:3,betp:0,win:0});

const cl1ar =[];
for(cl1=1;cl1<37;cl1+=3){
  cl1ar.push(cl1);
}
  betAtari.push({atari:cl1ar,ataritxt:'この列の数字',kakekin:0,bairitu:3,betp:0,win:0});

const do1ar=[];
for(do1=1;do1<13;do1++){
  do1ar.push(do1);
};
betAtari.push({atari:do1ar,ataritxt:'１～12',kakekin:0,bairitu:3,betp:0,win:0});

const do2ar=[];
for(do2=13;do2<25;do2++){
  do2ar.push(do2);
};
betAtari.push({atari:do2ar,ataritxt:'13～24',kakekin:0,bairitu:3,betp:0,win:0});

const do3ar=[];
for(do3=25;do3<37;do3++){
  do3ar.push(do3);
};
betAtari.push({atari:do3ar,ataritxt:'25～36',kakekin:0,bairitu:3,betp:0,win:0});

const hl1ar=[];
for(hl1=1;hl1<19;hl1++){
  hl1ar.push(hl1);
};
betAtari.push({atari:hl1ar,ataritxt:'1～18',kakekin:0,bairitu:2,betp:0,win:0});

const hl2ar=[];
for(hl2=19;hl2<37;hl2++){
  hl2ar.push(hl2);
};
betAtari.push({atari:hl2ar,ataritxt:'19～36',kakekin:0,bairitu:2,betp:0,win:0});

const eo1ar=[];
for(eo1=2;eo1<37;eo1+=2){
  eo1ar.push(eo1);
};
betAtari.push({atari:eo1ar,ataritxt:'偶数',kakekin:0,bairitu:2,betp:0,win:0});

const eo2ar=[];
for(eo2=1;eo2<36;eo2+=2){
  eo2ar.push(eo2);
};
betAtari.push({atari:eo2ar,ataritxt:'奇数',kakekin:0,bairitu:2,betp:0,win:0});
// 赤黒のあたりをかく
const rar=[];
for(rNo=0;rNo<18;rNo++){
  rar.push(parseInt(document.getElementsByClassName('r')[rNo].textContent) )
}
betAtari.push({atari:rar,ataritxt:'赤',kakekin:0,bairitu:2,betp:0,win:0});

const blar=[];
for(bNo=0;bNo<18;bNo++){
  blar.push(parseInt(document.getElementsByClassName('b')[bNo].textContent) )
}
betAtari.push({atari:blar,ataritxt:'黒',kakekin:0,bairitu:2,betp:0,win:0});



// クリックするとダイアログ表示で掛け金を入力＆所持金から掛け金をひく
const betOkane =(n)=>{
  betAtari[n].kakekin=parseInt(prompt(betAtari[n].bairitu+'倍　'+betAtari[n].ataritxt+'がでたらあたり'+'\n※キャンセルを押すと賭け金が0に戻ります',betAtari[n].kakekin));
  
  if(isNaN(betAtari[n].kakekin) || betAtari[n].kakekin<0){
    betAtari[n].kakekin=0;
    betAtari[n].betp=0;
    sisyutu=0;
    kakekinsum();};
  sisyutu=0;
  kakekinsum();
  if(betAtari[n].kakekin===0){let w = Math.floor(Math.random()*hiyakasi.length);
    $fukidasibox.style.visibility ='visible';
    $fukidasi.textContent=hiyakasi[w];
    betCReset(n);
  }else if(betAtari[n].kakekin>10){
    let w = Math.floor(Math.random()*jougen.length);
    $fukidasibox.style.visibility ='visible';
    $fukidasi.textContent=jougen[w];
    betAtari[n].kakekin=0;
    sisyutu=0;
    stressp++;
    if(stressp>8){
      ikarise.play();
      document.getElementById('atamaG').style.visibility='visible'
      document.getElementById('ikari').style.visibility='visible'
      setInterval(limitbreak,500)}
    kakekinsum();
  }else{
    let w = Math.floor(Math.random()*tymesage.length);
    $fukidasibox.style.visibility ='visible';
    $fukidasi.textContent=tymesage[w];
    $bet[n].style.backgroundColor='gold'
    betse.play();
    betAtari[n].betp=1;
  }
}
  for(let nc=0;nc<$bet.length;nc++){
    $bet[nc].addEventListener('click',()=>{betOkane(nc)})}
 
// ルーレットを回す関数
const spinr=()=>{
  if(syojikin<sisyutu){
    let w = Math.floor(Math.random()*hasan.length);
    $fukidasibox.style.visibility ='visible';
    $fukidasi.textContent = hasan[w];
    stressp++;
    if(stressp>8){document.getElementById('atama').style.visibility='hidden'
      ikarise.play()
      document.getElementById('atamaG').style.visibility='visible'
      document.getElementById('ikari').style.visibility='visible'
      setInterval(limitbreak,500)}
  }else if(sisyutu===0){
    let w = Math.floor(Math.random()*hiyakasi.length);
    $fukidasibox.style.visibility ='visible';
    $fukidasi.textContent = hiyakasi[w];
    stressp++;
    if(stressp>8){
    ikarise.play();
    document.getElementById('atamaG').style.visibility='visible'
    document.getElementById('ikari').style.visibility='visible'
      setInterval(limitbreak,500)}
  }else{
    $fukidasibox.style.visibility ='hidden';
    boon();
    roulette();
      for(let hn=0;hn<152;hn++){
      if(betAtari[hn].atari.indexOf(parseInt(roulettesuuji())) !== -1){
          syuunyuu=syuunyuu+(betAtari[hn].bairitu*betAtari[hn].kakekin);
      }}
      syuusi =syuunyuu-sisyutu;
      // syojikin=syojikin+syuusi;
      $sound.style.visibility='visible';
      if(syuunyuu===0 && Math.random()*5>3){
        spinr()
      }else if(syuusi<=0 && Math.random()*5>1){
        changeimgB();
        $fukidasi.textContent = rouletteiro()+roulettesuuji()+'デシタヨ';
        syojikin=syojikin+syuusi;
        for(let hn=0;hn<152;hn++){
          if(betAtari[hn].atari.indexOf(parseInt(roulettesuuji())) !== -1){
              betAtari[hn].kakekin=0;
              betAtari[hn].win=1;
            }else{
              betAtari[hn].kakekin=0;}
            }
      }else if(syuusi>0 && Math.random()*5>1){
        changeimgC();
        $fukidasi.textContent = rouletteiro()+roulettesuuji()+'です (ﾁｯ)';
        syojikin=syojikin+syuusi;
        for(let hn=0;hn<152;hn++){
          if(betAtari[hn].atari.indexOf(parseInt(roulettesuuji())) !== -1){
              betAtari[hn].kakekin=0;
              betAtari[hn].win=1;
            }else{
              betAtari[hn].kakekin=0;}
            }
      }else{
        changeimgA();
        $fukidasi.textContent = rouletteiro()+roulettesuuji()+'です';
        syojikin=syojikin+syuusi;
        for(let hn=0;hn<152;hn++){
          if(betAtari[hn].atari.indexOf(parseInt(roulettesuuji())) !== -1){
              betAtari[hn].kakekin=0;
              betAtari[hn].win=1;
            }else{
              betAtari[hn].kakekin=0;}
            }
      }
      $spin.style.visibility ="hidden";
      $reset.style.visibility ="hidden";
    }
}
const spin =()=>{
  spinse.play();
  $fukidasibox.style.visibility ='hidden';
  spinr()
}

  // あたりを判定
  const result=()=>{
      if(syuusi<0){
        $syuusi.style.color = "red";
        $syuusi.textContent=syuusi;
      }else if(syuusi>0){
        $syuusi.style.color = "green";
        $syuusi.textContent='+'+syuusi;
      }else{
        $syuusi.style.color = "midnightblue";
        $syuusi.textContent=syuusi;
      }
      $syuunyuu.textContent=syuunyuu;
      document.getElementById('syojikin').textContent=syojikin;
      $result.style.visibility='hidden';
      $newgame.style.visibility='visible';
      $fukidasibox.style.visibility='visible';
      $fukidasi.style.color='midnightblue';
      
      if(syuusi<0){
        let w = Math.floor(Math.random()*tyikasama.length);
        $fukidasi.textContent=tyikasama[w];
        akaji.play();
      }else if(syuusi>0){
        let w = Math.floor(Math.random()*omedetou.length);
        $fukidasi.textContent=omedetou[w];
        kuroji.play();
      }else{
        let w = Math.floor(Math.random()*hikiwake.length);
        $fukidasi.textContent=hikiwake[w];
        akaji.play();
      }
    for(hn=0;hn<152;hn++){
      if(betAtari[hn].win===1 && betAtari[hn].betp===1){
        $bet[hn].style.backgroundColor='lightgreen'
        betAtari[hn].win=0;
        betAtari[hn].betp=0;}
    }
    }
// spinボタン
$spin.onclick = ()=>{spin();};
// 結果ボタン
$result.onclick = ()=>{result();};
// 次のゲームボタン
$newgame.onclick = ()=>{newgame();};
// 掛金リセットボタン
$reset.onclick = ()=>{kakekinreset();};

// ピコピコハンマーを動かす
const pikohan = ()=>{
  document.getElementById('piko').style.visibility='visible';
  document.getElementById('piko').className='piko0';
  pikohanse.pause();
  pikohanse.currentTime=0;
  pikohanse.play();
  stressp+=3;
  $fukidasi.textContent=hatama[stressp%4];
  $fukidasibox.style.visibility='visible'
  if(stressp>8){
      ikarise.play();
      document.getElementById('atamaG').style.visibility='visible'
      document.getElementById('ikari').style.visibility='visible'
    setInterval(limitbreak,500)
}}
const pikor = ()=>{document.getElementById('piko').className='piko'}
const pikova =()=>{document.getElementById('piko').style.visibility='hidden';}
document.getElementById('atama').addEventListener('mousedown',pikohan)
document.getElementById('atama').addEventListener('mouseup',pikor);
document.getElementById('atama').addEventListener('mouseout',pikova);

// ｔｙちゃんのＨＰがへる演出　ｎ番目のＨＰが減る
const hphenka =(n)=>{
  if(document.getElementsByName('hpg')[n].className!=='hpgb'){
    document.getElementsByName('hpg')[n].className='hpgb'
  }else{
    document.getElementsByName('hpg')[n].className='hpg'+(n);
  } 
}
// 自分のHPがへる演出 n番目のコインがなくなる
const myhphenka = (n)=>{
  if(document.getElementsByName('myg')[n].className!=='myg0'){
    document.getElementsByName('myg')[n].className='myg0'
  }else{
    document.getElementsByName('myg')[n].className='myg'
  }
}
// 所持金をHPに変換
const myhptrans =()=>{
  if(syojikin<125){life=1;
  }else if(syojikin>250){
    life=5;
  }else{
    life=parseInt(syojikin/50);
  }
  for(n=0;n<=life;n++){
    document.getElementsByName('myg')[n].className='myg'
  }
}
// ｔｙちゃんのＨＰが増える演出
const hpcharge = ()=>{
  powerupse.play();
  for(th=0;th<3;th++){
    hphenka(th);
  }
}
// ｔｙちゃんが・・・・・・・とゆっくりしゃべる
let Ebm =[
  ()=>{$fukidasi.textContent='';
    $blackout.style.visibility='visible'
    usuallymusic.pause();
    tentense.play();},
  ()=>{$fukidasibox.style.visibility='visible';
    $fukidasi.textContent+='・'},
  ()=>{$fukidasibox.style.visibility='hidden';
    $tyimg.src=imgset[1]
    nyoki.play()},
  ()=>{$mahou.src='imgapp/enblack.png';
      $mahou.className='mahou0';
      chargese.play();},
  ()=>{$mahou.className='mahou1';
      $mahou.className='mahou'},
  ()=>{$mahoujin.style.visibility='visible';
      $mahoujinC.className='mahoujinC0';
      mahoujinse.play()},
  ()=>{
      n=0;
      blackout()}
];
let ELbossmode=[];
const Mbm =(m,f)=>{ELbossmode[m]=Ebm[f]};
Mbm(0,0);
Mbm(1,1);Mbm(3,1);Mbm(5,1);Mbm(7,1);Mbm(9,1);Mbm(11,1);Mbm(13,1);Mbm(15,1);
Mbm(16,2);
Mbm(20,3);
Mbm(22,4);Mbm(24,4);Mbm(26,4);
Mbm(27,5);
Mbm(31,6);

let bm=0;
const Fbossmode =()=>{if(bm>ELbossmode.length){clearInterval(Sbossmode)
}else if(ELbossmode[bm]!==undefined){ELbossmode[bm]();bm++
}else{bm++}}
const bossmode =()=>{Sbossmode=setInterval(Fbossmode,250)}

// 画面がブラックアウトしてかけるところのデザインが変わる
let Ebo =[
  ()=>{$blackout.className='blackout0';
       $boQ.className='blackoutQ0';
      blackoutse.play()},
  ()=>{$boQ.style.visibility='hidden'},
  ()=>{bossscreen()},
  ()=>{$blackout.className='blackout1';
      bossmusic.play()},
  ()=>{$fukidasibox.style.visibility='visible';},
  ()=>{hpcharge()},
  ()=>{console.log('3');},
  ()=>{myhptrans();booff();}
];
let ELblackout =[];
const Mbo =(m,f)=>{ELblackout[m]=f};
Mbo(0,Ebo[0]);
Mbo(2,Ebo[1])
Mbo(3,Ebo[2]);
Mbo(4,Ebo[3]);
Mbo(7,Ebo[4]);
Mbo(9,Ebo[5]);
Mbo(12,Ebo[6]);
Mbo(13,Ebo[7]);
let bo =0;
const Fblackout = ()=>{if(bo>14){clearInterval(Sblackout)}else if(ELblackout[bo]!==undefined){ELblackout[bo]();bo++}else{bo++}}
const blackout =()=>{Sblackout= setInterval(Fblackout,500)}


// ボスモードのあたりの紐づけ
const bossAtari=[
  {atari:do1ar,ataritxt:'１～12',kakekin:0,bairitu:3,betp:0,win:0},
  {atari:do2ar,ataritxt:'13～24',kakekin:0,bairitu:3,betp:0,win:0},
  {atari:do3ar,ataritxt:'25～36',kakekin:0,bairitu:3,betp:0,win:0},
  {atari:eo1ar,ataritxt:'偶数',kakekin:0,bairitu:2,betp:0,win:0},
  {atari:eo2ar,ataritxt:'奇数',kakekin:0,bairitu:2,betp:0,win:0},
  {atari:rar,ataritxt:'赤',kakekin:0,bairitu:2,betp:0,win:0},
  {atari:blar,ataritxt:'黒',kakekin:0,bairitu:2,betp:0,win:0}
];
// ボスリセット
const bossreset =()=>{
  vn=-1;
  booff();
  $mahoujin.style.visibility='hidden'
  $boQ.className='blackoutQ';
  $boQ.style.visibility='visible'
  $mahoujinC.className='mahoujinC';
  $blackout.style.visibility='hidden'
  for(let bc=0;bc<$bbet.length;bc++){
    bossAtari[bc].kakekin=0;
    bossAtari[bc].betp=0;
    betAtari[bc].win=0;
    $bbet[bc].style.backgroundColor='lightsteelblue'
    
  }
}
// 掛けると掛金1＋ほかのところを0にする
const bossbet = (bb)=>{
  document.getElementById('bossspin').className='bossspin'
  document.getElementById('bossspinG').style.visibility='hidden'
  bossbetse.pause();
  bossbetse.currentTime=0;
  bossbetse.play();
  bossreset();
  bossAtari[bb].kakekin=1;
  let w = Math.floor(Math.random()*tymesage.length);
  $fukidasibox.style.visibility ='visible';
  $fukidasi.textContent=tymesage[w];
  $bbet[bb].style.backgroundColor='gold'
  bossAtari[bb].betp=1;
}
for(let bb=0;bb<$bbet.length;bb++){
  $bbet[bb].addEventListener('click',()=>{bossbet(bb)})
}
// ボス用のルーレットを回す
const bossspin =()=>{
  document.getElementById('bossspin').className='bossspin0'
  document.getElementById('bossspinG').style.visibility='visible'
  bossspinse.play();
  boon();
  roulette();
  for(let rb=0;rb<$bbet.length;rb++){
    if(bossAtari[rb].atari.indexOf(roulettesuuji())!==-1 && bossAtari[rb].kakekin===1){
      bossAtari[rb].kakekin=0;
      vn=rb;
    }else{
      bossAtari[rb].kakekin=0
    }
  }
  bosshit();
}
document.getElementById('bossbuttonbox').addEventListener('click',bossspin)
// 掛けられる場所が減る
const betvanish = ()=>{
  if(0<=vn && vn<=2){
    document.getElementsByName('bdguard')[0].style.visibility='visible';
    document.getElementsByName('bdguard')[1].style.visibility='visible';
    document.getElementsByName('bdguard')[2].style.visibility='visible';
    document.getElementsByName('bdguard')[0].className='bdguard0g'
    document.getElementsByName('bdguard')[1].className='bdguard1g'
    document.getElementsByName('bdguard')[2].className='bdguard2g'
  }else if(3<=vn && vn<=4){
    document.getElementsByName('beoguard')[0].style.visibility='visible';
    document.getElementsByName('beoguard')[1].style.visibility='visible';
    document.getElementsByName('beoguard')[0].className='beoguard0g'
    document.getElementsByName('beoguard')[1].className='beoguard1g'
  }else{
    document.getElementsByName('brbguard')[0].style.visibility='visible';
    document.getElementsByName('brbguard')[1].style.visibility='visible';
    document.getElementsByName('brbguard')[0].className='brbguard0g'
    document.getElementsByName('brbguard')[1].className='brbguard1g'
  }
};
// 壊れた場所をクリック
const bbetB=()=>{
  let w = Math.floor(Math.random()*brokenbet.length);
    $fukidasibox.style.visibility ='visible';
    $fukidasi.textContent=brokenbet[w];
}
for(bgn=0;bgn<7;bgn++){
  document.getElementsByClassName('bbg')[bgn].addEventListener('click',bbetB)
}
// はずれの演出
let Ebom=[
  ()=>{
    $fukidasibox.style.visibility='hidden';
    $sound.style.visibility='hidden';
    $tyimg.src=imgset[1];
    nyoki.play()
  },
  ()=>{
    mahoucolor(3);
    $mahou.className='mahou0';
    chargese.play();},
  ()=>{
    $mahou.className='mahou1';
    $mahou.className='mahou'},
  ()=>{
    $mahoujin.style.visibility='visible';
    $mahoujinC.className='mahoujinC0';
    mahoujinse.play()},
  ()=>{
    timestop.play();
    vdown();
    $boQ.className='blackoutQts';
    $blackout.style.visibility='visible';
    $blackout.className='blackoutts';
  },
  ()=>{
    watch.currentTime=0;
    watch.play();
    $mahoujinC.className='mahoujinC'
  },
  ()=>{
    $tyimg.src=imgset[2];
    pasi.play()
  },
  ()=>{
    $tyimg.src=imgset[1];
    roulettese.currentTime=10.5;
    roulettese.play();
    modoru.play();
  },
  ()=>{
    watch.pause();
    timestope.play();
  },
  ()=>{
    bossmusic.volume=0.5;
    $boQ.className='blackoutQts0'
    $blackout.className='blackoutts0'
  },
  ()=>{
    $fukidasibox.style.visibility='visible';
    $fukidasi.textContent=rouletteiro()+roulettesuuji()+'デシタヨ';
    myhphenka(life);
    lifedown.play();
    life=life-1;
  },
  ()=>{
    if(life===-1){
      ending();
      clearInterval(Sbom);bh=0;bom=0
    }else{
      $fukidasi.style.color='midnightblue';
      $fukidasi.textContent='さあ次の勝負です'
      $tyimg.src=imgset[0]
      $boQ.style.visibility='visible'
      bossreset();
    }
  }
]
ELbom=[];
const Mbom=(m,f)=>{ELbom[m]=Ebom[f]};
Mbom(0,0);
Mbom(4,1);
Mbom(6,2);
Mbom(8,2);
Mbom(10,2);
Mbom(11,3);
Mbom(13,4);
Mbom(17,5);
Mbom(25,6);
Mbom(27,7);
Mbom(31,8);
Mbom(35,9);
Mbom(39,9)
Mbom(43,10);
Mbom(51,11);
let bom =0;
const Fbom =()=>{
  if(bom>ELbom.length){
    clearInterval(Sbom);bom=0;bh=0
  }else if(ELbom[bom]!==undefined){
    ELbom[bom]();bom++
  }else{bom++}
}
const bossmiss =()=>{Sbom=setInterval(Fbom,250)};
// あたりの演出
let Ebh =[
  ()=>{
    roulettese.play();
    $fukidasibox.style.visibility='hidden'
    $sound.style.visibility='visible'
    $sound.src=soundset[0]},
  ()=>{
    $sound.src=soundset[1];
    roulettese.pause();
    roulettese.currentTime=9.5;
    roulettese.play()},
  ()=>{
    $sound.src=soundset[2]},
  ()=>{
    if(vn!==-1){
      $sound.style.visibility='hidden'
      $sound.src=soundset[0];
      $fukidasibox.style.visibility='visible';
      $fukidasi.textContent = rouletteiro()+roulettesuuji()+'です';
      lifeT=lifeT-1;
      hphenka(lifeT)
      hpdownse.play()
    }else{
      clearInterval(Sbh);bh=0;
      bossmiss();
    }
  },
  ()=>{
    if(lifeT===0){
      ending();
      clearInterval(Sbh);bh=0;bom=0
    }else{
      $fukidasibox.style.visibility='hidden';
      $tyimg.src=imgset[1];
      nyoki.play()
    }
  },
  ()=>{
    mahoucolor(1);
    $boQ.style.visibility='visible'
    $mahou.className='mahou0';
    chargese.play();},
  ()=>{
    $mahou.className='mahou1';
    $mahou.className='mahou'},
  ()=>{
    $mahoujin.style.visibility='visible';
    $mahoujinC.className='mahoujinC0';
    mahoujinse.play()},
  ()=>{
    $tyimg.src=imgset[2];
    betbreak.pause();
    betbreak.currentTime=0;
    betbreak.play();
  },
  ()=>{
    $mahoujin.style.visibility='hidden';
    $tyimg.src=imgset[1]
  },
  ()=>{
    $tyimg.src=imgset[3];
    modoru.play();
    betvanish()
  },
  ()=>{
    $tyimg.src=imgset[0];
    $fukidasibox.style.visibility='visible';
    $fukidasi.style.color='midnightblue';
    $fukidasi.textContent='次は負けませんよ';
    bossreset();
    $blackout.className='blackout';
    booff();
  },
  ()=>{
    explode.play();
    $boQ.className='blackoutQr'
  },
  ()=>{
    $boQ.className='blackoutQr0'
  }
]
let ELbh=[]
const Mbh=(m,f)=>{ELbh[m]=Ebh[f]}
Mbh(0,0);
Mbh(16,1);
Mbh(20,2);
Mbh(28,3);
Mbh(32,4);
Mbh(36,5);
Mbh(38,6);
Mbh(40,6);
Mbh(42,6);
Mbh(43,7);
Mbh(50,8);
Mbh(54,9);
Mbh(55,8);
Mbh(56,9);
Mbh(57,8);
Mbh(59,10);
Mbh(61,11);
Mbh(45,12);
Mbh(58,13);

let bh =0;
const Fbh=()=>{if(bh>ELbh.length){clearInterval(Sbh);bh=0;bom=0}
  else if(ELbh[bh]!==undefined){ELbh[bh]();bh++}
  else{bh++}}
const bosshit =()=>{Sbh=setInterval(Fbh,250)}
// エンディング
const endtext = ()=>{if(lifeT===0 && stressp<9){
  document.getElementById('ending').src='imgapp/ending0.png';
  end0.play()
}else if(life===-1 && stressp<9){
  document.getElementById('ending').src='imgapp/ending1.png';
  end1.play()
}else if(lifeT===0 && stressp>8){
  document.getElementById('ending').src='imgapp/ending2.png';
  end2.play()
}else{
  document.getElementById('ending').src='imgapp/ending3.png';
  end3.play()
}}
const ending =()=>{
  usuallymusic.pause();
  bossmusic.pause();
  $opening.className='openingend'
  $opening.className='openingend0'
  endingse.play()
  endingse.addEventListener('ended',endtext);
  for(let on=0;on<4;on++){
    document.getElementsByClassName('openingp')[on].style.visibility='hidden'
  }
}