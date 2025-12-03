import { ProfileCard } from "@/components/profile-card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background text-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About AJ STUDIOZ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Pioneering the future of artificial intelligence and conversational technology 
            to transform how businesses connect with their customers.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  AJ STUDIOZ Technologies is at the forefront of AI innovation, specializing in 
                  creating intelligent chatbot solutions that revolutionize customer interactions. 
                  We believe in making advanced AI technology accessible to businesses of all sizes.
                </p>
                <p className="text-lg text-muted-foreground">
                  Founded with the vision to bridge the gap between human communication and 
                  artificial intelligence, we develop cutting-edge solutions that understand 
                  context, emotion, and intent to deliver exceptional user experiences.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl flex items-center justify-center">
                  <img src="/AJ.svg" alt="AJ STUDIOZ" className="w-24 h-24 opacity-50" />
                </div>
              </div>
            </div>

            {/* Technologies & Expertise */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Expertise</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-foreground/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
                  <p className="text-muted-foreground">
                    Advanced natural language processing and deep learning algorithms 
                    that power intelligent conversations.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-foreground/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Conversational AI</h3>
                  <p className="text-muted-foreground">
                    Building chatbots that understand context, maintain conversation flow, 
                    and provide human-like interactions.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-foreground/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Enterprise Solutions</h3>
                  <p className="text-muted-foreground">
                    Scalable AI solutions designed for enterprise-level performance, 
                    security, and integration capabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Section */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet Our Founder</h2>
              <div className="flex justify-center">
                <ProfileCard
                  name="AJ KAMESH"
                  description="Visionary entrepreneur and AI technology pioneer. Leading the revolution in conversational AI and machine learning solutions for next-generation businesses."
                  image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&auto=format&q=80"
                  isVerified={true}
                  followers={2840}
                  following={180}
                  enableAnimations={true}
                />
              </div>
            </div>

            {/* Values */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
                  <p className="text-muted-foreground">
                    We constantly push the boundaries of what's possible with AI technology, 
                    staying ahead of industry trends and emerging technologies.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Customer-Centric</h3>
                  <p className="text-muted-foreground">
                    Every solution we build is designed with the end-user in mind, 
                    ensuring exceptional experiences and measurable business results.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Ethical AI</h3>
                  <p className="text-muted-foreground">
                    We develop responsible AI that respects privacy, promotes transparency, 
                    and ensures fair and unbiased interactions.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
                  <p className="text-muted-foreground">
                    Our AI systems and team constantly evolve, learning from every interaction 
                    to deliver better solutions and improved performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}