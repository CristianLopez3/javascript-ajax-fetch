const d = document,
w = window;
 function speechReader(){
    const $speechSelect = d.querySelector("#spech"),
        $speechTextarea = d.querySelector("#spech-text"),
        $speechBottom = d.querySelector("#leer"),
        speechMessage =    new SpeechSynthesisUtterance();


        let voices = [];

        d.addEventListener("DOMContentLoad", e => {

            console.log(w.speechSynthesis.getVoices());

            w.speechSynthesis.addEventListener("voiceschanged", e => {
                console.log(e);
                voices = w.speechSynthesis.getVoices();
                console.log(voices);

                voices.forEach(voice => {
                    const $option = d.createElement("option");
                    $option.value = voice.name;
                    $option.text = `${voice.name} - ${voice.lang}`;

                    $speechSelect.appendChild($option);
                })


            })



        })


        d.addEventListener("change", e => {})


        d.addEventListener("click", e => {})



}


speechReader()