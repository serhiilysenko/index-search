let b =[];
function a (str, word) {
   
    let array = str.split('');   
    let size = word.length;
    let subarray = []; 
        for (let i = 0; i <Math.ceil(array.length/size); i++){
            subarray[i] = array.slice((i*size), (i*size) + size);
        }
    
    let searchValue = word.split('');
   
    searchValue.forEach(function(item) {
   		  for(let i=0; i < subarray.length; i++) {
      	    let j = subarray[i].indexOf(item);
            if (j>=0) {
                b.push([i,j])
            }  
       } 
     })
   
   
}

    a('sdfgskdfgsjkdgf', 'skj');
    
    console.log(b)
