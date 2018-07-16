import axios from 'axios';
import StorageKeys from "./StorageKeys";


const LINK_PREVIEW = "http://api.linkpreview.net/?key=5b34416685a7ce81e7408aa64be981a91c4c742b33c57&q=";
const BASE_API_URL = StorageKeys.BASE_API_URL;
const CREATE_BOARD = BASE_API_URL + "boards/create";
const BOARD = BASE_API_URL + "boards/";
const CREATE_REFERENCE = BASE_API_URL + "references/create/";
const LOGIN = BASE_API_URL + "users/loginx";
const REGISTER = BASE_API_URL + "users/registerx";
const CHANGE_PASSWORD = BASE_API_URL + "users/changePassword";
const VOTE = BASE_API_URL + "votes/create";
const UPLOAD_PHOTO = BASE_API_URL + "users/uploadPhoto";

export {
    getLinkPreviewData,
    parseUrlData,
    createNewBoardData,
    getBoardsData,
    getBoardResourcesData,
    addNewReferenceData,
    loginData,
    registerData,
    changePasswordData,
    voteData,
    uploadPhotoData
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

function getBoardResourcesData(tagCode, uid) {

    return axios.get(BOARD + tagCode + "/" + uid)
        .then(response => {
            console.log("response: " + JSON.stringify(response));
            return response
        })
        .catch(error => {
            console.log("error: " + JSON.stringify(error));
            return error
        });
}

function getBoardsData() {

    return axios.get(BOARD )
        .then(response => {
            console.log("response: " + JSON.stringify(response));
            return response
        })
        .catch(error => {
            console.log("error: " + JSON.stringify(error));
            return error
        });
}

function addNewReferenceData(link, board, userId) {

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    var data = {
        'link': link,
        'board': board,
        'userId': userId,
    };
    return axios.post(CREATE_REFERENCE, data, axiosConfig)
        .then(response => {
            console.log("response: " + JSON.stringify(response));
            return response
        })
        .catch(error => {
            console.log("error: " + JSON.stringify(error));
            return error
        });
}


function loginData(email, password) {

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    var data = {
        'email': email,
        'password': password
    };
    return axios.post(LOGIN, data, axiosConfig)
        .then(response => {
            console.log("response: " + JSON.stringify(response));
            return response
        })
        .catch(error => {
            console.log("error: " + JSON.stringify(error));
            return error
        });
}


function registerData(email, password) {

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    var data = {
        'email': email,
        'password': password
    };
    return axios.post(REGISTER, data, axiosConfig)
        .then(response => {
            console.log("response: " + JSON.stringify(response));
            return response
        })
        .catch(error => {
            console.log("error: " + JSON.stringify(error));
            return error
        });
}



function changePasswordData(userId, oldPassword, newPassword) {

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    var data = {
        'userId': userId,
        'oldPassword': oldPassword,
        'newPassword': newPassword
    };
    return axios.post(CHANGE_PASSWORD, data, axiosConfig)
        .then(response => {
            console.log("response: " + JSON.stringify(response));
            return response
        })
        .catch(error => {
            console.log("error: " + JSON.stringify(error));
            return error
        });
}


function voteData(referenceId, userId, value) {

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    var data = {
        'referenceId': referenceId,
        'userId': userId,
        'value': value
    };
    return axios.post(VOTE, data, axiosConfig)
        .then(response => {
            console.log("response: " + JSON.stringify(response));
            return response
        })
        .catch(error => {
            console.log("error: " + JSON.stringify(error));
            return error
        });
}


function uploadPhotoData(userId, photo) {

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    var data = {
        'userId': userId,
        'photo': photo
    };
    return axios.post(UPLOAD_PHOTO, data, axiosConfig)
        .then(response => {
            console.log("response: " + JSON.stringify(response));
            return response
        })
        .catch(error => {
            console.log("error: " + JSON.stringify(error));
            return error
        });
}



