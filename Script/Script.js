let range=document.getElementById("customRange1");
let Range_number=document.getElementById("Range_number");
let photo=document.getElementById("photo");
let image=document.getElementById("image");
let download = document.getElementById('download');

range.oninput=(()=>{
    let value=range.value;
    Range_number.innerHTML=`${value}%`;
    photo.style.borderRadius =`${value}%`;

});

let range2=document.getElementById("customRange2");
let Range_number2=document.getElementById("Range_number2");
range2.oninput=(()=>{
    let value=range2.value;
    Range_number2.innerHTML=`${value}px`;
    photo.style.border=`${value}px solid black`;
});


let range3=document.getElementById("customRange3");
let Range_number3=document.getElementById("Range_number3");
range3.oninput=(()=>{
    let value=range3.value;
    Range_number3.innerHTML=`${value}px`;
    photo.style.filter=`blur(${value}px)`;
   
});

let range4=document.getElementById("customRange4");
let Range_number4=document.getElementById("Range_number4");
range4.oninput=(()=>{
    let value=range4.value;
    Range_number4.innerHTML=`${value}`;
    photo.style.opacity=`${value}`;
    
});

let range5=document.getElementById("customRange5");
let Range_number5=document.getElementById("Range_number5");
range5.oninput=(()=>{
    let value=range5.value;
    Range_number5.innerHTML=`${value}`;
    photo.style.filter=`brightness(${value})`;
    
});


let range6=document.getElementById("customRange6");
let Range_number6=document.getElementById("Range_number6");
range6.oninput=(()=>{
    let value=range6.value;
    Range_number6.innerHTML=`${value}`;
    photo.style.filter=`contrast(${value})`;
    
});



let range7=document.getElementById("customRange7");
let Range_number7=document.getElementById("Range_number7");
range7.oninput=(()=>{
    let value=range7.value;
    Range_number7.innerHTML=`${value}`;
    photo.style.filter=`saturate(${value})`;
    
});

// upload a photo
let file=document.getElementById("input-file");
file.onchange=(()=>{
    let input_photo=document.getElementById("photo");
    input_photo.src=URL.createObjectURL(file.files[0]);
});


// Download image 

download.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = canvas.toDataURL();
    link.click();
  });
  