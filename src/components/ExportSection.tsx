
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ExportSection = () => {
  const { toast } = useToast();

  const exportForecastData = () => {
    const forecastData = [
      ['Zone', 'SKU', 'Current Stock', 'Forecasted Demand', 'Variance'],
      ['North Zone', 'Electronics-TV-55"', '1200', '1850', '+650'],
      ['South Zone', 'Electronics-TV-55"', '800', '1200', '+400'],
      ['East Zone', 'Electronics-TV-55"', '1500', '900', '-600'],
      ['West Zone', 'Electronics-TV-55"', '600', '1400', '+800'],
      ['Central Zone', 'Electronics-TV-55"', '1000', '1100', '+100']
    ];

    const csvContent = forecastData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'demand_forecast.csv';
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "Export Successful",
      description: "Demand forecast data has been downloaded as CSV.",
    });
  };

  const exportTransferData = () => {
    const transferData = [
      ['SKU', 'From Zone', 'To Zone', 'Quantity', 'Reason', 'Priority', 'Estimated Savings'],
      ['Electronics-TV-55"', 'East Zone', 'North Zone', '400', 'Overstock', 'High', '$12,400'],
      ['Electronics-TV-55"', 'East Zone', 'West Zone', '200', 'Trend Surge', 'High', '$8,200'],
      ['Home-Appliances-Microwave', 'Central Zone', 'South Zone', '150', 'Seasonal Demand', 'Medium', '$4,850'],
      ['Clothing-Winter-Jackets', 'South Zone', 'North Zone', '300', 'Weather Pattern', 'Medium', '$9,100'],
      ['Sports-Equipment-Bikes', 'West Zone', 'East Zone', '75', 'Local Event', 'Low', '$3,200']
    ];

    const csvContent = transferData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transfer_recommendations.csv';
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
        <Download className="h-4 w-4" />
        <span>Forecast CSV</span>
      </Button>
      <Button
        onClick={exportTransferData}
        variant="outline"
        className="flex items-center space-x-2 hover:bg-green-50 hover:border-green-300 transition-colors"
      >
        <FileText className="h-4 w-4" />
        <span>Transfers CSV</span>
      </Button>
    </div>
  );
};

export default ExportSection;
