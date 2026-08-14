import { z } from "zod";
import { sendContactEmail } from "@/lib/email";
import { ContactFormData } from "@/lib/types";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().regex(/^\d{10}$/),
  email: z.string().email(),
  serviceType: z.string().min(1),
  propertyType: z.enum(["Residential", "Commercial"]),
  location: z.string().min(2).max(100),
  message: z.string().min(10).max(5000),
  source: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return Response.json(
        { error: "Invalid form data", details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const formData: ContactFormData = validationResult.data;

    // Send email
    try {
      await sendContactEmail(formData);
    } catch (emailError) {
      console.error("Email send failed:", emailError);
      return Response.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return Response.json(
      { success: true, message: "Thank you! We received your enquiry." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
