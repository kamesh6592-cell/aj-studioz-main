"use client";

import { CodeBlock } from '@/components/ui/code-block';
import { Toaster } from '@/components/ui/toaster';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Terminal, Copy, Eye, Github, ArrowLeft } from "lucide-react";
import Link from 'next/link';

export default function CodeBlocksShowcase() {
  const jsCode = `// Modern JavaScript with ES6+ Features
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const userData = await response.json();
    
    // Destructuring and spread operator
    const { name, email, ...metadata } = userData;
    
    return {
      user: { name, email },
      ...metadata,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw new Error('User data unavailable');
  }
};

// Advanced array methods
const users = ['Alice', 'Bob', 'Charlie', 'Diana'];
const activeUsers = users
  .filter(name => name.length > 4)
  .map(name => ({ name, status: 'active', id: crypto.randomUUID() }));

console.log(activeUsers);`;

  const pythonCode = `# Advanced Python - Data Science & Machine Learning
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# Load and prepare data
def prepare_dataset(filepath):
    """Load and preprocess dataset for ML model"""
    df = pd.read_csv(filepath)
    
    # Feature engineering
    df['feature_interaction'] = df['feature_1'] * df['feature_2']
    df['log_feature'] = np.log1p(df['numerical_feature'])
    
    # Handle categorical variables
    categorical_features = df.select_dtypes(include=['object']).columns
    df_encoded = pd.get_dummies(df, columns=categorical_features, drop_first=True)
    
    return df_encoded

# Model training pipeline
def train_model(data, target_column):
    X = data.drop(columns=[target_column])
    y = data[target_column]
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    
    # Train Random Forest
    model = RandomForestClassifier(
        n_estimators=100,
        max_depth=10,
        random_state=42,
        n_jobs=-1
    )
    
    model.fit(X_train, y_train)
    
    # Evaluate
    predictions = model.predict(X_test)
    accuracy = accuracy_score(y_test, predictions)
    
    print(f"Model Accuracy: {accuracy:.4f}")
    print("\\nClassification Report:")
    print(classification_report(y_test, predictions))
    
    return model, accuracy

# Usage
data = prepare_dataset('dataset.csv')
trained_model, score = train_model(data, 'target')`;

  const reactCode = `import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  lastActive: Date;
  preferences: {
    theme: 'dark' | 'light';
    notifications: boolean;
  };
}

interface UserDashboardProps {
  initialUsers?: User[];
  onUserUpdate?: (user: User) => void;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ 
  initialUsers = [], 
  onUserUpdate 
}) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');

  // Memoized filtered users for performance
  const filteredUsers = useMemo(() => {
    const now = new Date();
    const hourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    
    return users.filter(user => {
      switch (filter) {
        case 'active':
          return user.lastActive > hourAgo;
        case 'inactive':
          return user.lastActive <= hourAgo;
        default:
          return true;
      }
    });
  }, [users, filter]);

  // Optimized user fetch with error handling
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users', {
        headers: { 'Cache-Control': 'no-cache' }
      });
      
      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
      }
      
      const userData: User[] = await response.json();
      setUsers(userData);
    } catch (error) {
      console.error('Failed to fetch users:', error);
      // Handle error state here
    } finally {
      setLoading(false);
    }
  }, []);

  const updateUserRole = useCallback((userId: string, newRole: User['role']) => {
    setUsers(prev => prev.map(user => 
      user.id === userId 
        ? { ...user, role: newRole }
        : user
    ));
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">User Dashboard</h2>
        <div className="flex gap-2">
          {(['all', 'active', 'inactive'] as const).map(filterOption => (
            <Button
              key={filterOption}
              variant={filter === filterOption ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(filterOption)}
            >
              {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map(user => (
          <Card key={user.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {user.name}
                <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                  {user.role}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{user.email}</p>
              <p className="text-xs">
                Last active: {user.lastActive.toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No users found for the selected filter.
        </div>
      )}
    </div>
  );
};

export default UserDashboard;`;

  const sqlCode = `-- Advanced SQL: E-commerce Analytics with CTEs and Window Functions
WITH monthly_sales AS (
  -- Calculate monthly sales metrics
  SELECT 
    DATE_TRUNC('month', order_date) as month,
    category_id,
    COUNT(DISTINCT order_id) as total_orders,
    COUNT(DISTINCT customer_id) as unique_customers,
    SUM(total_amount) as revenue,
    AVG(total_amount) as avg_order_value
  FROM orders o
  JOIN order_items oi ON o.order_id = oi.order_id
  JOIN products p ON oi.product_id = p.product_id
  WHERE order_date >= DATE('2024-01-01')
  GROUP BY DATE_TRUNC('month', order_date), category_id
),

growth_metrics AS (
  -- Calculate month-over-month growth
  SELECT 
    month,
    category_id,
    revenue,
    unique_customers,
    LAG(revenue) OVER (
      PARTITION BY category_id 
      ORDER BY month
    ) as prev_month_revenue,
    LAG(unique_customers) OVER (
      PARTITION BY category_id 
      ORDER BY month
    ) as prev_month_customers
  FROM monthly_sales
),

customer_segments AS (
  -- Advanced customer segmentation using RFM analysis
  SELECT 
    customer_id,
    NTILE(5) OVER (ORDER BY recency DESC) as recency_score,
    NTILE(5) OVER (ORDER BY frequency) as frequency_score,
    NTILE(5) OVER (ORDER BY monetary) as monetary_score
  FROM (
    SELECT 
      customer_id,
      EXTRACT(DAYS FROM (CURRENT_DATE - MAX(order_date))) as recency,
      COUNT(DISTINCT order_id) as frequency,
      SUM(total_amount) as monetary
    FROM orders
    WHERE order_date >= DATE('2024-01-01')
    GROUP BY customer_id
  ) customer_metrics
)

-- Final results with comprehensive analytics
SELECT 
  gm.month,
  c.category_name,
  gm.revenue,
  gm.unique_customers,
  CASE 
    WHEN gm.prev_month_revenue IS NOT NULL THEN
      ROUND(
        ((gm.revenue - gm.prev_month_revenue) / gm.prev_month_revenue * 100)::numeric, 
        2
      )
    ELSE NULL
  END as revenue_growth_pct,
  
  CASE 
    WHEN gm.prev_month_customers IS NOT NULL THEN
      ROUND(
        ((gm.unique_customers - gm.prev_month_customers) / gm.prev_month_customers * 100)::numeric, 
        2
      )
    ELSE NULL
  END as customer_growth_pct,
  
  -- Add ranking within each month
  RANK() OVER (
    PARTITION BY gm.month 
    ORDER BY gm.revenue DESC
  ) as revenue_rank,
  
  -- Calculate cumulative revenue
  SUM(gm.revenue) OVER (
    PARTITION BY gm.category_id 
    ORDER BY gm.month 
    ROWS UNBOUNDED PRECEDING
  ) as cumulative_revenue

FROM growth_metrics gm
JOIN categories c ON gm.category_id = c.category_id
WHERE gm.month >= DATE('2024-01-01')
ORDER BY gm.month DESC, gm.revenue DESC;`;

  const cppCode = `#include <iostream>
#include <vector>
#include <memory>
#include <algorithm>
#include <thread>
#include <future>
#include <chrono>
#include <random>

// Modern C++20 Features Demo
class DataProcessor {
private:
    std::vector<int> data_;
    mutable std::mutex data_mutex_;
    
public:
    // Constructor with initializer list
    DataProcessor(std::initializer_list<int> values) : data_(values) {}
    
    // Range-based for loop with structured bindings
    void displayStatistics() const {
        std::lock_guard<std::mutex> lock(data_mutex_);
        
        if (data_.empty()) return;
        
        auto [min_it, max_it] = std::minmax_element(data_.begin(), data_.end());
        auto sum = std::accumulate(data_.begin(), data_.end(), 0);
        auto average = static_cast<double>(sum) / data_.size();
        
        std::cout << "Statistics:\\n";
        std::cout << "  Size: " << data_.size() << "\\n";
        std::cout << "  Min: " << *min_it << "\\n";
        std::cout << "  Max: " << *max_it << "\\n";
        std::cout << "  Average: " << average << "\\n";
    }
    
    // Template with concepts (C++20)
    template<typename Func>
    requires std::invocable<Func, int&>
    void transform(Func func) {
        std::lock_guard<std::mutex> lock(data_mutex_);
        std::transform(data_.begin(), data_.end(), data_.begin(), func);
    }
    
    // Asynchronous processing with futures
    std::future<std::vector<int>> processAsync() {
        return std::async(std::launch::async, [this]() {
            std::vector<int> processed_data;
            
            {
                std::lock_guard<std::mutex> lock(data_mutex_);
                processed_data = data_;
            }
            
            // Simulate heavy processing
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            
            // Apply complex transformation
            std::transform(processed_data.begin(), processed_data.end(),
                         processed_data.begin(),
                         [](int x) { return x * x + 2 * x + 1; });
            
            return processed_data;
        });
    }
    
    // Modern random number generation
    void addRandomData(size_t count) {
        std::random_device rd;
        std::mt19937 gen(rd());
        std::uniform_int_distribution<> dis(1, 100);
        
        std::lock_guard<std::mutex> lock(data_mutex_);
        for (size_t i = 0; i < count; ++i) {
            data_.push_back(dis(gen));
        }
    }
};

// Smart pointer usage and RAII
int main() {
    auto processor = std::make_unique<DataProcessor>({1, 2, 3, 4, 5});
    
    // Add random data
    processor->addRandomData(10);
    
    // Transform data using lambda
    processor->transform([](int& x) { return x *= 2; });
    
    // Display current statistics
    processor->displayStatistics();
    
    // Asynchronous processing
    auto future_result = processor->processAsync();
    
    std::cout << "Processing data asynchronously...\\n";
    
    // Do other work while processing
    std::this_thread::sleep_for(std::chrono::milliseconds(50));
    
    // Get results
    auto processed = future_result.get();
    
    std::cout << "Processed data: ";
    for (const auto& value : processed) {
        std::cout << value << " ";
    }
    std::cout << "\\n";
    
    return 0;
}`;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Link href="/resources/documentation" className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Documentation
              </Link>
            </div>
            <h1 className="text-4xl font-bold mb-2">Code Blocks Showcase</h1>
            <p className="text-muted-foreground">
              Interactive examples with syntax highlighting for 9+ programming languages
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <Terminal className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Quick Install</div>
                <div className="text-sm text-muted-foreground">npx @ajstudioz14151/codeblocks-component@1.1.0 add</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Eye className="h-5 w-5" />
              <div>
                <div className="font-medium">Interactive Demo</div>
                <div className="text-sm text-muted-foreground">Click copy buttons to test functionality</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Programming Languages Showcase */}
        <div className="grid gap-8">
          {/* JavaScript */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">JavaScript</Badge>
                    Modern ES6+ Features
                  </CardTitle>
                  <CardDescription>
                    Async/await, destructuring, arrow functions, and modern API usage
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-xs">
                    <Copy className="h-3 w-3 mr-1" />
                    Interactive
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CodeBlock language="javascript" elementKey="js-advanced">
                {jsCode}
              </CodeBlock>
            </CardContent>
          </Card>

          {/* Python */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Python</Badge>
                Data Science & Machine Learning
              </CardTitle>
              <CardDescription>
                Pandas, NumPy, Scikit-learn with advanced data processing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock language="python" elementKey="python-advanced">
                {pythonCode}
              </CodeBlock>
            </CardContent>
          </Card>

          {/* React/TypeScript */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">TypeScript</Badge>
                Advanced React Component
              </CardTitle>
              <CardDescription>
                Hooks, TypeScript interfaces, performance optimization with useMemo and useCallback
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock language="typescript" elementKey="react-advanced">
                {reactCode}
              </CodeBlock>
            </CardContent>
          </Card>

          {/* SQL */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">SQL</Badge>
                E-commerce Analytics
              </CardTitle>
              <CardDescription>
                Complex queries with CTEs, window functions, and advanced analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock language="sql" elementKey="sql-advanced">
                {sqlCode}
              </CodeBlock>
            </CardContent>
          </Card>

          {/* C++ */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">C++</Badge>
                Modern C++20 Features
              </CardTitle>
              <CardDescription>
                Smart pointers, threading, concepts, structured bindings, and RAII
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock language="cpp" elementKey="cpp-advanced">
                {cppCode}
              </CodeBlock>
            </CardContent>
          </Card>
        </div>

        {/* Features Summary */}
        <Card className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <Code2 className="h-8 w-8 text-primary mx-auto" />
              <h3 className="text-2xl font-bold">Premium Code Highlighting</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional syntax highlighting with instant copy functionality. 
                Supports 9+ languages with theme-aware styling.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-6">
                <div className="text-center">
                  <div className="font-bold text-lg text-primary">9+</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-primary">1-Click</div>
                  <div className="text-sm text-muted-foreground">Copy</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Themes</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Responsive</div>
                </div>
              </div>
              <div className="flex justify-center gap-4 pt-4">
                <Link href="/resources/documentation">
                  <Button variant="outline">View Documentation</Button>
                </Link>
                <Button asChild>
                  <a href="https://github.com/kamesh6592-cell" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Source
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Toaster />
      </div>
    </div>
  );
}