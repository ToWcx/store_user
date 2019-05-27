
(function($){
	
	
	var $startLogin = $('.start');//账号密码登录按钮
	var $pwdlogin = $('#pwd_login');//账号密码登录界面
	var $startTip = $('.startTip');//账号提示
	
	$startLogin.on('click',function(){
		$startLogin.css('display','none');
		$pwdlogin.css('display','none');
		$startTip.css('display','none');
	});
	
	var $username = $('.user');	//用户名
	var $pass = $('.pass');	//密码
	var $pwd = $('.password');
	var $usernamelogin = $('#usernamelogin');
	var $password = $('.password');
	var $del = $('.text_del');
	$username.on('input',function(){
		if($(this).val()!=''){
			$del.css('display','block');
		}else{
			$del.css('display','none');
		}
	});
	$del.on('click',function(){
		$username.val('');
		$pass.val('');
		$del.css('display','none');
	});
	//用户名
	$username.on('focus',function(){
		if($(this).val()=='邮箱/昵称/手机号码'){
			$(this).val('');
		}
		$usernamelogin.css('border-color','#646464');
		$('#liDivErrorMessage').css('display','block');
	});
	$username.on('blur',function(){
		if($(this).val()==''){
			$(this).val('邮箱/昵称/手机号码');
		}
		$usernamelogin.css('border-color','');
		$('#liDivErrorMessage').css('display','none');
	});
	//密码
	$pass.on('focus',function(){
		$password.css('border-color','#646464');
		$('#login_password_error').css('display','block');
	});
	$pass.on('blur',function(){
		$password.css('border-color','');
		$('#login_password_error').css('display','none');
	});
	
	var $autologin = $('#autologin');
	var $auto_tip = $('#auto_tip');
	$autologin.on('change',function(){
		if($(this).prop('checked')){
			$auto_tip.html('七天内自动登录');
		}else{
			$auto_tip.html('请勿在公用电脑上勾选此选项');
		}
	});
	
	var $sharelist = $('#shareMore');
	var $showShareMore = $('#showShareMore');
	$showShareMore.on('click',function(){
		$sharelist.fadeToggle();//函数调用
	});
	
	
	var $loginBtn = $('#loginBtn');
	$loginBtn.on('click',function(){
		$.post('php/register.php',function(d){
			var usernames = [];
			var emails = [];
			var tels = [];
			var passwords = [];
			JSON.parse(d).forEach(function(v){
				usernames.push(v[1]);
				emails.push(v[4]);
				passwords.push(v[2]);
				tels.push(v[3]);
			});
			var arr = [];
			var index = null;
			arr.push(usernames,emails,tels);
			arr.forEach(function(v){
				if($.inArray($username.val(),v)!=-1){
					index = $.inArray($username.val(),v);
					return false;
				}
			});
			if(index!=-1 && $pass.val()==passwords[index]){
				if($autologin.prop('checked')){
					$.cookie('username',usernames[index]);
				}
				window.location.href = 'index.html';
			}else{
				alert('不存在该用户,或用户名密码错误！');
				$pass.val('');
			}
		});
	});
	
})(jQuery);


