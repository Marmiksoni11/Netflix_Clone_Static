// let btn1 = document.querySelector('.w_is_netflix>#btn1');
        // let btn2 = document.querySelector('.w_is_netflix>#btn2');
        // let btn3 = document.querySelector('.w_is_netflix>#btn3');
        // let btn4 = document.querySelector('.w_is_netflix>#btn4');
        // let btn5 = document.querySelector('.w_is_netflix>#btn5');
        // let btn6 = document.querySelector('.w_is_netflix>#btn6');
 // function toggleHide2(){
        //     let btn2 = document.querySelector('.w_is_netflix>#btn2');
        //     let drp2 = document.querySelector('.w_is_netflix>#dropdown2');
        //     if(drp2.style.display != 'none'){
        //         drp2.style.display = 'none';
        //     }
        //     else{
        //         drp2.style.display = 'block';
        //     }
        // }
        // function toggleHide3(){
        //     let btn3 = document.querySelector('.w_is_netflix>#btn3');
        //     let drp3 = document.querySelector('.w_is_netflix>#dropdown3');
        //     if(drp3.style.display != 'none'){
        //         drp3.style.display = 'none';
        //     }
        //     else{
        //         drp3.style.display = 'block';
        //     }
        // }
        // function toggleHide4(){
        //     let btn4 = document.querySelector('.w_is_netflix>#btn4');
        //     let drp4 = document.querySelector('.w_is_netflix>#dropdown4');
        //     if(drp4.style.display != 'none'){
        //         drp4.style.display = 'none';
        //     }
        //     else{
        //         drp4.style.display = 'block';
        //     }
        // }
        // function toggleHide5(){
        //     let btn5 = document.querySelector('.w_is_netflix>#btn5');
        //     let drp5 = document.querySelector('.w_is_netflix>#dropdown5');
        //     if(drp5.style.display != 'none'){
        //         drp5.style.display = 'none';
        //     }
        //     else{
        //         drp5.style.display = 'block';
        //     }
        // }
        // function toggleHide6(){
        //     let btn6 = document.querySelector('.w_is_netflix>#btn6');
        //     let drp6 = document.querySelector('.w_is_netflix>#dropdown6');
        //     if(drp6.style.display != 'none'){
        //         drp6.style.display = 'none';
        //     }
        //     else{
        //         drp6.style.display = 'block';
        //     }
        // }

        // let drp1 = document.querySelector('.w_is_netflix>#dropdown1');
        // let drp2 = document.querySelector('.w_is_netflix>#dropdown2');
        // let drp3 = document.querySelector('.w_is_netflix>#dropdown3');
        // let drp4 = document.querySelector('.w_is_netflix>#dropdown4');
        // let drp5 = document.querySelector('.w_is_netflix>#dropdown5');
        // let drp6 = document.querySelector('.w_is_netflix>#dropdown6');

        // if(toggleHide1()){
        //     drp2.style.display = 'none';
        //     drp3.style.display = 'none';
        //     drp4.style.display = 'none';
        //     drp5.style.display = 'none';
        //     drp6.style.display = 'none';
        // }
        // else if(toggleHide2()){
        //     drp1.style.display = 'none';
        //     drp3.style.display = 'none';
        //     drp4.style.display = 'none';
        //     drp5.style.display = 'none';
        //     drp6.style.display = 'none';
        // }
        // else if(toggleHide3()){
        //     drp1.style.display = 'none';
        //     drp2.style.display = 'none';
        //     drp4.style.display = 'none';
        //     drp5.style.display = 'none';
        //     drp6.style.display = 'none';
        // }
        // else if(toggleHide4()){
        //     drp1.style.display = 'none';
        //     drp2.style.display = 'none';
        //     drp3.style.display = 'none';
        //     drp5.style.display = 'none';
        //     drp6.style.display = 'none';
        // }
        // else if(toggleHide5()){
        //     drp1.style.display = 'none';
        //     drp2.style.display = 'none';
        //     drp3.style.display = 'none';
        //     drp4.style.display = 'none';
        //     drp6.style.display = 'none';
        // }
        // else{
        //     drp1.style.display = 'none';
        //     drp2.style.display = 'none';
        //     drp3.style.display = 'none';
        //     drp4.style.display = 'none';
        //     drp5.style.display = 'none';
        // }
        // else if(toggleHide2()){
        //     toggleHide1()=false;
        //     toggleHide3()=false;
        //     toggleHide4()=false;
        //     toggleHide5()=false;
        //     toggleHide6()=false;
        // }
        // else if(toggleHide3()){
        //     toggleHide1()=false;
        //     toggleHide2()=false;
        //     toggleHide4()=false;
        //     toggleHide5()=false;
        //     toggleHide6()=false;
        // }
        // else if(toggleHide4()){
        //     toggleHide1()=false;
        //     toggleHide2()=false;
        //     toggleHide3()=false;
        //     toggleHide5()=false;
        //     toggleHide6()=false;
        // }
        // else if(toggleHide5()){
        //     toggleHide1()=false;
        //     toggleHide2()=false;
        //     toggleHide3()=false;
        //     toggleHide4()=false;
        //     toggleHide6()=false;
        // }
        // else{
        //     toggleHide1()=false;
        //     toggleHide2()=false;
        //     toggleHide3()=false;
        //     toggleHide4()=false;
        //     toggleHide5()=false;
        // }


