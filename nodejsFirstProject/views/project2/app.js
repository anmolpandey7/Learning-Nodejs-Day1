const mailer = require('nodemailer')

let transport = mailer.createTransport({
    servive:'gmail',
    auth:{
        user:'pandeanmol70@gmail.com',
        pass:'96482323@aS'
    }
})

let messageOb ={
    from:"pandeanmol70@gmail.com",
    to:"pandeanmol8@gmail.com",
    subject:"email using node js",
    text:"this email is using nodejs"
}

transport.sendMail(messageOb,(error,info)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Email sent")
        console.log(info.response)
    }
})