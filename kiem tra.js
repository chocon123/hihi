let a = Number(prompt("diem toan"));
let b = Number(prompt("diem van"));
let c = Number(prompt("diem anh"));
console.log(a,b,c);
let d = (a+b+c)/3
console.log(d);
if (d<4){
    console.log("kem");
}
else if (d<6){
    console.log("trung binh");
}
else if (d<8){
    console.log("kha");
}
else if (d>=8){
    console.log("gioi");
}


let s= 0;
while(s<9){
    console.log(s++);
}

