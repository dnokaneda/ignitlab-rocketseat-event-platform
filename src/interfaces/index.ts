export interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class'
}

export interface GetLessonsResponse {
  lessons: Array<{
    id: string;
    lessonType: 'live' | 'class';
    availableAt: string;
    slug: string;
    title: string;
  }>
}