import TextRotate from "@/components/ui/text/text-rotate";
import { LayoutGroup, motion } from "motion/react";

export function RotaryText() {
  return (
    <div className="flex whitespace-pre items-center font-funnel text-2xl h-10">
      <LayoutGroup>
        <motion.p className="flex whitespace-pre" layout>
          <motion.span
            className="pt-0.5 sm:pt-1 md:pt-2"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            The{" "}
          </motion.span>
          <TextRotate
            texts={["local", "open-source", "fast"]}
            mainClassName="text-white px-2 sm:px-2 md:px-3 bg-[#ff5941] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
          <motion.span
            className="pt-0.5 sm:pt-1 md:pt-2"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            {" "}
            AI subtitle generating app
          </motion.span>
        </motion.p>
      </LayoutGroup>
    </div>
  );
}
