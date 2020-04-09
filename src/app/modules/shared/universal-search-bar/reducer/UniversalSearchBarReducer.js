import { PAGE_STATES } from "app/utils/Constants";
import { 
    UNIVERSAL_SEARCH_BAR__CHANGE_PAGE_STATE, 
    UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDERS_SUCCESS,
    UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDERS_FAILURE,
    UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDER_ITEMS_SUCCESS,
    UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDER_ITEMS_FAILURE,
} from "../actions/UniversalSearchBarActions";

const initialState = {
    pageState: PAGE_STATES.PRISTINE,
    orders: [],
    orderItems: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case UNIVERSAL_SEARCH_BAR__CHANGE_PAGE_STATE:
            return {
                ...state,
                pageState: action.pageState
            };
        case UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                totalItems: action.totalItems,
            };
        case UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDERS_FAILURE:
            return {
                ...state,
                orders: [],
                totalItems: 0,
            };
        case UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDER_ITEMS_SUCCESS:
            return {
                ...state,
                orderItems: action.orderItems,
                totalItems: action.totalItems,
            };
        case UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDER_ITEMS_FAILURE:
            return {
                ...state,
                orderItems: [],
                totalItems: 0,
            };
        default:
            return state;
    }
}
