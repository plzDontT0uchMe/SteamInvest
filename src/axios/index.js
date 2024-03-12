import axios from "axios";

const instance = axios.create({
    baseURL: 'http://95.140.158.194:3000/',
    //withCredentials: true
});
instance.defaults.headers.common.authorization = '68dXMQR9mDEDPN5P38BeG1HZaGkPWTXdK1eeHM25mZnewNWQ8F1Xdm63F1EK64Bh'
export default instance;