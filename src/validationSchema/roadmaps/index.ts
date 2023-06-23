import * as yup from 'yup';

export const roadmapValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  company_id: yup.string().nullable(),
  team_member_id: yup.string().nullable(),
});
