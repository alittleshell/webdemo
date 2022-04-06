import axios from 'axios';
import { ref } from 'vue'
//获取首页Banner轮播图
const json = ref("/json")
const http = ref("/api")
export const getBanners = () => {
    return axios.get(json.value + "/banner.json");
}
export const getBanners2 = () => {
    return axios.get(http.value + "/Image/GetImages");
}
export const getFlowers = (parms: {}) => {
    return axios.post(http.value + "/Flower/GetFlowers", parms); 
}
export const Register = (parms: {}) => {
    return axios.post(http.value + "/Login/Register", parms); 
}
export const getToken = (parms: {}) => {
    return axios.post(http.value + "/Login/Check", parms); 
}
//生成一笔订单
export const CreateOrder = (parms: {}) => {
    //在header里携带token访问后端接口
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage["token"];
    return axios.post(http.value + "/Order/CreateOrder", parms);
}
//获取订单列表
export const GetOrder = () => {
    //在header里携带token访问后端接口
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage["token"];
    return axios.post(http.value + "/Order/GetOrder");
}