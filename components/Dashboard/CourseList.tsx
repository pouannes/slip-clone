import { Course } from "@/types/Course";
import Link from "next/link";

type Props = {
  courses: Course[];
};

const CourseList = ({ courses }: Props) => {
  const spacing = "px-6 py-3";
  return (
    <table className="min-w-full border border-separate rounded-lg divide-none dark:border-gray-700">
      <thead className="text-sm font-light tracking-wider dark:bg-gray-700 ">
        <tr className="text-left uppercase ">
          <th className={`${spacing} rounded-tl-lg`}>Course</th>
          <th className={spacing}>Language</th>
          <th className={spacing}>Status</th>
          <th className={spacing}></th>
          <th className={`${spacing} rounded-tr-lg`}></th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr
            key={course.id}
            className={`${
              index % 2 === 0 ? "dark:bg-gray-800" : "dark:bg-gray-790"
            }`}
          >
            <td
              className={`${spacing} ${
                index === courses.length - 1 ? "rounded-bl-lg" : ""
              }`}
            >
              {course.title}
            </td>
            <td className={spacing}></td>
            <td className={spacing}>{course.published_status}</td>
            <td className={spacing}>
              <Link href="/">
                <a className="dark:text-blue-500 hover:underline">View</a>
              </Link>
            </td>
            <td
              className={`${spacing} ${
                index === courses.length - 1 ? "rounded-br-lg" : ""
              }`}
            >
              <Link href="/">
                <a className="dark:text-blue-500 hover:underline">Edit</a>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseList;
