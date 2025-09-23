// ui/EducationCard.tsx
import React from "react";

interface EducationCardProps {
  data: {
    degree: string;
    institution: string;
    startDate: string;
    endDate?: string;
    grade?: string;
  };
}

const EducationCard: React.FC<EducationCardProps> = ({ data }) => {
  return (
    <div className="p-4 rounded-lg bg-[var(--bgColorSecondary)] dark:bg-[var(--bgColorDark)] space-y-2">
  <h3 className="text-lg font-semibold" style={{ color: "#FBC896" }}>
    {data.degree}
  </h3>
  <p className="text-sm text-[var(--textColorSecondary)]">{data.institution}</p>
  <p className="text-sm text-[var(--textColorSecondary)]">
    {data.startDate} - {data.endDate || "Present"}
  </p>
  {data.grade && <p className="text-sm font-medium">Grade: {data.grade}</p>}
</div>

  );
};

export default EducationCard;
