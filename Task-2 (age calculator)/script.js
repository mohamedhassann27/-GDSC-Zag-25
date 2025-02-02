
const dayInput=document.querySelector("#dayInput")
const monthInput=document.querySelector("#monthInput")
const yearInput=document.querySelector("#yearInput")
const arrow=document.querySelector(".arrow")
const yearsResult=document.querySelector("#yearsResult")
const monthsResult=document.querySelector("#monthsResult")
const daysResult=document.querySelector("#daysResult")
const inputElements=document.querySelectorAll("input")


const calculateAge=(year,month,day)=>{
    let today=new Date();
    let birthday=new Date(year, month-1, day)

    let ageYears=today.getFullYear() - birthday.getFullYear();
    let ageMonths=today.getMonth() - birthday.getMonth();
    let ageDays=today.getDate() - birthday.getDate();

    if(ageDays<0){
        ageMonths--;
        ageDays+= new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    };
    if(ageMonths<0){
        ageYears--;
        ageMonths+=12;
    }

    return [ageYears,ageMonths,ageDays]
}


const onClickHandler=function(){
    let emptyfield=false;
    inputElements.forEach((item)=>{
        if(item.value.trim() ===""){
            item.parentElement.classList.add("error");
            emptyfield=true;
        }else{
            item.parentElement.classList.remove("error")
            emptyfield=false;
        }
    })
    if(emptyfield) return;

    let [years,months,days]=calculateAge(yearInput.value,monthInput.value, dayInput.value)
    yearsResult.innerText=years;
    monthsResult.innerText=months;
    daysResult.innerText=days;
}

arrow.addEventListener("click", onClickHandler)

inputElements.forEach((item)=>{
    item.addEventListener("keydown",(event)=>event.key=='Enter' && onClickHandler())
})