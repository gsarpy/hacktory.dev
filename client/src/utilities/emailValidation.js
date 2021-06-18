import * as EmailValidator from 'email-validator';
import checkEmail from '../API';

const isEmailValid = async (email) => {
  if (EmailValidator.validate(email)) {
    if (await checkEmail(email)) {
      console.log("email is available")
    }
    return await checkEmail(email) ? true : {error: 'email already taken', code: '9000'};
  }

  return false;
}

export default isEmailValid;