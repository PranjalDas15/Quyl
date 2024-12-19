'use server'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function addStudent(formData) {
  const student_name = formData.get('student_name');
  const cohort = formData.get('cohort');
  const courses = formData.get('courses');

  try {
    const res = await prisma.students.create({
      data: {
        student_name,
        cohort,
        courses,
        date_joined: new Date(),
        last_login: new Date(),
        status: 'Offline',
      }
    });
    // Add any redirection or success logic here
    console.log('Student added:', res);
  } catch (error) {
    console.error('Error adding student:', error);
  }
}
