import { Course } from "@/types/Course";
import Link from "next/link";

type Props = {
  courses: Course[];
};

const CourseList = ({ courses }: Props) => {
  const thClass = "px-6 py-3";
  return (
    <table className="min-w-full border-separate divide-none ">
      <thead className="text-sm font-light tracking-widest bg-gray-700 ">
        <tr className="text-left uppercase ">
          <th className="px-6 py-3 rounded-tl-lg">Course</th>
          <th>Language</th>
          <th className="">Status</th>
          <th className=""></th>
          <th className="rounded-tr-lg"></th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course.name}>
            <td>{course.name}</td>
            <td></td>
            <td>{course.status}</td>
            <td>
              <Link href="/">
                <a>View</a>
              </Link>
            </td>
            <td>
              <Link href="/">
                <a>Edit</a>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseList;
