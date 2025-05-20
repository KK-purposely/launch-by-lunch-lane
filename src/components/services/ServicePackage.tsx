
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServicePackageProps {
  title: string;
  description: string;
  price: string;
  time: string;
  includes: string[];
  perfectFor: string;
  icon: LucideIcon;
}

const ServicePackage: React.FC<ServicePackageProps> = ({
  title,
  description,
  price,
  time,
  includes,
  perfectFor,
  icon: Icon,
}) => {
  return (
    <Card className="mb-12 border-2 border-gray-200 hover:border-launch-purple transition-all duration-300">
      <CardHeader className="bg-gray-50">
        <div className="flex items-center gap-3 mb-2">
          <Icon className="h-6 w-6 text-launch-orange" />
          <CardTitle className="text-2xl text-launch-purple">{title}</CardTitle>
        </div>
        <CardDescription className="text-xl font-medium">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-gray-700">Price:</p>
            <p className="text-lg">{price}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Time:</p>
            <p className="text-lg">{time}</p>
          </div>
        </div>
        
        <div>
          <p className="font-semibold text-gray-700 mb-2">Includes:</p>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            {includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <p className="font-semibold text-gray-700 mb-2">Perfect For:</p>
          <p className="text-lg">{perfectFor}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicePackage;
