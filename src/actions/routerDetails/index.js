import { GET_ROUTERS_DETAILS,GET_ROUTERS_ACTIONS } from "./routerDetailsConstant";

export const getRoutersDetails = (details='') => {
    const type = GET_ROUTERS_DETAILS;
    return {type, details}
};

export const getRoutersActions = (routerAction='') => {
    const type = GET_ROUTERS_ACTIONS;
    return {type, routerAction}
};



