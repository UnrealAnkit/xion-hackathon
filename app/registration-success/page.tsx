import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function RegistrationSuccessPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center max-w-md mx-auto text-center">
        <CheckCircle className="h-24 w-24 text-green-500 mb-6" />
        <h1 className="text-3xl font-bold tracking-tighter mb-4">Registration Successful!</h1>
        <p className="text-muted-foreground mb-8">
          Thank you for registering for the Xion India Hackathon. We've sent a confirmation email to your registered
          email address with further instructions.
        </p>
        <div className="space-y-4 w-full">
          <Link href="/dashboard">
            <Button className="w-full">Go to Dashboard</Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

