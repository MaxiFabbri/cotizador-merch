import { createTransport } from "nodemailer"
const { GOOGLE_MAIL, GOOGLE_PASS } = process.env

const transport = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: GOOGLE_MAIL, pass: GOOGLE_PASS }
})

const sendVerifyEmail = async ({ to, verifyCode }) => {
    try {
        await transport.verify()
        await transport.sendMail({
            from: GOOGLE_MAIL,
            to,
            subject: "Please verify account",
            html: `
            <h1 style="color=red">Welcome to Coder-Market</h1>
            <p>Verification code: ${verifyCode}</p>
            `
        })
    } catch (error) {
        throw error
    }
}
const sendResetPasswordEmail = async ({ to, password }) => {
    try {
        await transport.verify()
        await transport.sendMail({
            from: GOOGLE_MAIL,
            to,
            subject: "Password Reseted",
            html: `
            <h1 style="color=red">Password reseted, plase login</h1>
            <p>New password: ${password}</p>
            `
        })
    } catch (error) {
        throw error
    }
}

export { sendVerifyEmail, sendResetPasswordEmail }