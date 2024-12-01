import React, { useState } from 'react';
import { 
  Card, 
  CardHeader,
  CardTitle,
  CardContent,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Input
} from '@/components/ui/select';

const ParcelValidator = () => {

  const [originCountry, setOriginCountry] = useState('');
  const [destCountry, setDestCountry] = useState('');
  const [originZip, setOriginZip] = useState('');
  const [destZip, setDestZip] = useState('');
  const [originInfo, setOriginInfo] = useState(null);
  const [destInfo, setDestInfo] = useState(null);

  const handleOriginCountry = (value) => {
    // TODO
  };

  const handleOriginZip = (value) => {
    // TODO  
  };

  const handleDestZip = (value) => {
    // TODO
  };

  return (
    <Card className="w-full sm:w-96">
      <CardHeader>
        <CardTitle>Parcel Validator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {/* Origin Country */}
          <Select value={originCountry} onValueChange={handleOriginCountry}>
            <SelectTrigger>
              <SelectValue placeholder="Select origin country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="US">United States</SelectItem>
              <SelectItem value="CA">Canada</SelectItem>
              <SelectItem value="MX">Mexico</SelectItem>
            </SelectContent>
          </Select>

          {/* Origin Zip */}
          <Input
            type="text"
            placeholder="Enter origin zip code"
            value={originZip}
            onChange={(e) => setOriginZip(e.target.value)}
          />
          
          {/* TODO: Conditionally show dest country */}
          
          {/* TODO: Show dest zip  */}

          {/* TODO: Show origin and dest details */}

        </div>
      </CardContent>
    </Card>
  );
};

export default ParcelValidator;
