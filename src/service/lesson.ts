import axios from "axios";
export interface LessonDetail {
  title: string;
  listeningContent?: {
    audioUrl: string;
    listQuestion: Array<{
      id: number;
      question: string;
      answers: string[];
      correctAnswerId: number;
      explanation: string;
    }>;
  };
  speakingContent?: {
    audioUrl: string;
    content: string;
  };
  moduleId: number;
}
const LESSON = `/api/v1/lesson`;
const CREATE_LESSON = `/api/v1/lesson/create`;

const getLessonById = (id: number) => axios.get(`${LESSON}/${id}`);

const creatNewLesson = async (payload: LessonDetail) =>
  await axios.post(`${CREATE_LESSON}`, payload, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    timeout: 3000,
  });

  export {
    getLessonById,creatNewLesson
  };