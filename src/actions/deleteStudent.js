import { setError, setLoading, deleteStudent } from "@/lib/features/students/studentsSlice"
import axios from "axios";

export const deleteStudentById = (id) => async (dispatch) => {
    try {
        dispatch(setLoading(true));

        const res = await axios.delete('/api/students', {
            headers: {'Content-Type': 'application/json'},
            data: { id }
        })

        if(res.status !== 200){
            throw new Error("Failed to delete student.");
        }

        dispatch(deleteStudent(id));    
    } catch (error) {
        dispatch(setError(error.message));
        console.log("Error deleting student.", error);
    } finally {
        dispatch(setLoading(false));
    }
}