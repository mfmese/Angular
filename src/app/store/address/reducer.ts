import { IDValue } from "src/app/models/id-value";
import { ActionTypes } from "../address-store/actions";
import { Actions } from "./actions";

// export const adapter: EntityAdapter<IDValue> = createEntityAdapter<IDValue>({
//     selectId: model => model.Id,
//     sortComparer: (a: IDValue, b: IDValue): number => b.Id.toString().localeCompare(a.Id.toString())
// });

export interface State  {
    countries: IDValue[];
    states: IDValue[];
    cities: IDValue[];
    districties: IDValue[];
    isLoading?: boolean;
    error?: any;
}

const initialState:State = {
    countries: [
        new IDValue(1, "Turkey"),
        new IDValue(2, "USA")
    ],
    states: [
        new IDValue(1, "Ege"),
        new IDValue(2, "Marmara")
    ],
    cities: [
        new IDValue(1, "İstanbul"),
        new IDValue(2, "Afyon")
    ],
    districties: [
        new IDValue(1, "Çekmeköy"),
        new IDValue(2, "Kadıköy")
    ],
    isLoading: false,
    error: null
}

export function addressReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case ActionTypes.LOAD_REQUEST: {
            return {
                ...state,
                isLoading: true,
                error: null
            };
        }
        case ActionTypes.LOAD_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                error: null
            };
        }
        case ActionTypes.LOAD_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        }
        default: {
            return state;
        }
    }
}