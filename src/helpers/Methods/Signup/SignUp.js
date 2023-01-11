// ? components
import {
  validation1,
  validation2,
  validation3,
  validation4,
} from "../../regex";

// ? plugins
import moment from "moment";

// * calculate user age
export const OnCalculateUserAge = (birthday, setAgeValue) => {
  const bdayFormatArr = birthday.split("-").map((val) => parseInt(val));
  const currDateArr = moment()
    .format("DD-MM-YYYY")
    .split("-")
    .map((val) => parseInt(val));

  let approxAge =
    currDateArr[currDateArr.length - 1] -
    bdayFormatArr[bdayFormatArr.length - 1];

  if (currDateArr[1] < bdayFormatArr[1] && currDateArr[0] < bdayFormatArr[0]) {
    approxAge--;
  }

  setAgeValue((prev) => (prev = approxAge));
};

// * validate password
export const OnValidatePassword = (value, setPasswordValidation) => {
  if (validation1.test(value))
    setPasswordValidation((prev) => ({ ...prev, validation1: true }));
  else setPasswordValidation((prev) => ({ ...prev, validation1: false }));

  if (validation2.test(value))
    setPasswordValidation((prev) => ({ ...prev, validation2: true }));
  else setPasswordValidation((prev) => ({ ...prev, validation2: false }));

  if (validation3.test(value))
    setPasswordValidation((prev) => ({ ...prev, validation3: true }));
  else setPasswordValidation((prev) => ({ ...prev, validation3: false }));

  if (validation4.test(value))
    setPasswordValidation((prev) => ({ ...prev, validation4: true }));
  else setPasswordValidation((prev) => ({ ...prev, validation4: false }));
};
