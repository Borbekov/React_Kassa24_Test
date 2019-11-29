import { requestApi } from "../plugins/axios";

export const getItems = () => {
  return async dispatch => {
    try {
      const data = await requestApi({
        method: "GET",
      });
      dispatch({
        type: "GET_DATA",
        payload: data.data,
        isAuth: true,
      });
    } catch (err) {
      console.log("Error!");
    }
  }
}

export const deleteItems = () => {
  return dispatch => {
    dispatch({
      type: "DELETE_DATA",
      payload: null,
      isAuth: true,
    });
  }
}

export const deleteExactItem = id => {
  return (dispatch, getState) => {
    const data = [...getState().data.data]
    const newData = data.filter((data) => (
      data.id !== id
    ))
    dispatch({
      type: "DELETE_ITEM",
      payload: newData,
      isAuth: true,
    });
  }
}

export const signOut = () => {
  return dispatch => {
    dispatch({
      type: "GET_OUT",
      payload: null,
      isAuth: false,
    });
  }
}
