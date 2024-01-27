// listOfCourse.jsx

const categories = [
  { id: 1, name: "Communication Skills" },
  { id: 2, name: "Teamwork" },
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
    imageLink: "link-to-image.jpg",
    description: "Learn how to communicate effectively in various situations.",
    price: 29.99,
    categoryId: 1,
    createdDate: "2024-01-26",
  },
  {
    id: 102,
    name: "Effective Team Collaboration",
    chapters: 6,
    instructorId: 202,
    imageLink: "link-to-image-team.jpg",
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
    imageLink: "link-to-image-time.jpg",
    description:
      "Learn the art of managing your time efficiently to boost productivity.",
    price: 49.99,
    categoryId: 3,
    createdDate: "2024-01-28",
  },
  // Add more courses as needed
];

const chapters = [
  {
    id: 1,
    name: "Introduction to Communication",
    lessons: 10,
    instructorId: 201,
  },
  { id: 2, name: "Nonverbal Communication", lessons: 8, instructorId: 202 },
  { id: 3, name: "Problem Identification", lessons: 12, instructorId: 204 },
  { id: 4, name: "Decision Making Techniques", lessons: 10, instructorId: 205 },
  // Add more chapters as needed
];

const lessons = [
  {
    id: 1,
    name: "Verbal vs Nonverbal Communication",
    videoId: "abc123",
    instructorId: 201,
    chapterId: 1,
  },
  {
    id: 2,
    name: "Active Listening Techniques",
    videoId: "xyz456",
    instructorId: 202,
    chapterId: 1,
  },
  {
    id: 3,
    name: "Analyzing Team Dynamics",
    videoId: "def789",
    instructorId: 202,
    chapterId: 2,
  },
  {
    id: 4,
    name: "Prioritizing Tasks Effectively",
    videoId: "ghi123",
    instructorId: 203,
    chapterId: 3,
  },
  // Add more lessons as needed
];

export { categories, courses, chapters, lessons };
