export const UNIVERSAL_SEARCH_BAR__CHANGE_PAGE_STATE                = "UNIVERSAL_SEARCH_BAR__CHANGE_PAGE_STATE";

export const UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDERS_SUCCESS         = "UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDERS_SUCCESS";
export const UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDERS_FAILURE         = "UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDERS_FAILURE";

export const UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDER_ITEMS_SUCCESS    = "UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDER_ITEMS_SUCCESS";
export const UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDER_ITEMS_FAILURE    = "UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDER_ITEMS_FAILURE";

export function universalSearchBar_changePageState(pageState) {
    return function(dispatch) {
        dispatch({
            type: UNIVERSAL_SEARCH_BAR__CHANGE_PAGE_STATE,
            pageState: pageState
        });
    }
}

export function universalSearchBar_findManyOrdersSuccess(orders, totalItems) {
    return function(dispatch) {
        dispatch({
            type: UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDERS_SUCCESS,
            orders: orders,
            totalItems: totalItems,
        });
    }
}

export function universalSearchBar_findManyOrdersFailure() {
    return function(dispatch) {
        dispatch({
            type: UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDERS_FAILURE,
            orders: [],
            totalItems: 0,
        });
    }
}

export function universalSearchBar_findManyOrderItemsSuccess(orderItems, totalItems) {
    return function(dispatch) {
        dispatch({
            type: UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDER_ITEMS_SUCCESS,
            orderItems: orderItems,
            totalItems: totalItems,
        });
    }
}

export function universalSearchBar_findManyOrderItemsFailure() {
    return function(dispatch) {
        dispatch({
            type: UNIVERSAL_SEARCH_BAR__FIND_MANY_ORDER_ITEMS_FAILURE,
            orderItems: [],
            totalItems: 0,
        });
    }
}
