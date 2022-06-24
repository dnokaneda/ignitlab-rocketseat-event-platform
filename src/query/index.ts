import { gql } from '@apollo/client'

export const GET_LESSONS = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      slug
      title
    }
  }
` 

export const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: {slug: $slug}) {
      id
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`
