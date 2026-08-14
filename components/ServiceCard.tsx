import Link from "next/link";
import { Service } from "@/lib/types";
import {
  Building2,
  Wrench,
  DoorOpen,
  Lightbulb,
  Shield,
} from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

function getServiceIcon(iconName: string) {
  const iconMap: Record<string, React.ReactNode> = {
    window: <Building2 size={32} />,
    glass: <Lightbulb size={32} />,
    door: <DoorOpen size={32} />,
    wrench: <Wrench size={32} />,
    building: <Shield size={32} />,
  };
  return iconMap[iconName] || <Building2 size={32} />;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
      <div className="text-cyan-600 mb-4">
        {getServiceIcon(service.icon)}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-6">
        {service.shortDescription}
      </p>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 text-sm mb-2">
          Benefits:
        </h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {service.benefits.slice(0, 3).map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-red-600 font-bold mt-1">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={`/services#${service.id}`}
        className="inline-block text-cyan-600 font-semibold hover:text-red-600 transition-colors"
      >
        Learn More →
      </Link>
    </div>
  );
}
