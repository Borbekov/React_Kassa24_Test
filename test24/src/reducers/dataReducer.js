const initState = {
  data: null,
  isAuth: false,
  originalData: [],
};

const dataReducer = (state = initState, { type, payload, isAuth }) => {
  switch (type) {
    case "GET_DATA":
      return ({
        ...state,
        data: payload,
        isAuth,
        originalData: payload
      });
    case "DELETE_DATA":
      return ({
        ...state,
        data: payload,
        isAuth
      });
    case "DELETE_ITEM":
      return ({
        ...state,
        data: payload,
        isAuth
      });
      case "GET_OUT":
        return ({
          ...state,
          data: payload,
          isAuth
        });
      case "FILTER_DATE":
        console.log(payload, "ads");
        return ({
          ...state,
          data: payload,
          isAuth
        })
    default:
      return state;
  }
}

export default dataReducer;
