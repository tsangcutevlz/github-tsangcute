var date = 2;

switch(date){
    case 2:
        console.log('Hom nay la thu 2');
        break;
    case 3:
        console.log('Hom nay la thu 3');
        break;
    case 4:
        console.log('Hom nay la thu 4');
        break;
    case 5:
        console.log('Hom nay la thu 5');
        break;
    case 6:
        console.log('Hom nay la thu 6');
        break;
    case 7:
        console.log('Hom nay la thu 7');
        break;
}

switch(date){
    case 2:
    case 3:
    case 4:
        console.log('Hom nay la thu 2, 3, 4');
        break;
    case 5:
        console.log('Hom nay la thu 5');
        break;
    case 6:
        console.log('Hom nay la thu 6');
        break;
    case 7:
        console.log('Hom nay la thu 7');
        break;
    default: 
        console.log('khong biet');
}