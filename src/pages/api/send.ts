// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/Emailtemplate";

// Substitua pela sua API Key real
const resend = new Resend("re_5EBm3fgT_Mq6Uw56x6AN1EZmzxFPnCioz");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const {
    name,
    phone,
    age,
    goals,
    injuries,
    activityLevel,
    trainingExperience,
    responseToExercise,
  } = req.body;

  try {
    // Assunto dinâmico, incluindo o nome e a data/hora para evitar agrupamento
    const dynamicSubject = `Anamnese de ${name}`;

    // Envia o e-mail de forma mais profissional
    const data = await resend.emails.send({
      from: "Consultoria Profissional <mail@innovaihub.com.br>",
      to: ["betania.adrianavieira7@gmail.com"], // altere para o e-mail real de destino
      subject: dynamicSubject,
      react: EmailTemplate({
        name,
        phone,
        age,
        goals,
        injuries,
        activityLevel,
        trainingExperience,
        responseToExercise,
      }),
    });

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
}