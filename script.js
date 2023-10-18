for(let i=1;i<=200;i++){
    let answer = '';
    if(i%5===0){
        answer += 'Foo';  
    }
     if (i%7===0){
        answer += 'Bar';
    } 
     if(answer === ''){
          answer = i;   
    }  
    console.log(answer);
}