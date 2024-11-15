import * as nodemailer from "nodemailer"

type TMailOptions = {
	subject: string
	html: string
}

// const transporter = nodemailer.createTransport({
// 	host: process.env["SEND_IN_BLUE_HOST"],
// 	port: parseInt(process.env["SEND_IN_BLUE_PORT"] || "465"),
// 	secure: true,
// 	auth: {
// 		user: process.env["SEND_IN_BLUE_USER"],
// 		pass: process.env["SEND_IN_BLUE_PASSWORD"],
// 	},
// })

const transporter = nodemailer.createTransport({
	host: process.env["GMAIL_HOST"],
	port: parseInt(process.env["GMAIL_PORT"] || "587"),
	secure: false, // Must be false for TLS on port 587
	auth: {
	  user: process.env["GMAIL_USER"],
	  pass: process.env["GMAIL_PASSWORD"],
	},
  });

const sendMail = async (options: TMailOptions) => {
	try {
		const info = await transporter.sendMail({
			from: "Tim Hockri <chijiokejames82@gmail.com>",
			to: ["chijiokejames82@gmail.com"],
			...options,
		})
		console.log("mail sent", info)
	} catch (error) {
		console.error(error)
	}
}
export { sendMail }