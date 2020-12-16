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
  }else if(roulette % 2 ===1){
    return('red');
  }else{
    return('black');
  }
}

document.getElementById('iro').textContent = rouletteiro();
document.getElementById('suuji').textContent = roulettesuuji();

console.log(

  

);