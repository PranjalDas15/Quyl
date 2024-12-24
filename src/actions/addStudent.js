import { setLoading, setError, resetForm } from "@/lib/features/form/formSlice";
import axios from "axios";

export const addStudent = (name, cohort, course) => async (dispatch) => {
    try {
        dispatch(setLoading(true));

        const response = await axios.post('/api/students', {name, cohort, courseId: course});

        if(response.status != 200) {
            throw new Error("Failed to add a Student.");
        }

        dispatch(resetForm());
    } catch (error) {
        dispatch(setError(error.message));
        console.log("Error adding student: ", error);
    } finally {
        dispatch(setLoading(false));
    }
}

