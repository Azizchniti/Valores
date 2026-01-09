import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const {
      nome,
      email,
      telefone,
      empresa,
      servicos,
      mensagem,
    } = data;

    if (!nome || !email) {
      return new Response(
        JSON.stringify({ error: "Nome e email são obrigatórios." }),
        { status: 400 }
      );
    }

    const safe = (value) =>
      value && value.toString().trim() !== "" ? value : "Não informado";

    const formatted = {
      nome: safe(nome),
      email: safe(email),
      telefone: safe(telefone),
      empresa: safe(empresa),
      servicos: safe(servicos),
      mensagem: safe(mensagem),
    };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
      <div style="background-color:#eef6f7;padding:30px;font-family:Arial,sans-serif;">
        <div style="max-width:640px;margin:auto;background:#ffffff;border-radius:16px;
          box-shadow:0 14px 32px rgba(0,0,0,0.12);padding:30px;">

          <h2 style="color:#58A8AB;text-align:center;margin-bottom:8px;">
            📩 Novo contato pelo site
          </h2>

          <p style="text-align:center;color:#666;font-size:15px;margin-bottom:26px;">
            Um visitante enviou uma nova mensagem através do formulário.
          </p>

          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${row("Nome", formatted.nome, true)}
            ${row("Email", formatted.email)}
            ${row("Telefone", formatted.telefone, true)}
            ${row("Empresa", formatted.empresa)}
            ${row("Serviços de interesse", formatted.servicos, true)}
          </table>

          <div style="margin-top:22px;">
            <h3 style="color:#58A8AB;margin-bottom:6px;">Mensagem</h3>
            <div style="background:#f7fbfc;border-radius:10px;padding:14px;
              border:1px solid #ddecee;color:#333;white-space:pre-line;">
              ${formatted.mensagem}
            </div>
          </div>

          <div style="margin-top:30px;padding-top:16px;border-top:1px solid #e3e3e3;
            text-align:center;color:#777;font-size:13px;">
            Enviado automaticamente pelo site <strong>Foco Marketing</strong>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Contato Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Novo contato — ${formatted.nome}`,
      html: htmlContent,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return new Response(
      JSON.stringify({ error: "Erro interno ao enviar e-mail." }),
      { status: 500 }
    );
  }
}

function row(label, value, accent = false) {
  return `
    <tr style="background-color:${accent ? "#e6f7f8" : "#ffffff"};">
      <td style="padding:10px;font-weight:bold;border:1px solid #ddd;width:38%;">
        ${label}
      </td>
      <td style="padding:10px;border:1px solid #ddd;">
        ${value}
      </td>
    </tr>
  `;
}
