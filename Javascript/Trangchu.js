var arr_hinh=[
    "ảnh/ảnh 0.jpg",
    "ảnh/ảnh 1.jpg",
    "ảnh/ảnh 2.jpg",
    "ảnh/ảnh 3.jpg",
]
var index =0;
function next(){
    index++;
    if(index>=arr_hinh.length) index = 0;
    let photo=document.getElementById("hinh");
    hinh.src=arr_hinh[index];
}
function pre(){
    index--;
    if(index<0) index=arr_hinh.length-1;
    document.getElementById("hinh");
    hinh.src=arr_hinh[index];
}

