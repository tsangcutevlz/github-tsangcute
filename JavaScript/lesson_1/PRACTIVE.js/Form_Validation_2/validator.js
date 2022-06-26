function validator(formSelector){
    function getParent(element, selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var formRules = {};
    var validatorRules = {
        required: function(value){
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: function(value){
           var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập email';
        },
        min: function(min){
            return function(value){
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự `;
            }
        },
        max: function(max){
            return function(value){
                return value.length <= min ? undefined : `Vui lòng nhập tối đa ${max} ký tự `;
            }
        }
    }


    // 
    var formElement = document.querySelector(formSelector);
    // 
    if(formElement){
        var inputs = formElement.querySelectorAll('[name][rules]');
        // console.log(inputs);
        for(var input of inputs){
            
            var rules = input.getAttribute('rules').split('|');
            // console.log(rules);
            
            for(var rule of rules){

                var ruleInfo;
                var isRuleHasValue = rule.includes(':');

                if(isRuleHasValue){
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }
            
                var ruleFunc = validatorRules[rule];

                if(isRuleHasValue){
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }

                if(Array.isArray(formRules[input.name])){
                    formRules[input.name].push(ruleFunc)
                } else {
                    formRules[input.name] = [ruleFunc]; 
                    // console.log(formRules);
                }
            }
            // Lắng nghe sự kiện để validate
            input.onblur = handleValidate;
            input.oninput = handleClearError;

        }

        function handleValidate(event){
            var rules = formRules[event.target.name];
            var errorMessage;

            for(var rule of rules){
                errorMessage = rule(event.target.value);
                if(errorMessage){break;}
            }

            

            if(errorMessage){
                var formGroup = getParent(event.target, '.form-group');
                if(formGroup){
                    formGroup.classList.add('invalid')
                    var formMessage = formGroup.querySelector('.form-message');
                    if(formMessage){
                        formMessage.innerText = errorMessage;
                    }
                }
            }
        }

        function handleClearError(event){
            var formGroup = getParent(event.target, '.form-group');
            if(formGroup.classList.contains('invalid')){
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message');
                if(formMessage){
                    formMessage.innerText = '';
                }
            }
        }


        // ban đầu formRules sẽ lấy từng phần tử rule đã được cắt ra bởi rules lấy từ split để đưa vào vòng for. Sau đó check xem rule có dấu ':' thể hiện mix, max đã quy ước hay không nế có thì đưa nó về mảng rồi lấy phần tử đầu của mảng ( lấy min, max ) sau đó đưa vào hàm if kiểm tra xem formRules rỗng ban đầu phải array hay không, nếu có thì push validatorRules[rule] vào, lưu ý ban đầu formRules được khởi tạo là giá trị rỗng nên hàm else quy định lần lập ban đầu của nó thực hiện đưa validatorRule[rule] đầu tiên vào mảng formRules.   ( lưu ý: rules lấy từ mỗi input trong inputs được split ra )
        console.log(formRules);

    }
}