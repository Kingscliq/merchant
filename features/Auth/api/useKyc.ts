import { useMutation } from 'react-query';
import type { FormikValues } from 'formik';

import { axios } from '@/lib';
import type { UseMutationOptions } from 'react-query';

export interface KycValues extends FormikValues {
  Passport: string;
}
