
export interface Student {
  id: string;
  name: string;
  isPresent: boolean;
  avatar?: string;
}

export interface Lesson {
  id: string;
  title: string;
  date: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  attendanceCount: number;
  totalCount: number;
}

export interface ClassGroup {
  id: string;
  name: string;
  studentCount: number;
  lastLessonDate: string;
}
