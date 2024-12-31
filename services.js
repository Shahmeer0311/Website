



setInterval(showtime, 1000)
function showtime() {
    let time = new Date()
    let hour = time.getHours()
    let mins = time.getMinutes()
    let sec = time.getSeconds()
    var session = "AM"
    if (hour >= 12) {
        if (hour > 12) hour -= 12
        session = "PM"
    }
    else if (hour == 0) {
        hr = 12
        session = "AM"
    }
    hour = hour < 10 ? "0" + hour : hour
    mins = mins < 10 ? "0" + mins : mins
    sec = sec < 10 ? "0" + sec : sec
    let currentTime = hour + ":" + mins + ":" + sec + session
    document.getElementById("clock").innerHTML = currentTime
}
showtimes()
showtime()
