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

export interface VideoProps {
  lessonSlug: string
}

export interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    }
  }
}