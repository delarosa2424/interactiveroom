const sechand = document.querySelector("[data-second]")
const minutehand = document.querySelector("[data-minutes]")
const hourhand = document.querySelector("[data-hours]")

function setclock(){
    console.log("Test")
    const currentDate = new Date()
    const seconds = currentDate.getSeconds() / 60
    const minutes = (currentDate.getMinutes() + seconds) / 60
    const hours = currentDate.getHours() / 60

    console.log(seconds)
    setrotation(sechand, seconds)
    setrotation(minutehand, minutes)
    setrotation(hourhand, hours)

}
function setrotation(hand, rotation){
    hand.style.setProperty('--rotation', rotation * 360) 

}

setInterval(setclock, 1000)
setclock()