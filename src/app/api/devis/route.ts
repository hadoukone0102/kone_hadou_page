import nodemailer from "nodemailer";

export const runtime = "nodejs";

type DevisPayload = {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  entreprise?: string;
  typeProjet: string;
  budget?: string;
  ville: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as DevisPayload;

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      MAIL_FROM,
      MAIL_TO,
    } = process.env;

    // Local fallback (dev only)
    const host = SMTP_HOST || "mail.siglass-ci.com";
    const user = SMTP_USER || "contact@siglass-ci.com";
    const pass = SMTP_PASS || "Azerty2014";
    const mailFrom = MAIL_FROM || "contact@siglass-ci.com";
    const mailTo = MAIL_TO || "infos@siglass-ci.com";

    if (!host || !user || !pass || !mailFrom || !mailTo) {
      return new Response("Configuration SMTP manquante", { status: 500 });
    }

    const port = Number(SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const subject = `Demande de devis - ${data.nom} ${data.prenom}`;
    const text = [
      `Nom: ${data.nom}`,
      `Prenom: ${data.prenom}`,
      `Email: ${data.email}`,
      `Telephone: ${data.telephone}`,
      `Entreprise: ${data.entreprise || "-"}`,
      `Type de projet: ${data.typeProjet}`,
      `Budget estime: ${data.budget || "-"}`,
      `Ville: ${data.ville}`,
      "",
      "Message:",
      data.message || "-",
    ].join("\n");

    await transporter.sendMail({
      from: `"Siglass" <${mailFrom}>`,
      to: mailTo,
      replyTo: data.email,
      subject,
      text,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return new Response("Erreur envoi email", { status: 500 });
  }
}
