export const actionTypes = {
  SET_SELECT: 'SET_SELECT',
}

export const setSelected = (selectedPlayer) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_SELECT,
      payload: selectedPlayer
    })
  }
}