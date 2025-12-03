import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  category: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  { 
    category: "Education", 
    title: "GPA & CGPA Calculator", 
    description: "An intuitive tool for students to accurately calculate their Grade Point Averages, featuring a clean and user-friendly interface.", 
    link: "https://cgpa-calc-aj.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript", "Education"]
  },
  { 
    category: "Geolocation", 
    title: "Location Tracking Website", 
    description: "A web application that demonstrates real-time location fetching, built to explore and implement geolocation browser APIs.", 
    link: "https://cgpa-calc-location-fetch.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript", "Geolocation API"]
  },
  { 
    category: "Business", 
    title: "MVK Transports Website", 
    description: "A professional, multi-page business website designed for a transport company, featuring service details and contact information.", 
    link: "https://mvk-transports.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript", "Business", "Multi-page"]
  },
  { 
    category: "Entertainment", 
    title: "MusiQ Player", 
    description: "A sleek and functional music player interface, allowing users to play and control audio directly in their browser.", 
    link: "https://aj-musiq-factory.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript", "Audio API", "Entertainment"]
  },
  { 
    category: "Web Tool", 
    title: "Age Calculator", 
    description: "A simple yet effective utility that calculates a user's precise age based on their date of birth.", 
    link: "https://kamesh14151.github.io/AJ-COMPANY/",
    tags: ["HTML", "CSS", "JavaScript", "Utility", "Web Tool"]
  },
  { 
    category: "AI Tool", 
    title: "NexaRiq", 
    description: "An advanced AI-powered platform designed to revolutionize the way we interact with artificial intelligence in our daily tasks.", 
    link: "https://nexariq.ajstudioz.co.in/",
    tags: ["AI", "Web Application", "JavaScript", "React", "Node.js"]
  },
  { 
    category: "Development Tool", 
    title: "NexaRiq Agentic Code Editor", 
    description: "A next-generation code editor integrated with AI agents to assist developers in writing, debugging, and optimizing code.", 
    link: "https://nexariq-agentic-code-editor.vercel.app/",
    tags: ["Code Editor", "AI", "JavaScript", "React", "Development Tool"]
  }
];

const categoryColors: { [key: string]: string } = {
  "Education": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "Geolocation": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  "Business": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  "Entertainment": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
  "Web Tool": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  "AI Tool": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  "Development Tool": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
};

export default function ProjectsPage() {
  const categories = [...new Set(projects.map(project => project.category))];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background text-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Explore our diverse portfolio of innovative web applications, tools, and AI-powered solutions 
            that showcase our expertise across various domains.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold mb-6">Project Categories</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant="secondary" 
                  className={`px-4 py-2 text-sm font-medium ${categoryColors[category]}`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant="secondary" 
                      className={`text-xs font-medium ${categoryColors[project.category]}`}
                    >
                      {project.category}
                    </Badge>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="outline" 
                          className="text-xs px-2 py-1 border-muted-foreground/20 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Link */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-muted-foreground transition-colors text-sm font-medium w-full justify-center"
                    >
                      Visit Project
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-20 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Building the Future</h2>
              <p className="text-lg text-muted-foreground mb-8">
                At AJ STUDIOZ, we're passionate about creating innovative solutions that solve real-world problems. 
                Each project represents our commitment to excellence, user experience, and cutting-edge technology.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{projects.length}+</div>
                  <p className="text-muted-foreground">Projects Delivered</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{categories.length}</div>
                  <p className="text-muted-foreground">Technology Domains</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}