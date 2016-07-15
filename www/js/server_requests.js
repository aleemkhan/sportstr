var ServerRequest = {
	
	/*

	*	Member variables 

	*/

	serverURL : '',
	requestData : '',
	errorElementID : '',





	/*

	*	Methods to handle server requrests

	*/

	request : function(){
		$.ajax({
			type: 'POST',
			url: ServerRequest.serverURL,
			data: ServerRequest.requestData,
			dataType: 'json',
			success: function(data){
				console.log(data);
				ServerRequest.executeSuccess(data);
			},
			error:function(a, b, c){
				console.log(a);
				console.log(b);
				console.log(c);
				ServerRequest.executeError(a, b, c);
			}
		});
	},

	executeSuccess: function(param){
		switch(param.STATUS){
			case 'SUCCESS':

			break;
			case 'FAIL':

			break;
			case 'ERROR':

			break;
			default:

			break;
		}
	},

	executeError: function(param1, param2, param3){

	},

	showSuccessMessage: function(str){
		return '<div class="alert alert-success">'+ str +'</div>';
	},

	showFailMessage: function(str){
		return '<div class="alert alert-warning">'+ str +'</div>';
	},

	showErrorMessage: function(str){
		return '<div class="alert alert-danger">'+ str +'</div>';
	},

	data: function(REQUEST_TYPE){
		var dataObj = {};
		switch(REQUEST_TYPE){
			case 'LOGIN':
				dataObj.REQUEST_TYPE = 'LOGIN';
				dataObj.USERNAME = '';
				dataObj.PASSWORD = '';
			break;

			case 'SIGNUP':
				dataObj.REQUEST_TYPE = 'SIGNUP';				
				dataObj.NAME = '';
				dataObj.EMAIL = '';
				dataObj.PASSWORD = '';
			break;

			case 'USERS':
				dataObj.REQUEST_TYPE = 'USERS';
				dataObj.RADIUS = '';
				dataObj.STATUS = '';
				dataObj.COUNT = '';
				dataObj.START = '';
				dataObj.TYPE = '';
			break;

			case 'PROFILE':
				dataObj.REQUEST_TYPE = 'PROFILE';
				dataObj.USERNAME = '';			
			break;

			case 'HISTORY':
				dataObj.REQUEST_TYPE = 'HISTORY';
				dataObj.USERNAME = '';
				dataObj.TYPE = '';
				dataObj.ACCESS = '';
			break;

			case 'GALLERY':
				dataObj.REQUEST_TYPE = 'GALLERY';
				dataObj.USERNAME = '';
				dataObj.ACCESS = '';
				dataObj.TYPE = '';
			break;

			case 'RATINGS':
				dataObj.REQUEST_TYPE = 'RATINGS';
				dataObj.USERNAME = '';
				dataObj.ACCESS = '';
			break;

			case 'UPDATE_LOCATION':
				dataObj.REQUEST_TYPE = 'UPDATE_LOCATION';
				dataObj.USERNAME = '';
				dataObj.LATITUDE = '';
				dataObj.LONGITUDE = '';
			break;

			case 'MESSAGE':
				dataObj.REQUEST_TYPE = 'MESSAGE';
				dataObj.TO = '';
				dataObj.FROM = '';
				dataObj.STATUS = '';
			break;

			case 'MESSAGE_BY_ID':
				dataObj.REQUEST_TYPE = 'MESSAGE_BY_ID';
				dataObj.USERNAME = '';
			break;

			case 'SEND_MESSAGE':
				dataObj.REQUEST_TYPE = 'SEND_MESSAGE';
				dataObj.TO = '';
				dataObj.FROM = '';
				dataObj.MESSAGE = '';
			break;

			case 'UPDATE_PROFILE':
				dataObj.REQUEST_TYPE = 'UPDATE_PROFILE';
				dataObj.USERNAME = '';
				dataOBj.NAME = '';
				dataObj.PASSWORD = '';
				dataObj.CONTACT = '';
			break;

			case 'UPDATE_PROFILE_PICTURE':
				dataObj.REQUEST_TYPE = 'UPDATE_PROFILE_PICTURE';
				dataObj.USERNAME = '';
				dataOBj.IMAGE = '';
			break;

			case 'RATE':
				dataObj.REQUEST_TYPE = 'RATE';
				dataObj.TO = '';
				dataObj.FROM = '';
				dataObj.RATING = '';
				dataObj.COMMENT = '';
			break;

			case 'HIDE_RATING':
				dataObj.REQUEST_TYPE = 'HIDE_RATING';
				dataObj.USERNAME = '';
				dataObj.RATIING_ID = '';
				dataObj.STATUS = '';
			break;

			case 'GOAL':
				dataObj.REQUEST_TYPE = 'GOAL';
				dataObj.USERNAME = '';
				dataObj.STATUS = '';
			break;

			case 'SET_GOAL':
				dataObj.REQUEST_TYPE = 'SET_GOAL';
				dataObj.USERNAME = '';
				dataObj.GOAL_TITLE = '';
				dataObj.CURRENT = '';
				dataObj.TARGET = '';
				dataObj.DURATION = '';
			break;

			case 'DELETE_PROFILE':
				dataObj.REQUEST_TYPE = 'DELETE_PROFILE';
				dataObj.USERNAME = '';
			break;
		}
		return dataObj;
	},





	/*

	*	Callback Methods

	*/


	CALLBACK_LOGIN: function(){

	},

	CALLBACK_SIGNUP: function(){

	},

	CALLBACK_USERS: function(){

	},

	CALLBACK_PROFILE: function(){

	},

	CALLBACK_HISTORY: function(){

	},

	CALLBACK_GALLERY: function(){

	},

	CALLBACK_RATINGS: function(){

	},

	CALLBACK_UPDATE_LOCATION: function(){

	},

	CALLBACK_MESSAGE: function(){

	},

	CALLBACK_MESSAGE_BY_ID: function(){

	},

	CALLBACK_SEND_MESSAGE: function(){

	},

	CALLBACK_UPDATE_PROFILE: function(){

	},

	CALLBACK_UPDATE_PROFILE_PICTURE: function(){

	},

	CALLBACK_RATE: function(){

	},

	CALLBACK_HIDE_RATING: function(){

	},

	CALLBACK_SET_GOAL: function(){

	},

	CALLBACK_DELETE_PROFILE: function(){

	}


};

ServerRequest.serverURL = 'http://sabcapp.com/sabcapp/server.php';
ServerRequest.requestData = ServerRequest.data('LOGIN');
ServerRequest.request();
console.log(ServerRequest.data('SIGNUP'));







