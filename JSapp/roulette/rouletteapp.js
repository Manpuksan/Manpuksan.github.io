let syojikin = 10000;
let sisyutu = 0;
let  bet = document.getElementsByClassName('bet');
// あたりの紐づけ
const betAtari=[];
  betAtari.push({atari:37,ataritxt:'00',kakekin:0,bairitu:36,win:0})
  betAtari.push({atari:0,ataritxt:0,kakekin:0,bairitu:36,win:0})
for(st3No=3;st3No<39;st3No+=3){
  betAtari.push({atari:st3No,ataritxt:st3No,kakekin:0,bairitu:36,win:0})
};
for(st2No=2;st2No<38;st2No+=3){
  betAtari.push({atari:st2No,ataritxt:st2No,kakekin:0,bairitu:36,win:0})
};
for(st1No=1;st1No<37;st1No+=3){
  betAtari.push({atari:st1No,ataritxt:st1No,kakekin:0,bairitu:36,win:0})
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
  betAtari.push({atari:[cl3ar],ataritxt:'この列の数字',kakekin:0,bairitu:3,win:0});

const cl2ar =[];
for(cl2=2;cl2<38;cl2+=3){
  cl2ar.push(cl2);
};
  betAtari.push({atari:[cl2ar],ataritxt:'この列の数字',kakekin:0,bairitu:3,win:0});

const cl1ar =[];
for(cl1=1;cl1<37;cl1+=3){
  cl1ar.push(cl1);
}
  betAtari.push({atari:[cl1ar],ataritxt:'この列の数字',kakekin:0,bairitu:3,win:0});

const do1ar=[];
for(do1=1;do1<13;do1++){
  do1ar.push(do1);
};
betAtari.push({atari:[do1ar],ataritxt:'１～12',kakekin:0,bairitu:3,win:0});

const do2ar=[];
for(do2=13;do2<25;do2++){
  do2ar.push(do2);
};
betAtari.push({atari:[do2ar],ataritxt:'13～24',kakekin:0,bairitu:3,win:0});

const do3ar=[];
for(do3=25;do3<37;do3++){
  do3ar.push(do3);
};
betAtari.push({atari:[do3ar],ataritxt:'25～36',kakekin:0,bairitu:3,win:0});

const hl1ar=[];
for(hl1=1;hl1<19;hl1++){
  hl1ar.push(hl1);
};
betAtari.push({atari:[hl1ar],ataritxt:'1～18',kakekin:0,bairitu:2,win:0});

const hl2ar=[];
for(hl2=19;hl2<37;hl2++){
  hl2ar.push(hl2);
};
betAtari.push({atari:[hl2ar],ataritxt:'19～36',kakekin:0,bairitu:2,win:0});

const eo1ar=[];
for(eo1=2;eo1<37;eo1+=2){
  eo1ar.push(eo1);
};
betAtari.push({atari:[eo1ar],ataritxt:'偶数',kakekin:0,bairitu:2,win:0});

const eo2ar=[];
for(eo2=1;eo2<36;eo2+=2){
  eo2ar.push(eo2);
};
betAtari.push({atari:[eo2ar],ataritxt:'奇数',kakekin:0,bairitu:2,win:0});
// 赤黒のあたりをかく
const rar=[];
for(rNo=0;rNo<18;rNo++){
  rar.push(parseInt(document.getElementsByClassName('r')[rNo].textContent) )
}
betAtari.push({atari:[rar],ataritxt:'赤',kakekin:0,bairitu:2,win:0});

const blar=[];
for(bNo=0;bNo<18;bNo++){
  blar.push(parseInt(document.getElementsByClassName('b')[bNo].textContent) )
}
betAtari.push({atari:[blar],ataritxt:'黒',kakekin:0,bairitu:2,win:0});


// ルーレットを回す関数
const spin =()=>{
  const roulette = Math.floor(Math.random()*38);
  const roulettesuuji = ()=>{
  if(roulette===0){
    return('0');
  }else if(roulette===37){
    return('00');
  }else if(roulette % 2 === 1){
    return(roulette);
  }else;{
    return(roulette);
  }
  }
  const rouletteiro = ()=>{
    if(roulette===0 || roulette===37){
      return('green')
    }else if(roulette % 2 ===1 && roulette <=9){
      return('red');
    }else if(roulette % 2 ===0 && roulette <=18 && roulette >10){
      return('red')
    }else if(roulette % 2 ===1 && roulette <=27 && roulette >=19){
      return('red')
    }else if(roulette % 2 ===0 && roulette <=36 && roulette >29){
      return('red')
      }else{
        return('black')
      }
    }
    
  document.getElementsByClassName('bet')
  document.getElementById('iro').textContent = rouletteiro();
  document.getElementById('suuji').textContent = roulettesuuji();
}

  document.getElementsByTagName('button')[0].onclick = ()=>{spin();}

// クリックするとダイアログ表示で掛け金を入力＆所持金から掛け金をひく
  const betOkane =(n)=>{
    betAtari[n].kakekin=prompt('あたり:　'+betAtari[n].ataritxt+'　現在の掛金：　'+betAtari[n].kakekin+'（空欄のままOKを押すと掛金が0に戻ります）');
    return(betAtari[n].kakekin);
  }
  for(let betNo=0;betNo<bet.length;betNo++){
    bet[betNo].addEventListener('click',()=>{sisyutu=sisyutu+betOkane(betNo)})
  }


console.log(
syojikin
  );

  console.log(
    document.getElementsByClassName('bet')
  );