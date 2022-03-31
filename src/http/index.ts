import axios from 'axios';
import { ref } from 'vue'
//获取首页Banner轮播图
const json=ref("/json")
const http=ref("/api")
export const getBanners = () => {
    return axios.get(json.value + "/banner.json");
}
export const getBanners2 = () => {
    return axios.get(http.value + "/Image/GetImages");
}
export const getFlowers = () => {
    return axios.get(http.value + "/Flower/GetFlowers");
}

