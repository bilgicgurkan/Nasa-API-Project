class Nasa {
    constructor(startDate, endDate) {
        this.apiKey = "6Mro21CEDyTJUWKWLjDc30GysrH812bU5WNtIjVU"
        this.url = "https://api.nasa.gov/planetary/apod?api_key="
        this.startDate = startDate
        this.endDate = endDate
    }
    getNasaSelectedData() {
        return new Promise((resolve, reject) => {
            fetch(this.url + this.apiKey + "&start_date=" + this.startDate.value + "&end_date=" + this.endDate.value)
                .then(response => response.json())
                .then(data => {
                    if (this.startDate.value == "" || this.endDate.value == "") {
                        alert("No date has been selected")
                    }
                    else {
                        resolve(data)
                    }
                })
                .catch(err => reject(err))
        })
    }
    getNasaTodayData() {
        return new Promise((resolve, reject) => {
            fetch(this.url + this.apiKey)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        })
    }
}
