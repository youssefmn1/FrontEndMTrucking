import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function TransportRequest() {
  return (
    <section className="m-8 flex">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Demande de Transport
          </Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
            Remplissez les détails pour demander des services de transport.
          </Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-4 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Départ
            </Typography>
            <Input
              size="lg"
              placeholder="Indiquer le lieu de départ"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Destination
            </Typography>
            <Input
              size="lg"
              placeholder="Indiquer le lieu de destination"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Date
            </Typography>
            <Input
              size="lg"
              type="date"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Type de Marchandise
            </Typography>
            <Select
              size="lg"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            >
              <Option value="perishable">Périssable</Option>
              <Option value="fragile">Fragile</Option>
              <Option value="general">Général</Option>
              {/* Ajouter d'autres options si nécessaire */}
            </Select>
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Poids
            </Typography>
            <Input
              size="lg"
              placeholder="Indiquer le poids (kg)"
              type="number"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Type de Remorque
            </Typography>
            <Select
              size="lg"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            >
              <Option value="standard">Standard</Option>
              <Option value="refrigerated">Réfrigérée</Option>
              <Option value="flatbed">Plate-forme</Option>
              <Option value="custom">TTT</Option>
            </Select>
            {/* New Price Input */}
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Prix
            </Typography>
            <Input
              size="lg"
              placeholder="Indiquer le prix (MAD)"
              type="number"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="mt-6" fullWidth>
            Soumettre la Demande
          </Button>
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Besoin d'aide ?{" "}
            <Link to="/support" className="text-gray-900 ml-1">
              Contacter le Support
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default TransportRequest;
