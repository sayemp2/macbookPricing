function getButton(button,choise) {
    let buttonInput = document.getElementById(button);
    let memory = document.getElementById('Memory-cost');
    let storage = document.getElementById('storage-cost');
    let delivery = document.getElementById('delivery-cost');

    if(choise == 8){
        memory.innerText = 0;
    }
    else if (choise == 16){
        memory.innerText = 180;
    }
    else if(choise == 256){
        storage.innerText = 0;
    }
    else if( choise == 512){
        storage.innerText = 100;
    }
    else if( choise == 1024){
        storage.innerText = 180;
    }
    else if( choise == 0){
        delivery.innerText = 0;
    }
    else if(choise == 1){
        delivery.innerText = 20;
    }
}
document.getElementById('memory-btn1').addEventListener('click',function(){
    getButton('memory-btn1' ,8);
    inTotal();
})
document.getElementById('memory-btn2').addEventListener('click',function(){
    getButton('memory-btn2', 16);
    inTotal();
})
document.getElementById('storage-btn1').addEventListener('click',function(){
    getButton('storage-btn1', 256);
    inTotal();
})
document.getElementById('storage-btn2').addEventListener('click',function(){
    getButton('storage-btn2', 512);
    inTotal();
})
document.getElementById('storage-btn3').addEventListener('click', function(){
    getButton('storage-btn3', 1024);
    inTotal();
  
})
document.getElementById('delivery-btn1').addEventListener('click',function(){
    getButton('delivery-btn1', 0);
    inTotal();
})
document.getElementById('delivery-btn2').addEventListener('click',function(){
    getButton('delivery-btn2', 1);
    inTotal();
})


function inTotal (){
    let basePrice = document.getElementById('base-cost').innerText;
    let memoryPrice = document.getElementById('Memory-cost').innerText;
    let storagePrice = document.getElementById('storage-cost').innerText;
    let deliveryPrice = document.getElementById('delivery-cost').innerText;
    let tottalPrice = parseFloat(basePrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
    let tottalCost = document.getElementById('total-cost');
    tottalCost.innerText = tottalPrice;
}

document.getElementById('discount-btn').addEventListener('click',function(){
    const code = "stibkaku";
    const promoField = document.getElementById('discount_field');
    let promrCode = promoField.value;
    if (promrCode.toLowerCase() == code.toLowerCase()){
        let beforDiscount = document.getElementById('total-cost').innerText;
        let discount =document.getElementById('total-cost').innerText* .20;
        let tottalPrice = beforDiscount - discount;
        document.getElementById('overAllPrice').innerText = tottalPrice;
    }
    promoField.innerText ='';
});