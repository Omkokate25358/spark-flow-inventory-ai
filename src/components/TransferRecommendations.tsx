
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Package, AlertTriangle, TrendingUp, Zap, MapPin, IndianRupee } from 'lucide-react';

const transferRecommendations = [
  {
    id: 1,
    skuName: 'Electronics-TV-55"',
    fromZone: 'Chennai',
    toZone: 'Mumbai',
    quantity: 400,
    reason: 'Overstock',
    priority: 'High',
    estimatedSavings: '₹8,92,000'
  },
  {
    id: 2,
    skuName: 'Electronics-TV-55"',
    fromZone: 'Chennai',
    toZone: 'Hyderabad',
    quantity: 200,
    reason: 'Trend Surge',
    priority: 'High',
    estimatedSavings: '₹5,89,440'
  },
  {
    id: 3,
    skuName: 'Home-Appliances-Microwave',
    fromZone: 'Kolkata',
    toZone: 'Delhi',
    quantity: 150,
    reason: 'Seasonal Demand',
    priority: 'Medium',
    estimatedSavings: '₹3,49,050'
  },
  {
    id: 4,
    skuName: 'Clothing-Winter-Jackets',
    fromZone: 'Chennai',
    toZone: 'Delhi',
    quantity: 300,
    reason: 'Weather Pattern',
    priority: 'Medium',
    estimatedSavings: '₹6,55,200'
  },
  {
    id: 5,
    skuName: 'Sports-Equipment-Bikes',
    fromZone: 'Nagpur',
    toZone: 'Mumbai',
    quantity: 75,
    reason: 'Local Event',
    priority: 'Low',
    estimatedSavings: '₹2,30,400'
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Low':
      return 'bg-green-100 text-green-800 border-green-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getReasonIcon = (reason: string) => {
  switch (reason) {
    case 'Overstock':
      return <Package className="h-4 w-4 text-blue-600" />;
    case 'Trend Surge':
      return <TrendingUp className="h-4 w-4 text-green-600" />;
    case 'Seasonal Demand':
      return <Zap className="h-4 w-4 text-orange-600" />;
    case 'Weather Pattern':
      return <AlertTriangle className="h-4 w-4 text-purple-600" />;
    case 'Local Event':
      return <AlertTriangle className="h-4 w-4 text-indigo-600" />;
    default:
      return <Package className="h-4 w-4 text-gray-600" />;
  }
};

const TransferRecommendations = () => {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ArrowRight className="h-5 w-5 text-green-600" />
            <CardTitle className="text-xl font-bold text-gray-900">
              Transfer Recommendations
            </CardTitle>
          </div>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {transferRecommendations.length} Active
          </Badge>
        </div>
        <p className="text-gray-600 mt-2 flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-blue-500" />
          <span>AI-generated recommendations to optimize inventory distribution across India</span>
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transferRecommendations.map((transfer) => (
            <div
              key={transfer.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200 bg-gradient-to-r from-white to-gray-50"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1 flex items-center space-x-2">
                    <Package className="h-4 w-4 text-blue-600" />
                    <span>{transfer.skuName}</span>
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    {getReasonIcon(transfer.reason)}
                    <span>{transfer.reason}</span>
                  </div>
                </div>
                <Badge 
                  className={`${getPriorityColor(transfer.priority)} font-medium`}
                >
                  {transfer.priority}
                </Badge>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{transfer.fromZone}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{transfer.toZone}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 flex items-center space-x-1">
                    <Package className="h-3 w-3" />
                    <span>Quantity to Transfer:</span>
                  </span>
                  <div className="font-bold text-gray-900 text-lg">
                    {transfer.quantity.toLocaleString()} units
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 flex items-center space-x-1">
                    <IndianRupee className="h-3 w-3" />
                    <span>Estimated Savings:</span>
                  </span>
                  <div className="font-bold text-green-600 text-lg">
                    {transfer.estimatedSavings}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span>Total Impact</span>
              </h4>
              <p className="text-sm text-gray-600">All recommended transfers</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600 flex items-center">
                <IndianRupee className="h-5 w-5" />
                <span>27,16,090</span>
              </div>
              <div className="text-sm text-gray-600">Potential savings</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransferRecommendations;
