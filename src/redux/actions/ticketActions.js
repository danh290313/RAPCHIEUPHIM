export const addMovieAction = (dispatch, payload) => {
  dispatch({ type: 'ADD_MOVIE', payload });
};

export const addScheduleAction = (dispatch, payload) => {
  dispatch({ type: 'ADD_SCHEDULE', payload });
};

export const addSeatsAction = (dispatch, payload) => {
  dispatch({ type: 'ADD_SEATS', payload });
};
