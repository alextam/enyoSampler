var SimpleValidator = {};
(function($){
	SimpleValidator.validateForm = function( formId, feedback, onSuccess, onError ){

		var errorFields = new Array();
		var correctFields = new Array();
		var formRequired = formId.find('[required]');
		var formSelectors = formId.find('select');
		var errorCount = 0;
 		for(var i = 0;i < formRequired.length;i++){
			switch(formRequired[i].getAttribute('required')){
				case "email":
					var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
					if(reg.test(formRequired[i].value) == false) {
						if (feedback){
							formRequired[i].setAttribute('placeholder', '* Invalid Email');
						}
						formRequired[i].value = "";
						errorFields.push(formRequired[i].id);
						errorCount++;
					} else {
						correctFields.push(formRequired[i].id);
					}
				break;
				
				case "integer":
					var reg = new RegExp("^[-]?[0-9]+[\.]?[0-9]+$");
					if (reg.test( formRequired[i].value )){
						//Do Nothing;
						correctFields.push(formRequired[i].id);
					} else {
						errorCount++;
						errorFields.push(formRequired[i].id);
						if (feedback){
							formRequired[i].setAttribute('placeholder', '* Must be number');
						}
						formRequired[i].value = "";
					}
				break;
				
				case "currency":
					var reg = new RegExp("/^\d+\.\d{2}$/"); 
					if( reg.test( formRequired[i].value ) ){
						errorCount++;
						errorFields.push(formRequired[i].id);
						if (feedback){
							formRequired[i].setAttribute('placeholder', '* Must be valid currency');
						}
						formRequired[i].value = "";
					} else if ((formRequired[i].value == "") || (formRequired[i].value == "0")) {
						errorCount++;
						errorFields.push(formRequired[i].id);
						formRequired[i].value = "";
					} else {
						correctFields.push(formRequired[i].id);
					}
						
				break;
				
				case "password":
					if (formRequired[i].value.length < 6 ){	
							if (feedback){
								formRequired[i].setAttribute('placeholder', '* Invalid Password');
							}
							formRequired[i].value = "";
							errorFields.push(formRequired[i].id);
							errorCount++;
					} else {
						correctFields.push(formRequired[i].id);
					}
				break;
				
				case "cpassword":
					if ((formRequired[i].value != $('#password').val()) || (formRequired[i].value == "")) {	
							if (feedback){
								formRequired[i].setAttribute('placeholder', "* Doesn't match password");
							}
							formRequired[i].value = "";
							errorFields.push(formRequired[i].id);
							errorCount++;
					} else {
						correctFields.push(formRequired[i].id);
					}
				break;
				
				case "username":
					var illegalChars = /\W/; // allow letters, numbers, and underscores
					var result=illegalChars.test(String(formRequired[i].value));
					if ((result) || (formRequired[i].value == "")){
						//Positive of illegal Characters
						if (feedback){
							formRequired[i].setAttribute('placeholder', '* A-Z, 0-9 & _ only');
						}
						formRequired[i].value = "";
						errorFields.push(formRequired[i].id);
						errorCount++;
					} else {
						correctFields.push(formRequired[i].id);
					}
				break;
				
				default:
						if (formRequired[i].value == ""){
							if (feedback){
								formRequired[i].setAttribute('placeholder', '* This is a required field');
							}
							formRequired[i].value = "";
							errorFields.push(formRequired[i].id);
							errorCount++;
						} else {
							correctFields.push(formRequired[i].id);
						}
				break;
			}
		}
		
		if(errorCount){
			onError.call(this,correctFields,errorFields);
			//return false;
		} else {
			onSuccess.call(this,correctFields);
		}
	};
	
	SimpleValidator.doReturnStyle = function(domObj){
		domObj.setAttribute('style','border:1px solid #ccc;');
	};
	
	SimpleValidator.highlightStyle = function(domObj){
		domObj.css({'border':'1px solid red'});
		domObj.css({'color':'red'});
	};
	
	SimpleValidator.carriageCleaner = function(domObj){
		var tempValue = String(domObj.value);
		domObj.value = tempValue.replace(/^\s+|\s+$/g,"");
	}; 
	
	SimpleValidator.maxLengthCheck = function(domObj, limit){
		domObj.setAttribute('maxLength', 150);
	};
	
	SimpleValidator.formatCurrency = function(domObj){
		var num = domObj.value;
		num = isNaN(num) || num === '' || num === null ? 0.00 : num;
    	domObj.value = parseFloat(num).toFixed(2);
	};
	
	SimpleValidator.checkStringExist = function(str,value){
		return (str.indexOf(value) >= 0);
	}
})( jQuery );
