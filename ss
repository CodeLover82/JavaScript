








< this 객체 >
: this는 기본적으로 window 객체를 가리킨다. 그러나 객체 메서드 안의 this는 해당 객체를 가리킨다. 이것은 객체의 메서드를 호출할 때 this를 내부적으로 바꿔주기 때문이다. 따라서 호출할 때, 호출하는 함수가 객체의 메서드인지 그냥 함수인지가 중요하며 this가 무엇을 가리키는지 결정하는 요소이다.
이벤트가 발생했을 때는, 이벤트 핸들러 내에서 내부적으로 this가 해당 요소로 바뀌기 때문에 외워야 한다.
ex) function a() { console.log(this); };  a(); // Window {}
    var obj = { a: function() { console.log(this); } };  obj.a(); // obj    var a2 = obj.a;  a2(); // window
    $('div').on('click', function() {
  	console.log(this); // <div>
  	function inner() {
    	   console.log(this); //  Window    => 함수의 this는 기본적으로 window라는 원칙을 충실히 따른 것이다.
  	}
    	inner();
    });
   => 위의 문제를 해결하기 위해서는 
   $('div').on('click', function() {
  	console.log(this); // <div>
        var that = this;
  	function inner() {
    	   console.log(that); // <div>
  	}
    	inner();
    }); 
    처럼 해야 한다.
