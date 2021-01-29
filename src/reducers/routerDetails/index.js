import * as types from "../../actions/routerDetails/routerDetailsConstant";

  
export default function getAccountDetails(state = [], action) {
    let response = action.response;
    switch (action.type) {
      case types.GET_ROUTERS_DETAILS:
        return { loading: true, ...state };
      case types.GET_ROUTERS_ACTIONS:
        return { loading: true, data: action };
      default:
        return state;
    }
  }

 
  
