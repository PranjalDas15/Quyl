import { configureStore } from "@reduxjs/toolkit";
import formReducer from '../lib/features/form/formSlice'
import studentsReducer from '../lib/features/students/studentsSlice'
import coursesReducer from '../lib/features/courses/coursesSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            form: formReducer,
            students: studentsReducer,
            courses: coursesReducer
        },
    })
}