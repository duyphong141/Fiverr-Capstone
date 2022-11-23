import { GET_MENU_LOAI_CONGVIEC, SEARCH_CONGVIEC } from "../types/type";

const initialState = {
    typesJob: [],
    searchDanhSachCongViecTheoTen: []
}

export const reducerTong = (state = initialState, action) => {
    switch (action.type) {
        case GET_MENU_LOAI_CONGVIEC:
            state.typesJob = action.typesJob;
            return { ...state };

        case SEARCH_CONGVIEC:
            state.searchDanhSachCongViecTheoTen = action.searchCongViec
            return { ...state }

        default:
            return state
    }
}
