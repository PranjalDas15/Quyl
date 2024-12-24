import prisma from "@/lib/prisma";

export async function GET(req) {
    try {
        const courses = await prisma.course.findMany();

        if(courses.length === 0) {
            return new Response(JSON.stringify({message: "No Courses yet"}), {status: 204});
        }

        return new Response(JSON.stringify({ courses }), {status: 200});
    } catch (error) {
        console.error("Server Error.",error);
        return new Response(JSON.stringify("Server Error.", error))
    }
}