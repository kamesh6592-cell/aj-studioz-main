import { CodeBlock } from '@/components/codeblocks/code-block';
import { PricingCard } from '@/components/pricing/pricing-card';
import { Toaster } from '@/components/ui/toaster';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { INDIVIDUAL_PLANS, BUSINESS_PLANS } from '@/components/pricing/constants';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Code2, Package, Palette, Sparkles, Eye, Copy, Github, ExternalLink } from "lucide-react";
import Link from 'next/link';

export default function ComponentsShowcase() {
  const jsCode = `// Interactive JavaScript Example
const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(5)); // Output: 120

// ES6 Features
const users = ['Alice', 'Bob', 'Charlie'];
const greetings = users.map(name => \`Hello, \${name}!\`);
console.log(greetings);`;

  const pythonCode = `# Python Data Science Example
import pandas as pd
import numpy as np

# Create sample data
data = {
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'salary': [50000, 60000, 70000]
}

df = pd.DataFrame(data)
print(df.describe())

# Advanced analytics
correlation = df[['age', 'salary']].corr()
print(f"Age-Salary correlation: {correlation.iloc[0,1]:.2f}")`;

  const reactCode = `import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid gap-4">
      {users.map(user => (
        <Card key={user.id}>
          <CardHeader>
            <CardTitle>{user.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{user.email}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UserDashboard;`;

  const sqlCode = `-- Advanced SQL Query with CTEs
WITH revenue_by_month AS (
  SELECT 
    DATE_TRUNC('month', order_date) as month,
    SUM(total_amount) as monthly_revenue,
    COUNT(DISTINCT customer_id) as unique_customers
  FROM orders 
  WHERE order_date >= '2024-01-01'
  GROUP BY DATE_TRUNC('month', order_date)
),
growth_analysis AS (
  SELECT 
    month,
    monthly_revenue,
    unique_customers,
    LAG(monthly_revenue) OVER (ORDER BY month) as prev_month_revenue,
    (monthly_revenue - LAG(monthly_revenue) OVER (ORDER BY month)) / 
    LAG(monthly_revenue) OVER (ORDER BY month) * 100 as growth_rate
  FROM revenue_by_month
)
SELECT 
  month,
  monthly_revenue,
  unique_customers,
  ROUND(growth_rate, 2) as growth_percentage
FROM growth_analysis
ORDER BY month DESC;`;

  const cppCode = `#include <iostream>
#include <vector>
#include <algorithm>
#include <memory>

// Modern C++ Example with Smart Pointers
class DataProcessor {
private:
    std::vector<int> data_;
    
public:
    DataProcessor(std::initializer_list<int> values) : data_(values) {}
    
    // Range-based for loop with auto
    void processData() {
        for (auto& value : data_) {
            value *= 2;
        }
    }
    
    // Lambda functions
    void sortData() {
        std::sort(data_.begin(), data_.end(), 
                  [](int a, int b) { return a > b; });
    }
    
    // Template method
    template<typename Func>
    void applyFunction(Func func) {
        std::for_each(data_.begin(), data_.end(), func);
    }
    
    void display() const {
        for (const auto& value : data_) {
            std::cout << value << " ";
        }
        std::cout << std::endl;
    }
};

int main() {
    auto processor = std::make_unique<DataProcessor>({1, 2, 3, 4, 5});
    
    processor->processData();
    processor->sortData();
    processor->display();
    
    return 0;
}`;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Link href="/resources/documentation" className="text-muted-foreground hover:text-foreground text-sm">
                ← Back to Documentation
              </Link>
            </div>
            <h1 className="text-4xl font-bold mb-2">Component Showcase</h1>
            <p className="text-muted-foreground">
              Interactive examples of AJ STUDIOZ components in action
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-lg">Components</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="#code-blocks" className="flex items-center gap-2 p-2 text-sm hover:bg-muted rounded-lg">
                  <Code2 className="h-4 w-4" />
                  Code Blocks
                </a>
                <a href="#pricing-cards" className="flex items-center gap-2 p-2 text-sm hover:bg-muted rounded-lg">
                  <Package className="h-4 w-4" />
                  Pricing Cards  
                </a>
                <a href="#theme-system" className="flex items-center gap-2 p-2 text-sm hover:bg-muted rounded-lg">
                  <Palette className="h-4 w-4" />
                  Theme System
                </a>
                <Separator className="my-2" />
                <Link href="/resources/documentation" className="flex items-center gap-2 p-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg">
                  <ExternalLink className="h-4 w-4" />
                  Full Documentation
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* Code Blocks Section */}
            <section id="code-blocks">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Code Blocks Component</h2>
                  <p className="text-muted-foreground">Syntax highlighting for 9+ programming languages</p>
                </div>
              </div>

              <div className="grid gap-6">
                {/* JavaScript Example */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">JavaScript</Badge>
                          Interactive Example
                        </CardTitle>
                        <CardDescription>
                          Modern ES6+ syntax with interactive features
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">
                          <Copy className="h-3 w-3 mr-1" />
                          Copy
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          <Eye className="h-3 w-3 mr-1" />
                          Live
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock language="javascript" elementKey="js-showcase">
                      {jsCode}
                    </CodeBlock>
                  </CardContent>
                </Card>

                {/* Python Example */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">Python</Badge>
                      Data Science Example
                    </CardTitle>
                    <CardDescription>
                      Pandas and NumPy code with professional styling
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock language="python" elementKey="python-showcase">
                      {pythonCode}
                    </CodeBlock>
                  </CardContent>
                </Card>

                {/* React/TypeScript Example */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">TypeScript</Badge>
                      React Component
                    </CardTitle>
                    <CardDescription>
                      Full-featured React component with hooks and TypeScript
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock language="typescript" elementKey="react-showcase">
                      {reactCode}
                    </CodeBlock>
                  </CardContent>
                </Card>

                {/* SQL Example */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">SQL</Badge>
                      Advanced Analytics Query
                    </CardTitle>
                    <CardDescription>
                      Complex SQL with CTEs and window functions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock language="sql" elementKey="sql-showcase">
                      {sqlCode}
                    </CodeBlock>
                  </CardContent>
                </Card>

                {/* C++ Example */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs bg-red-50 text-red-700 border-red-200">C++</Badge>
                      Modern C++17/20
                    </CardTitle>
                    <CardDescription>
                      Smart pointers, lambdas, and modern C++ features
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock language="cpp" elementKey="cpp-showcase">
                      {cppCode}
                    </CodeBlock>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Pricing Cards Section */}
            <section id="pricing-cards">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Pricing Component</h2>
                  <p className="text-muted-foreground">Beautiful pricing cards with premium styling</p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Individual Plans */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Individual Plans</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {INDIVIDUAL_PLANS.map((plan) => (
                      <PricingCard key={plan.id} plan={plan} isYearly={false} />
                    ))}
                  </div>
                </div>

                {/* Business Plans */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Business Plans</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {BUSINESS_PLANS.map((plan) => (
                      <PricingCard key={plan.id} plan={plan} isYearly={true} />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            {/* Theme System Section */}
            <section id="theme-system">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Theme System</h2>
                  <p className="text-muted-foreground">Dark/Light mode with smooth transitions</p>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Interactive Theme Toggle</CardTitle>
                  <CardDescription>
                    Try switching between dark and light modes to see the smooth transitions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center py-8">
                    <div className="text-center space-y-4">
                      <p className="text-sm text-muted-foreground">Current theme adapts all components</p>
                      <ThemeToggle />
                      <div className="grid grid-cols-2 gap-4 max-w-md">
                        <div className="p-4 bg-muted rounded-lg">
                          <div className="h-3 w-3 bg-primary rounded-full mb-2"></div>
                          <div className="text-xs text-muted-foreground">Primary Colors</div>
                        </div>
                        <div className="p-4 bg-card border rounded-lg">
                          <div className="h-3 w-3 bg-foreground rounded-full mb-2"></div>
                          <div className="text-xs text-muted-foreground">Foreground</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <Sparkles className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="text-2xl font-bold">Ready to Use These Components?</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Install instantly via NPX CLI and start building with premium AJ STUDIOZ components.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/resources/documentation">
                      <Button variant="default">
                        View Documentation
                      </Button>
                    </Link>
                    <Button variant="outline" asChild>
                      <a href="https://github.com/kamesh6592-cell" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Toaster />
      </div>
    </div>
  );
}