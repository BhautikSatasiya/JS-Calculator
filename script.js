let screen=document.getElementById('screen');
// let button=document.querySelectorAll('.button');
let ok=0;

// Show value display
display=(value)=> {
    // var x=value;
    // if(x==='+'||x==='-'||x==='*'||x==='/'||x==='%'){
    //     if(ok===1){
    //         screen.value=screen.value + x;
    //         ok=0
    //     }
    
    // }else{
    //     screen.value=screen.value + x;
    //     ok=1;
    // }

    const x=value;
    const a=screen.value;
    const ss=a.substr(-1);
    // console.log(len);
    let b;
        
    if(ok==1){
        if(x=='+'||x=='-'||x=='*'||x=='/'||x=='%'||x=='.'){
            screen.value=screen.value + x;
        }
        else{
            screen.value=x;
        }
        ok=0;
    }
    else if(x=='+'||x=='-'||x=='*'||x=='/'||x=='%'||x=='.'){
        if(ss=='+'||ss=='-'||ss=='*'||ss=='/'||ss=='%'||ss=='.'){
            b=a.substr( 0 ,a.length - 1);
            screen.value=b;
            screen.value=screen.value + x;
        }
        else{
            screen.value=screen.value + x;
        }
    }
    else{
        screen.value=screen.value + x;
    }
    
};

//Clean Screen
clearDisplay=()=> {
    screen.value='';
};

// Operation
operation=()=>{
    
    if(screen.value !== ''){
        screen.value=eval(screen.value);
        ok=1;
    }

    
};

