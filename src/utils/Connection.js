import axios from 'axios';


const LINK_PREVIEW = "http://api.linkpreview.net/?key=5b34416685a7ce81e7408aa64be981a91c4c742b33c57&q=";


export {getLinkPreviewData, parseUrlData};

function getLinkPreviewData(url) {
    return axios.get(LINK_PREVIEW + url)
        .then(response => response.data)
        .catch(error => {
            console.log("error: " + error);
            console.log("error.data" + error.data);
            console.log("error.status" + error.status);
            console.log("error.statusText" + error.statusText);
            console.log("error.headers" + error.headers);
            console.log("error.config" + error.config);
        });
}


function parseUrlData(url) {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'JgHJdlmSTEedg5wt6JYnGNAn64zUmfAte8FgtFHV'
        }
    };
    return axios.get( "https://mercury.postlight.com/parser?url=" + url, axiosConfig)
        .then(response => response.data)
        .catch(error => {
            console.log("error: " + error);
            console.log("error.data" + error.data);
            console.log("error.status" + error.status);
            console.log("error.statusText" + error.statusText);
            console.log("error.headers" + error.headers);
            console.log("error.config" + error.config);
        });
}
