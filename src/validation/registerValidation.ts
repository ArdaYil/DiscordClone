import { z } from "zod";

const validateAge = (date: Date, requiredAge: number) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  let age = currentYear - date.getFullYear() - 1;

  if (currentMonth >= date.getMonth() && currentDay >= date.getDate()) age++;

  return age >= requiredAge;
};

const RegisterSchema = z.object({
  email: z
    .string()
    .email()
    .min(1, { message: "obligatory" })
    .max(50, { message: "Email cannot contain more than 50 characters" }),
  username: z
    .string()
    .min(3, { message: "Username must contain at least 3 characters" })
    .min(1, { message: "obligatory" })
    .max(50, { message: "Username cannot contain more than 50 characters" }),
  password: z
    .string({ required_error: "obligatory" })
    .min(1, { message: "obligatory" })
    .min(8, { message: "Password must contain at least 8 characters" })
    .max(100, { message: "Password cannot contain more than 50 characters" }),
  birthdate: z
    .string()
    .refine(
      (data) => validateAge(new Date(data), 13),
      "You must be older than 13"
    )
    .refine((data) => data.length > 0, "obligatory"),
  termsOfService: z.boolean(),
});

export default RegisterSchema;
