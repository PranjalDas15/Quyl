import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    cohort: null,
    course: null,
    loading: false,
    error: null
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setCohort: (state, action) => {
            state.cohort = action.payload;
        },
        setCourse: (state, action) => {
            state.course = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        resetForm: () => initialState,
    },
});

export const {setName, setCohort, setCourse, setLoading, setError, resetForm} = formSlice.actions;
export default formSlice.reducer;