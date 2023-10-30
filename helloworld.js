


let x = 0;

function recurse(){

    console.log(x);
    x+=1

    if(x >10){
        return;
    }


    recurse();
    



}

recurse();