// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'
import { EmailTemplate } from '@/components/Emailtemplate'

// Substitua pela sua API Key real
const resend = new Resend('re_d1QJeaKD_Gh9ki6HD1hXLbKqF7mSArfLU')

// Função principal
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' })
  }

  // Extrair os dados do body
  const {
    name,
    email,
    age,
    goals,
    injuries,
    activityLevel,
    heartRate,
    responseToExercise,
    hasConsent
  } = req.body

  try {
    // Enviar email para o dono do site
    const data = await resend.emails.send({
      from: 'Seu Site <software@innovaihub.com.br>',
      to: ['gabrieldma27@gmail.com'], // troque aqui para o e-mail real do dono
      subject: 'Nova Anamnese Recebida',
      // Montamos o template React que receberá os dados e exibirá em um layout amigável
      react: EmailTemplate({
        name,
        email,
        age,
        goals,
        injuries,
        activityLevel,
        heartRate,
        responseToExercise,
        hasConsent,
      }),
    })

    return res.status(200).json({ success: true, data })
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message })
  }
}