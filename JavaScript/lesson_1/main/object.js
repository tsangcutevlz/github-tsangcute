var emailKey = 'email'; 

var myInfo = {
    name: 'Tan Sang',
    age: 18,
    address: 'TPHCM, VN',
    [emailKey]: 'nguyentansangxd@gmail.com',
    getName: function(){
        return this.name;
    }
};

var myKey = 'address';

myInfo.email = 'nguyentansangxd@gmail.com';
// myInfo['my-email'] = 'nguyentansangxd@gmail.com';

console.log(myInfo.name);
console.log(myInfo.haha); // trả về Undefined
console.log(myInfo['email']);

console.log(myInfo.myKey); // Undefined
console.log(myInfo[myKey]); // TPHCM, VN

delete myInfo.age; // xoa age

//-------------------------------------------------------------------------------
// OBJECT CONSTRUCTOR


// var User = function(firstName, lastName, avatar){}
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Nguyen', 'Sang', 'avatar');
var user = new User('Nguyen', 'Tan', 'avatar');

author.title = 'Chia se dao tai F8';
user.comment = 'Lieu co khoa asp.net k ad';


// OBJECT PROTOTYPE: nguyên mẫu của đối tượng 
//prototype: giúp thêm thuộc tính bên ngoài hàm tạo ( constructor )
User.prototype.className = 'F8';
User.prototype.getClassName = function(){
    return this.className;
}
console.log(user2.getClassName());

// =================================================================================
// DATE OBJECT
//  tài liệu: javascript date object mozilla
var date = new Date();

console.log(typeof date); // type: string
console.log(typeof date.getFullYear()) // type: number

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();


// =================================================================================
// MATH OBJECT

// Math.PI: đưa ra số PI
// Math.round(): làm tròn số
// Math.abs(): lấy giá trị tuyệt đối (abs: absolute)
// Math.ceil(): chỉ làm tròn trên (4.00000001 -> 5)
// Math.floor(): chỉ làm tròn dưới (4.999999 -> 4)
// Math.random(): 
// Math.min(): 
// Math.max(): 

console.log(Math.PI);
console.log(Math.floor(Math.random() * 5));

var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];

console.log(bonus[random]);

if(random < 5 ) {
    console.log('Cuong hoa thanh cong');
}

console.log(Math.min(-100, 1, 90, 50, 40));