import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/project-card";
import { BookProjectsModal } from "@/components/book-projects-modal";
import AppIntegrationComponent from "@/components/app-integration";
import { ExternalLink } from "lucide-react";

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
  "Education": "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
  "Geolocation": "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100",
  "Business": "bg-gray-300 text-gray-900 dark:bg-gray-600 dark:text-gray-100",
  "Entertainment": "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  "Web Tool": "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  "AI Tool": "bg-gray-300 text-gray-900 dark:bg-gray-600 dark:text-gray-100",
  "Development Tool": "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
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
          <div className="mt-8 flex justify-center">
            <BookProjectsModal />
          </div>
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
              <ProjectCard
                key={index}
                category={project.category}
                title={project.title}
                description={project.description}
                link={project.link}
                tags={project.tags}
              />
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
              
              {/* Call to Action */}
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can bring your vision to life. Our expert team is ready to create 
                  innovative solutions tailored to your specific needs.
                </p>
                <BookProjectsModal />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Integration Services Section */}
      <AppIntegrationComponent />
    </div>
  );
}