
showtimes()

setInterval(showtimes, 1000)
function showtimes() {
    let times = new Date()
    let dates = times.getDate()
    let month = times.getMonth() + 1
    let year = times.getYear()

    dates = dates < 10 ? "0" + dates : dates
    month = month < 10 ? "0" + month : month
    year = year < 10 ? "0" + year : year
    let currentTimes = dates + "/" + month + "/" + (year - 100 + 2000)
    document.getElementById("Month").innerHTML = currentTimes
}



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


var index = 0
function carousel() {
    var i
    var x = document.getElementsByClassName("mySlides")
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"

    }
    index++
    if (index > x.length) {
        index = 1

    }
    x[index - 1].style.display = "block"
    setTimeout(carousel, 2000)
}
carousel()

