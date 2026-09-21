import type { APIRoute } from "astro";
import {
    CONTACT_FROM_EMAIL,
    CONTACT_TO_EMAIL,
    RESEND_API_KEY,
} from "astro:env/server";

export const prerender = false;

const MAX_LENGTHS = {
    name: 100,
    email: 254,
    message: 5000,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FILL_TIME_MS = 2000;

function json(body: Record<string, unknown>, status: number) {
    return new Response(JSON.stringify(body), {
        status,
        headers: { "Content-Type": "application/json" },
    });
}

export const POST: APIRoute = async ({ request }) => {
    let payload: Record<string, unknown>;

    try {
        payload = await request.json();
    } catch {
        return json({ error: "Invalid request body." }, 400);
    }

    const name = typeof payload.name === "string" ? payload.name.trim() : "";
    const email = typeof payload.email === "string" ? payload.email.trim() : "";
    const message =
        typeof payload.message === "string" ? payload.message.trim() : "";
    const honeypot =
        typeof payload.company === "string" ? payload.company.trim() : "";
    const startedAt =
        typeof payload.startedAt === "number" ? payload.startedAt : 0;

    if (
        honeypot ||
        (startedAt > 0 && Date.now() - startedAt < MIN_FILL_TIME_MS)
    ) {
        return json({ ok: true }, 200);
    }

    if (!name || name.length > MAX_LENGTHS.name) {
        return json({ error: "Please enter a valid name." }, 400);
    }

    if (
        !email ||
        email.length > MAX_LENGTHS.email ||
        !EMAIL_PATTERN.test(email)
    ) {
        return json({ error: "Please enter a valid email." }, 400);
    }

    if (!message || message.length > MAX_LENGTHS.message) {
        return json({ error: "Please enter a valid message." }, 400);
    }

    const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: `Portfolio contact <${CONTACT_FROM_EMAIL}>`,
            to: [CONTACT_TO_EMAIL],
            reply_to: email,
            subject: `New message from ${name}`,
            text: `From: ${name} <${email}>\n\n${message}`,
        }),
    });

    if (!response.ok) {
        console.error("Resend error:", response.status, await response.text());
        return json({ error: "Unable to send the email right now." }, 502);
    }

    return json({ ok: true }, 200);
};
