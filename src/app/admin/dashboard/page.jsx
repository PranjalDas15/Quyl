'use client'

import { fetchCourses } from '@/actions/fetchCourses';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state)=> state.courses)

  useEffect(()=>{
    dispatch(fetchCourses());
  }, [dispatch])
  return (
    <div>{courses.map((course)=> (
      <p key={course.id}>{course.name}</p>
    ))}</div>
  )
}

export default page