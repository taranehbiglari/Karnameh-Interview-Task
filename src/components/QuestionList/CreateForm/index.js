import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitNewQuestionAction } from "../../../redux/Questions/Actions";
const CreateQuestion = ()=>{
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const submitFormhandler = () => {
        if (!title) {
            console.log('title is requeired');
            return null;
        }
        const data = {
            title,
        }
        dispatch(submitNewQuestionAction(data));
    }
    return (
        <>
            <div>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                <button onClick={submitFormhandler}>submit</button>
            </div>
        </>
    );

}

export default CreateQuestion