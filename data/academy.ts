export interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
}

export const academyData = {
  name: "Rathod's Ideal Academy",
  tagline: "Guiding Students Towards Academic Excellence",
  location: "Agrahara Circle, Mysuru",
  phones: [
    "9741605750",
    "6360944202"
  ],
  courses: [
    {
      id: "school",
      name: "8th, 9th & 10th Coaching",
      description: "Strong conceptual foundation for school students with regular tests and personal attention.",
      duration: "Full Academic Year"
    },
    {
      id: "puc",
      name: "PUC Commerce & Science",
      description: "Focused coaching for PUC students with exam oriented preparation.",
      duration: "2 Years"
    },
    {
      id: "degree",
      name: "BBA & BCom Classes",
      description: "Expert coaching for commerce and business students.",
      duration: "Semester Based"
    },
    {
      id: "competitive",
      name: "IIT JAM & KSET Coaching",
      description: "Advanced coaching for competitive academic examinations.",
      duration: "Custom Programs"
    },
    {
      id: "tests",
      name: "Test Series",
      description: "Regular evaluation through structured test series.",
      duration: "Throughout Course"
    },
    {
      id: "remedial",
      name: "Remedial Classes",
      description: "Special support sessions for students needing extra help.",
      duration: "Flexible"
    }
  ]
};
