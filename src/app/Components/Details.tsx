'use client'

import { useEffect, useState } from "react";
import { ActiveIcon, ApprovedIcon, ContactIcon, ContextIcon, FoodIcon, RiderIcon } from "../icons/icons";



interface ItemData {
  icon: string;
  name: string;
  count: number;
}

const Details: React.FC = () => {
  const [data, setData] = useState<ItemData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/JSONDATA/Details.json'); 
        const json = await response.json();
        setData(json); 
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData(); 
  }, []);

  console.log(data);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ContactIcon":
        return <ContactIcon   />;
      case "ContextIcon":
        return <ContextIcon   />;
      case "FoodIcon":
        return <FoodIcon   />;
      case "RiderIcon":
        return <RiderIcon  />;
      case "ApprovedIcon":
        return <ApprovedIcon  />;
      case "ActiveIcon":
        return <ActiveIcon  />;
      default:
        return null;
    }
  };

  return (
    <div className="pt-4">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="flex items-center p-4 border rounded-lg shadow">
              {getIcon(item.icon)}
              <div className="ml-4 flex flex-col">
                <h3 className="text-lg font-semibold">{item?.count}</h3>
                <p className="text-sm text-gray-600">{item?.name}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  )
}

export default Details;
