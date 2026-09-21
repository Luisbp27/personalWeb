const fields = [
    { name: "name", requiredMessage: "Your name is required" },
    { name: "email", requiredMessage: "Your email is required" },
    { name: "message", requiredMessage: "Your message is required" },
] as const;

const invalidClasses = [
    "!border-red-500",
    "focus:!border-red-500",
    "focus:!ring-red-500/30",
];

let pageLoadedAt = Date.now();

document.addEventListener("astro:page-load", () => {
    pageLoadedAt = Date.now();
});

function getField(
    form: HTMLFormElement,
    name: string,
): HTMLInputElement | HTMLTextAreaElement | null {
    return form.elements.namedItem(name) as
        HTMLInputElement | HTMLTextAreaElement | null;
}

function setFieldError(
    form: HTMLFormElement,
    name: string,
    message: string | null,
) {
    const error = form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);
    const input = getField(form, name);

    if (message) {
        error?.classList.remove("hidden");
        if (error) error.textContent = message;
        input?.classList.add(...invalidClasses);
        input?.setAttribute("aria-invalid", "true");
    } else {
        error?.classList.add("hidden");
        if (error) error.textContent = "";
        input?.classList.remove(...invalidClasses);
        input?.removeAttribute("aria-invalid");
    }
}

function showToast(message: string, type: "success" | "error") {
    const root = document.querySelector("[data-toast-root]");
    if (!root) return;

    const toast = document.createElement("div");
    toast.setAttribute("role", "status");
    toast.className = [
        "animate-fade-up pointer-events-auto max-w-sm rounded-lg border px-4 py-3 text-sm shadow-lg",
        type === "success"
            ? "border-green-200 bg-green-50 text-green-800 dark:border-green-900 dark:bg-green-950 dark:text-green-200"
            : "border-red-200 bg-red-50 text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200",
    ].join(" ");
    toast.textContent = message;
    root.append(toast);

    setTimeout(() => toast.remove(), 4000);
}

function validate(form: HTMLFormElement): HTMLElement | null {
    let firstInvalid: HTMLElement | null = null;

    for (const field of fields) {
        const input = getField(form, field.name);
        if (!input) continue;

        let message: string | null = null;
        if (!input.value.trim()) {
            message = field.requiredMessage;
        } else if (
            input instanceof HTMLInputElement &&
            input.type === "email" &&
            !input.validity.valid
        ) {
            message = "Please enter a valid email";
        }

        setFieldError(form, field.name, message);

        if (message && !firstInvalid) firstInvalid = input;
    }

    return firstInvalid;
}

document.addEventListener("submit", async (event) => {
    const form = (event.target as HTMLElement | null)?.closest<HTMLFormElement>(
        "[data-contact-form]",
    );
    if (!form) return;
    event.preventDefault();

    const honeypot = getField(form, "company");
    if (honeypot?.value) return;

    const firstInvalid = validate(form);
    if (firstInvalid) {
        firstInvalid.focus();
        return;
    }

    const button = form.querySelector<HTMLButtonElement>("[type=submit]");
    const originalLabel = button?.textContent ?? "Send";
    if (button) {
        button.disabled = true;
        button.textContent = "Sending…";
    }

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: getField(form, "name")?.value ?? "",
                email: getField(form, "email")?.value ?? "",
                message: getField(form, "message")?.value ?? "",
                company: honeypot?.value ?? "",
                startedAt: pageLoadedAt,
            }),
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        showToast("Email sent successfully!", "success");
        form.reset();
    } catch {
        showToast("Error sending email. Please try again later.", "error");
    } finally {
        if (button) {
            button.disabled = false;
            button.textContent = originalLabel;
        }
    }
});

document.addEventListener("input", (event) => {
    const input = event.target as HTMLElement | null;
    const form = input?.closest<HTMLFormElement>("[data-contact-form]");
    const name = input?.getAttribute("name");
    if (!form || !name) return;

    setFieldError(form, name, null);
});
