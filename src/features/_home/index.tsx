import { Book, FileText, Github, School, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ThemeButton from "../_theme/components/button";

function App() {
  return (
    <div className="mx-auto min-h-screen bg-background flex flex-col w-full">
      {/* Header */}
      <header className="px-6 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto container flex h-14 items-center justify-between">
          <div className="flex space-x-3">
            <School className="h-6 w-6" />
            <span className="font-semibold text-2xl">
              {import.meta.env.VITE_APP_NAME_SHORT}
            </span>
          </div>

          <nav className="flex items-center">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">About</Button>
            <ThemeButton />
            {/* <ModeToggle /> */}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="px-6 py-12 md:py-24">
        <section className="mx-auto container">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Modern School Management
              <br />
              <span className="text-primary">Made Simple</span>
            </h1>

            <p className="max-w-[700px] text-lg text-muted-foreground">
              Open-source school management system built with modern
              technologies. Manage students, teachers, classes, and more with
              ease.
            </p>

            <div className="flex gap-4 mt-6">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <div className="px-6 py-12">
        <section className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 mb-2" />
                <CardTitle>Student Management</CardTitle>
                <CardDescription>
                  Track all student information in one place
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Book className="h-8 w-8 mb-2" />
                <CardTitle>Class Scheduling</CardTitle>
                <CardDescription>
                  Create and manage class schedules effortlessly
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 mb-2" />
                <CardTitle>Grade Reporting</CardTitle>
                <CardDescription>
                  Generate reports and transcripts automatically
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div className="px-6 my-12">
        <section className="px-6 mx-auto w-full max-w-6xl bg-secondary rounded-lg py-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
            <p className="max-w-[600px] text-muted-foreground mb-6">
              Join hundreds of schools already using our platform to streamline
              their operations.
            </p>

            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">Sign Up</Button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="px-6 border-t py-6">
        <div className="mx-auto container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            Open-source school management system
          </div>

          <p className="text-sm text-muted-foreground font-medium text-center">
            Copyright &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
