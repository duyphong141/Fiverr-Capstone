import axios from "axios";
import { DOMAIN_FIVERR, TOKEN } from "../../util/setting";
import { GET_MENU_LOAI_CONGVIEC, SEARCH_CONGVIEC } from "../types/type";


export const loaiCongViecAction = (dispatch2) => {
    let promise = axios({
        method: 'get',
        url: `${DOMAIN_FIVERR}/cong-viec/lay-menu-loai-cong-viec`,
        headers: {
            "TokenCybersoft": TOKEN
        }
    });
    promise.then((result) => {
        let action2 = {
            type: GET_MENU_LOAI_CONGVIEC,
            typesJob: result.data.content
        }
        // console.log(result.data.content)
        dispatch2(action2);

    });
    promise.catch(error => {
        console.log(error.response?.data);
    });
}


