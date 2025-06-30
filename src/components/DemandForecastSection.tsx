
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, MapPin, Package, AlertCircle } from 'lucide-react';

const demandData = [
  {
    zone: 'Mumbai',
    currentStock: 1200,
    forecastedDemand: 1850,
    sku: 'Electronics-TV-55"'
  },
  {
    zone: 'Delhi',
    currentStock: 800,
    forecastedDemand: 1200,
    sku: 'Electronics-TV-55"'
  },
  {
    zone: 'Chennai',
    currentStock: 1500,
    forecastedDemand: 900,
    sku: 'Electronics-TV-55"'
  },
  {
    zone: 'Hyderabad',
    currentStock: 600,
    forecastedDemand: 1400,
    sku: 'Electronics-TV-55"'
  },
  {
    zone: 'Kolkata',
    currentStock: 1000,
    forecastedDemand: 1100,
    sku: 'Electronics-TV-55"'
  },
  {
    zone: 'Nagpur',
    currentStock: 950,
    forecastedDemand: 1300,
    sku: 'Electronics-TV-55"'
  }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="h-4 w-4 text-blue-600" />
          <p className="font-semibold text-gray-900">{`Zone: ${label}`}</p>
        </div>
        <p className="text-blue-600 flex items-center space-x-1">
          <Package className="h-3 w-3" />
          <span>{`Current Stock: ${payload[0].value} units`}</span>
        </p>
        <p className="text-green-600 flex items-center space-x-1">
          <TrendingUp className="h-3 w-3" />
          <span>{`Forecasted Demand: ${payload[1].value} units`}</span>
        </p>
        <p className="text-gray-600 text-sm mt-1">
          SKU: Electronics-TV-55"
        </p>
      </div>
    );
  }
  return null;
};

const DemandForecastSection = () => {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-xl font-bold text-gray-900">
              Demand Forecast Analysis
            </CardTitle>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <AlertCircle className="h-4 w-4" />
            <span>Next 30 days</span>
          </div>
        </div>
        <p className="text-gray-600 mt-2 flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-blue-500" />
          <span>Compare current stock levels with AI-predicted demand across Indian zones</span>
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={demandData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barCategoryGap="20%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="zone" 
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                label={{ value: 'Units', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar 
                dataKey="currentStock" 
                fill="#3b82f6" 
                name="Current Stock"
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="forecastedDemand" 
                fill="#10b981" 
                name="Forecasted Demand"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Summary */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 text-sm font-medium text-blue-800 mb-1">
              <Package className="h-4 w-4" />
              <span>Overstocked Zones</span>
            </div>
            <div className="text-lg font-bold text-blue-900">1</div>
            <div className="text-xs text-blue-600">Chennai surplus</div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 text-sm font-medium text-red-800 mb-1">
              <AlertCircle className="h-4 w-4" />
              <span>Understocked Zones</span>
            </div>
            <div className="text-lg font-bold text-red-900">4</div>
            <div className="text-xs text-red-600">Need restocking</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 text-sm font-medium text-green-800 mb-1">
              <TrendingUp className="h-4 w-4" />
              <span>Balanced Zones</span>
            </div>
            <div className="text-lg font-bold text-green-900">1</div>
            <div className="text-xs text-green-600">Optimal levels</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DemandForecastSection;
