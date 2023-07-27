import { QUESTIONS } from './Constant';
import instance from '../request';
import { getQuestionListService, getQuestionDetailsService, submitNewQuestionService } from './Service';

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

export const getQuestionDetailsAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: QUESTIONS.GET_QUESTION_DETAILS.REQUEST });
      const response = await instance.get(getQuestionDetailsService(id));
      dispatch({ type: QUESTIONS.GET_QUESTION_DETAILS.SUCCESS, payload: response.data })
    } catch (e) {
      dispatch({ type: QUESTIONS.GET_QUESTION_DETAILS.ERROR, payload: e })
    }
  }
}

export const submitNewQuestionAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: QUESTIONS.SUBMIT_NEW_QUESTION.REQUEST });
      const response = await instance.post(submitNewQuestionService(), data);
      dispatch({ type: QUESTIONS.SUBMIT_NEW_QUESTION.SUCCESS, payload: response.data });
      const res = await instance.get(getQuestionListService());
      dispatch({ type: QUESTIONS.QUESTION_GET_ALL.SUCCESS, payload: res.data })
    } catch (e) {
      dispatch({ type: QUESTIONS.SUBMIT_NEW_QUESTION.ERROR, payload: e })
    }
  }
}
