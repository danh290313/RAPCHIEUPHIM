const initialState = {
  movieId: '',
  scheduleID: '',
  seats: [{ name: '', id: 1 }],
  paymentMethod: 'ZaloPay',
};

const ticketReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_MOVIE':
      return {
        ...state,
        movieId: payload,
      };
    case 'ADD_SCHEDULE':
      return {
        ...state,
        scheduleID: payload,
      };
    case 'ADD_SEATS':
      return {
        ...state,
        seats: payload,
      };
    case 'ADD_PAYMENT_METHOD':
      return {
        ...state,
        paymentMethod: payload,
      };
    default:
      return state;
  }
};

export default ticketReducer;
