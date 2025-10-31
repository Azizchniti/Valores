import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.json();
  const { nome, email, empresa, cargo, whatsapp, faturamento, segmento, quantidade } = data;

  if (!nome || !email) {
    return new Response(JSON.stringify({ error: "Campos obrigatórios ausentes." }), { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
      <div style="font-family: 'Luxora Grotesk', Arial, sans-serif; background-color: #f4f7f8; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.1); padding: 20px;">
          <h2 style="color: #58A8AB; text-align: center;">Novo diagnóstico solicitado</h2>
          <p>Um cliente preencheu o formulário do site. Seguem os dados:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
            <tr style="background-color: #e6f7f8;">
              <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Nome</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${nome}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Email</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr style="background-color: #e6f7f8;">
              <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Empresa</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${empresa}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Cargo</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${cargo}</td>
            </tr>
            <tr style="background-color: #e6f7f8;">
              <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">WhatsApp</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${whatsapp}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Faturamento</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${faturamento}</td>
            </tr>
            <tr style="background-color: #e6f7f8;">
              <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Segmento</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${segmento}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Quantidade de colaboradores</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${quantidade}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; text-align: center; color: #555;">Enviado automaticamente pelo site Foco Marketing</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Contato Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Novo diagnóstico solicitado - ${nome}`,
      html: htmlContent,
    });

    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return new Response(JSON.stringify({ error: "Erro ao enviar e-mail." }), { status: 500 });
  }
}
