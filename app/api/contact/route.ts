import { z } from "zod";
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

    // Placeholder: Form validation successful
    // TODO: Add email integration when ready
    console.log("Contact form received:", {
      name: body.name,
      phone: body.phone,
      email: body.email,
      serviceType: body.serviceType,
      location: body.location,
    });

    return Response.json(
      { success: true, message: "Thank you! We received your enquiry. We'll contact you soon!" },
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
