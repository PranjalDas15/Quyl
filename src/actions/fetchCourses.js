import { setLoading, setError, setCourses } from "@/lib/features/courses/coursesSlice"
import axios from "axios";

export const fetchCourses = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await axios.get('/api/courses');
        console.log("Data: ",response);
        dispatch(setCourses(response.data.courses));
        
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};