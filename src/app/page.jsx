import { PrismaClient } from "@prisma/client";
import addStudent from "./actions/addStudent";



export default async function Home() {
  // const prisma = new PrismaClient();
  // const students = await prisma.students.findMany();

  return (
    // <div>
    //   <h1 className="text-xl font-bold">Students</h1>

    //   {/* Form Submission */}
    //   <form action={addStudent} method="POST">
    //     <input
    //       type="text"
    //       name="student_name"
    //       placeholder="Student Name"
    //       required
    //     />
    //     <select name="cohort" id="cohort" required>
    //       <option value="AY_2022_23">AY 2022-23</option>
    //       <option value="AY_2023_24">AY 2023-24</option>
    //       <option value="AY_2024_25">AY 2024-25</option>
    //     </select>
    //     <select name="courses" id="courses" required>
    //       <option value="CBSE_9_Math">CBSE 9 MATH</option>
    //       <option value="CBSE_9_Science">CBSE 9 SCIENCE</option>
    //     </select>
    //     <button type="submit" className="px-2 py-1 bg-gray-500 text-white">
    //       Submit
    //     </button>
    //   </form>

    //   {/* Displaying Students */}
    //   <div className="my-10">
    //     <ul>
    //       {students.map((student) => (
    //         <li key={student.id}>
    //           <p>{student.student_name}</p>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <div>
      Hello
    </div>
  );
}