// FAQ DROPDOWN   

function toggleHide1(){

    let drp2 = document.querySelector('.w_is_netflix>#dropdown2');
    let drp3 = document.querySelector('.w_is_netflix>#dropdown3');
    let drp4 = document.querySelector('.w_is_netflix>#dropdown4');
    let drp5 = document.querySelector('.w_is_netflix>#dropdown5');
    let drp6 = document.querySelector('.w_is_netflix>#dropdown6');

    let btn1 = document.querySelector('.w_is_netflix>#btn1');
    let drp1 = document.querySelector('.w_is_netflix>#dropdown1');
    let svg1 = document.querySelector('.w_is_netflix>#btn1>.svg1'); 
    
    if(drp1.style.display != 'none'){
        drp1.style.display = 'none';
        svg1.style.transform ="rotate(0deg)"
        // drp1.style.transition = "all 3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s"
        btn1.style.marginBottom = "0.6rem";

        drp2.style.display = 'none';
        drp3.style.display = 'none';
        drp4.style.display = 'none';
        drp5.style.display = 'none';
        drp6.style.display = 'none';
    }
    else{
        drp1.style.display = 'block';
        svg1.style.transform ="rotate(45deg)";
        btn1.style.marginBottom = "0.09rem";
        // drp1.style.transition = "all 3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s"
        drp2.style.display = 'none';
        drp3.style.display = 'none';
        drp4.style.display = 'none';
        drp5.style.display = 'none';
        drp6.style.display = 'none';
    }
}

function toggleHide2(){
    let drp1 = document.querySelector('.w_is_netflix>#dropdown1');
    let drp3 = document.querySelector('.w_is_netflix>#dropdown3');
    let drp4 = document.querySelector('.w_is_netflix>#dropdown4');
    let drp5 = document.querySelector('.w_is_netflix>#dropdown5');
    let drp6 = document.querySelector('.w_is_netflix>#dropdown6');

    let svg2 = document.querySelector('.w_is_netflix>#btn2>.svg2'); 
    let btn2 = document.querySelector('.w_is_netflix>#btn2');
    let drp2 = document.querySelector('.w_is_netflix>#dropdown2');

    if(drp2.style.display != 'none'){
        drp2.style.display = 'none';
        svg2.style.transform ="rotate(0deg)"
        btn2.style.marginBottom = "0.6rem";
        drp1.style.display = 'none';
        drp3.style.display = 'none';
        drp4.style.display = 'none';
        drp5.style.display = 'none';
        drp6.style.display = 'none';
    }
    else{
        drp2.style.display = 'block';
        svg2.style.transform ="rotate(45deg)"
        btn2.style.marginBottom = "0.09rem";
        drp1.style.display = 'none';
        drp3.style.display = 'none';
        drp4.style.display = 'none';
        drp5.style.display = 'none';
        drp6.style.display = 'none';
    }
}

function toggleHide3(){
    let drp1 = document.querySelector('.w_is_netflix>#dropdown1');
    let drp2 = document.querySelector('.w_is_netflix>#dropdown2');
    let drp4 = document.querySelector('.w_is_netflix>#dropdown4');
    let drp5 = document.querySelector('.w_is_netflix>#dropdown5');
    let drp6 = document.querySelector('.w_is_netflix>#dropdown6');

    let svg3 = document.querySelector('.w_is_netflix>#btn3>.svg3'); 
    let btn3 = document.querySelector('.w_is_netflix>#btn3');
    let drp3 = document.querySelector('.w_is_netflix>#dropdown3');
    if(drp3.style.display != 'none'){
        drp3.style.display = 'none';
        svg3.style.transform ="rotate(0deg)"
        btn3.style.marginBottom = "0.6rem";
        drp1.style.display = 'none';
        drp2.style.display = 'none';
        drp4.style.display = 'none';
        drp5.style.display = 'none';
        drp6.style.display = 'none';
    }
    else{
        drp3.style.display = 'block';
        svg3.style.transform ="rotate(45deg)"
        btn3.style.marginBottom = "0.09rem";
        drp1.style.display = 'none';
        drp2.style.display = 'none';
        drp4.style.display = 'none';
        drp5.style.display = 'none';
        drp6.style.display = 'none';
    }
}

