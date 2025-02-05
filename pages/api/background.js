const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Institute of Science & Technology Advanced Development",
        degree: "IT Expert",
        detail:
          "IT Expert's Degree in Information Technology from Institute of Science & Technology Advanced Development, Peshawar.",
        year: "2023-2024",
      },
      {
        id: 1,
        title: "The University of Cambodia",
        degree: "Information Technology",
        detail:
          "Graduated in Information Technology from The University of Cambodia, Phnom Penh.",
        year: "2020-2024",
      },
      // {
      //     id: 2,
      //     title: 'Falcon Academy',
      //     degree: 'SSC, Science Subjects',
      //     detail: "Completed SSC part 1 and part 2 in Science subjects from Falcon Academy Seni Gumbat Kohat",
      //     year: '2013-2015'
      // },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Cambodis Air Traffic Services",
        role: "Full Stack Developer",
        url: "https://cats.com.kh/",
        desc: "As a Full Stack Web, I use React, JavaScript, and  Spring boot to build System web applications.",
        year: "02/2024 - Present",
        location: "Phnom Penh, Cambodia",
      },
      {
        id: 2,
        title: "CSTAD",
        role: "DevOps Engineer",
        url: "https://cstad.edu.kh/",
        desc: "As a DevOps Engineer, I use Jenkins, Docker, Kubernetes, and AWS to deploy and maintain the system.",
        year: "07/2023 - 01/2024",
        location: "Phnom Penh, Cambodia",
      },
      {
        id: 3,
        title: "CSTAD",
        role: "Backend Developer",
        url: "https://cstad.edu.kh/",
        desc: "As a Backend Developer, I use Spring boot, Java, and MySQL to build the system's backend.",
        year: "02/2023 - 07/2024",
        location: "Phnom Penh, Cambodia",
      },
    //   {
    //     id: 3,
    //     title: "Encoder Bytes",
    //     role: "PHP Developer",
    //     url: "https://www.encoderbytes.com/",
    //     desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
    //     year: "09/2020 - 02/2021",
    //     location: "Peshawar, Pakistan",
    //   },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
