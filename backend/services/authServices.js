import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { addMinutes } from "date-fns";
import { sendOTP } from "./sendEmail.js";

const prisma = new PrismaClient();

export async function registerUser(data) {
  try {
    delete data.confirmPassword;
    delete data.code;
    data.password = await bcrypt.hash(data.password, 10);
    const newUser = await prisma.user.create({
      data: {
        ...data,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
export async function createEmailOtp(data) {
  delete data.password;
  delete data.phone;
  delete data.confirmPassword;
  const code = String(Math.ceil(Math.random() * 1000000));
  console.log(code)
  const expiryAt = addMinutes(new Date(), 10);
  const newEmail = await prisma.emailConfirmation.create({
    data: {
      ...data,
      code,
      expiryAt,
    },
  });
  
  await sendOTP(newEmail);
}
export async function verifyOtp(data) {
  try {
    const existingClient = await prisma.emailConfirmation.findFirst({
      where: { email: data.email },
    });
    
    console.log(typeof data.code, data.code);
    console.log(typeof existingClient.code, existingClient.code);
    
   
    return String(data.code) === String(existingClient.code);
} catch (error) {
    throw new Error(error);
  }
}
export async function getOneUser(condition) {
  return await prisma.user.findFirst({ where: condition });
}

export async function signIn(data) {
  const existingClient = await getOneUser({ email: data.email });
  return await bcrypt.compare(data.password, existingClient.password);
}

export async function createToken(id) {
  const existingClient = await prisma.user.findFirst({ where: { id } });
  const token = await jwt.sign(
    {
      id: existingClient.id,
      email: existingClient.email,
    },
    process.env.TOKEN_SECRECT_KEY
  );
  return token;
}
export async function setResetPasswordToken(id) {
  return await prisma.user.update({
    where: { id },
    data: {
      passwordResetToken: uuidv4(),
      passwordResetExpiry: addHours(new Date(), 1),
    },
  });
}
export async function userResetPassword(data) {
  const password = await bcrypt.hash(data.password, 10);
  try {
    return await prisma.user.update({
      where: { id: data.id },
      data: {
        password,
        passwordResetToken: null,
        passwordResetExpiry: null,
        passwordResetExpiry: null,
        passwordResetExpiry: null,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
}
