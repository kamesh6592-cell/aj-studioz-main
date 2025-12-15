"use client";

import PricingCard from '@/components/pricing/pricing-card';
import { Toaster } from '@/components/ui/toaster';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { INDIVIDUAL_PLANS, BUSINESS_PLANS } from '@/components/pricing/constants';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Terminal, Sparkles, ArrowLeft, Github, Zap, Users, Crown } from "lucide-react";
import Link from 'next/link';

export default function PricingShowcase() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Link href="/resources/documentation" className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Documentation
              </Link>
            </div>
            <h1 className="text-4xl font-bold mb-2">Pricing Components Showcase</h1>
            <p className="text-muted-foreground">
              Beautiful, responsive pricing cards with premium styling and animations
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Quick Install */}
        <Card className="mb-12 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Terminal className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Quick Installation</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Install the pricing component with one command
                </p>
                <code className="bg-muted px-3 py-1 rounded text-sm">
                  npx @ajstudioz14151/pricing-component@1.2.0 add
                </code>
              </div>
              <div className="text-right">
                <Badge variant="secondary">v1.2.0</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Individual Plans Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="h-4 w-4" />
              Individual Plans
            </div>
            <h2 className="text-3xl font-bold mb-4">Perfect for Developers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the right plan for your individual needs. All plans include core features 
              with different usage limits and advanced capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {INDIVIDUAL_PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} isYearly={false} />
            ))}
          </div>
        </section>

        {/* Business Plans Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Crown className="h-4 w-4" />
              Business Plans
            </div>
            <h2 className="text-3xl font-bold mb-4">Scale Your Business</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade solutions with advanced features, priority support, 
              and custom integrations for growing businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {BUSINESS_PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} isYearly={true} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Badge variant="outline" className="text-sm">
              <Zap className="h-3 w-3 mr-1" />
              Business plans shown with yearly pricing (2 months free)
            </Badge>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Component Features</h2>
            <p className="text-muted-foreground">
              What makes our pricing components stand out
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-lg w-fit">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Premium Design</CardTitle>
                <CardDescription>
                  Carefully crafted with attention to typography, spacing, and visual hierarchy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                    Consistent visual design
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                    Theme-aware styling
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                    Smooth animations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-lg w-fit">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Fully Customizable</CardTitle>
                <CardDescription>
                  Easy to modify plans, features, and styling to match your brand
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                    Editable constants file
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                    TypeScript interfaces
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                    Modular components
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-lg w-fit">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Interactive Elements</CardTitle>
                <CardDescription>
                  Engaging user experience with hover effects and smooth transitions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                    Hover animations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                    Monthly/yearly toggle
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                    Click interactions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Usage Example */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Quick Usage Example</CardTitle>
              <CardDescription>
                Import and use the pricing components in your React application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-600 mb-2">// Import the components</div>
                <div className="mb-1">
                  <span className="text-blue-600">import</span> PricingCard <span className="text-blue-600">from</span> <span className="text-amber-600">'@/components/pricing/pricing-card'</span>;
                </div>
                <div className="mb-1">
                  <span className="text-blue-600">import</span> &#123; INDIVIDUAL_PLANS &#125; <span className="text-blue-600">from</span> <span className="text-amber-600">'@/components/pricing/constants'</span>;
                </div>
                <br />
                <div className="text-green-600 mb-2">// Use in your component</div>
                <div className="mb-1">
                  <span className="text-purple-600">&#60;div</span> className=<span className="text-amber-600">"grid md:grid-cols-3 gap-6"</span><span className="text-purple-600">&#62;</span>
                </div>
                <div className="mb-1 ml-4">
                  &#123;INDIVIDUAL_PLANS.map(plan =&#62; (
                </div>
                <div className="mb-1 ml-8">
                  <span className="text-purple-600">&#60;PricingCard</span> key=&#123;plan.id&#125; plan=&#123;plan&#125; isYearly=&#123;false&#125; <span className="text-purple-600">/&#62;</span>
                </div>
                <div className="mb-1 ml-4">
                  ))&#125;
                </div>
                <div>
                  <span className="text-purple-600">&#60;/div&#62;</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <Package className="h-8 w-8 text-primary mx-auto" />
              <h3 className="text-2xl font-bold">Ready to Add Pricing to Your App?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Install our pricing component and start building beautiful pricing pages 
                that convert visitors into customers.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/resources/documentation">
                  <Button variant="outline" size="lg">
                    View Documentation
                  </Button>
                </Link>
                <Button size="lg" asChild>
                  <a href="https://github.com/kamesh6592-cell" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Source
                  </a>
                </Button>
              </div>
              <div className="pt-4">
                <Badge variant="secondary" className="text-sm">
                  <Terminal className="h-3 w-3 mr-1" />
                  npx @ajstudioz14151/pricing-component@1.2.0 add
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