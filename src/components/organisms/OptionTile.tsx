import { type FC, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  icon?: ReactNode;
  label: string;
  value: string;
  selected?: boolean;
  onClick: (value: string) => void;
  className?: string;
}

export const OptionTile: FC<Props> = ({
  icon,
  label,
  value,
  selected = false,
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={cn(
        "flex flex-col items-center justify-center gap-4 p-6 rounded-lg border-2 transition-all cursor-pointer hover:shadow-md",
        selected
          ? "border-primary bg-primary/5 shadow-sm"
          : "border-border bg-background hover:border-primary/50",
        className
      )}
    >
      {icon && <div className="text-4xl">{icon}</div>}
      <span className="font-medium text-center">{label}</span>
    </button>
  );
};
