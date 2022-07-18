{
    let toggleTitle = false
    const inputTitle = document.querySelector('#title-input')
    const titleBtn = document.querySelector('#title-btn').addEventListener('click',()=>{
        if(!toggleTitle){
            inputTitle.style.display = "none"  
            toggleTitle = true
        }else{
            inputTitle.style.display = 'grid'    
            toggleTitle = false
        }
            
        
    })
}
