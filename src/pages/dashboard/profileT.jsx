import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard } from "@/widgets/cards";
import { platformSettingsDataTrsp } from "@/data";

// Fonction pour générer un prix aléatoire
const generateRandomPrice = () => {
  const min = 100;
  const max = 500;
  const randomPrice = (Math.random() * (max - min) + min).toFixed(2);
  return `${randomPrice} €`;
};

// Données de voyages avec prix aléatoires
export const projectsTableData = [
  {
    depart: "Paris",
    destination: "Lyon",
    date: "2024-08-01",
    typeMarchandise: "Électronique",
    kgs: 150,
    typeRemorque: "Coffre",
    price: generateRandomPrice(),
  },
  {
    depart: "Marseille",
    destination: "Nice",
    date: "2024-08-05",
    typeMarchandise: "Meubles",
    kgs: 300,
    typeRemorque: "Plateau",
    price: generateRandomPrice(),
  },
  {
    depart: "Toulouse",
    destination: "Bordeaux",
    date: "2024-08-10",
    typeMarchandise: "Vêtements",
    kgs: 100,
    typeRemorque: "Coffre",
    price: generateRandomPrice(),
  },
  // Autres entrées...
];

export function ProfileTransporteur() {
  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="/img/bruce-mars.jpeg"
                alt="avatar-transporteur"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  Jean Dupont
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  Transporteur
                </Typography>
              </div>
            </div>
            <div className="w-full lg:w-96">
              <Tabs value="settings">
                <TabsHeader>
                  <Tab value="app">
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Accueil
                  </Tab>
                  <Tab value="settings">
                    <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Paramètres
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12 px-4 mb-12 lg:grid-cols-2 xl:grid-cols-2">
            <div className="col-span-1 lg:col-span-1">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Paramètres du Transporteur
              </Typography>
              <div className="flex flex-col gap-12">
                {platformSettingsDataTrsp.map(({ title, options }) => (
                  <div key={title}>
                    <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
                      {title}
                    </Typography>
                    <div className="flex flex-col gap-6">
                      {options.map(({ checked, label }) => (
                        <Switch
                          key={label}
                          id={label}
                          label={label}
                          defaultChecked={checked}
                          labelProps={{
                            className: "text-sm font-normal text-blue-gray-500",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-1 lg:col-span-1">
              <ProfileInfoCard
                title="Informations sur le Transporteur"
                description="Je suis Jean Dupont, un transporteur professionnel avec plusieurs années d'expérience dans le transport de marchandises. Mon objectif est de fournir un service fiable et ponctuel."
                details={{
                  "Nom": "Jean Dupont",
                  mobile: "(33) 612 345 678",
                  email: "jeandupont@mail.com",
                  social: (
                    <div className="flex items-center gap-4">
                      <i className="fa-brands fa-facebook text-blue-700" />
                      <i className="fa-brands fa-twitter text-blue-400" />
                      <i className="fa-brands fa-linkedin text-blue-600" />
                    </div>
                  ),
                }}
                action={
                  <Tooltip content="Modifier le Profil">
                    <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
                  </Tooltip>
                }
                className="h-full" // Assurer que le ProfileInfoCard utilise toute la hauteur
              />
            </div>
          </div>
          <div className="px-4 pb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Historique des Voyages
            </Typography>
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              Voici l'historique des voyages
            </Typography>
            <Card className="mt-6 border border-blue-gray-100">
              <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full min-w-[860px] table-auto"> {/* Ajuster la largeur minimale pour la nouvelle colonne */}
                  <thead>
                    <tr>
                      {["Départ", "Destination", "Date", "Type de Marchandise", "Poids", "Type de Remorque", "Prix"].map(
                        (el) => (
                          <th
                            key={el}
                            className="border-b border-blue-gray-50 py-3 px-6 text-left"
                          >
                            <Typography
                              variant="small"
                              className="text-[11px] font-medium uppercase text-blue-gray-400"
                            >
                              {el}
                            </Typography>
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {projectsTableData.map(
                      ({ depart, destination, date, typeMarchandise, kgs, typeRemorque, price }, key) => {
                        const className = `py-3 px-5 ${
                          key === projectsTableData.length - 1
                            ? ""
                            : "border-b border-blue-gray-50"
                        }`;

                        return (
                          <tr key={depart + destination + date}>
                            <td className={className}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                {depart}
                              </Typography>
                            </td>
                            <td className={className}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                {destination}
                              </Typography>
                            </td>
                            <td className={className}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                {date}
                              </Typography>
                            </td>
                            <td className={className}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                {typeMarchandise}
                              </Typography>
                            </td>
                            <td className={className}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                {kgs} Kgs
                              </Typography>
                            </td>
                            <td className={className}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                {typeRemorque}
                              </Typography>
                            </td>
                            <td className={className}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                {price}
                              </Typography>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </div>
          <div className="px-4 pb-4">
            <Link to="/Dashboard/activerequests">
              <Button className="mt-6" fullWidth>
                Voir les Demandes Actives
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default ProfileTransporteur;
