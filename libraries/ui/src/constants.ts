export type Course = {
  title: string;
  description: string;
  courseType: CourseType;
  courseLength: string;
  imageSrc: string;
  url: string;
  isNew?: boolean;
  isFeatured?: boolean;
};

export type CourseType = 'Crash course' | 'Self-paced' | 'In-depth course';

export const COURSES: Course[] = [
  {
    title: 'The Future of AI Course',
    description: 'A self-paced, 2-hour course designed for people with no technical background to learn how AI will reshape our world.',
    courseType: 'Self-paced',
    courseLength: '',
    imageSrc: '/images/courses/future-of-ai.png',
    url: '/courses/future-of-ai/',
    isNew: true,
    isFeatured: true,
  },
  {
    title: 'Economics of Transformative AI',
    description: 'The risks and opportunities of advanced AI are evolving at unprecedented speed—and economists play a crucial role in shaping how society prepares for this transformation. This 9-week course is designed for economists who want to develop their understanding of transformative AI and its economic impacts.',
    courseType: 'In-depth course',
    courseLength: '9 weeks',
    imageSrc: '/images/courses/econ.jpg',
    url: 'https://aisafetyfundamentals.com/economics-of-tai/',
  },
  {
    title: 'AI Alignment',
    description: 'AI systems are rapidly becoming more capable and more general. Despite AI\'s potential to radically improve human society, there are still open questions about how we build AI systems that are controllable, aligned with our intentions and interpretable.',
    courseType: 'In-depth course',
    courseLength: '12 weeks',
    imageSrc: '/images/courses/alignment.jpg',
    url: 'https://aisafetyfundamentals.com/alignment/',
  },
  {
    title: 'AI Governance',
    description: 'The rise of any powerful technology demands a thoughtful approach to its governance and regulation. There has been increasing interest in how AI governance can and should mitigate extreme risks from AI, but it can be difficult to get up to speed on research and ideas in this area.',
    courseType: 'In-depth course',
    courseLength: '12 weeks',
    imageSrc: '/images/courses/gov.jpg',
    url: 'https://aisafetyfundamentals.com/governance/',
  },
] as const;

export const contactUsUrl = 'https://bluedot.org/contact';
