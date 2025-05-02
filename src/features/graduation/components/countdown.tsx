import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import GraduationForm from "./form";
import { Loader } from "lucide-react";

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
  const [ready, setReady] = React.useState(false);

  const checkDate = React.useCallback(() => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    return difference;
  }, [targetDate]);

  const disabled = React.useMemo(() => checkDate() <= 0, [checkDate]);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      if (checkDate() <= 0) {
        setIsRunning(false);
        setReady(true);
        return;
      }
      interval = setInterval(() => {
        const difference = checkDate();

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
      setReady(true);
    } else {
      setReady(true);

    }

    return () => clearInterval(interval);
  }, [targetDate, isRunning]);

  if (!ready) return <div className="m-auto flex items-center justify-center">
    <Loader className="animate-spin" />
    <p className="ml-2 text-sm text-center">Loading...</p>
  </div>
  if (disabled || !isRunning) return <GraduationForm />;
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
    </Card>
  );
};

export default GraduationCountdown;
