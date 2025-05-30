import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/shadcn/button";
import { motion } from "motion/react";

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("theme-light");

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <motion.div whileTap={{ scale: 1.05 }} whileHover={{ scale: 1.05 }}>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setThemeState(theme == "dark" ? "theme-light" : "dark")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      </Button>
    </motion.div>
  );
}
