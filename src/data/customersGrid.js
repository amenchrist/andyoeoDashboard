const customerGridImage = (props) => (
    <div className="image flex gap-4">
      <img
        className="rounded-full w-10 h-10"
        src={props.CustomerImage}
        alt="employee"
      />
      <div>
        <p>{props.CustomerName}</p>
        <p>{props.CustomerEmail}</p>
      </div>
    </div>
  );

  const customerGridStatus = (props) => (
    <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
      <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
      <p>{props.Status}</p>
    </div>
  );

 const customersGrid = [
    { type: 'checkbox', width: '50' },
    { field: 'CustomerName',
      headerText: 'Name',
      width: '150',
      template: customerGridImage,
      textAlign: 'Center' },
    { field: 'ProjectName',
      headerText: 'Project Name',
      width: '150',
      textAlign: 'Center' },
    { field: 'Status',
      headerText: 'Status',
      width: '130',
      format: 'yMd',
      textAlign: 'Center',
      template: customerGridStatus },
    {
      field: 'Weeks',
      headerText: 'Weeks',
      width: '100',
      format: 'C2',
      textAlign: 'Center' },
    { field: 'Budget',
      headerText: 'Budget',
      width: '100',
      format: 'yMd',
      textAlign: 'Center' },
  
    { field: 'Location',
      headerText: 'Location',
      width: '150',
      textAlign: 'Center' },
  
    { field: 'CustomerID',
      headerText: 'Customer ID',
      width: '120',
      textAlign: 'Center',
      isPrimaryKey: true,
    },
  
  ];

  export default customersGrid