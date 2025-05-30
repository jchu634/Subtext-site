import TextRotate from "@/components/ui/text/text-rotate";
import { LayoutGroup, motion } from "motion/react";

export function RotaryText() {
  return (
    <div className="flex whitespace-pre flex-col font-funnel text-2xl">
      <div className="flex items-center h-10">
        <LayoutGroup>
          <motion.div className="flex whitespace-pre" layout>
            <motion.span
              className="pt-0.5 sm:pt-1 md:pt-2"
              layout
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            >
              The{" "}
            </motion.span>
            <TextRotate
              texts={["local", "open-source", "fast"]}
              noSpacing={true}
              mainClassName="text-white px-2 sm:px-2 md:px-3 bg-[#ff5941] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"first"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
            <motion.span
              className="pt-0.5 sm:pt-1 md:pt-2 md:text-wrap hidden sm:block lg:hidden xl:block"
              layout
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            >
              {" "}
              AI subtitle generation app
            </motion.span>
          </motion.div>
        </LayoutGroup>
      </div>
      <span className="pt-0.5 sm:pt-1 md:pt-2 block sm:hidden lg:block xl:hidden">
        {" "}
        AI subtitle generating app
      </span>
    </div>
  );
}
