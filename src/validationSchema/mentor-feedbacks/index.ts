import * as yup from 'yup';

export const mentorFeedbackValidationSchema = yup.object().shape({
  feedback: yup.string().required(),
  mentor_id: yup.string().nullable(),
  roadmap_id: yup.string().nullable(),
});
