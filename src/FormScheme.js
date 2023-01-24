import * as Yup from 'yup'

export const FormScheme = Yup.object({
    name: Yup.string().min(3,'Too short').max(20,'Too long').required('Name is must'),
    email: Yup.string().email('invalid email').required('email is must'),
    age:Yup.number().min(8).max(50).required('Age is must'),
    password:Yup.string().required('password is must').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,"Enter strong password"),
    cpassword:Yup.string().required('Confirm password is must').oneOf([Yup.ref('password'),null],"both password shold match")
})