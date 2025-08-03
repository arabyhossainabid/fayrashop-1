import React from "react";
import { LucideIcon } from "lucide-react";
import Title from "@/utils/helpers/title"; // adjust path if needed

interface HighlightCardProps {
  Icon: LucideIcon;
  name: string;
  description: string;
  nameStyle?: string;
  descriptionStyle?: string;
  containerStyle?: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  Icon,
  name,
  description,
  nameStyle,
  descriptionStyle,
  containerStyle,
}) => {
  return (
    <div
      className={`w-full max-w-[350px] mx-auto text-center p-6 rounded-lg flex flex-col justify-center items-center ${containerStyle}`}
    >
      <Icon className="w-12 h-12 mb-4" />
      <Title style={`text-base md:text-lg ${nameStyle}`}>{name}</Title>
      <p className={`text-sm md:text-base ${descriptionStyle}`}>{description}</p>
    </div>
  );
};

export default HighlightCard;
