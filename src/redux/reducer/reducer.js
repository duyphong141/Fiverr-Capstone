import { GET_MENU_LOAI_CONGVIEC } from "../types/type";

const initialState = {
    typesJob: [
        
    ]
}

export const reducerTong = (state = initialState, action) => {
    switch (action.type) {
        case GET_MENU_LOAI_CONGVIEC:
            state.typesJob = action.typesJob;
            return { ...state };
        default:
            return state
    }
}
