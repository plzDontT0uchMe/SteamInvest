import axios from "axios";

const instance = axios.create({
    baseURL: 'http://95.140.158.194:3000/',
    //withCredentials: true
});
instance.defaults.headers.common.authorization = '1ss1mab8GNwFNGEASddpGaDdBmWED9ndHWpDQhps44k1WPPFNHsaHPD72e9nTs2B'
//68dXMQR9mDEDPN5P38BeG1HZaGkPWTXdK1eeHM25mZnewNWQ8F1Xdm63F1EK64Bh
export default instance;