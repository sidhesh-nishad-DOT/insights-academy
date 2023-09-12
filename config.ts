import campus1 from './src/images/campus/gas/gallery/1.jpeg';

// putting knk campus bg images here
import campusbg1 from './src/images/campus/knk/slides/1.jpeg';
import campusbg2 from './src/images/campus/knk/slides/2.jpeg';
import campusbg3 from './src/images/campus/knk/slides/3.jpeg';
import campusbg4 from './src/images/campus/knk/slides/4.jpeg';
import campusbg6 from './src/images/campus/knk/slides/6.jpeg';
import principalknk from "./src/images/campus/knk/knk_principal.jpeg"
import kindergartenknk from "./src/images/campus/knk/kindergartenknk.jpeg"
import grade6knk from "./src/images/campus/knk/6-10knk.jpeg"
import grade1knk from "./src/images/campus/knk/1-5knk.jpeg"
import principalmrth from "./src/images/campus/marth/marth_principal.jpeg"

// putting marth campus bg images here
import marthcampusbg1 from './src/images/campus/marth/slides/1.jpeg';
import marthcampusbg2 from './src/images/campus/marth/slides/2.jpeg';
import marthcampusbg3 from './src/images/campus/marth/slides/3.jpeg';
import marthcampusbg4 from './src/images/campus/marth/slides/4.jpeg';
import marthcampusbg5 from './src/images/campus/marth/slides/6.jpeg';

import RoboticClass from "./src/images/campus/knk/facilities/robotics.jpeg";
import ComputerClass from "./src/images/campus/knk/facilities/codingandcs.jpeg";
import KgClass from "./src/images/campus/knk/facilities/acitivitiesroom.jpeg";
import sports from "./src/images/campus/knk/facilities/sports.jpeg";
import zumba from "./src/images/campus/knk/facilities/zumba.jpeg";
import music from "./src/images/campus/knk/facilities/music.jpeg";

import preview1 from './src/images/campus/gas/preview.png'
import preview2 from './src/images/campus/gaw/preview.png';

import campus2 from './src/images/campus/gas/gallery/2.jpeg';
import campus3 from './src/images/campus/gas/gallery/3.jpeg';

import testimonial1 from './src/images/testimonial/1.png';
import testimonial2 from './src/images/testimonial/2.png';
import testimonial3 from './src/images/testimonial/3.png';

import leadership1 from "./src/images/leadership/1.png"
import topper1 from "./src/images/campus/toppers/topper.png"
import topper2 from "./src/images/campus/toppers/topper2.png"
import topper3 from "./src/images/campus/toppers/topper3.png"
import topper4 from "./src/images/campus/toppers/topper4.png"
import Kindergarten from "./src/images/campus/gaw/updates/1.jpeg"
import Primary from "./src/images/campus/gaw/updates/1.jpeg"
import Secondary from "./src/images/campus/gaw/updates/1.jpeg"





type Campus = {
  title: string;
  description: string;
  hightlights?: string[];
  internalName: string;
  images: string[];
  topHeading?: string;
  subHeading?: string;
  bgImage?: string;
  ctaText: string;
  leaderMessage?: LeaderMessage[];
  academic?: Academic[];
  facilities?: Facilities[];
  contact?: Contact;
  toppers?: Toppers[];
  admissionLink?: string;
};
export type ContactDetails = {
  label: string;
  value: string;
  type: 'contact' | 'mail' | 'address',
}

type Contact = {
  details: {
    [key: string]: ContactDetails | undefined; // Add index signature
    phoneNo?: ContactDetails;
    workingHours?: ContactDetails;
    address?: ContactDetails;
  };
  mapEmbedLink: string;
  mindlerLink?: string;
}

type Facilities = {
  title: string;
  description: string;
  images: string[];
  bgColor?: string;

}

type Academic = {
  title: string;
  description: string;
  images: string[];
  highlights?: string[];
}
type LeaderMessage = {
  image: string;
  name: string;
  role: string;
  body: string;
}


