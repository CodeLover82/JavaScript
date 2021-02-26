[ fetch API ]

fetch(filename) : 서버에 filename이라는 파일을 요청.
then() : 비동기적인 실행을 의미하며, 서버가 응답할 때 까지 다른일을 하다가 응답이 완료되면 then 내부의 콜백함수를 실행시킨다.
response 객체 : fetch API의 사용 설명서를 보면 then에 콜백함수를 주면, 콜백함수의 첫번째 인자로 response 객체를 준다고 명시되어 있다. 이름은 임의로 지정 가능.

response.status : 200 = 응답 성공, 404 = File Not Found
response.text() : 응답한 파일 내용을 불러온다.
text : 응답한 데이터가 저장되어 있는 변수.

ex) 
<li><a onclick="
      fetch('html').then(function(response){
        if(response.status == '404'){
          alert('html Not found'); 
        }
        response.text().then(function(text){
          document.querySelector('article').innerHTML = text;
        })
      });
">HTML</a></li>
