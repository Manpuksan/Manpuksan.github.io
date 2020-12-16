// クイズの中身
const quiz = [{
    mondai : 'リラックマは何色？',
    sentakusi : ['しろ','金色','茶色','虹色'],
    kotae : '茶色'
  }, {
    mondai : 'コリラックマの胸についているのは何？',
    sentakusi : ['かえる','いちご','ボタン','ブローチ'],
    kotae : 'いちご'
  },{
    mondai : 'キイロイトリの趣味は何？',
    sentakusi : ['貯金','家事','旅行','温泉'],
    kotae : '貯金'
  },{
    mondai : 'リラックマの好きな食べ物は？',
    sentakusi : ['お茶漬け','ホットケーキ','どら焼き','お好み焼き'],
    kotae : 'ホットケーキ'
  }
];
// ――――――――――――――――――――――


// クイズ番号（quizNo）0の問題を出す
// 共有する定数を外に出す
let quizNo = 0;let tokuten = 0;
const quizL = quiz.length;
const button = document.getElementsByTagName('button')
const buttonL = button.length;

// 問題の作成を関数に置き換える
const setQuiz =()=>{
document.getElementById('kumamon').textContent = quiz[quizNo].mondai;
//――――――――――――――― 

// ボタン×4を選択肢（quiz[0].sentakusi[0][1][2]）に変える


for(let sentakusiNo = 0;sentakusiNo<buttonL;sentakusiNo++){
    button[sentakusiNo].textContent = quiz[quizNo].sentakusi[sentakusiNo];};

// ――――――――――――――――――――
};
// 問題作成を関数にしたので実行する指示を出す
setQuiz();  
// クリックしたら正誤判定をして、対応するウィンドウを出す
const newQuiz = ()=>{
  quizNo++;
  if(quizNo<quizL){
    setQuiz();
  }else{
    window.alert('おしまい');
    document.getElementById('kumamon').textContent = `あなたの得点は${tokuten}/${quizL}点でした 
 おつかれさまでした`;
    document.getElementById('kaitouran').style.visibility ="hidden";
  }
};
const check = (e)=>{if(quiz[quizNo].kotae === e.target.textContent){
  window.alert('あたり！');tokuten++;
  }else{
    window.alert('はずれ・・・');
  }
  newQuiz();
  };

for(let buttonNo =0;buttonNo<buttonL;buttonNo++) {
button[buttonNo].addEventListener('click',(e)=>{check(e)});
}

// ―――――――――

// クリックしたらクイズ番号1の問題を上書きする 
// 正誤判定に統合


// ――――――――――――――――――――

// クリックしたらボタン×4をquiz[0+1].sentakuI[0][1][2] に変える
// 正誤判定に統合

// ――――――――――――――――――――

