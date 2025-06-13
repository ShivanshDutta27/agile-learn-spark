import { User, Assessment, StudentAssessment, Progress, Question } from '../types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Pranali Sharma',
    email: 'teacher@example.com',
    role: 'teacher',
    avatar: '/P.png'
  },
  {
    id: '2',
    name: 'Aarav Gupta',
    email: 'student@example.com',
    role: 'student',
    avatar: '/A.avif'
  },
  {
    id: '3',
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    role: 'student',
    avatar: '/P.png'

  },
  {
    id: '4',
    name: 'Sanya Mehra',
    email: 'sanya.mehra@example.com',
    role: 'student',
    avatar: '/S.png'
  },
  {
    id: '5',
    name: 'Arjun Desai',
    email: 'arjun.desai@example.com',
    role: 'student',
    avatar: '/A.png'
  }
];

export const mockQuestions: Question[] = [
  {
    id: 'q1',
    text: 'How would you approach a situation where you are given a new project with little to no prior knowledge of the subject?',
    options: [
      { id: 'o1', text: 'I would try to learn the basics quickly and apply them as I go along.', isCorrect: true },
      { id: 'o2', text: 'I would avoid taking up the project due to lack of experience.', isCorrect: false },
      { id: 'o3', text: 'I would wait for someone else to guide me through the process.', isCorrect: false },
      { id: 'o4', text: 'I would focus on completing familiar tasks and avoid learning new concepts.', isCorrect: false }
    ],
    difficultyLevel: 'medium'
  },
  {
    id: 'q2',
    text: 'If you were asked to switch to a completely different subject or field of work, how would you handle it?',
    options: [
      { id: 'o5', text: 'I would embrace the challenge and focus on learning the new subject effectively.', isCorrect: true },
      { id: 'o6', text: 'I would resist the change and prefer staying within my comfort zone.', isCorrect: false },
      { id: 'o7', text: 'I would ask someone to help me throughout the transition period.', isCorrect: false },
      { id: 'o8', text: 'I would not be interested in switching fields at all.', isCorrect: false }
    ],
    difficultyLevel: 'medium'
  },
  {
    id: 'q3',
    text: 'When faced with an unfamiliar problem, what is your typical first step?',
    options: [
      { id: 'o9', text: 'I would break the problem into smaller, manageable parts and research each part.', isCorrect: true },
      { id: 'o10', text: 'I would try to solve it by following a similar solution I’ve used in the past.', isCorrect: false },
      { id: 'o11', text: 'I would get frustrated and avoid solving it altogether.', isCorrect: false },
      { id: 'o12', text: 'I would ask someone else to do it for me.', isCorrect: false }
    ],
    difficultyLevel: 'hard'
  },
  {
    id: 'q4',
    text: 'How do you react when you receive feedback that your approach to a problem needs improvement?',
    options: [
      { id: 'o13', text: 'I see it as an opportunity to learn and adjust my approach accordingly.', isCorrect: true },
      { id: 'o14', text: 'I ignore the feedback and continue doing things the same way.', isCorrect: false },
      { id: 'o15', text: 'I get defensive and argue about the feedback.', isCorrect: false },
      { id: 'o16', text: 'I would feel demotivated and may stop trying.', isCorrect: false }
    ],
    difficultyLevel: 'medium'
  },
  {
    id: 'q5',
    text: 'When learning a new concept, how do you ensure you retain and apply it effectively?',
    options: [
      { id: 'o17', text: 'I try to teach it to someone else or apply it in a practical scenario to reinforce my understanding.', isCorrect: true },
      { id: 'o18', text: 'I only focus on memorizing the theory without applying it.', isCorrect: false },
      { id: 'o19', text: 'I skip through the material quickly to get to the end.', isCorrect: false },
      { id: 'o20', text: 'I wait for a test or assessment to determine if I’ve learned it well enough.', isCorrect: false }
    ],
    difficultyLevel: 'hard'
  }
];

