import { setError, setLoading, setStudents } from "@/lib/features/students/studentsSlice"
import axios from "axios";

export const fetchStudents = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await axios.get('/api/students');
        console.log("Data: ",response);
        dispatch(setStudents(response.data.students));
        
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};