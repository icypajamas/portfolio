import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <contact@resend.dev>",
      to: ["ch.hishamabbas@gmail.com"],
      subject: "Hello friend",
      text: `New Form Entry from "${name}" 
      Email: ${email}
      
      Message: ${message}`,
    });


    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
