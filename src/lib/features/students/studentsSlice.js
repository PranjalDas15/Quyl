import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students: [],
    loading: false,
    error: null
};

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        setStudents: (state, action) => {
            state.students = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        deleteStudent: (state, action) => {
            state.students = state.students.filter(student => student.id !== action.payload);
        },
        resetStudents: () => initialState,
    },
});

export const { setStudents, setLoading, setError, deleteStudent, resetStudents } = studentsSlice.actions;
export default studentsSlice.reducer;
