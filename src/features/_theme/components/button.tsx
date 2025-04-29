import React from "react";
import { useTheme } from "../hook";
import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { Computer, Moon, Sun } from "lucide-react";

interface ThemeButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
}

const ThemeButton: React.FC<ThemeButtonProps> = (props) => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      className={props.className}
      variant={props.variant ?? "ghost"}
      size={props.size ?? "icon"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "system" ? (
        <Computer />
      ) : theme === "dark" ? (
        <Sun />
      ) : (
        <Moon />
      )}
    </Button>
  );
};

export default ThemeButton;