export const mockAssessments: Assessment[] = [
  {
    id: 'a1',
    title: 'Learning Agility Test - General Adaptability',
    description: 'This assessment will test your ability to adapt to new learning scenarios and problem-solving challenges.',
    questions: [mockQuestions[0], mockQuestions[2], mockQuestions[3]],
    timeLimit: 15,
    createdBy: '1',
    createdAt: '2023-01-15T12:00:00Z',
    updatedAt: '2023-01-15T12:00:00Z',
    status: 'published'
  },
  {
    id: 'a2',
    title: 'Adaptability and Problem Solving',
    description: 'This quiz focuses on how well you can adapt and solve problems when you face new challenges.',
    questions: [mockQuestions[1], mockQuestions[4]],
    timeLimit: 10,
    createdBy: '1',
    createdAt: '2023-02-10T15:30:00Z',
    updatedAt: '2023-02-10T15:30:00Z',
    status: 'published'
  },
  {
    id: 'a3',
    title: 'Flexibility in Learning',
    description: 'A test that focuses on your ability to stay flexible and adaptable while learning.',
    questions: [mockQuestions[0], mockQuestions[2], mockQuestions[1]],
    timeLimit: 12,
    createdBy: '1',
    createdAt: '2023-03-05T09:45:00Z',
    updatedAt: '2023-03-05T09:45:00Z',
    status: 'draft'
  }
];

export const mockStudentAssessments: StudentAssessment[] = [
  {
    id: 'sa1',
    assessmentId: 'a1',
    studentId: '2',
    startedAt: '2023-01-20T14:30:00Z',
    completedAt: '2023-01-20T14:38:00Z',
    score: 80,
    answers: [  ],
    status: 'completed',
  },
  {
    id: 'sa2',
    assessmentId: 'a1',
    studentId: '3',
    startedAt: '2023-01-22T09:00:00Z',
    completedAt: '2023-01-22T09:08:00Z',
    score: 60,
    answers: [  ],
    status: 'completed',
  },
  {
    id: 'sa3',
    assessmentId: 'a1',
    studentId: '4',
    startedAt: '2023-01-23T11:15:00Z',
    completedAt: '2023-01-23T11:24:00Z',
    score: 90,
    answers: [  ],
    status: 'completed',
  },
  {
    id: 'sa4',
    assessmentId: 'a2',
    studentId: '2',
    startedAt: '2023-02-15T10:15:00Z',
    completedAt: '2023-02-15T10:19:00Z',
    score: 70,
    answers: [],
    status: 'completed',
  },
  {
    id: 'sa5',
    assessmentId: 'a2',
    studentId: '5',
    startedAt: '2023-02-16T14:00:00Z',
    completedAt: '2023-02-16T14:05:00Z',
    score: 85,
    answers: [ ],
    status: 'completed',
  },
];

export const mockProgress: Progress[] = [
  {
    studentId: '2',
    assessments: [
      { assessmentId: 'a1', score: 80, completedAt: '2023-01-20T14:38:00Z', timeSpent: 480, difficultyLevel: 'medium' },
      { assessmentId: 'a2', score: 70, completedAt: '2023-02-15T10:19:00Z', timeSpent: 240, difficultyLevel: 'easy' },
    ],
    averageScore: 75,
    averageTimeSpent: 360,
    improvementRate: 0.1,
  },
  {
    studentId: '3',
    assessments: [
      { assessmentId: 'a1', score: 60, completedAt: '2023-01-22T09:08:00Z', timeSpent: 480, difficultyLevel: 'medium' },
    ],
    averageScore: 60,
    averageTimeSpent: 480,
    improvementRate: 0,
  },
  {
    studentId: '4',
    assessments: [
      { assessmentId: 'a1', score: 90, completedAt: '2023-01-23T11:24:00Z', timeSpent: 540, difficultyLevel: 'medium' },
    ],
    averageScore: 90,
    averageTimeSpent: 540,
    improvementRate: 0,
  },
  {
    studentId: '5',
    assessments: [
      { assessmentId: 'a2', score: 85, completedAt: '2023-02-16T14:05:00Z', timeSpent: 300, difficultyLevel: 'medium' },
    ],
    averageScore: 85,
    averageTimeSpent: 300,
    improvementRate: 0,
  },
];