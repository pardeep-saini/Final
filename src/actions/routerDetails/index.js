import { GET_ROUTERS_DETAILS } from "./routerDetailsConstant";

export const getRoutersDetails = (details='') => {
    const type = GET_ROUTERS_DETAILS;
    return {type, details}
};



