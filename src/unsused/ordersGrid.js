export const gridOrderImage = (props) => (
    <div>
      <img
        className="rounded-xl h-20 md:ml-3"
        src={props.ProductImage}
        alt="order-item"
      />
    </div>
  );

  export const gridOrderStatus = (props) => (
    <button
      type="button"
      style={{ background: props.StatusBg }}
      className="text-white py-1 px-2 capitalize rounded-2xl text-md"
    >
      {props.Status}
    </button>
  );

export const ordersGrid = [
    {
      headerText: 'Image',
      template: gridOrderImage,
      textAlign: 'Center',
      width: '120',
    },
    {
      field: 'OrderItems',
      headerText: 'Item',
      width: '150',
      editType: 'dropdownedit',
      textAlign: 'Center',
    },
    { field: 'CustomerName',
      headerText: 'Customer Name',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'TotalAmount',
      headerText: 'Total Amount',
      format: 'C2',
      textAlign: 'Center',
      editType: 'numericedit',
      width: '150',
    },
    {
      headerText: 'Status',
      template: gridOrderStatus,
      field: 'OrderItems',
      textAlign: 'Center',
      width: '120',
    },
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: '120',
      textAlign: 'Center',
    },
  
    {
      field: 'Location',
      headerText: 'Location',
      width: '150',
      textAlign: 'Center',
    },
  ];