function toggleHide4(){
    let drp1 = document.querySelector('.w_is_netflix>#dropdown1');
    let drp2 = document.querySelector('.w_is_netflix>#dropdown2');
    let drp3 = document.querySelector('.w_is_netflix>#dropdown3');
    let drp5 = document.querySelector('.w_is_netflix>#dropdown5');
    let drp6 = document.querySelector('.w_is_netflix>#dropdown6');

    let svg4 = document.querySelector('.w_is_netflix>#btn4>.svg4'); 
    let btn4 = document.querySelector('.w_is_netflix>#btn4');
    let drp4 = document.querySelector('.w_is_netflix>#dropdown4');
    if(drp4.style.display != 'none'){
        drp4.style.display = 'none';
        svg4.style.transform ="rotate(0deg)"
        btn4.style.marginBottom = "0.6rem";
        drp1.style.display = 'none';
        drp2.style.display = 'none';
        drp3.style.display = 'none';
        drp5.style.display = 'none';
        drp6.style.display = 'none';
    }
    else{
        drp4.style.display = 'block';
        svg4.style.transform ="rotate(45deg)"
        btn4.style.marginBottom = "0.09rem";
        drp1.style.display = 'none';
        drp2.style.display = 'none';
        drp3.style.display = 'none';
        drp5.style.display = 'none';
        drp6.style.display = 'none';
    }
}

function toggleHide5(){
    let drp1 = document.querySelector('.w_is_netflix>#dropdown1');
    let drp2 = document.querySelector('.w_is_netflix>#dropdown2');
    let drp3 = document.querySelector('.w_is_netflix>#dropdown3');
    let drp4 = document.querySelector('.w_is_netflix>#dropdown4');
    let drp6 = document.querySelector('.w_is_netflix>#dropdown6');

    let svg5 = document.querySelector('.w_is_netflix>#btn5>.svg5'); 
    let btn5 = document.querySelector('.w_is_netflix>#btn5');
    let drp5 = document.querySelector('.w_is_netflix>#dropdown5');
    if(drp5.style.display != 'none'){
        drp5.style.display = 'none';
        svg5.style.transform ="rotate(0deg)"
        btn5.style.marginBottom = "0.6rem";
        drp1.style.display = 'none';
        drp2.style.display = 'none';
        drp3.style.display = 'none';
        drp4.style.display = 'none';
        drp6.style.display = 'none';
    }
    else{
        drp5.style.display = 'block';
        svg5.style.transform ="rotate(45deg)"
        btn5.style.marginBottom = "0.09rem";
        drp1.style.display = 'none';
        drp2.style.display = 'none';
        drp3.style.display = 'none';
        drp4.style.display = 'none';
        drp6.style.display = 'none';
    }
}

function toggleHide6(){
    let drp1 = document.querySelector('.w_is_netflix>#dropdown1');
    let drp2 = document.querySelector('.w_is_netflix>#dropdown2');
    let drp3 = document.querySelector('.w_is_netflix>#dropdown3');
    let drp4 = document.querySelector('.w_is_netflix>#dropdown4');
    let drp5 = document.querySelector('.w_is_netflix>#dropdown5');

    let svg6 = document.querySelector('.w_is_netflix>#btn6>.svg6'); 
    let btn6 = document.querySelector('.w_is_netflix>#btn6');
    let drp6 = document.querySelector('.w_is_netflix>#dropdown6');
    if(drp6.style.display != 'none'){
        drp6.style.display = 'none';
        svg6.style.transform ="rotate(0deg)"
        btn6.style.marginBottom = "3rem";
        drp1.style.display = 'none';
        drp2.style.display = 'none';
        drp3.style.display = 'none';
        drp4.style.display = 'none';
        drp5.style.display = 'none';
    }
    else{
        drp6.style.display = 'block';
        svg6.style.transform ="rotate(45deg)"
        btn6.style.marginBottom = "0.09rem";
        drp6.style.marginBottom = "3rem";
        drp1.style.display = 'none';
        drp2.style.display = 'none';
        drp3.style.display = 'none';
        drp4.style.display = 'none';
        drp5.style.display = 'none';
    }
}

// below code is for contact form validation

function validate() {
    let name = document.forms["myform"]["fname"].value;
    let email = document.forms["myform"]["femail"].value;
    let query = document.forms["myform"]["fquery"].value;
    let number = document.forms["myform"]["fnumber"].value;

    if(name=="" || name==" " || name=="  "){
        alert(" All details (Name) must be filled out ! ");
        return false;
    }
    else if(email=="" || email==" " || email=="  "){
        alert(" All details (Email) must be filled out ! ");
        return false;
    }
    else if(query=="" || query==" " || query=="  "){
        alert("All details (Query) must be filled out ! ");
        return false;
    }
    else if(number=="" || number==" " || number=="  "){
        alert("All details (Number) must be filled out ! ");
        return false;
    }
    else{
        return true;
    }
}

