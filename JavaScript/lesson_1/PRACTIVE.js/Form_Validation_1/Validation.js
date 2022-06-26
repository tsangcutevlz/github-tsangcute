

// Đối tượng validator
function Validator(options) {

    function getParent(element, selector) {
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    //  Hàm thực hiện validate
    function validate(inputElement, rule){
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        // var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;
        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector]; 
        // Lặp qua từng rules và kiểm tra 
        for( var i = 0; i< rules.length; i++){
            switch(inputElement.type){
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if(errorMessage){break;}

        }

        if(errorMessage){
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');

        }

        return !errorMessage;
    }

// 
    var formElement = document.querySelector(options.form);
    if(formElement){

        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;
            // Lập qua từng rules và validate
            options.rules.forEach(function (rule){
                var inputElements = formElement.querySelector(rule.selector);
                var isValid = validate(inputElements, rule);
                if(!isValid){
                    isFormValid = false;
                }
            });
            if(isFormValid){
                // Trường hợp submit với js
                if(typeof options.onSubmit === 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function(values, input){
                        // values[input.name] = input.value;
                        
                        switch(input.type){
                            case 'radio':
                                if(input.matches(':checked')){
                                    values[input.name] = input.value;
                                }
                                break;
                            case 'checkbox':
                                if(input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                }
                                if(!Array.isArray(value[input.name])){
                                    values[input.name] = [];
                                } 
                                values[input.name].push();
                                break;
                            case 'file':
                                values[input.name] = input.files;
                            break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});
                    options.onSubmit(formValues);
                }
                // Trường hợp submit với hành vi mặc định 
                else { 
                    formElement.submit();
                }
            }
        }

        // Xử lí lập qua mõi rules và xử lý ( lắng nghe, blur, input )
        options.rules.forEach(function (rule){

            // Lưu lại các rules cho mỗi input

            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);
            // var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);

            Array.from(inputElements).forEach(function(inputElement){
                if(inputElement){
                    // Xử lý trường hợp blur khỏi input
                    inputElement.onblur = function(){
                        // rule.test();
                        validate(inputElement, rule);
                    }
                    inputElement.oninput = function(){
                        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                        errorElement.innerText = '';
                        getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                    }
                }
            });  

        });

    }
    
}

//


// Định nghĩa các rules
// Nguyên tắc của rules:
// 1. Khi có lỗi trả ra message  lỗi
// 2. Khi không có lỗi không trả ra gì cả
// 3. 
Validator.isRequired = function(selector, textValue){
    return {
        selector: selector,
        test: function(value){
            return value ? undefined : textValue || 'Vui lòng nhập trường này';
        }
    }
}

Validator.isEmail = function(selector, textValue){
    return {
        selector: selector,
        test: function(value){
           var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
           return regex.test(value) ? undefined : textValue || 'Trường này phải là email';
        }
    } 
}

Validator.minLength = function(selector, min, textValue){
    return {
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined : textValue || `Vui lòng nhập tối thiểu ${min} kí tự`
        }
    } 
}

Validator.isConfirmed = function(selector, getConfirmValue, textValue){
    return {
        selector: selector,
        test: function(value){
            return  value === getConfirmValue() ? undefined : textValue || 'Giá trị nhập vào không chính xác';
        }
    }
}