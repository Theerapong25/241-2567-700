function submitData(){
    let firstNameDOM = document.querySelector('input[name=firstname]')
    let lastNameDOM = document.querySelector('input[name=lastname]')
    let ageDOM = document.querySelector('input[name=age]')
    let genderDOM = document.querySelector('input[name=gender]:checked')
    let interestsDOMs = document.querySelectorAll('input[name=interest]:checked')
    let descriptionDOM = document.querySelector('textarea[name=description]')
    
    let interests='';
    for(let i=0; i < interestsDOMs.length;i++){
        interests +=interestsDOMs[i].value
        if(i != interestsDOMs.length-1){
            interests+=',';
        }
    }


    let userData={
        firstName: firstNameDOM.value,
        lastName: lastNameDOM.value,
        age: ageDOM.value,
        gender: genderDOM.value,
        descriptionDOM: descriptionDOM.value,
        interest : interests
    }
    console.log("submitData",userData);
}