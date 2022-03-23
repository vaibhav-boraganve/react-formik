export const COLUMNS = [
    {
        Header: "Id",
        accessor:"id"
    },
    {
        Header: "First Name",
        accessor:"first_name",
    },
    {
        Header: "Last Name",
        accessor:"last_name"
    },
    {
        Header: "Email",
        accessor:"email"
    },
    {
        Header: "Date of Birth",
        accessor:"date_of_birth"
    },
    {
        Header: "Age",
        accessor:"age"
    },
    {
        Header: "Country",
        accessor:"country"
    },{
        Header: "Phone",
        accessor:"phone"
    }
]

function compareNumericString(rowA, rowB, id, desc) {
    let a = Number.parseFloat(rowA.values[id]);
    let b = Number.parseFloat(rowB.values[id]);
    if (Number.isNaN(a)) {  // Blanks and non-numeric strings to bottom
        a = desc ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
    }
    if (Number.isNaN(b)) {
        b = desc ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
    }
    if (a > b) return 1; 
    if (a < b) return -1;
    return 0;
}