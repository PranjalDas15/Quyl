import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: [],
    loading: false,
    error: null
};

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        setCourses: (state, action) => {
            state.courses = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        resetCourses: () => initialState,
    },
});

export const {setCourses, setLoading, setError, resetCourses} = coursesSlice.actions;
export default coursesSlice.reducer;