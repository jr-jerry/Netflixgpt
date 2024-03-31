import React from 'react'

export const validate=(email,password)=>{
    // The regex for isEmailCorrect currently checks for at least one lowercase character, one uppercase character, one digit, one special character, and a minimum length of 8 characters. This is more suitable for passwords. For emails, you should use a regex that checks for a valid email pattern.
    const isEmailCorrect=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const isPasswordCorrect=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password);

    if(!isEmailCorrect) return "Email is not Valid"
    if(!isPasswordCorrect) return "Password not Valid"

  return null

}