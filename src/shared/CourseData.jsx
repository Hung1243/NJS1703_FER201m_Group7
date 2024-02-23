// listOfCourse.jsx
const breadcrumbItems = [
  { text: "Homepage", link: "/" },
  { text: "Course", link: "/category" },
  // { text: 'Product', link: '/category/product' },
  // { text: 'Current Page', link: '/category/product/current' },
];
const categories = [
  { id: 1, name: "Communication Skills" },
  { id: 2, name: "Teamwork 101" },
  { id: 3, name: "Time Management" },
  { id: 4, name: "Problem Solving" },
  { id: 5, name: "Leadership Skills" },
];

const courses = [
  {
    id: 101,
    name: "Effective Communication",
    chapters: 5,
    instructorId: 201,
    imageLink: "../imagesCourse/creative.png",
    description: "Learn how to communicate effectively in various situations.",
    price: 29.99,
    categoryId: 2,
    createdDate: "2024-01-26",
  },
  {
    id: 102,
    name: "Effective Team Collaboration",
    chapters: 6,
    instructorId: 202,
    imageLink: "../imagesCourse/creative.png",
    description:
      "Enhance your teamwork skills and collaborate effectively with your team members.",
    price: 39.99,
    categoryId: 2,
    createdDate: "2024-01-27",
  },
  {
    id: 103,
    name: "Time Management Mastery",
    chapters: 7,
    instructorId: 203,
    imageLink: "../imagesCourse/creative.png ",
    description:
      "Learn the art of managing your time efficiently to boost productivity.",
    price: 49.99,
    categoryId: 3,
    createdDate: "2024-01-28",
  },
  // Add more courses as needed
  {
    id: 104,
    name: "Problem Solving Techniques",
    chapters: 8,
    instructorId: 204,
    imageLink: "../imagesCourse/creative.png",
    description: "Develop effective problem-solving skills.",
    price: 34.99,
    categoryId: 4,
    createdDate: "2024-01-29",
  },
  {
    id: 106,
    name: "Leadership Essentials",
    chapters: 9,
    instructorId: 206,
    imageLink: "../imagesCourse/creative.png",
    description: "Master the essential skills for effective leadership.",
    price: 44.99,
    categoryId: 5,
    createdDate: "2024-01-30",
  },
  // Add more courses as needed
];

const chapters = [
  {
    id: 1,
    name: "Introduction to Communication",
    lessons: 10,
    instructorId: 201,
    courseId: 101,
  },
  {
    id: 2,
    name: "Nonverbal Communication",
    lessons: 8,
    instructorId: 202,
    courseId: 101,
  },
  {
    id: 3,
    name: "Problem Identification",
    lessons: 12,
    instructorId: 204,
    courseId: 101,
  },
  {
    id: 4,
    name: "Decision Making Techniques",
    lessons: 10,
    instructorId: 205,
    courseId: 101,
  },
  // Additional chapters for each course
  {
    id: 5,
    name: "Communication Fundamentals",
    lessons: 10,
    instructorId: 201,
    courseId: 102,
  },
  {
    id: 6,
    name: "Effective Team Communication",
    lessons: 8,
    instructorId: 202,
    courseId: 102,
  },
  {
    id: 7,
    name: "Team Collaboration Strategies",
    lessons: 12,
    instructorId: 202,
    courseId: 102,
  },
  {
    id: 8,
    name: "Problem-Solving Approaches",
    lessons: 10,
    instructorId: 204,
    courseId: 102,
  },
  // Additional chapters for each course
  {
    id: 9,
    name: "Time Management Fundamentals",
    lessons: 10,
    instructorId: 203,
    courseId: 103,
  },
  {
    id: 10,
    name: "Advanced Time Management Techniques",
    lessons: 8,
    instructorId: 203,
    courseId: 103,
  },
  {
    id: 11,
    name: "Effective Prioritization Strategies",
    lessons: 12,
    instructorId: 203,
    courseId: 103,
  },
  // Add more chapters as needed
];

const lessons = [
  {
    id: 1,
    name: "Verbal vs Nonverbal Communication",
    videoId: "abc123",
    instructorId: 201,
    chapterId: 1, // Associated with the chapter with id 1
    courseId: 101, // Associated with the course with id 101
  },
  {
    id: 2,
    name: "Active Listening Techniques",
    videoId: "xyz456",
    instructorId: 202,
    chapterId: 1,
    courseId: 101,
  },
  {
    id: 3,
    name: "Analyzing Team Dynamics",
    videoId: "def789",
    instructorId: 202,
    chapterId: 2, // Associated with the chapter with id 2
    courseId: 101,
  },
  {
    id: 4,
    name: "Prioritizing Tasks Effectively",
    videoId: "ghi123",
    instructorId: 203,
    chapterId: 3,
    courseId: 101,
  },
  // Additional lessons for each course and chapter
  {
    id: 5,
    name: "Effective Teamwork Strategies",
    videoId: "jkl456",
    instructorId: 202,
    chapterId: 5, // Associated with the chapter with id 5
    courseId: 102, // Associated with the course with id 102
  },
  {
    id: 6,
    name: "Communication in Teams",
    videoId: "mno789",
    instructorId: 202,
    chapterId: 5,
    courseId: 102,
  },
  {
    id: 7,
    name: "Time Management Techniques",
    videoId: "pqr123",
    instructorId: 203,
    chapterId: 6, // Associated with the chapter with id 6
    courseId: 102,
  },
  {
    id: 8,
    name: "Setting Priorities",
    videoId: "stu456",
    instructorId: 203,
    chapterId: 6,
    courseId: 102,
  },
  // Add more lessons as needed
];

const Instructors = [
  {
    instructorId: 201,
    instructorName: "Kenny White",
  },
  {
    instructorId: 202,
    instructorName: "John Doe",
  },
  {
    instructorId: 203,
    instructorName: "Jane Smith",
  },
];

const Prices = [
  {
    name: "All",
  },
  {
    name: "Free",
  },
  {
    name: "Paid",
  },
];
export {
  breadcrumbItems,
  categories,
  courses,
  chapters,
  lessons,
  Instructors,
  Prices,
};
