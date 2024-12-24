import prisma from '@/lib/prisma';
import { createClient } from '@/utils/supabase/server';
import bcrypt from 'bcrypt'

export async function POST(req) {
    const supabase = await createClient()
    try {
        const { name, cohort, courseId } = await req.json();

        if( !name || !cohort || !courseId) {
            return new Response(
                JSON.stringify({error: "Fill all the data."}),
                {status: 400}
            );
        }

        const course = await prisma.course.findUnique({
            where: {id: courseId}
        });

        if(!course){
            return new Response(
                JSON.stringify({error: "Invalid course id."}),
                {status: 400}
            );
        }

        const formattedName = name.toLowerCase().replace(/\s+/g,'');
        const formattedCourse = course.name.toLowerCase().replace(/\s+/g, '');

        const email = `${formattedName}@quyl.com`;
        const password = `${formattedCourse}${formattedName}`;

        const hashedPassword = await bcrypt.hash(password, 10);
        const role = 'student'

        const student = await prisma.student.create({
            data: {
                name,
                cohort,
                courseId,
                email,
                password: hashedPassword,
                role: role,
                isOnline: false,
                last_login: new Date(0)
            }
        });

        const { error } = await supabase.auth.signUp({email, password});
        if(error) {
            console.log(error);
        } 


        return new Response(
            JSON.stringify({message: 'Success', student}),
            { status: 201 }
        );
    } catch (error) {
        console.error('Server Error', error);
        return new Response(JSON.stringify({ error: 'Server Error'}), {status: 500})
    }
}

export async function GET(req) {
    try {
        const students = await prisma.student.findMany({
            include: {
                course: true
            }
        });

        return new Response(JSON.stringify({ students }), {status: 200});
    } catch (error) {
        console.error("Server Error.",error);
        return new Response(JSON.stringify("Server Error.", error))
    }
}

export async function DELETE(req) {
    try {
        const {id} = await req.json();
        if (!id) {
            return new Response(
                JSON.stringify({ error: "Student ID is required" }),
                { status: 400 }
            );
        }
        const student = await prisma.student.findUnique({ where: {id}});

        if(!student) {
            return new Response(
                JSON.stringify({ error: 'Student not found' }),
                { status: 404 }
            );
        }

        await prisma.student.delete({
            where: { id },
        }); 

        return new Response(JSON.stringify({ message: 'Student deleted' }), {
            status: 200,
        });

    } catch (error) {
        console.error('Server Error', error);
        return new Response(JSON.stringify({ error: 'Server Error' }), {
            status: 500,
        });
    }
}
