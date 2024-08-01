import {
  Card,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import { BellIcon } from "@heroicons/react/24/solid"; // Using BellIcon for "Negotiate Price" button

// Example request data with price included
const requests = [
  {
    departure: "Casablanca",
    destination: "Rabat",
    date: "2024-07-19",
    typeOfGoods: "Electronics",
    weight: "15000 Kgs",
    trailerType: "Refrigerated",
    price: "2000 MAD",
  },
  {
    departure: "Marrakech",
    destination: "Agadir",
    date: "2024-07-20",
    typeOfGoods: "Perishables",
    weight: "20000 Kgs",
    trailerType: "Flatbed",
    price: "3000 MAD",
  },
  {
    departure: "Tangier",
    destination: "Fes",
    date: "2024-07-21",
    typeOfGoods: "Furniture",
    weight: "25000 Kgs",
    trailerType: "Standard",
    price: "2500 MAD",
  },
  {
    departure: "Oujda",
    destination: "Nador",
    date: "2024-07-22",
    typeOfGoods: "Textiles",
    weight: "10000 Kgs",
    trailerType: "Refrigerated",
    price: "1500 MAD",
  },
  {
    departure: "Kenitra",
    destination: "Temara",
    date: "2024-07-23",
    typeOfGoods: "Machinery",
    weight: "30000 Kgs",
    trailerType: "Flatbed",
    price: "3500 MAD",
  },
];

export function ActiveRequests() {
  return (
    <section className="m-8 flex flex-col gap-6">
      {/* Page Title in a Card */}
      <Card className="p-6 shadow-lg bg-gray-900 text-white">
        <Typography variant="h4" className="font-bold mb-2">
          Demandes Actives
        </Typography>
        <Typography variant="paragraph" className="text-base font-normal">
          Voici les demandes de transport actuellement actives.
        </Typography>
      </Card>

      <div className="flex flex-col gap-4">
        {requests.map((request, index) => (
          <Card key={index} className="p-4 shadow-lg border border-blue-gray-200">
            <div className="flex items-center justify-between mb-4">
              <Typography variant="h6" className="font-bold text-blue-gray-800">
                Demande #{index + 1}
              </Typography>
              <div className="flex gap-2">
                <Tooltip content="Accepter la demande">
                  <Button
                    variant="gradient"
                    color="green"
                    className="flex items-center gap-2"
                  >
                    Accepter
                  </Button>
                </Tooltip>
                <Tooltip content="Négocier Prix">
                  <Button
                    variant="outlined"
                    color="gray"
                    className="flex items-center gap-2"
                  >
                    <BellIcon className="h-5 w-5 text-gray-600" /> Négocier Prix
                  </Button>
                </Tooltip>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <Typography variant="small" color="blue-gray" className="font-medium">
                  Départ:
                </Typography>
                <Typography variant="small" color="blue-gray" className="font-medium">
                  {request.departure}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="small" color="blue-gray" className="font-medium">
                  Destination:
                </Typography>
                <Typography variant="small" color="blue-gray" className="font-medium">
                  {request.destination}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="small" color="blue-gray" className="font-medium">
                  Date:
                </Typography>
                <Typography variant="small" color="blue-gray" className="font-medium">
                  {request.date}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="small" color="blue-gray" className="font-medium">
                  Type de Marchandise:
                </Typography>
                <Typography variant="small" color="blue-gray" className="font-medium">
                  {request.typeOfGoods}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="small" color="blue-gray" className="font-medium">
                  Poids:
                </Typography>
                <Typography variant="small" color="blue-gray" className="font-medium">
                  {request.weight}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="small" color="blue-gray" className="font-medium">
                  Type de Remorque:
                </Typography>
                <Typography variant="small" color="blue-gray" className="font-medium">
                  {request.trailerType}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="small" color="blue-gray" className="font-medium">
                  Prix:
                </Typography>
                <Typography variant="small" color="blue-gray" className="font-medium">
                  {request.price}
                </Typography>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ActiveRequests;
