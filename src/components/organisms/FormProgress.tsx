"use client";

import { CheckIcon } from "lucide-react";
import { motion } from "framer-motion";

import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

export interface FormStep {
  id: number;
  title: string;
  description: string;
}

interface FormProgressProps {
  currentStep: number;
  steps: FormStep[];
  onStepChange?: (step: number) => void;
}

export default function FormProgress({
  currentStep,
  steps,
  onStepChange,
}: FormProgressProps) {
  return (
    <Timeline value={currentStep} onValueChange={onStepChange}>
      {steps.map((step, index) => {
        const isCompleted = step.id <= currentStep;
        const isActive = step.id === currentStep;

        return (
          <TimelineItem
            className="group-data-[orientation=vertical]/timeline:ms-10"
            key={step.id}
            step={step.id}
          >
            <TimelineHeader>
              <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5 transition-all duration-500 ease-out" />

              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                <TimelineTitle
                  className={`transition-all duration-400 ease-out ${
                    isActive ? "text-primary font-semibold" : "font-medium"
                  }`}
                >
                  {step.title}
                </TimelineTitle>
              </motion.div>

              <TimelineIndicator className="group-data-[orientation=vertical]/timeline:-left-7 flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground transition-all duration-400 ease-out">
                <motion.div
                  initial={false}
                  animate={{
                    scale: isCompleted ? 1 : 0.8,
                    opacity: isCompleted ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  {isCompleted && <CheckIcon size={14} strokeWidth={2.5} />}
                </motion.div>
              </TimelineIndicator>
            </TimelineHeader>

            <motion.div
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0.5,
                y: isActive ? 0 : 2,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <TimelineContent
                className={`transition-all duration-300 ease-out ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {step.description}
              </TimelineContent>
            </motion.div>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
