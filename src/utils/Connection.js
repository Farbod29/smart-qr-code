import axios from 'axios';


const LINK_PREVIEW = "http://api.linkpreview.net/?key=5b34416685a7ce81e7408aa64be981a91c4c742b33c57&q=";


export {getLinkPreviewData};

function getLinkPreviewData(url) {
    return axios.get(LINK_PREVIEW + url).then(response => response.data);
}
