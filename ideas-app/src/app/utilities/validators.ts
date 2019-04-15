import {AbstractControl} from '@angular/forms';


export const validatorWhiteSpace = (control: AbstractControl) => {

  let isWhitespace = (control.value || '').trim().length === 0;
  let isValid = !isWhitespace;

  return isValid ? null : {trimmed: true};

};
