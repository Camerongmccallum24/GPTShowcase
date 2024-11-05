import React, { useState } from 'react';
import { Brain, Heart, Map, BarChart3, ChevronLeft } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const DemoSection = ({ title, children }) => (
  <div className="bg-gray-800 rounded-lg p-6">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    {children}
  </div>
);

const FeatureList = ({ features }) => (
  <div className="grid grid-cols-2 gap-4">
    {features.map((feature, index) => (
      <div key={index} className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        <span className="text-sm text-gray-300">{feature}</span>
      </div>
    ))}
  </div>
);

const TechList = ({ tools }) => (
  <div className="grid grid-cols-2 gap-4">
    {tools.map((section) => (
      <div key={section.category} className="bg-gray-700 p-3 rounded-lg">
        <h4 className="text-sm font-medium text-gray-400 mb-2">{section.category}</h4>
        <div className="space-y-1">
          {section.items.map((item, index) => (
            <div key={index} className="text-sm text-gray-300">{item}</div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const GPTDemo = ({ title, features, tools, children }) => (
  <div className="space-y-6">
    <DemoSection title="Live Demo">
      {children}
    </DemoSection>
    
    <DemoSection title="Key Features">
      <FeatureList features={features} />
    </DemoSection>
    
    <DemoSection title="Tools & Technologies">
      <TechList tools={tools} />
    </DemoSection>
  </div>
);

const GPTCard = ({ title, description, icon: Icon, color, onClick }) => (
  <div 
    className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 cursor-pointer transition-all"
    onClick={onClick}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 rounded-lg" style={{ backgroundColor: `${color}20` }}>
        <Icon size={24} color={color} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-gray-400">{description}</p>
  </div>
);

const SentimentDemo = () => {
  const demoData = Array.from({ length: 7 }, (_, i) => ({
    name: `Day ${i + 1}`,
    value: 65 + Math.random() * 20
  }));

  return (
    <GPTDemo
      features={[
        'Real-time sentiment analysis',
        'Emotion detection',
        'Topic categorization',
        'Trend analysis'
      ]}
      tools={[
        {
          category: 'Core Technologies',
          items: ['NLP', 'BERT Models', 'Neural Networks']
        },
        {
          category: 'Libraries',
          items: ['HuggingFace', 'spaCy', 'NLTK']
        }
      ]}
    >
      <div className="space-y-6">
        <div className="bg-gray-700 p-4 rounded-lg">
          <p className="text-white mb-2">"Great experience with the product!"</p>
          <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-300"
              style={{ width: '85%' }}
            />
          </div>
          <p className="text-sm text-gray-400 mt-1">Sentiment Score: 85%</p>
        </div>
        
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={demoData}>
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#FFD700" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </GPTDemo>
  );
};

const JourneyDemo = () => {
  const stages = [
    { name: 'Awareness', progress: 100 },
    { name: 'Consideration', progress: 75 },
    { name: 'Decision', progress: 30 },
    { name: 'Retention', progress: 0 }
  ];

  return (
    <GPTDemo
      features={[
        'Visual journey mapping',
        'Touchpoint analysis',
        'Conversion tracking',
        'Path optimization'
      ]}
      tools={[
        {
          category: 'Analytics Tools',
          items: ['Journey Mapping', 'Path Analysis', 'User Tracking']
        },
        {
          category: 'Integrations',
          items: ['CRM Systems', 'Marketing Tools', 'Analytics APIs']
        }
      ]}
    >
      <div className="space-y-4">
        {stages.map((stage) => (
          <div key={stage.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">{stage.name}</span>
              <span className="text-sm text-gray-400">{stage.progress}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 transition-all duration-300"
                style={{ width: `${stage.progress}%`, backgroundColor: '#00FF7F' }}
              />
            </div>
          </div>
        ))}
      </div>
    </GPTDemo>
  );
};

const AnalyticsDemo = () => {
  const metrics = [
    { label: 'Active Users', value: '2,547', change: '+12%' },
    { label: 'Avg. Session', value: '5m 23s', change: '-5%' },
    { label: 'Conversion', value: '3.2%', change: '+8%' }
  ];

  const chartData = Array.from({ length: 12 }, (_, i) => ({
    name: `Hour ${i + 1}`,
    value: 1000 + Math.random() * 500
  }));

  return (
    <GPTDemo
      features={[
        'Real-time dashboards',
        'Custom metrics',
        'Automated reporting',
        'Performance tracking'
      ]}
      tools={[
        {
          category: 'Data Processing',
          items: ['Stream Analytics', 'ETL Pipeline', 'Data Warehouse']
        },
        {
          category: 'Visualization',
          items: ['Custom Dashboards', 'Report Generator', 'Alert System']
        }
      ]}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-gray-700 p-3 rounded-lg">
              <p className="text-sm text-gray-400">{metric.label}</p>
              <p className="text-xl font-bold mt-1">{metric.value}</p>
              <p className={`text-sm mt-1 ${
                metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}>
                {metric.change}
              </p>
            </div>
          ))}
        </div>

        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#FF1493" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </GPTDemo>
  );
};

const PredictiveDemo = () => {
  const predictions = [
    { name: 'Revenue Growth', current: '+12%', predicted: '+15%', status: 'green' },
    { name: 'Churn Risk', current: '2.4%', predicted: '2.1%', status: 'yellow' },
    { name: 'Customer Satisfaction', current: '8.5', predicted: '8.7', status: 'green' }
  ];

  const getStatusColor = (status) => ({
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500'
  }[status] || 'bg-gray-500');

  return (
    <GPTDemo
      features={[
        'Predictive modeling',
        'Risk assessment',
        'Trend forecasting',
        'Anomaly detection'
      ]}
      tools={[
        {
          category: 'AI & Machine Learning',
          items: ['TensorFlow', 'Scikit-learn', 'Neural Networks']
        },
        {
          category: 'Data Science',
          items: ['Predictive Models', 'Time Series', 'Statistical Analysis']
        }
      ]}
    >
      <div className="space-y-4">
        {predictions.map((metric) => (
          <div key={metric.name} className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span>{metric.name}</span>
              <div className={`w-3 h-3 rounded-full ${getStatusColor(metric.status)}`} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-400">Current</p>
                <p className="text-lg font-semibold">{metric.current}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Predicted</p>
                <p className="text-lg font-semibold">{metric.predicted}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GPTDemo>
  );
};

const GPTShowcase = () => {
  const [selectedGPT, setSelectedGPT] = useState(null);

  const gpts = {
    sentiment: {
      title: 'Sentiment Analysis',
      description: 'Analyze customer feedback and emotions',
      icon: Heart,
      color: '#FFD700', // Yellow
      component: SentimentDemo
    },
    journey: {
      title: 'Customer Journey',
      description: 'Map and optimize customer touchpoints',
      icon: Map,
      color: '#00FF7F', // Spring Green
      component: JourneyDemo
    },
    analytics: {
      title: 'Performance Analytics',
      description: 'Track and analyze key metrics',
      icon: BarChart3,
      color: '#FF1493', // Deep Pink
      component: AnalyticsDemo
    },
    predictive: {
      title: 'Predictive Insights',
      description: 'AI-powered forecasting and insights',
      icon: Brain,
      color: '#8b5cf6', // Purple
      component: PredictiveDemo
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {selectedGPT ? (
          <div>
            <button 
              onClick={() => setSelectedGPT(null)}
              className="flex items-center gap-2 text-gray-400 hover:text-white mb-6"
            >
              <ChevronLeft size={20} />
              Back to overview
            </button>
            {gpts[selectedGPT].component()}
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Brain className="text-blue-500" size={24} />
              <h1 className="text-3xl font-bold">AI Success Network</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(gpts).map(([id, gpt]) => (
                <GPTCard
                  key={id}
                  {...gpt}
                  onClick={() => setSelectedGPT(id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GPTShowcase;
