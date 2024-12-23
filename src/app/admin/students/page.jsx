"use client";

import AddModal from "@/components/AddModal";
import assets from "@/utils/assets";
import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  const [isOpened, setIsOpenned] = useState(false);

  return (
    <div className="p-1 md:p-5 flex flex-col gap-10 relative">
      <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-5">
        <div className="flex gap-5">
          <div className="py-2 px-2 bg-slate-200 hover:bg-slate-300 transition1 rounded-lg">
            <select
              name="cohort"
              id="cohort"
              className="bg-transparent font-bold text-lg text-gray-600 px-2"
            >
              <option value="">AY 2024-25</option>
              <option value="">AY 2023-24</option>
            </select>
          </div>

          <label
            htmlFor="course"
            className="py-2 px-2 bg-slate-200 hover:bg-slate-300 transition1 rounded-lg"
          >
            <select
              name="course"
              id="course"
              className="bg-transparent font-bold text-lg text-gray-600 px-2"
            >
              <option value="">CBSE 9</option>
              <option value="">CBSE 8</option>
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
              <DialogTitle>Add new Student</DialogTitle>
              <DialogDescription>
                
              </DialogDescription>
            </DialogHeader>
            <AddModal />
          </DialogContent>
        </Dialog>
      </div>
      <table className="w-full text-[12px] lg:text-base font-semibold ">
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

        <tbody className="text-gray-600 ">
          {assets.data.length === 0 ? (
            <tr className="text-center">
              <td colSpan={6} className="py-40">
                No students yet.
              </td>
            </tr>
          ) : (
            assets.data.map((d, index) => (
              <tr key={index} className="border-y">
                <td className="py-2">{d.student_name}</td>
                <td className="py-2">{d.cohort}</td>
                <td className="py-2 flex flex-col md:flex-row gap-3">
                  {d.courses.map((c, idx) => (
                    <div
                      key={idx}
                      className="flex justify-center items-center gap-2 bg-slate-50 py-1 pl-2 pr-8 rounded-lg"
                    >
                      <div className="w-7 h-7 rounded-md overflow-hidden">
                        <Image
                          alt={c.c}
                          src={c.image}
                          width={100}
                          height={100}
                          className="w-full h-full object-fill"
                        />
                      </div>
                      <p className="">{c.c}</p>
                    </div>
                  ))}
                </td>
                <td className="py-2">{d.date_joined}</td>
                <td className="py-2">{d.last_login}</td>
                <td className="py-2 px-5">
                  <div
                    className={`h-4 w-4 rounded-full ${
                      d.status === "Online" ? "bg-green-400" : "bg-red-500"
                    }`}
                  ></div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
