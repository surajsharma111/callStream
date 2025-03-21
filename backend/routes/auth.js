import express from "express";
import * as authServices from "../services/authServices.js";
import { sendOTP, sendResetPasswordToken } from "../services/sendEmail.js";
import { Prisma, PrismaClient } from "@prisma/client";

var router = express.Router();
const prisma = new PrismaClient()

router.post("/sign-up/send-otp", async function (req, res, next) {
  try {
    const userData = req.body;  
    const existingUserWithEmail = await authServices.getOneUser({ 
      email: userData.email,
    });
    const message = [];
    if (existingUserWithEmail) {
      message.push(`Email with ${userData.email} is already registered!`);
    }
    if (message.length > 0) {
      return res.status(400).json({ error: { messages: message } });
      
    }
 
    await authServices.createEmailOtp(userData);

    res.status(201).json({ message: "Otp is sent to your email Sucessfully, Check Your email " });
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({
        error: {
          messages: ["Something went wrong. Please try after a while!"],
        },
      });
  }
});
router.post("/sign-up/verify-otp", async function (req, res, next) {
    const userData = req.body
    console.log(userData)
    const existingUserWithEmail = await prisma.emailConfirmation.findFirst({ where: { email: userData.email }});
        if(!existingUserWithEmail) {
      return res.status(404).json({error: {messages: [`Email ${userData.email} is not registered!`]}})
    }   

    const verifyOtp = await authServices.verifyOtp(userData);
    if(!verifyOtp){
        return res.status(404).json({error:{message: [`OTP is incorrect`]} })
    }
    await authServices.registerUser(userData)

    res.status(201).json({ message: "User Created Sucessfully" });

})

router.post("/sign-in", async function (req, res, next) {
  try {
    const userData = req.body;
    const existingUserWithEmail = await authServices.getOneUser({email: userData.email});
    if(!existingUserWithEmail) {
      return res.status(404).json({error: {messages: [`Email ${userData.email} is not registered!`]}})
    }
    const passwordMatches = await authServices.signIn(userData)
    if(!passwordMatches) {
      return res.status(401).json({error: {messages: [`Email and password does not match. Try again!`]}})
    }
    return res.status(200).json({
      message: "Successfully signed in",
      user: existingUserWithEmail
  });
  } catch (error) {
    console.log(error)
  }
   

})
router.post("/forgot-password", async function (req, res, next) {
  try {
    const userDate = req.body;
    const existingUserWithEmail = await authServices.getOneUser({
      email: userDate.email
    })
    if (!existingUserWithEmail) {
      return res.status(404).json({
        error: {
          messages: ["We can't find a user with that email address."],
        },
      });
    }
    const updateData = await authServices.setResetPasswordToken(
      existingUserWithEmail.id
    )
    await sendResetPasswordToken({
      email: updateData.email,
      
    })

  } catch (error) {
    
  }
})

export default router;