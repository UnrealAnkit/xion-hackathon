import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, FileText, Users } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Participant Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Manage your hackathon participation from here.</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid grid-cols-4 w-full max-w-lg">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="submissions">Submissions</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Event Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Upcoming</div>
                <p className="text-xs text-muted-foreground">March 25-26, 2025</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Registration Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Confirmed</div>
                <p className="text-xs text-muted-foreground">Your spot is reserved</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Team Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Not Formed</div>
                <p className="text-xs text-muted-foreground">Create or join a team</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Submission Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Not Started</div>
                <p className="text-xs text-muted-foreground">Submission opens during event</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Mark your calendar for these important dates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Orientation Session</h3>
                      <p className="text-sm text-muted-foreground">March 20, 2025 - 6:00 PM</p>
                      <p className="text-sm text-muted-foreground">Online (Zoom)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Hackathon Day 1</h3>
                      <p className="text-sm text-muted-foreground">March 25, 2025 - 9:00 AM</p>
                      <p className="text-sm text-muted-foreground">IIIT Delhi Campus</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Hackathon Day 2</h3>
                      <p className="text-sm text-muted-foreground">March 26, 2025 - 9:00 AM</p>
                      <p className="text-sm text-muted-foreground">IIIT Delhi Campus</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your hackathon participation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Button className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Create or Join Team
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Update Profile
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Clock className="mr-2 h-4 w-4" />
                    View Schedule
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Resources
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="team" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Team Management</CardTitle>
              <CardDescription>Create or join a team for the hackathon</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center py-8">
                <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">You're not part of a team yet</h3>
                <p className="text-muted-foreground mb-6">
                  Create your own team or join an existing one using a team code.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button>Create a Team</Button>
                  <Button variant="outline">Join a Team</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="submissions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Submission</CardTitle>
              <CardDescription>Submit your hackathon project here</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center py-8">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">Submissions Not Open Yet</h3>
                <p className="text-muted-foreground mb-6">
                  Project submissions will open during the hackathon on March 25-26, 2025.
                </p>
                <Button disabled>Submit Project</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hackathon Resources</CardTitle>
              <CardDescription>Access helpful materials for the hackathon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Hackathon Guidelines</h3>
                      <p className="text-sm text-muted-foreground">Rules and regulations for participants</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Judging Criteria</h3>
                      <p className="text-sm text-muted-foreground">How projects will be evaluated</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">API Documentation</h3>
                      <p className="text-sm text-muted-foreground">Documentation for available APIs</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Presentation Template</h3>
                      <p className="text-sm text-muted-foreground">Template for final project presentation</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

