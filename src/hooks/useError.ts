import { useState } from 'react';

import { Error } from '../types/Error';

export function useError() {
  const [errors, setErrors] = useState<Error[]>([]);

  function setError(field: string) {
    const errorExists = errors.find((item) => item.field === field);

    if (errorExists) {
      return;
    } else {
      setErrors(prevState => [
        ...prevState,
        { field },
      ]);
    }
  }

  function removeErrror(field: string) {
    const errorExists = errors.find((item) => item.field === field);

    if (!errorExists) {
      return;
    } else {
      setErrors(prevState => prevState.filter((item) => item.field !== field));
    }
  }

  function getErrorByFieldName(fieldName: string) {
    const errro = errors.find((item) => item.field === fieldName)?.field;

    return errro ? true : false;
  }

  return {
    errors,
    setError,
    setErrors,
    removeErrror,
    getErrorByFieldName,
  }
}
