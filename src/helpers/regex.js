export const regExp_Names = new RegExp(/^[a-zA-Z\s]+$/);
export const regExp_Username = new RegExp(/^[a-zA-Z0-9]+$/);
export const regExp_MobileNumber = new RegExp(/^9[0-9]{9}$/);
export const regExp_StudentId = new RegExp(/^\d{4}-\d{2}-\d{6}$/);
export const regExp_Email = new RegExp(/(?=.*@+[a-zA-Z])(?=.*\.+[a-zA-Z])/);
export const regExp_MobileNumberWithDummy = new RegExp(/^[789][0-9]{9}$/);
export const regExp_Password = new RegExp(
  /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&)(+=.-])[A-Za-z0-9!@#$%^&)(+=.-]{6,}$/
);

// * password validation indicator
export const validation1 = new RegExp(/[A-Za-z]/);
export const validation2 = new RegExp(/[0-9]/);
export const validation3 = new RegExp(/[!@#$%^&)(+=.-]/);
export const validation4 = new RegExp(/.{6,}/);
