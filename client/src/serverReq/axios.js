
import axios from 'axios';
import { URL } from '../constants';

axios.defaults.baseURL = URL;


export const serverCallPost = async (url,params,callbackSucss ,callbackFailur) => {
    axios.post(url,params).then((response) => {callbackSucss(response)})
        .catch((response)=> {callbackFailur(response);})
}
