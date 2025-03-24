import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Trophy, Users } from "lucide-react"
import HackathonCountdown from "@/components/hackathon-countdown"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Xion India Hackathon
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join us at IIIT Delhi on March 25-26, 2025 for an exciting hackathon experience!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg">Register Now</Button>
                </Link>
                <Link href="/schedule">
                  <Button variant="outline" size="lg">
                    View Schedule
                  </Button>
                </Link>
              </div>
              <HackathonCountdown />
            </div>
          </div>
        </section>

        {/* Key Info Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <Calendar className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">When</h3>
                <p className="text-center text-muted-foreground">
                  March 25-26, 2025
                  <br />
                  9:00 AM - 5:00 PM
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <MapPin className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Where</h3>
                <p className="text-center text-muted-foreground">
                  IIIT Delhi Campus
                  <br />
                  Okhla Industrial Estate, Phase III
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <Trophy className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Prizes</h3>
                <p className="text-center text-muted-foreground">
                  ₹1,00,000 for 1st Place
                  <br />
                  ₹50,000 for 2nd Place
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Hackathon Overview</h2>
                <p className="text-muted-foreground md:text-lg">
                  The Xion India Hackathon is a 2-day coding competition focused on building innovative solutions for
                  real-world problems. This year's theme is "Sustainable Technology Solutions" where participants will
                  develop applications that address environmental challenges.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Whether you're a beginner or an experienced developer, this hackathon provides an opportunity to
                  showcase your skills, collaborate with like-minded individuals, and win exciting prizes.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button>Register Now</Button>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">What to Expect</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <span>Form teams of up to 4 members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <span>Access to mentors and industry experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <span>Workshops on cutting-edge technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <span>Networking opportunities with sponsors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <span>Free meals and refreshments</span>
                  </li>
                </ul>
                <h3 className="text-xl font-bold pt-4">Eligibility</h3>
                <p className="text-muted-foreground">
                  Open to all college students and recent graduates. Participants must bring their own laptops and
                  necessary equipment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

