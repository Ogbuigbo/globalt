import { sendMail } from "@/app/_helper/mail.helper"

export async function POST(request: Request) {
	const formData = await request.formData()
	const name = formData.get("name")
	const email = formData.get("email")
	const phone = formData.get("phone")
	const message = formData.get("message")
	const dob = formData.get("dob")
	const arrivalDate = formData.get("arrivalDate")
	const departureDate = formData.get("departureDate")
	const country = formData.get("country")
  
	await sendMail({
	  subject: "New Message",
	  html: `
		<h1>Glorious T&T Agency</h1>
		<p><strong>Name:</strong> ${name}</p>
		<p><strong>Email:</strong> ${email}</p>
		<p><strong>Phone:</strong> ${phone}</p>
		<p><strong>Country:</strong> ${country}</p>
		<p><strong>Date of Birth:</strong> ${dob}</p>
		<p><strong>Arrival Date:</strong> ${arrivalDate}</p>
		<p><strong>Departure Date:</strong> ${departureDate}</p>
		<p><strong>Message:</strong> ${message}</p>
	  `,
	})

	return new Response("success", {
		status: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "POST",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
		},
	})
}