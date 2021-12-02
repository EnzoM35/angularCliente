/*fecha,marca,modelo,estado del equipo, estado del envio*/

export interface Estado {
  equipmentId: number;
  mark: string;
  model: string;
  failure: string;
  travelEquipmentDTOs: [
    {
      id: number;
      operationDate:string;
      observation: null;
      cadete: null;
      operator: {
        id: number;
        email: string;
        fullName: string;
        address: string;
        cellPhone: string;
      };
      equipment: null;
      statusTravel: number;
    }
  ];
}
