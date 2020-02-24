let money=parseInt(prompt('Nhap vao thu nhap thuc te (trieu VND)'));
let minus=parseInt(prompt('Nhap vao cac khoan thu nhạp khong chiu thue/mien thue/khoan giam tru'));

let income_tax=money-minus;
let tax_money=null;

if(income_tax<=5){
    tax_money=income_tax*5/100;
}else if(income_tax<=10){
    tax_money=(income_tax*10/100)-0.25;
}else if(income_tax<=18){
    tax_money=(income_tax*15/100)-0.75;
}else if(income_tax<=32){
    tax_money=(income_tax*20/100)-1.65;
}else if(income_tax<=52){
    tax_money=(income_tax*25/100)-3.25;;
}else if(income_tax<=80){
    tax_money=(income_tax*30/100)-5.85;;
}else {
    tax_money=(income_tax*35/100)-9.85;;
}

alert('Tien thue phai tra la '+ tax_money);