type Testimonial = {
  image: string;
  quote: string;
  ctaText?: string;
  ctaLink?: string;
  author?: string;
};

type School = {
  discription: string;
};

type Testimonials = {
  title: string;
  subtitle: string;
  data: Testimonial[];
};
type indexPage =  {
    hero : {
      title: string;
      subtitle: string; 
      bgImage: string;
      topHeading: string;
      description: string;
    }
}
type LeaderShipData = {
  name: string;
  role: string;
  image: string;
}
type LeaderShip = {
  data: {
    trustee: LeaderShipData[]
    government: LeaderShipData[]

  }
}
type Toppers = {
  name: string;
  ranks: string;
  marks: string;
  image: string;
}

interface Data {
  indexPage: indexPage;
  ctaLink: string;
  school: School;
  campus: Campus[];
  testimonials: Testimonials;
  leadership: LeaderShip; 
}

const data: Data = {
  
  ctaLink: 'https://www.insightacademy.in/',
  school: {
    discription: 'Insight Academy, launched in 2007, ranks among the best schools in Bangalore. Upholding the principle of "Quality Education for All", we create an inclusive, secular educational landscape where all students can flourish, instilling strong academics and comprehensive growth beyond traditional classroom confines.',
    
  },
  campus: [
    {
      title: 'Kanakapura Campus (ICSE)',
      internalName: 'kanakapura',
      subHeading: 'Marathahalli Campus (CBSE)',
      topHeading: "Welcome to",
      description: 'Located near the peaceful ISRO Layout amidst greenery, we offer focused learning within our ICSE-affiliated institution.',
      admissionLink: "https://admissions.neverskip.com/767a2f61336a6e5954447361627856657465723575773d3d/utms-705168We8&utmc-395849Sc9",
      images: [
        {type: 'image', uri: campusbg1, position: 'center 10%'},
        {type: 'image', uri: campusbg2, position: 'center'},
        {type: 'image', uri: campusbg3, position: 'center'},
        {type: 'image', uri: campusbg4, position: 'center'},
        {type: 'image', uri: campusbg6, position: 'center'},
      ],
      bgImage: campus1,
      ctaText: 'Explore Campus',
      leaderMessage: [
        {
          image: principalknk,
          name: "Mrs.May Ruth D'Souza",
          role: 'PRINCIPAL',
          body: "Insight Academy, founded in 2007, is a school dedicated to providing quality education for all children, regardless of their intelligence, physical condition, or challenges. With a focus on holistic development and a committed team of well-trained teachers, the school goes beyond the minimum requirements to offer additional facilities and enhance students' learning abilities. The strong partnership between students, parents, and the institution fosters a foundation for a better future."
        }
      ],
      academic: [
        {
          title: 'Kindergarten',
          description: 'Our Early Childhood Education (ECE) program, designed for 3 to 5-year-olds, goes beyond primary school preparation, focusing on holistic child development.',
          images: [kindergartenknk],
          highlights: [
           "1:25 Student-to-Teacher ratio",
           "Multi-sensory, experiential learning approach",
           "Emphasis on communication skills",
           "Extracurriculars activities like swimming, tennis, music & art"
          ],
        },
        {
          title: 'Class 1-5',
          description: 'At Insight Academy, students from class 1-5 are nurtured in an environment that is sensitive to their social and emotional needs, fostering them into compassionate individuals.',
          images: [grade1knk],
          highlights: [
            "Limited class sizes",
            "Innovative 'Creative Worksheet' monitoring",
            "Engaging physical and skill-based activities",
            "Experiential learning for lifelong passion."
           ],
        },
        {
          title: 'Class 6-10',
          description: 'Preparation for board exams starts in class 6 at Insight Academy, instilling not just academic rigor but also discipline, confidence, and time management skills.',
          images: [grade6knk],
          highlights: [
            "Focus is to prepare students for Grade 10",
            "Assessments would be 2 Tests & 2 exams/year",
            "NEP focused learning in Robotics & Commerce",
            "After-school activities focused on sports like Basketball, Football, Cricket & Swimming"
           ],
        },
      ],
      facilities: [
        {
          title: 'Robotics Class',
          description: "Unleash innovation at our school's robotics classes. With an exclusive robotics lab, students engage in immersive, practical learning, nurturing a passion for technology and problem-solving.",
          images: [RoboticClass],
          bgColor: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(245, 204, 79, 0.20) 100%);',
          
        },
        
        {
          title: 'Coding & CS Class',
          description: "Insight Academy integrates technology into education, offering computer learning with dedicated labs for both primary and senior grades. Each student has access to their individual computer, following a syllabus curated by expert computer educators.",
          images: [ComputerClass],
          
        },
        
        {
          title: 'Curiosity Room for KG',
          description: "Laughter and learning intertwine for our youngest explorers here. Bursting with playful adventures, this vibrant wonderland sparks joy, imagination, and endless learning.",
          images: [KgClass]
        },

        {
          title: 'Sports Academy',
          description: "Our comprehensive campus facilities encompass a diverse range of sports. With expert trainers, students can engage in activities like football, basketball, cricket, and more. Our dedicated sports academy includes options like table tennis, throwball, volleyball, skating and swimming! ",
          images: [sports]
        },

        {
          title: 'Yoga & Zumba',
          description: "Our experienced yoga instructors  guide students through each pose, and help understand the magic of breathing, stretching, and finding their inner calm. Students also get their groove on with our super fun Zumba sessions, where they can dance, sweat, and be fit while having an absolute blast!",
          images: [zumba]
        },

        {
          title: 'Music Classes',
          description: "Students unleash their musical potential with our diverse range of classes. From piano and guitar to drums, veena, and singing, our expert instructors help cultivate their passion, bringing melodies to life in an enriching and supportive environment. ",
          images: [music]
        }
      ],
      contact: {
        details: {
          phoneNo: {
            label: 'Call us On',
            value: '+91 80 26667333, +91 80 26667444',
            type: 'contact'
          },
          workingHours: {
            label: 'Mail us at',
            value: 'info@insightacademy.in',
            type: 'mail'
          },
          address: {
            label: 'We are here',
            value: '#20, Vasanthpura Main Road, Off Kanakapura Road, Bangalore – 560 062',
            type: 'address'
          }
        },
        mapEmbedLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2290894404828!2d77.55730367661839!3d12.892985516593843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fe19b3ba497%3A0x88e55fe492a8db63!2sInsight%20Academy!5e0!3m2!1sen!2sin!4v1694550190874!5m2!1sen!2sin',
        mindlerLink: 'https://www.mindler.com/schools/GLENTREE2023'
      },
      toppers: [
        {
          name: 'Aniksha <br> Raghuveera Kamat',
          ranks: 'Rank 1',
          marks: '98.8%',
          image: topper1,
        },
        {
          name: 'Anshul A Gadgoli',
          ranks: 'Rank 2',
          marks: '98.8%',
          image: topper2,
        },
        {
          name: 'Harsh Shalgar',
          ranks: 'Rank 3',
          marks: '98.8%',
          image: topper3,
        },
        {
          name: 'Hasini Gupta PS',
          ranks: 'Rank 4',
          marks: '98.8%',
          image: topper4,
        },
      ]
      
    },

    {
      title: 'Marathahalli (CBSE)',
      internalName: 'marathahalli',
      subHeading: 'Marathahalli Campus (CBSE)',
      topHeading: "Welcome to",
      description: 'Conveniently positioned in Marathahalli, we foster comprehensive education in a CBSE-affiliated framework.',
      admissionLink: "https://admissions.neverskip.com/474e6133503443334b7142572f472b5a5474475363673d3d/utms-6271788&utmc-6f4d699",
      images: [
        {uri: marthcampusbg1, type: 'image', position: 'center'},
        {uri: marthcampusbg2, type: 'image', position: 'center'},
        {uri: marthcampusbg3, type: 'image', position: 'center'},
        {uri: marthcampusbg4, type: 'image', position: 'center'},
        {uri: marthcampusbg5, type: 'image', position: 'center'},
      ],
      bgImage: campus1,
      ctaText: 'Explore Campus',
      leaderMessage: [
        {
          image: principalmrth,
          name: 'Mrs. Ramola Melita Dsouza',
          role: 'PRINCIPAL',
          body: 'At Insight, we prioritize nurturing creativity and critical thinking in students. Our mission is to foster happiness, peace, and harmony while preparing them for a rapidly changing world. Our dedicated teachers guide students to understand and imagine beyond classroom boundaries. We offer a well-rounded curriculum and encourage participation in co-curricular activities, promoting qualities like honesty, empathy, and respect, shaping them into future global citizens.'
        }
      ],
      academic: [
        {
          title: 'Kindergarten',
          description: 'Our Early Childhood Education (ECE) program, designed for 3 to 5-year-olds, goes beyond primary school preparation, focusing on holistic child development. Key features of our ECE program include a 1:25 teacher-student ratio, multisensory learning, teachers skilled in personalized attention, communication skills development, and a strong emphasis on extracurricular activities like fine arts and sports, creating a foundation for lifelong learning and wellbeing.',
          images: [campus1],
          highlights: [
           "1:25 Student-to-Teacher ratio",
           "Multi-sensory, experiential learning approach",
           "Emphasis on communication skills",
           "Extracurriculars activities like swimming, tennis, music & art"
          ],
        },
        {
          title: 'Elementary (1-5)',
          description: 'Our Early Childhood Education (ECE) program, designed for 3 to 5-year-olds, goes beyond primary school preparation, focusing on holistic child development. Key features of our ECE program include a 1:25 teacher-student ratio, multisensory learning, teachers skilled in personalized attention, communication skills development, and a strong emphasis on extracurricular activities like fine arts and sports, creating a foundation for lifelong learning and wellbeing.',
          images: [campus1],
          highlights: [
            "1:25 Student-to-Teacher ratio",
            "Multi-sensory, experiential learning approach",
            "Emphasis on communication skills",
            "Extracurriculars activities like swimming, tennis, music & art"
           ],
        },
        {
          title: 'Higher Primary (6-8)',
          description: 'Our Early Childhood Education (ECE) program, designed for 3 to 5-year-olds, goes beyond primary school preparation, focusing on holistic child development. Key features of our ECE program include a 1:25 teacher-student ratio, multisensory learning, teachers skilled in personalized attention, communication skills development, and a strong emphasis on extracurricular activities like fine arts and sports, creating a foundation for lifelong learning and wellbeing.',
          images: [campus1],
          highlights: [
            "1:25 Student-to-Teacher ratio",
            "Multi-sensory, experiential learning approach",
            "Emphasis on communication skills",
            "Extracurriculars activities like swimming, tennis, music & art"
           ],
        },
        {
          title: 'High School (9-10)',
          description: 'Our Early Childhood Education (ECE) program, designed for 3 to 5-year-olds, goes beyond primary school preparation, focusing on holistic child development. Key features of our ECE program include a 1:25 teacher-student ratio, multisensory learning, teachers skilled in personalized attention, communication skills development, and a strong emphasis on extracurricular activities like fine arts and sports, creating a foundation for lifelong learning and wellbeing.',
          images: [campus1],
          highlights: [
            "1:25 Student-to-Teacher ratio",
            "Multi-sensory, experiential learning approach",
            "Emphasis on communication skills",
            "Extracurriculars activities like swimming, tennis, music & art"
           ],
        },
      ],
      facilities: [
        {
          title: 'Robotics Class',
          description: 'Insight Academy emphasizes hands-on learning through our continually upgraded, modern labs. With  ',
          images: [RoboticClass],
          bgColor: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(245, 204, 79, 0.20) 100%);',
          
        },
        
        {
          title: 'Computer Science Class',
          description: "Insight Academy's library, a sanctuary for book enthusiasts, is spacious and bright, housing a diverse ",
          images: [ComputerClass],
          
        },
        
        {
          title: 'Activities Room for KG',
          description: "Insight Academy integrates technology into education, providing computer learning with a dedicated",
          images: [KgClass]
        },
        {
          title: 'Computer Science Class',
          description: "Insight Academy's library, a sanctuary for book enthusiasts, is spacious and bright, housing a diverse ",
          images: [ComputerClass],
          
        },
      ],
      contact: {
        details: {
          phoneNo: {
            label: 'Phone No',
            value: '+91 89717 77444, +91 89717 77333',
            type: 'contact'
          },
          workingHours: {
            label: 'Mail us at',
            value: 'info@insightacademy.in',
            type: 'mail'
          },
          address: {
            label: 'We are here',
            value: 'Opp. Prestige Tech Park, Off. Marathahalli – Sarjapura Outer Ring Road, Kadubeesanahalli, Marathahalli, Bangalore – 560 103',
            type: 'address'
          }
        },
        mapEmbedLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124455.25147306037!2d77.4774783226767!3d12.893145184611434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae124cb9470d67%3A0x3e746feb4a1d3908!2sInsight%20Academy%20School%20Bangalore!5e0!3m2!1sen!2sin!4v1694550265537!5m2!1sen!2sin',
        mindlerLink: 'https://www.mindler.com/schools/GLENTREE2023'
      },
      toppers: [
        {
          name: 'Aniksha <br> Raghuveera Kamat',
          ranks: 'Rank 1',
          marks: '98.8%',
          image: topper1,
        },
        {
          name: 'Anshul A Gadgoli',
          ranks: 'Rank 2',
          marks: '98.8%',
          image: topper2,
        },
        {
          name: 'Harsh Shalgar',
          ranks: 'Rank 3',
          marks: '98.8%',
          image: topper3,
        },
        {
          name: 'Hasini Gupta PS',
          ranks: 'Rank 4',
          marks: '98.8%',
          image: topper4,
        },
      ]
      
    },
    
  ],
  testimonials: {
    title: 'Insight Voices',
    subtitle: 'Stories of Transformation and Growth',
    data: [
      {
        image: testimonial3,
        quote: '“This school offers more than just education. Teachers give individual attention, and activities add to the wholesome learning experience...',
        ctaText: 'Watch Video',
        ctaLink: '',
      },
      {
        image: testimonial2,
        quote: 'Insight Academy has enriched my life! The supportive teachers and engaging activities have truly made my school years memorable.',
        author: '- SANATAN (grade 10)',
      },
      {
        image: testimonial1,
        quote: 'At Insight Academy, every day is an adventure! The fascinating blend of academics and co-curriculars instills in us the love for learning.',
        author: '- SANATAN (grade 10)',

      },
    ],
  },
  leadership: {
    data: {
      trustee: [
        { 
          name: 'Mr. S. K. Gupdta',
          role: 'Trustee',
          image: leadership1
        },
        {
          name: ' S. K. Gupdta',
          role: 'Trustee',
          image: leadership1
        },
        {
          name: ' S. K. Gupdta',
          role: 'Trustee',
          image: leadership1
        },
        {
          name: ' S. K. Gupdta',
          role: 'Trustee',
          image: leadership1
        }
      ],
      government: [
        { 
          name: 'Mr. S. K. Gupdta',
          role: 'Governing Council',
          image: leadership1
        },
        {
          name: ' S. K. Gupdta',
          role: 'Governing Council',
          image: leadership1
        },
        {
          name: ' S. K. Gupdta',
          role: 'Governing Council',
          image: leadership1
        },
        {
          name: ' S. K. Gupdta',
          role: 'Governing Council',
          image: leadership1
        }
    ]
  }
}
};






export default data;