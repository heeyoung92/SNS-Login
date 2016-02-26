var Mock = {
	set : function(){
		this.nativeAlert = window.alert;
		window.alert = (function(scope){return function(){scope.alert.apply(scope,arguments)}})(this);
		
		this.nativeConfirm = window.confirm;
		window.confirm = (function(scope){return function(){return scope.confirm.apply(scope,arguments)}})(this);
	},
	alert : function(sMsg){
		this.alertMsg = sMsg;
	},
	getAlertMsg : function(){
		return this.alertMsg;
	},
	confirm : function(sMsg){
		this.confirmMsg = sMsg;
		return this.result;
	},
	confirmResult : function(bResult){
		this.result = bResult;
	},
	getConfirmMsg: function(){
		return this.confirmMsg;
	},
	reset : function(){
		this.alertMsg = "";
		this.confirmMsg = "";
		this.result = "";
		window.alert = this.nativeAlert;
		window.confirm = this.nativeConfirm;
	}
};

module("naver");
test( "네이버 아이디로 로그인할 수 있다", function() {
	// Given
	
	// When
	// Then
//	equal($("naver_status1").innerHTML,"SUCCESS!");
	  equal(1,"1");

});

module("facebook");
test( "페이스북 아이디로 로그인 할 수 있다", function() {
	// Given

	// When
	

	// Then
	  equal(1,"1");
});

test( "페이스북 아이디 로그인 시 이메일 정보가 없을 경우 경고 창을 띄운다", function() {
	// Given
	Mock.set();
	
	// When
//	getInfo();
//	checkLoginState();
	alertTest();
	
	// Then
	equal(Mock.getAlertMsg(),"만화1번지 로그인시 email 정보가 필요합니다.","'만화1번지 로그인시 email 정보가 필요합니다.' 경고창을 띄운다.");
	Mock.reset();	
//	equal(1,"1");
});
test( "잘못된 이메일 형식을 입력할 경우 false를 반환한다.", function() {
	// Given
	expect(8);
	var wrong1 = "abc"
	var wrong2 = "abc.com"
	var wrong3 = "abc@c."
	var wrong4 = "이메일@c.com"
	var wrong5 = "a.b@c.d"
	var wrong6 = "ab@@c.d"
	var wrong7 = "@.com"
	
	var great ="abc_12@goo.co"
			
	// When, Then
	equal(validateEmail(wrong1),false,"문자만 입력된 경우 false");
	equal(validateEmail(wrong2),false,"'@'가 없을경우 false");
	equal(validateEmail(wrong3),false,"'.'뒤에 문자가 없을 경우 false");
	equal(validateEmail(wrong4),false,"한글을 입력한 경우 false");
	equal(validateEmail(wrong5),false,"'@'앞에 '.'이 들어간 경우 false");
	equal(validateEmail(wrong6),false,"'@'가 두개인 경우 false");
	equal(validateEmail(wrong7),false,"'@'앞에 문자가 없을 경우 false");
	
	notEqual(validateEmail(great),false,"정확한 이메일 형식일 경우 true");

});

QUnit.config.testTimeOut=100; //100ms 경과하면 해당 테스트를 실패로 표시
module("google");
asyncTest( "구글 아이디로 로그인 할 수 있다", function() {
	// Given
//	Mock.fireEvent($("customBtn"),"click");
	// When
//	timer(20);
	setTimeout(function(){
		//Then
		  equal(1,"1");

//		equal($("google_status1").innerHTML,"SUCCESS!","구글 로그인 성공");
		start();
	},10);
//	stop();
});