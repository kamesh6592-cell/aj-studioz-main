"use client";

import { CodeBlock } from '@/components/ui/code-block';
import PricingCard from '@/components/pricing/pricing-card';
import { Toaster } from '@/components/ui/toaster';
import { INDIVIDUAL_PLANS } from '@/components/pricing/constants';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Terminal, Code, Package, Sparkles, Eye, ExternalLink, Zap, Download } from "lucide-react";
import Link from "next/link";

export default function DocumentationPage() {
  const quickInstall = `# Code Blocks Component
npx @ajstudioz14151/codeblocks-component@1.1.0 add

# Pricing Component
npx @ajstudioz14151/pricing-component@1.2.0 add`;

  const codeBlockUsage = `import { CodeBlock } from '@/components/ui/code-block';
import { Toaster } from '@/components/ui/toaster';

export default function MyPage() {
  const code = \`console.log('Hello, World!');\`;
  
  return (
    <div>
      <CodeBlock language="javascript" elementKey="demo">
        {code}
      </CodeBlock>
      <Toaster />
    </div>
  );
}`;

  const pricingUsage = `import PricingCard from '@/components/pricing/pricing-card';
import { INDIVIDUAL_PLANS } from '@/components/pricing/constants';

export default function PricingPage() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {INDIVIDUAL_PLANS.map(plan => (
        <PricingCard key={plan.id} plan={plan} isYearly={false} />
      ))}
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            AJ STUDIOZ Component Library
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional React Components
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Production-ready components with premium styling. Install instantly via NPX CLI.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary">
              <Terminal className="h-3 w-3 mr-1" />
              NPX CLI
            </Badge>
            <Badge variant="secondary">
              <Code className="h-3 w-3 mr-1" />
              TypeScript
            </Badge>
            <Badge variant="secondary">
              <Zap className="h-3 w-3 mr-1" />
              Auto-Detection
            </Badge>
          </div>
        </div>

        {/* Quick Install */}
        <Card className="mb-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <Terminal className="h-8 w-8 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Quick Installation</h2>
              <p className="text-muted-foreground mb-6">
                One command installs components with automatic project detection
              </p>
              <CodeBlock language="bash" elementKey="quick-install">
                {quickInstall}
              </CodeBlock>
            </div>
          </CardContent>
        </Card>

        {/* Components Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Code Blocks Component</CardTitle>
                  <CardDescription>Syntax highlighting for 9+ languages</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                  One-click copy functionality
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                  Theme-aware styling (dark/light)
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                  Auto Next.js/Vite detection
                </div>
              </div>
              
              <CodeBlock language="typescript" elementKey="code-usage">
                {codeBlockUsage}
              </CodeBlock>
              
              <div className="flex gap-2 mt-4">
                <Link href="/resources/code-blocks">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Live Examples
                  </Button>
                </Link>
                <Badge variant="secondary" className="text-xs">v1.1.0</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Pricing Component</CardTitle>
                  <CardDescription>Beautiful pricing cards & tables</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                  Premium card designs
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                  Monthly/yearly toggle
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                  Fully customizable plans
                </div>
              </div>
              
              <CodeBlock language="typescript" elementKey="pricing-usage">
                {pricingUsage}
              </CodeBlock>
              
              <div className="flex gap-2 mt-4">
                <Link href="/resources/pricing">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </Link>
                <Badge variant="secondary" className="text-xs">v1.2.0</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center p-6">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Auto-Detection</h3>
            <p className="text-sm text-muted-foreground">
              Automatically detects Next.js vs Vite projects and applies correct templates
            </p>
          </Card>
          
          <Card className="text-center p-6">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">TypeScript Ready</h3>
            <p className="text-sm text-muted-foreground">
              Full TypeScript support with proper type definitions and interfaces
            </p>
          </Card>
          
          <Card className="text-center p-6">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
              <Terminal className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">NPX CLI</h3>
            <p className="text-sm text-muted-foreground">
              Install and configure components instantly with one command
            </p>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center space-y-6">
              <Sparkles className="h-8 w-8 text-primary mx-auto" />
              <h2 className="text-3xl font-bold">Ready to Build Amazing UIs?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Install our components in seconds and start building with premium styling and professional functionality.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/resources/code-blocks">
                  <Button size="lg">
                    <Code className="h-4 w-4 mr-2" />
                    View Code Examples
                  </Button>
                </Link>
                <Link href="/resources/pricing">
                  <Button variant="outline" size="lg">
                    <Package className="h-4 w-4 mr-2" />
                    See Pricing Demo
                  </Button>
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Badge variant="secondary">
                  <Download className="h-3 w-3 mr-1" />
                  NPX Install
                </Badge>
                <Badge variant="secondary">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Open Source
                </Badge>
                <Badge variant="secondary">
                  <Terminal className="h-3 w-3 mr-1" />
                  CLI Tools
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Toaster />
      </div>
    </div>
  );
}