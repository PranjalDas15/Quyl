"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "@/actions/fetchStudents";
import { deleteStudentById, deleteStudents } from "@/actions/deleteStudent";
import { fetchCourses } from "@/actions/fetchCourses";
import AddModal from "@/components/AddModal";
import assets from "@/utils/assets";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Loader2, Pen, PenBox, X } from "lucide-react";
import { formatDate } from "@/utils/formatDate";

export default function page() {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector((state) => state.students);
  const { courses } = useSelector((state) => state.courses);

  const [filters, setFilters] = useState({
    cohort: "",
    courseId: "",
  });

  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleDelete = (studentId) => {
    dispatch(deleteStudentById(studentId));
  }

  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchStudents());
  }, [dispatch]);



  const getFilteredStudents = () => {
    let filteredStudents = students;

    if (filters.cohort) {
      filteredStudents = filteredStudents.filter(
        (student) => student.cohort === filters.cohort
      );
    }

    if (filters.courseId) {
      filteredStudents = filteredStudents.filter(
        (student) => student.courseId === parseInt(filters.courseId)
      );
    }

    return filteredStudents;
  };

  if (error) return <p>Error: {error}</p>;

  const filteredStudents = getFilteredStudents();

  return (
    <div className="p-1 md:p-5 flex flex-col gap-10 relative h-full">
      <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-5">
        <div className="flex gap-5">
          <div className="py-2 px-2 bg-slate-200 hover:bg-slate-300 transition1 rounded-lg">
            <select
              name="cohort"
              onChange={handleFilter}
              value={filters.cohort}
              className="bg-transparent font-bold text-lg text-gray-600 px-2"
            >
              <option value="">Sort by Cohort</option>
              {assets.cohorts.map((cohort, idx) => (
                <option value={cohort.id} key={idx}>
                  {cohort.cohort}
                </option>
              ))}
            </select>
          </div>

          <label
            htmlFor="course"
            className="py-2 px-2 bg-slate-200 hover:bg-slate-300 transition1 rounded-lg"
          >
            <select
              name="courseId"
              onChange={handleFilter}
              value={filters.courseId}
              className="bg-transparent font-bold text-lg text-gray-600 px-2"
            >
              <option value="">Sort by Course</option>
              {courses.map((course) => (
                <option value={course.id} key={course.id}>
                  {course.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <Dialog>
          <DialogTrigger className="flex gap-3 justify-center items-center py-2 px-5 bg-slate-200 hover:bg-slate-300 transition1 rounded-lg">
            <div className="w-5 h-5">
              <Image
                alt=""
                src={assets.icons.plus}
                width={25}
                height={25}
                className="w-full h-full object-fill"
              />
            </div>
            <p className="text-lg font-bold text-gray-600">Add new Student</p>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <p className="text-xl">Add Student</p>
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <AddModal />
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Loader2 size={50} className="animate-spin text-gray-500" />
        </div>
      ) : (
        <table className="w-full text-[12px] lg:text-base font-semibold">
          <thead>
            <tr className="text-left text-bold text-[10px] md:text-lg">
              <th className="py-2">Student Name</th>
              <th className="py-2">Cohort</th>
              <th className="py-2">Courses</th>
              <th className="py-2">Date Joined</th>
              <th className="py-2">Last Login</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {filteredStudents.length === 0 ? (
              <tr className="text-center">
                <td colSpan={6} className="py-40">
                  No students yet.
                </td>
              </tr>
            ) : (
              filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-y hover:bg-slate-100 transition1 group"
                >
                  <td className="py-2">{student.name}</td>
                  <td className="py-2">{student.cohort}</td>
                  <td className="py-2 flex flex-col md:flex-row gap-3">
                    {student.course.subjects.map((subject, idx) => (
                      <div
                        key={idx}
                        className="py-1 px-2 flex flex-col lg:flex-row justify-start items-center gap-2 bg-slate-50 rounded-lg"
                      >
                        <p className="">{student.course.name}</p>
                        <p className="text-center">{subject}</p>
                      </div>
                    ))}
                  </td>
                  <td className="py-2">
                    {formatDate(student.createdAt).slice(0, 12)}
                  </td>
                  <td className="py-2">{formatDate(student.last_login)}</td>
                  <td className="py-2 px-5 group-hover:hidden block">
                    <div
                      className={`h-4 w-4 rounded-full ${
                        student.isOnline ? "bg-green-400" : "bg-red-500"
                      }`}
                    ></div>
                  </td>
                  <td className="group-hover:flex gap-2 hidden">
                    <button className="hover:text-red-500">
                      <PenBox />
                    </button>
                    <button onClick={() => handleDelete(student.id)} className="hover:text-red-500">
                      <X />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
