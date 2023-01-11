export const regExp_Names = new RegExp(/^[a-zA-Z\s]+$/);
export const regExp_StudentId = new RegExp(/^\d{4}-\d{2}-\d{6}$/);
export const regExp_Username = new RegExp(/^[a-zA-Z0-9\s]+$/);
export const regExp_MobileNumber = new RegExp(/^[9][0-9]{9}$/);
export const regExp_Email = new RegExp(/(?=.*@+[a-zA-Z])(?=.*\.+[a-zA-Z])/);
export const regExp_Password = new RegExp(
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&)(+=._-])(?=.{6,})/g
);
