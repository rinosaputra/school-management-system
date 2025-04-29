import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import GraduationForm from "./form";
import GraduationNotif from "./notif";

interface CountdownBoxProps {
  label: string;
  value: number;
}

const CountdownBox = React.memo(({ label, value }: CountdownBoxProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-3">
        {String(value).padStart(2, "0")}
      </div>
      <Label className="text-sm font-medium">{label}</Label>
    </div>
  );
});

interface CountdownProps {
  date: Date;
}

const GraduationCountdown: React.FC<CountdownProps> = ({
  date: targetDate,
}) => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isRunning, setIsRunning] = React.useState(true);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference <= 0) {
        setIsRunning(false);
        return;
      }
      interval = setInterval(() => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference <= 0) {
          clearInterval(interval);
          setIsRunning(false);
          return;
        }

        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [targetDate, isRunning]);

  if (!isRunning) return <GraduationForm />;
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Pengumuman Kelulusan</CardTitle>
        <CardDescription className="text-4xl font-semibold">
          Dibuka Dalam
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-4">
        <div className="grid grid-cols-4 gap-2 text-center">
          <CountdownBox label="Hari" value={timeLeft.days} />
          <CountdownBox label="Jam" value={timeLeft.hours} />
          <CountdownBox label="Menit" value={timeLeft.minutes} />
          <CountdownBox label="Detik" value={timeLeft.seconds} />
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="space-y-4">
        <GraduationNotif />
      </CardFooter>
    </Card>
  );
};

export default GraduationCountdown;
