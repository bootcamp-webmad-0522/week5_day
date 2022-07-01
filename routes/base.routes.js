const router = require("express").Router()

const transporter = require("../config/transporter.config");


router.get("/", (req, res, next) => {
    res.render("pages/home");
})

router.get("/contacto", (req, res, next) => {
    res.render("pages/contact");
})

router.post("/contacto", (req, res, next) => {

    const { subject, message, email, name } = req.body

    transporter
        .sendMail({
            from: `"Email de ${name} " <webmad0522@outlook.es>`,
            to: email,
            subject: subject,
            text: message,
            html: `<b>${message}</b>`
        })
        .then(details => res.send(details))
        .catch(error => next(new Error(error)))

})

module.exports = router