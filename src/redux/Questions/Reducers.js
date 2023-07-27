import { QUESTIONS } from "./Constant";
const initialState = {
  list: {
    loading: false,
    data: [],
  },
  details: {
    loading: false,
    data: null,
    failed: {
      status: false,
      message: null,
    }
  }
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
    case QUESTIONS.GET_QUESTION_DETAILS.REQUEST:
      return {
        ...state,
        details: {
          ...state.details,
          loading: true,
        }
      }
    case QUESTIONS.GET_QUESTION_DETAILS.SUCCESS:
      return {
        ...state,
        details: {
          loading: false,
          data: action.payload,
          failed: {
            status: false,
            message: null,
          }
        }
      }
      case QUESTIONS.GET_QUESTION_DETAILS.ERROR:
        return {
          ...state,
          details: {
            loading: false,
            data: null,
            failed: {
              status: true,
              message: action.payload,
            }
          }
        }
    default:
      return {
        ...state,
      };
  }
};

export default Reducers;
