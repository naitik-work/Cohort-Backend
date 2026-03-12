import { body, validationResult } from "express-validator";

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next();
  }

  res.status(400).json({
    errors: errors.array(),
  });
};

export const registerValidation = [
  body("username").isString().withMessage("Username should be string."),
  body("email").isEmail().withMessage("email should be a valid email address"),
//   body("password").isLength({min: 6, max:12}).withMessage("Password should be between 6 and 12 characters."),
  body("password").custom((value)=>{
    if(value.lenght<6){
        throw new Error("password should be atleast 6 characters long.")
    }
  }).withMessage("Password should be between 6 and 12 characters."),
  validate
];
