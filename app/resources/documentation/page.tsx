"use client";

import { CodeBlock } from '@/components/ui/code-block';
import PricingCard from '@/components/pricing/pricing-card';
import { Toaster } from '@/components/ui/toaster';
import { INDIVIDUAL_PLANS, BUSINESS_PLANS } from '@/components/pricing/constants';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Download, Terminal, Code, Package, Sparkles, Eye } from "lucide-react";
import Link from "next/link";

export default function DocumentationPage() {
  const installationCode = `npm install @ajstudioz14151/codeblocks-component
# or
npx @ajstudioz14151/codeblocks-component@1.1.0 add`;

  const pricingInstallationCode = `npm install @ajstudioz14151/pricing-component
# or  
npx @ajstudioz14151/pricing-component@1.2.0 add`;

  const codeBlockUsage = `import { CodeBlock } from '@/components/codeblocks/code-block';
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

  const pricingUsage = `import { PricingCard } from '@/components/pricing/pricing-card';
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

  const nextJsExample = `// For Next.js projects
npx @ajstudioz14151/codeblocks-component@1.1.0 add

// Automatically detects Next.js and:
// ✅ Uses Geist_Mono fonts
// ✅ Updates app/globals.css or src/app/globals.css
// ✅ Integrates with next-themes`;

  const viteExample = `// For React/Vite projects  
npx @ajstudioz14151/codeblocks-component@1.1.0 add

// Automatically detects Vite and:
// ✅ Uses standard monospace fonts
// ✅ Updates src/index.css
// ✅ No Next.js specific imports`;

  const advancedCodeExample = `import { CodeBlock } from '@/components/codeblocks/code-block';

// Advanced usage with multiple languages
const pythonCode = \`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))\`;

const reactCode = \`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}\`;

export default function Advanced() {
  return (
    <div className="space-y-6">
      <CodeBlock language="python" elementKey="python-demo">
        {pythonCode}
      </CodeBlock>
      
      <CodeBlock language="javascript" elementKey="react-demo">
        {reactCode}
      </CodeBlock>
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            AJ STUDIOZ Component Library
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Professional React Components
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Production-ready, customizable components with premium styling. 
            Install instantly via NPX CLI for Next.js and React/Vite projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm">
              <Terminal className="h-3 w-3 mr-1" />
              NPX CLI Support
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Code className="h-3 w-3 mr-1" />
              TypeScript Ready
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Package className="h-3 w-3 mr-1" />
              Tree Shakeable
            </Badge>
          </div>
        </div>

        <Separator className="mb-16" />

        {/* Code Blocks Component */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Code Blocks Component</h2>
                  <p className="text-muted-foreground">Premium syntax highlighting with copy functionality</p>
                </div>
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5" />
                    Quick Installation
                  </CardTitle>
                  <CardDescription>
                    One command setup with automatic project detection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock language="bash" elementKey="codeblocks-install">
                    {installationCode}
                  </CodeBlock>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardContent className="pt-4">
                    <div className="text-2xl font-bold text-primary">9</div>
                    <div className="text-sm text-muted-foreground">Programming Languages</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Framework Compatible</div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">✨ Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Syntax highlighting with sugar-high
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    One-click copy to clipboard
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Toast notifications with sonner
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Line wrapping toggle
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Theme-aware styling (dark/light)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Lazy loading for performance
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Live Demo - JavaScript</CardTitle>
                  <CardDescription>Interactive code block with copy functionality</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock language="javascript" elementKey="js-demo">
{`// AJ STUDIOZ Code Blocks Component
import { CodeBlock } from '@/components/codeblocks/code-block';

const greeting = 'Hello, World!';
console.log(greeting);

// Features:
// ✅ Syntax highlighting
// ✅ Copy to clipboard  
// ✅ Line wrapping
// ✅ Theme support`}
                  </CodeBlock>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>React/TypeScript Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <CodeBlock language="typescript" elementKey="tsx-demo">
{`interface Props {
  name: string;
  age?: number;
}

const UserCard: React.FC<Props> = ({ name, age }) => {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold">{name}</h3>
      {age && <p className="text-gray-600">Age: {age}</p>}
    </div>
  );
};`}
                  </CodeBlock>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Framework Support */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Framework Support</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-black rounded flex items-center justify-center text-white text-xs font-bold">N</div>
                  Next.js Projects
                </CardTitle>
                <CardDescription>Optimized for Next.js App Router</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock language="bash" elementKey="nextjs-install">
                  {nextJsExample}
                </CodeBlock>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">V</div>
                  React/Vite Projects
                </CardTitle>
                <CardDescription>Perfect for Vite-powered React apps</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock language="bash" elementKey="vite-install">
                  {viteExample}
                </CodeBlock>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Usage Examples */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Usage Examples</h2>
          
          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Basic Usage</CardTitle>
                <CardDescription>Simple implementation in your React components</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock language="typescript" elementKey="basic-usage">
                  {codeBlockUsage}
                </CodeBlock>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Advanced Multi-Language Setup</CardTitle>
                <CardDescription>Multiple code blocks with different programming languages</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock language="typescript" elementKey="advanced-usage">
                  {advancedCodeExample}
                </CodeBlock>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Pricing Component */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Pricing Component</h2>
                  <p className="text-muted-foreground">Beautiful pricing cards with premium styling</p>
                </div>
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5" />
                    Installation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CodeBlock language="bash" elementKey="pricing-install">
                    {pricingInstallationCode}
                  </CodeBlock>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">✨ Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Premium card designs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Monthly/Yearly toggle
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Feature highlighting
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Customizable plans
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Responsive design
                  </li>
                </ul>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Usage Example</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock language="typescript" elementKey="pricing-usage">
                      {pricingUsage}
                    </CodeBlock>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-center">Live Pricing Demo</h3>
              <div className="grid gap-4">
                {INDIVIDUAL_PLANS.slice(0, 2).map((plan) => (
                  <PricingCard key={plan.id} plan={plan} isYearly={false} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Getting Started */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Install our components in seconds and start building beautiful UIs with premium styling.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Code Blocks</h3>
              <p className="text-muted-foreground mb-4">
                Add syntax highlighting to your documentation or blog
              </p>
              <Badge variant="outline" className="text-xs">v1.1.0 Latest</Badge>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pricing Cards</h3>
              <p className="text-muted-foreground mb-4">
                Beautiful pricing tables for your SaaS products
              </p>
              <Badge variant="outline" className="text-xs">v1.2.0 Latest</Badge>
            </Card>
          </div>

          <div className="flex justify-center">
            <Link href="/resources/components">
              <Button size="lg" className="text-lg px-8">
                <Eye className="h-5 w-5 mr-2" />
                View Live Components Showcase
              </Button>
            </Link>
          </div>

          <div className="mt-12 p-8 bg-muted/50 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Need Custom Components?</h3>
            <p className="text-muted-foreground mb-6">
              Contact AJ STUDIOZ for custom component development and enterprise solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary">Custom Development</Badge>
              <Badge variant="secondary">Enterprise Support</Badge>
              <Badge variant="secondary">Design Systems</Badge>
            </div>
          </div>
        </section>

        <Toaster />
      </div>
    </div>
  );
}