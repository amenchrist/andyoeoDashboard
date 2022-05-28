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


  export const customersGrid = [
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

export const studentsGrid = [
  { 
    field: 'id', 
    headerText: 'id', 
    width: '150', 
    textAlign: 'Center',
    isPrimaryKey: true, 
    },
    {
    field: 'title',
    headerText: 'Title',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'firstName',
    headerText: 'First Name',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'lastName',
    headerText: 'Last Name',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'gender',
    headerText: 'Gender',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'nationality',
    headerText: 'Nationality',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'residentialStatus',
    headerText: 'Residential Status',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'email',
    headerText: 'Email',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'phone',
    headerText: 'Phone',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'dualNationality',
    headerText: 'Dual Nationality',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'countyOfBirth',
    headerText: 'County of Birth',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'ethnicOrigin',
    headerText: 'Ethnic Origin',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'highestQualificationOnEntry',
    headerText: 'Highest Qualification on Entry',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'highestQualification',
    headerText: 'Highest Qualification',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'lastInstitutionAttended',
    headerText: 'Last Institution Attended',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'currentUKInstitution',
    headerText: 'Current UK Institution',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'uniqueLearnerNumber',
    headerText: 'Unique Learner Number',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'nameOfQualification',
    headerText: 'Name of Qualification',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'yearAchieved',
    headerText: 'Year Achieved',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'subject',
    headerText: 'Subject',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'grade',
    headerText: 'Grade',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'passportNo',
    headerText: 'Passport No',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'passportPlaceOfIssue',
    headerText: 'Passport Place of Issue',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'timeInPublicCare',
    headerText: 'Time in Public Care',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'disabilityOrSpecialNeeds',
    headerText: 'Disability or Special Needs',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'personalStatement',
    headerText: 'Personal Statement',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'documentIds',
    headerText: 'Documents',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'permHouseNumberOrName',
    headerText: 'Permanent House Number/Name',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'permStreet',
    headerText: 'Permanent Street',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'permCityOrTown',
    headerText: 'Permanent City or Town',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'permCountyStateOrProvince',
    headerText: 'Permanent County State Or Province',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'permCountry',
    headerText: 'Permanent Country',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'permPostCode',
    headerText: 'Permanent PostCode',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'curHouseNumberOrName',
    headerText: 'Current House Number/Name',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'curStreet',
    headerText: 'Current Street',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'curCityOrTown',
    headerText: 'CityOrTown',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'curCountyStateOrProvince',
    headerText: 'curCountyStateOrProvince',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'curCountry',
    headerText: 'curCountry',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'curPostCode',
    headerText: 'curPostCode',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'nokName',
    headerText: 'nokName',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'nokRelation',
    headerText: 'nokRelation',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'nokPhone',
    headerText: 'nokPhone',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'nokEmail',
    headerText: 'nokEmail',
    width: '150',
    textAlign: 'Center'
  }
]




//   countyOfBirth: "Russia"
// curCityOrTown: "St. Stephens Ward"
// curCountry: "UK"
// curCountyStateOrProvince: "Kent"
// curHouseNumberOrName: "14"
// curPostCode: "DL3 0JF"
// curStreet: "TaylorSt"
// currentUKInstitution: "University of Liverpool"
// disabilityOrSpecialNeeds: "YES"
// documentIds: "AGUJ37849"
// dualNationality: ""
// email: "atomkiewicz@hotmail.com"
// ethnicOrigin: "Caribbean"
// firstName: "Evan"
// gender: "FEMALE"
// grade: "PASS"
// highestQualification: "level 3 diploma"
// highestQualificationOnEntry: "international Baccalaureate diploma"
// id: "1"
// lastInstitutionAttended: "Hazlerigg Building at the Loughborough University"
// lastName: "Tomkiewicz"
// nameOfQualification: "AAT Access Award in Accounting Software – Level 1"
// nationality: "United Kingdom"
// nokEmail: "carrol_kunimitsu@yahoo.com"
// nokName: "Carrol Kunimitsu"
// nokPhone: "01260-641258"
// nokRelation: "COUSIN"
// passportNo: "AGUJ37849"
// passportPlaceOfIssue: "Russia"
// permCityOrTown: "St. Stephens Ward"
// permCountry: "UK"
// permCountyStateOrProvince: "Kent"
// permHouseNumberOrName: "14"
// permPostCode: "DL3 0JF"
// permStreet: "TaylorSt"
// personalStatement: ""
// phone: "01835-703597"
// residentialStatus: "RESIDENT"
// subject: "Food Science"
// timeInPublicCare: "3"
// title: "MR"
// uniqueLearnerNumber: "N/A"
// yearAchieved: "2016"