"use client";

import React, { useState } from "react";
import assets from "../utils/assets";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "@/actions/addStudent";
import { setCohort, setCourse, setName } from "@/lib/features/form/formSlice";

const AddModal = () => {

  const formState = useSelector((state)=> state.form);
  const [ name, setLocalName ] = useState('')
  const [cohort, setLocalCohort] = useState(null);
  const [course, setLocalCourse] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setName(name));
    dispatch(setCohort(cohort));
    dispatch(setCourse(course));
    console.log("Data: ", formState)
    dispatch(addStudent( name, cohort, course ));
  }

  
  return (
    <>
    


      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="">
          <label htmlFor="name" className="text-gray-700 font-semibold ">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={e=>setLocalName(e.target.value)}
            placeholder="Enter Student Name"
            className="border p-2 w-full rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-700 font-semibold">
            Cohort
          </p>
          <div className="flex gap-5">
            {assets.cohorts.map((c, idx) => (
              <div key={idx}>
                <label
                  htmlFor={c.cohort}
                  className={` rounded-lg px-3 py-2 font-semibold ${
                    cohort === c.cohort ? "bg-black text-white" : "bg-slate-100 text-black"
                  }`}
                >
                  {c.cohort}
                </label>
                <input
                  type="radio"
                  name="cohort"
                  id={c.cohort}
                  value={c.cohort}
                  className="hidden"
                  checked={cohort === c.cohort}
                  onChange={(e) => setLocalCohort(e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-gray-700 font-semibold">
            Courses
          </p>
          <div className="flex gap-5">
            {assets.course.map((co, idx) => (
              <div key={idx}>
                <label
                  htmlFor={co.id}
                  className={` rounded-lg px-3 py-2 font-semibold 
                    ${ course === co.id ? "bg-black text-white" : "bg-slate-100 text-black"
                  }`}
                >
                  {co.name}
                </label>
                <input
                  type="radio"
                  name="course"
                  id={co.id}
                  value={co.id}
                  className="hidden"
                  checked={course === co.id}
                  onChange={(e) => setLocalCourse(Number(e.target.value))}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <button type="submit" className="bg-slate-300 hover:bg-slate-400 transition1 px-4 py-2 text-lg font-semibold rounded-lg">
            Add Student
          </button>
        </div>
      </form>
    </>
  );
};

export default AddModal;
