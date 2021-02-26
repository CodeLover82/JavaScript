
fetch API

fetch('css').then(function(response){
  response.text().then(function(text){
    document.querySelector('article').innerHTML = text;
  })
});






서버에 'css'라는 파일을 요청하고 응답이 최종적으로 끝나면 then안의 내용이 실행되면서 서버가 응답해준 데이터가 text 변수에 저장되어 있다.
