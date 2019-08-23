const waitThreeSeconds = ()=>{
    var ms = 3000+new Date().getTime();
    while(new Date()< ms){}
    console.log('finished function');
};

const clickHandler = ()=>{
    console.log('Click Event!')
}

//listen for the click event
//  document.addEventListener('click',clickHandler);

waitThreeSeconds();
console.log('finished execution');



var isNew = true;
isNew = 1;
isNew = 'yup!';
console.log(isNew);