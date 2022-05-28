export const columns = [
    { 
      id: 'agent', 
      label: 'Agent', 
      minWidth: 170 
    },
    { 
      id: 'id', 
      label: 'ID', 
      minWidth: 100 
    },
    {
      id: 'applicant',
      label: 'Applicant',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'course',
      label: 'Course',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'deliveryPattern',
      label: 'Delivery Pattern',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'intake',
      label: 'Intake',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'submittedOn',
      label: 'Submitted On',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'status',
      label: 'Status',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'offer',
      label: 'Offer',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'registration',
      label: 'Registration Email',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
    
    {
      id: 'enrolmentStatus',
      label: 'Enrolment Status',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'interview',
      label: 'Interview',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'elpt',
      label: 'ELPT',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
  ];