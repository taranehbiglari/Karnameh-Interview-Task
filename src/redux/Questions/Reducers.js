import { QUESTIONS } from "./Constant";
const initialState = {
  list: {
    loading: false,
    data: [],
  },
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS.QUESTION_GET_ALL.REQUEST:
      return {
        ...state,
        list: {
          loading: true,
        },
      };
    case QUESTIONS.QUESTION_GET_ALL.SUCCESS:
      return {
        ...state,
        list: {
          loading: false,
          data: action.payload
        },
      };
      case QUESTIONS.QUESTION_GET_ALL.ERROR:
        return {
          ...state,
          list: {
            loading: false,
            data: [],
            failed: {
              status: true,
              message: action.payload,
            }
          }
        }
    // case QUESTIONS.QUESTION_GET_ALL:
    //   return {
    //     ...state,
    //   };
    // case QUESTIONS.QUESTION_DETAIL:
    //   return state.items.find((item: any) => item.id === action.payload);

    // case QUESTIONS.QUESTION_ANSWER:
    //   return state.items.push(action.payload);

    // case QUESTIONS.QUESTION_ADD:
    //   return state.items.push(action.payload);

    default:
      return {
        ...state,
      };
  }
};

export default Reducers;
