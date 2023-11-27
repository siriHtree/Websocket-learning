import sendGridMailer from '@sendgrid/mail';
sendGridMailer.setApiKey(process.env.SEND_GRID_KEY)

export const sendMagicLinkEmail=({email,token})=>{
    return sendGridMailer.send({
        to:email,
        from:process.env.SEND_GRID_EMAIL,
        subject:"Magic link login!!",
        html:`<a href="http://localhost:3000/verify?token=${token}">
        <button>Click on link</button> </a>`,
    })

}