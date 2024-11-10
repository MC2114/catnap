const stratTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");
const addButton = document.getElementById("addButton")
const eventContainer = document.getElementById("eventContainer");
const dayOfweek = document.getElementById("day");


function addEvent(){
    let rowS;
    let rowE;
    let colS;
    let colE;
    let startHour = stratTime.value.substring(0,2);
    let startMinute = stratTime.value.substring(3,5);
    let endHour = endTime.value.substring(0,2);
    let endMinute = endTime.value.substring(3,5);
    console.log(startHour, startMinute)
    console.log(endHour, endMinute)
    let eventDiv = document.createElement("div");
    if(Number(endHour)===0){endHour = 24};
    startMinute = Math.round(Number(startMinute)/15);
    endMinute = Math.round(Number(endMinute)/15);
    if(Number(startHour)===0){startHour = 1; startMinute = 0};
    rowS = (Number(startHour)-1)*4+startMinute+1;
    rowE = (Number(endHour)-1)*4+endMinute+1;
    console.log(rowS, rowE);
    if(dayOfweek.value==="Sunday"){eventDiv.style.gridArea = `${rowS}/1/${rowE}/2`;}
    else if(dayOfweek.value==="Monday"){eventDiv.style.gridArea = `${rowS}/2/${rowE}/3`;}
    else if(dayOfweek.value==="Tuesday"){eventDiv.style.gridArea = `${rowS}/3/${rowE}/4`;}
    else if(dayOfweek.value==="Wednesday"){eventDiv.style.gridArea = `${rowS}/4/${rowE}/5`;}
    else if(dayOfweek.value==="Thursday"){eventDiv.style.gridArea = `${rowS}/5/${rowE}/6`;}
    else if(dayOfweek.value==="Friday"){eventDiv.style.gridArea = `${rowS}/6/${rowE}/7`;}
    else if(dayOfweek.value==="Saturday"){eventDiv.style.gridArea = `${rowS}/7/${rowE}/8`;}
    eventDiv.classList.add("event");
    eventContainer.appendChild(eventDiv);
}

addButton.addEventListener("click", addEvent)
