import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Gift, Star } from "lucide-react"

export default function PrizesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Prizes & Rewards</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Compete for exciting prizes and recognition at the Xion India Hackathon.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <Card className="border-2 border-yellow-500 bg-gradient-to-b from-yellow-50 to-transparent dark:from-yellow-950/20 dark:to-transparent">
          <CardHeader className="pb-2 text-center">
            <Trophy className="h-12 w-12 mx-auto text-yellow-500 mb-2" />
            <CardTitle className="text-xl">First Prize</CardTitle>
            <CardDescription>Overall Winner</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold mb-4">₹1,00,000</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center justify-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>Cash Prize of ₹1,00,000</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>Internship Opportunities</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>Winner Certificates</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>Mentorship from Industry Experts</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-400 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-950/20 dark:to-transparent">
          <CardHeader className="pb-2 text-center">
            <Award className="h-12 w-12 mx-auto text-gray-400 mb-2" />
            <CardTitle className="text-xl">Second Prize</CardTitle>
            <CardDescription>Runner Up</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold mb-4">₹50,000</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center justify-center gap-2">
                <Star className="h-4 w-4 text-gray-400" />
                <span>Cash Prize of ₹50,000</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Star className="h-4 w-4 text-gray-400" />
                <span>Runner-up Certificates</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Star className="h-4 w-4 text-gray-400" />
                <span>Tech Gadgets</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Star className="h-4 w-4 text-gray-400" />
                <span>Networking Opportunities</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-amber-700 bg-gradient-to-b from-amber-50 to-transparent dark:from-amber-950/20 dark:to-transparent">
          <CardHeader className="pb-2 text-center">
            <Gift className="h-12 w-12 mx-auto text-amber-700 mb-2" />
            <CardTitle className="text-xl">Third Prize</CardTitle>
            <CardDescription>Second Runner Up</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold mb-4">₹25,000</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center justify-center gap-2">
                <Star className="h-4 w-4 text-amber-700" />
                <span>Cash Prize of ₹25,000</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Star className="h-4 w-4 text-amber-700" />
                <span>Second Runner-up Certificates</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Star className="h-4 w-4 text-amber-700" />
                <span>Swag Kits</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Star className="h-4 w-4 text-amber-700" />
                <span>Recognition at Closing Ceremony</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>Special Category Prizes</CardTitle>
            <CardDescription>
              In addition to the main prizes, we have special category awards to recognize excellence in specific areas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <h3 className="font-medium">Best UI/UX Design</h3>
                <p className="text-sm text-muted-foreground">₹15,000 + Design Software Subscriptions</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Most Innovative Solution</h3>
                <p className="text-sm text-muted-foreground">₹15,000 + Innovation Mentorship</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Best Use of AI</h3>
                <p className="text-sm text-muted-foreground">₹15,000 + Cloud Credits</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Participation Benefits</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          All participants will receive the following benefits regardless of winning:
        </p>
        <div className="grid gap-4 md:grid-cols-4 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-medium mb-2">Certificates</h3>
                <p className="text-sm text-muted-foreground">Participation certificates for all attendees</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-medium mb-2">Swag</h3>
                <p className="text-sm text-muted-foreground">T-shirts, stickers, and other goodies</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-medium mb-2">Networking</h3>
                <p className="text-sm text-muted-foreground">Connect with industry professionals</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-medium mb-2">Learning</h3>
                <p className="text-sm text-muted-foreground">Access to workshops and learning resources</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

