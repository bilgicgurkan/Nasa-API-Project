class UI {
    constructor() {
        this.mainArea = document.querySelector(".main-area");
    }
    showNasaSelectedData(nasa) {
        this.mainArea.innerHTML = "";

        nasa.forEach(nasaInfo => {
            this.mainArea.innerHTML +=
                `
            <div class="image-area">
                <img src="${nasaInfo.hdurl ? nasaInfo.hdurl : 'İlgili tarihe ait resim bulunamadı'}" alt="nasa_image" id="image-setting">
            </div>
            <div class="info-area">
                <div class="copyright-area">
                    <div class="copyright">
                        Copyright
                    </div>
                    <div class="copyright-info">
                        ${nasaInfo.copyright ? nasaInfo.copyright : 'Telif hakkı sahibi bulunamadı'}
                    </div>
                </div>
                <div class="date-area">
                    <div class="date">
                        Date
                    </div>
                    <div class="date-info">
                        ${nasaInfo.date ? nasaInfo.date : 'Tarih bulunamadı'}
                    </div>
                </div>
                <div class="title-area">
                    <div class="title">
                        Title
                    </div>
                    <div class="title-info">
                        ${nasaInfo.title ? nasaInfo.title : 'Başlık bulunamadı'}
                    </div>
                </div>
            </div>
            <div class="explanation-area">
                <div class="explanation">
                    Explanation
                </div>
                <div class="explanation-data">
                    ${nasaInfo.explanation ? nasaInfo.explanation : 'Açıklama bulunamadı'}
                </div>
            </div>
        `
        })
    }
    showNasaTodayData(nasa) {
        this.mainArea.innerHTML =
            `
            <div class="image-area">
                <img src="${nasa.hdurl ? nasa.hdurl : 'Bugüne ait görsel bulunamadı'}" alt="nasa_image" id="image-setting">
            </div>
            <div class="info-area">
                <div class="copyright-area">
                    <div class="copyright">
                        Copyright
                    </div>
                    <div class="copyright-info">
                        ${nasa.copyright ? nasa.copyright : 'Telif hakkı sahibi bulunamadı'}
                    </div>
                </div>
                <div class="date-area">
                    <div class="date">
                        Date
                    </div>
                    <div class="date-info">
                        ${nasa.date ? nasa.date : new Date()}
                    </div>
                </div>
                <div class="title-area">
                    <div class="title">
                        Title
                    </div>
                    <div class="title-info">
                        ${nasa.title ? nasa.title : 'Başlık bilgisi bulunamadı'}
                    </div>
                </div>
            </div>
            <div class="explanation-area">
                <div class="explanation">
                    Explanation
                </div>
                <div class="explanation-data">
                    ${nasa.explanation ? nasa.explanation : 'Açıklama bulunamadı'}
                </div>
            </div>
            `
    }
}