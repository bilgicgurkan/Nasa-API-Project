const btn = document.querySelector("#dateBtn");
const todayBtn = document.querySelector("#today-btn");
const startDate = document.querySelector("#firstDate");
const endDate = document.querySelector("#secondDate");
const nasa = new Nasa(startDate, endDate);
const ui = new UI();

btn.addEventListener("click", function () {
    nasa.getNasaSelectedData()
        .then(result => {
            ui.showNasaSelectedData(result)
        })
        .catch(err => console.log(err))
})

todayBtn.addEventListener("click", function () {
    nasa.getNasaTodayData()
        .then(result => {
            ui.showNasaTodayData(result)
        })
        .catch(err => console.log(err))
})
