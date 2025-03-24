import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SchedulePage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Event Schedule</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Plan your hackathon experience with our detailed schedule of events.
        </p>
      </div>

      <Tabs defaultValue="day1" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="day1">Day 1 (March 25)</TabsTrigger>
          <TabsTrigger value="day2">Day 2 (March 26)</TabsTrigger>
        </TabsList>
        <TabsContent value="day1" className="mt-6">
          <div className="space-y-6">
            <ScheduleCard
              time="8:00 AM - 9:00 AM"
              title="Registration & Check-in"
              description="Arrive at the venue, complete your registration, and collect your participant kit."
            />
            <ScheduleCard
              time="9:00 AM - 10:00 AM"
              title="Opening Ceremony"
              description="Welcome address, introduction to the hackathon theme, and rules explanation."
            />
            <ScheduleCard
              time="10:00 AM - 11:00 AM"
              title="Team Formation"
              description="Find team members or finalize your existing team. Register your team with the organizers."
            />
            <ScheduleCard
              time="11:00 AM - 12:30 PM"
              title="Workshop: Sustainable Tech Solutions"
              description="Learn about sustainable technology approaches and how to incorporate them into your projects."
            />
            <ScheduleCard
              time="12:30 PM - 1:30 PM"
              title="Lunch Break"
              description="Enjoy lunch provided by our sponsors. Network with other participants."
            />
            <ScheduleCard
              time="1:30 PM - 3:00 PM"
              title="Workshop: API Integration"
              description="Hands-on session on integrating various APIs that might be useful for your hackathon project."
            />
            <ScheduleCard
              time="3:00 PM - 8:00 PM"
              title="Hacking Begins"
              description="Start working on your projects. Mentors will be available for guidance."
            />
            <ScheduleCard
              time="8:00 PM - 9:00 PM"
              title="Dinner"
              description="Dinner break. Recharge and continue hacking afterward."
            />
            <ScheduleCard
              time="9:00 PM - 12:00 AM"
              title="Hacking Continues"
              description="Continue working on your projects. Midnight snacks will be provided."
            />
          </div>
        </TabsContent>
        <TabsContent value="day2" className="mt-6">
          <div className="space-y-6">
            <ScheduleCard
              time="8:00 AM - 9:00 AM"
              title="Breakfast"
              description="Start your day with a nutritious breakfast provided by our sponsors."
            />
            <ScheduleCard
              time="9:00 AM - 12:00 PM"
              title="Hacking Continues"
              description="Continue working on your projects. Final stretch before submission!"
            />
            <ScheduleCard
              time="12:00 PM - 1:00 PM"
              title="Lunch Break"
              description="Lunch will be provided. Take a short break before the final push."
            />
            <ScheduleCard
              time="1:00 PM - 3:00 PM"
              title="Final Touches"
              description="Complete your projects and prepare for submission. Mentors will be available for last-minute help."
            />
            <ScheduleCard
              time="3:00 PM"
              title="Project Submission Deadline"
              description="All projects must be submitted by this time. No extensions will be granted."
            />
            <ScheduleCard
              time="3:30 PM - 5:30 PM"
              title="Project Presentations"
              description="Teams will present their projects to the judges and other participants."
            />
            <ScheduleCard
              time="5:30 PM - 6:30 PM"
              title="Judging & Deliberation"
              description="Judges will evaluate the projects based on innovation, execution, and relevance to the theme."
            />
            <ScheduleCard
              time="6:30 PM - 7:30 PM"
              title="Closing Ceremony & Prize Distribution"
              description="Announcement of winners, prize distribution, and closing remarks."
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ScheduleCard({ time, title, description }: { time: string; title: string; description: string }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          <span className="text-sm font-medium bg-primary/10 text-primary px-2 py-1 rounded-md">{time}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

