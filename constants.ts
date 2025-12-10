import { Briefcase, Users, GraduationCap, TrendingUp } from 'lucide-react';
import { ServiceItem, Testimonial, HistoryItem, BlogPost } from './types';

export const SITE_CONFIG = {
  name: "Park Young-soo",
  title: "Executive Career Consultant",
  email: "ss035032@gmail.com",
  phone: "010-3786-0416",
  slogan: "은퇴 후에도 커리어는 계속됩니다.",
  subSlogan: "경험이 자산이 되는 인생 2막 설계를 도와드립니다.",
};

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: '1:1 Executive Coaching',
    description: '개인의 경력과 강점을 분석하여 은퇴 후 재취업, 창업, 혹은 포트폴리오 커리어를 설계하는 맞춤형 컨설팅입니다.',
    icon: Users,
    targetAudience: '은퇴 예정 임원, 전문직 종사자',
  },
  {
    id: 's2',
    title: '퇴직자 생애설계 프로그램',
    description: '변화 관리, 재무 설계, 건강, 여가 등 퇴직 후 삶의 전반을 준비하는 통합 교육 프로그램입니다.',
    icon: TrendingUp,
    targetAudience: '기업 퇴직 예정자 그룹',
  },
  {
    id: 's3',
    title: '기업 전직지원 교육',
    description: '기업 HR 차원에서 퇴직 직원들에게 제공하는 Outplacement 서비스 및 워크숍을 진행합니다.',
    icon: Briefcase,
    targetAudience: '기업 HR 담당자, 공공기관',
  },
  {
    id: 's4',
    title: '커리어 리더십 특강',
    description: '시니어의 경험을 조직 성과로 연결하는 리더십 및 소통 강의를 제공합니다.',
    icon: GraduationCap,
    targetAudience: '중간 관리자, 시니어 리더',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Park Ji-hoon',
    role: 'Former Managing Director',
    company: 'S Electronics',
    content: '막연했던 은퇴 후의 삶이 구체적인 계획으로 바뀌었습니다. 제가 가진 경험이 다른 곳에서 어떻게 쓰일 수 있는지 명확히 알게 되었습니다.',
    avatar: 'https://picsum.photos/100/100?random=1',
  },
  {
    id: 't2',
    name: 'Lee Min-young',
    role: 'HR Team Leader',
    company: 'K Finance Group',
    content: '퇴직 예정자 분들의 만족도가 매우 높았습니다. 단순한 정보 전달이 아니라 마음을 어루만져주는 진정성 있는 강의였습니다.',
    avatar: 'https://picsum.photos/100/100?random=2',
  },
  {
    id: 't3',
    name: 'Choi Sung-min',
    role: 'Startup Founder',
    company: '(Former Public Official)',
    content: '공직 생활 후 창업이라는 두려운 도전을 컨설턴트님 덕분에 용기 있게 시작할 수 있었습니다. 실질적인 로드맵이 큰 도움이 되었습니다.',
    avatar: 'https://picsum.photos/100/100?random=3',
  },
];

export const HISTORY: HistoryItem[] = [
  {
    id: 'h1',
    year: '2024',
    title: 'A Group Retirement Training',
    description: 'Conducted a 4-week specialized program for 50 retiring executives.',
    type: 'Corporate',
  },
  {
    id: 'h2',
    year: '2023',
    title: 'Public Sector Career Workshop',
    description: 'Keynote speaker for the National Pension Service career seminar.',
    type: 'Lecture',
  },
  {
    id: 'h3',
    year: '2023',
    title: 'Best Consultant Award',
    description: 'Awarded by the Korea Career Development Association.',
    type: 'Consulting',
  },
  {
    id: 'h4',
    year: '2022',
    title: 'Established "Second Act Lab"',
    description: 'Founded a private consultancy for senior career development.',
    type: 'Consulting',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: '은퇴 준비, 50대부터 시작해야 하는 이유',
    excerpt: '재무적인 준비만큼 중요한 것이 바로 심리적, 관계적 준비입니다. 50대에 반드시 체크해야 할 3가지를 알아봅니다.',
    date: 'Dec 01, 2024',
    category: 'Mindset',
    imageUrl: 'https://picsum.photos/800/600?random=10',
  },
  {
    id: 'b2',
    title: '재취업 성공을 부르는 이력서 작성법',
    excerpt: '과거의 영광만 나열하는 이력서는 통하지 않습니다. 기업이 원하는 문제 해결 역량을 보여주는 방법을 소개합니다.',
    date: 'Nov 15, 2024',
    category: 'Practical Skills',
    imageUrl: 'https://picsum.photos/800/600?random=11',
  },
  {
    id: 'b3',
    title: '창업, 경험이 독이 되지 않으려면',
    excerpt: '조직에서의 습관이 창업 초기에는 장애물이 될 수 있습니다. 시니어 창업자가 흔히 겪는 시행착오를 분석합니다.',
    date: 'Oct 20, 2024',
    category: 'Startups',
    imageUrl: 'https://picsum.photos/800/600?random=12',
  },
];