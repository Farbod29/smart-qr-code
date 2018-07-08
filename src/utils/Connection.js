import axios from 'axios';


const LINK_PREVIEW = "http://api.linkpreview.net/?key=5b34416685a7ce81e7408aa64be981a91c4c742b33c57&q=";
const BASE_API_URL = 'http://localhost:7000/';
const CREATE_BOARD = BASE_API_URL + "boards/create";
const BOARD = BASE_API_URL + "boards/";

export {
    getLinkPreviewData,
    parseUrlData,
    createNewBoardData,
    getBoardResourcesData
};

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
    return axios.get("https://mercury.postlight.com/parser?url=" + url, axiosConfig)
        .then(response => {
            console.log("response: " + JSON.stringify(response));
            return response.data
        })
        .catch(error => {
            console.log("error: " + error);
            console.log("error.data: " + error.data);
            console.log("error.status: " + error.status);
            console.log("error.statusText: " + error.statusText);
            console.log("error.headers: " + error.headers);
            console.log("error.config: " + error.config);
        });
}


function createNewBoardData(title) {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            // 'x-api-key': 'JgHJdlmSTEedg5wt6JYnGNAn64zUmfAte8FgtFHV'
        }
    };
    var data = {
        'title': title
    };
    return axios.post(CREATE_BOARD, data, axiosConfig)
        .then(response => {
            console.log("response: " + JSON.stringify(response));
            return response
        })
        .catch(error => {
            console.log("error: " + JSON.stringify(error));
            return error
        });
}

function getBoardResourcesData(tagCode) {
    var data = {
        'title': title
    };
    return axios.post(BOARD, data)
        .then(response => {
            console.log("response: " + JSON.stringify(response));
            return response
        })
        .catch(error => {
            console.log("error: " + JSON.stringify(error));
            return error
        });
}
