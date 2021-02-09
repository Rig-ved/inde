let resetIcon=()=> {
    document.getElementById('pointer').classList.remove('pull-right','pull-left')
    document.getElementById('pointer').classList.add('pull-left')
    // Handle the css for the bar 
    // TODO
}




var selected= (ele)=> {
    let divs=document.getElementsByClassName("circle");
    [...divs].forEach(function(i)
    {
        i.style.backgroundColor="white";
    });
    ele.style.backgroundColor="aqua";
}

let handlePointer= (ele) =>{
    if(ele.id == 3) {
        document.getElementById('pointer').classList.remove('pull-right','pull-left')
        document.getElementById('pointer').classList.add('pull-right')
    }
        
    else if(ele.id == 1) {
        resetIcon()
    }
       
    else 
        document.getElementById('pointer').classList.remove('pull-right','pull-left')
        
    


}