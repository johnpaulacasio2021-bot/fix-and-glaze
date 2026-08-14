"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactFormData } from "@/lib/types";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
  email: z.string().email("Invalid email address"),
  serviceType: z.string().min(1, "Please select a service"),
  propertyType: z.enum(["Residential", "Commercial"], {
    errorMap: () => ({ message: "Please select property type" }),
  }),
  location: z.string().min(2, "Location is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  source: z.string().optional(),
});

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export default function ContactForm({ title, subtitle }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! We'll contact you within 24 hours to discuss your project.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: "Something went wrong. Please try again or call us directly.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      {title && (
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}
        </>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name & Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Full Name *
            </label>
            <input
              {...register("name")}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-600"
              placeholder="John Smith"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Phone Number *
            </label>
            <input
              {...register("phone")}
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-600"
              placeholder="0412345678"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Email Address *
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-600"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Service & Property Type Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Service Required *
            </label>
            <select
              {...register("serviceType")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-600"
            >
              <option value="">Select a service</option>
              <option value="Window Installation">Window Installation</option>
              <option value="Glass Installation">Glass Installation</option>
              <option value="Door Installation">Door Installation</option>
              <option value="Glass Repair">Glass Repair</option>
              <option value="Commercial Glazing">Commercial Glazing</option>
              <option value="Shower Screen">Shower Screen</option>
              <option value="Other">Other</option>
            </select>
            {errors.serviceType && (
              <p className="text-red-600 text-sm mt-1">
                {errors.serviceType.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Property Type *
            </label>
            <select
              {...register("propertyType")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-600"
            >
              <option value="">Select property type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </select>
            {errors.propertyType && (
              <p className="text-red-600 text-sm mt-1">
                {errors.propertyType.message}
              </p>
            )}
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Suburb / Location *
          </label>
          <input
            {...register("location")}
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-600"
            placeholder="Canberra"
          />
          {errors.location && (
            <p className="text-red-600 text-sm mt-1">{errors.location.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Tell us about your project *
          </label>
          <textarea
            {...register("message")}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-600"
            placeholder="Describe your project, what you need done, any specific requirements..."
          ></textarea>
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* How did you hear about us */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            How did you hear about us? (optional)
          </label>
          <select
            {...register("source")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-600"
          >
            <option value="">Select an option</option>
            <option value="Google Search">Google Search</option>
            <option value="Google Maps">Google Maps</option>
            <option value="Word of Mouth">Word of Mouth</option>
            <option value="Social Media">Social Media</option>
            <option value="Website">Website</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Status Messages */}
        {submitStatus.type === "success" && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
            {submitStatus.message}
          </div>
        )}
        {submitStatus.type === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            {submitStatus.message}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary py-3 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send My Enquiry"}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Or call us directly: <span className="font-bold">0432 800 802</span>
        </p>
      </form>
    </div>
  );
}
