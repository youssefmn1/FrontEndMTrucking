import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
  import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
  import { expediteursTableData } from "@/data"; // Assurez-vous que vos données sont disponibles
  
  export function ExpediteursTable() {
    return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Expéditeurs Table
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["Expéditeur", "Nom de l'entreprise", "Numéro de Contact", "Demandes", "Voyages", ""].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {expediteursTableData.map(
                  ({ nom, nomEntreprise, numeroContact, demandes, voyages }, key) => {
                    const className = `py-3 px-5 ${
                      key === expediteursTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;
  
                    return (
                      <tr key={nom}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar
                              src="/img/team-4.jpeg" 
                              alt={nom}
                              size="sm"
                              variant="rounded"
                            />
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {nom}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {nomEntreprise}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            {numeroContact}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            {demandes ? demandes.length : 0} Demande(s)
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            {voyages} Voyage(s)
                          </Typography>
                        </td>
                        <td className={className}>
                          <Tooltip content="Edit Expéditeur">
                            <Typography
                              as="a"
                              href="#"
                              className="text-xs font-semibold text-blue-gray-600"
                            >
                              <EllipsisVerticalIcon className="h-5 w-5" />
                            </Typography>
                          </Tooltip>
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
    );
  }
  
  export default ExpediteursTable;
  