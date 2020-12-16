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
    
  
  document.getElementById('iro').textContent = rouletteiro();
  document.getElementById('suuji').textContent = roulettesuuji();
}
document.getElementById('spin').onclick = ()=>{spin();};

console.log(


);