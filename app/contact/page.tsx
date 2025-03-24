import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Have questions about the hackathon? Get in touch with our team.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 max-w-6xl mx-auto">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-sm text-muted-foreground">
                    IIIT Delhi, Okhla Industrial Estate, Phase III, New Delhi - 110020
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">info@xionhackathon.com</p>
                  <p className="text-sm text-muted-foreground">support@xionhackathon.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-sm text-muted-foreground">+91 98765 43210 (General Inquiries)</p>
                  <p className="text-sm text-muted-foreground">+91 98765 43211 (Technical Support)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">Who can participate?</h3>
                <p className="text-sm text-muted-foreground">
                  The hackathon is open to all college students and recent graduates.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Is there a registration fee?</h3>
                <p className="text-sm text-muted-foreground">No, participation is completely free of charge.</p>
              </div>
              <div>
                <h3 className="font-medium">What should I bring?</h3>
                <p className="text-sm text-muted-foreground">
                  Bring your laptop, charger, and any other equipment you might need for your project.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Will accommodation be provided?</h3>
                <p className="text-sm text-muted-foreground">
                  Limited accommodation is available for outstation participants. Please contact us for details.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

