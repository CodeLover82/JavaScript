[ fetch API ]

fetch('css').then(function(response){
  response.text().then(function(text){
    document.querySelector('article').innerHTML = text;
  })
});


fetch(filename) : 서버야 filename이라는 파일을 보내줘
then() : 서버가 응답할 때 까지 다른일을 하다가 응답이 완료되면 내부의 콜백함수를 실행시킨다.=> 비동기적인 실행
function(response){} : 익명 함수
fetch api의 사용설명서를 보면 then에 콜백함수를 주면, 콜백함수의 첫번째인자로 response 객체를 준다고 되어있다.
이름은 아무거나 상관없다.

response객체 : 속성 중 status : 200 = 성공
                              404 = 요청 파일이 존재하지 않음(not found)
                response.status 로 가져올 수 있다.
                ex) if(response.status == '404'){
                  alert('Not found');
                }

서버에 'css'라는 파일을 요청하고 응답이 최종적으로 끝나면 then안의 내용이 실행되면서 서버가 응답해준 데이터가 text 변수에 저장되어 있다.

사용
<li><a onclick="
      fetch('html').then(function(response){
        response.text().then(function(text){
          document.querySelector('article').innerHTML = text;
        })
      });
    ">HTML</a></li>
