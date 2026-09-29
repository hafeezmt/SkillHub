"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  name: string;
  email: string;
};

type AssignmentSubmission = {
  lessonId: string;
  text: string;
  submittedAt: string;
};

type QuizResult = {
  courseId: string;
  score: number;
  total: number;
  completedAt: string;
};

type AuthState = {
  user: User | null;
  enrolledCourseIds: string[];
  completedLessonIds: string[];
  submissions: AssignmentSubmission[];
  quizResults: QuizResult[];
  signup: (data: { name: string; email: string; password: string }) => void;
  login: (data: { email: string; password: string }) => boolean;
  logout: () => void;
  enroll: (courseId: string) => void;
  completeLesson: (lessonId: string) => void;
  submitAssignment: (lessonId: string, text: string) => void;
  saveQuizResult: (courseId: string, score: number, total: number) => void;
  progressPercent: (totalLessons: number) => number;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      enrolledCourseIds: [],
      completedLessonIds: [],
      submissions: [],
      quizResults: [],
      signup: ({ name, email }) => {
        set({
          user: {
            id: `user-${Date.now()}`,
            name,
            email,
          },
          enrolledCourseIds: ["va-beginner"],
        });
      },
      login: ({ email }) => {
        const existing = get().user;
        if (existing && existing.email.toLowerCase() === email.toLowerCase()) {
          return true;
        }
        const name = email.split("@")[0]?.replace(/[._]/g, " ") || "Learner";
        set({
          user: {
            id: `user-${Date.now()}`,
            name: name.replace(/\b\w/g, (c) => c.toUpperCase()),
            email,
          },
          enrolledCourseIds: get().enrolledCourseIds.length
            ? get().enrolledCourseIds
            : ["va-beginner"],
        });
        return true;
      },
      logout: () => set({ user: null }),
      enroll: (courseId) =>
        set((state) => ({
          enrolledCourseIds: state.enrolledCourseIds.includes(courseId)
            ? state.enrolledCourseIds
            : [...state.enrolledCourseIds, courseId],
        })),
      completeLesson: (lessonId) =>
        set((state) => ({
          completedLessonIds: state.completedLessonIds.includes(lessonId)
            ? state.completedLessonIds
            : [...state.completedLessonIds, lessonId],
        })),
      submitAssignment: (lessonId, text) =>
        set((state) => ({
          submissions: [
            ...state.submissions.filter((item) => item.lessonId !== lessonId),
            {
              lessonId,
              text,
              submittedAt: new Date().toISOString(),
            },
          ],
        })),
      saveQuizResult: (courseId, score, total) =>
        set((state) => ({
          quizResults: [
            ...state.quizResults.filter((item) => item.courseId !== courseId),
            {
              courseId,
              score,
              total,
              completedAt: new Date().toISOString(),
            },
          ],
        })),
      progressPercent: (totalLessons) => {
        if (!totalLessons) return 0;
        const done = get().completedLessonIds.length;
        return Math.min(100, Math.round((done / totalLessons) * 100));
      },
    }),
    { name: "skillhub-auth" },
  ),
);
