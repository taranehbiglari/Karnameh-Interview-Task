import { QUESTIONS } from './Constant';
import instance from '../request';
import { getQuestionListService } from './Service';

export const getAll = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: QUESTIONS.QUESTION_GET_ALL.REQUEST });
      const response = await instance.get(getQuestionListService());
      dispatch({ type: QUESTIONS.QUESTION_GET_ALL.SUCCESS, payload: response.data })
    } catch (e) {
      dispatch({ type: QUESTIONS.QUESTION_GET_ALL.ERROR, payload: e })
    }
  }
}

// export const getById = (id: Number) => ({
//   type: QUESTIONS.QUESTION_DETAIL,
//   payload: id,
// });

// export const add = (item: Object) => ({
//   type: QUESTIONS.QUESTION_ADD,
//   payload: item
// });

// export const answer = (item: Object) => ({
//   type: QUESTIONS.QUESTION_ANSWER,
//   payload: item
// });

// export const vote = () => ({
//   type: "QUESTION_LIKE_OR_DISLIKE",
// });
