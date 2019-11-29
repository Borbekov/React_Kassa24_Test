import moment from "moment";

export const filterDate = (state) => {
  return (dispatch, getState) => {
    const original = [...getState().data.originalData];
    const data = [...getState().data.data];
    const fromDate = Number(new Date(state.from))
    const toDate = Number(new Date(state.to))
    const filteredArray = data.filter((data) => (
      Number(new Date(moment(data.createdAt).subtract(10, 'days').calendar())) >= fromDate
          && Number(new Date(moment(data.createdAt).subtract(10, 'days').calendar())) <= toDate
    ))
    dispatch({
      type: "FILTER_DATE",
      payload: filteredArray.length > 0 ? filteredArray : original,
      isAuth: true
    });
  }
}
