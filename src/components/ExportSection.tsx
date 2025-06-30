
import { Button } from '@/components/ui/button';
import { Download, FileText, TrendingUp, ArrowRightLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ExportSection = () => {
  const { toast } = useToast();

  const exportForecastData = () => {
    const forecastData = [
      ['Zone', 'SKU', 'Current Stock', 'Forecasted Demand', 'Variance'],
      ['Mumbai', 'Electronics-TV-55"', '1200', '1850', '+650'],
      ['Delhi', 'Electronics-TV-55"', '800', '1200', '+400'],
      ['Chennai', 'Electronics-TV-55"', '1500', '900', '-600'],
      ['Hyderabad', 'Electronics-TV-55"', '600', '1400', '+800'],
      ['Kolkata', 'Electronics-TV-55"', '1000', '1100', '+100'],
      ['Nagpur', 'Electronics-TV-55"', '950', '1300', '+350']
    ];

    const csvContent = forecastData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'demand_forecast_india.csv';
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "Export Successful",
      description: "Demand forecast data has been downloaded as CSV.",
    });
  };

  const exportTransferData = () => {
    const transferData = [
      ['SKU', 'From Zone', 'To Zone', 'Quantity', 'Reason', 'Priority', 'Estimated Savings (INR)'],
      ['Electronics-TV-55"', 'Chennai', 'Mumbai', '400', 'Overstock', 'High', '₹8,92,000'],
      ['Electronics-TV-55"', 'Chennai', 'Hyderabad', '200', 'Trend Surge', 'High', '₹5,89,440'],
      ['Home-Appliances-Microwave', 'Kolkata', 'Delhi', '150', 'Seasonal Demand', 'Medium', '₹3,49,050'],
      ['Clothing-Winter-Jackets', 'Chennai', 'Delhi', '300', 'Weather Pattern', 'Medium', '₹6,55,200'],
      ['Sports-Equipment-Bikes', 'Nagpur', 'Mumbai', '75', 'Local Event', 'Low', '₹2,30,400']
    ];

    const csvContent = transferData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transfer_recommendations_india.csv';
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "Export Successful",
      description: "Transfer recommendations have been downloaded as CSV.",
    });
  };

  return (
    <div className="flex space-x-3">
      <Button
        onClick={exportForecastData}
        variant="outline"
        className="flex items-center space-x-2 hover:bg-blue-50 hover:border-blue-300 transition-colors"
      >
        <TrendingUp className="h-4 w-4" />
        <Download className="h-4 w-4" />
        <span>Forecast CSV</span>
      </Button>
      <Button
        onClick={exportTransferData}
        variant="outline"
        className="flex items-center space-x-2 hover:bg-green-50 hover:border-green-300 transition-colors"
      >
        <ArrowRightLeft className="h-4 w-4" />
        <FileText className="h-4 w-4" />
        <span>Transfers CSV</span>
      </Button>
    </div>
  );
};

export default ExportSection;
