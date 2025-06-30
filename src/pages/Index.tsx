
import { useState } from 'react';
import DemandForecastSection from '@/components/DemandForecastSection';
import TransferRecommendations from '@/components/TransferRecommendations';
import ExportSection from '@/components/ExportSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Package, ArrowRightLeft, MapPin, Users, BarChart3 } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Package className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center space-x-2">
                  <span>AI Inventory Rebalancing Dashboard</span>
                  <MapPin className="h-6 w-6 text-blue-600" />
                </h1>
                <p className="text-gray-600 mt-1 flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4" />
                  <span>Walmart Sparkathon 2025 - India Operations</span>
                </p>
              </div>
            </div>
            <ExportSection />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center space-x-1">
                <Package className="h-4 w-4" />
                <span>Total SKUs Analyzed</span>
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">247</div>
              <p className="text-xs text-green-600 mt-1 flex items-center space-x-1">
                <TrendingUp className="h-3 w-3" />
                <span>+12% from last period</span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center space-x-1">
                <ArrowRightLeft className="h-4 w-4" />
                <span>Transfer Recommendations</span>
              </CardTitle>
              <MapPin className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">18</div>
              <p className="text-xs text-blue-600 mt-1 flex items-center space-x-1">
                <Users className="h-3 w-3" />
                <span>Active recommendations</span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center space-x-1">
                <TrendingUp className="h-4 w-4" />
                <span>Forecast Accuracy</span>
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">94.2%</div>
              <p className="text-xs text-green-600 mt-1 flex items-center space-x-1">
                <TrendingUp className="h-3 w-3" />
                <span>+2.1% improvement</span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Demand Forecast Section */}
          <div className="xl:col-span-2">
            <DemandForecastSection />
          </div>
          
          {/* Transfer Recommendations Section */}
          <div className="xl:col-span-2">
            <TransferRecommendations />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
