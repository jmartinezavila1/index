$(document).ready(function () {

    var table = $('#reportTable').DataTable({
        "data": testdata.data,
        select: "single",
        "columns": [
           
            { "data": "user" },
            { "data": "name" },
            { "data": "login" },
            { "data": "logout" },
            { "data": "duration" },
            { "data": "role" }

            
        ],
        
        language: {
            searchPlaceholder: 'Search by Username/ Name', // Set your custom placeholder text
          },
          lengthMenu: [
            [5, 10, 25, 50, -1],
            [5, 10, 25, 50, 'All']
          ]
    });

   

});



var testdata = {
    "data": [
        {
            "user": "EJohnson01",
            "name": "Emma Johnson",
            "login": "2023-11-30 8:30am",
            "logout": "2023-11-304:30pm",
            "duration": "8 hrs",
            "role": "Admin"
        },
        {
            "user": "WRodriguez02",
            "name": "Wendy Rodriguez",
            "login": "2023-11-28 8:30am",
            "logout": "2023-11-28 4:30pm",
            "duration": "8 hrs",
            "role": "Sales"
        },
        {
            "user": "WMitchell03",
            "name": "William Mitchell",
            "login": "2023-11-30 8:30am",
            "logout": "2023-11-304:30pm",
            "duration": "8 hrs",
            "role": "Sales"
        },
        {
            "user": "SThompson04",
            "name": "Sam Thompson ",
            "login": "2023-11-30 8:30am",
            "logout": "2023-11-304:30pm",
            "duration": "8 hrs",
            "role": "Ordering and Prchasing"
        },
        {
            "user": "EParker05",
            "name": "Emily Parker",
            "login": "2023-11-30 8:30am",
            "logout": "2023-11-304:30pm",
            "duration": "8 hrs",
            "role": "Admin"
        },
        {
            "user": "EJohnson01",
            "name": "Emma Johnson",
            "login": "2023-11-30 8:30am",
            "logout": "2023-11-304:30pm",
            "duration": "8 hrs",
            "role": "Admin"
        },
        {
            "user": "AJohnson02",
            "name": "Alex Johnson",
            "login": "2023-11-30 8:30am",
            "logout": "2023-11-304:30pm",
            "duration": "8 hrs",
            "role": "Admin"
        },
        {
            "user": "wJohnson01",
            "name": "Emma Johnson",
            "login": "2023-11-30 8:30am",
            "logout": "2023-11-304:30pm",
            "duration": "8 hrs",
            "role": "Admin"
        },
        {
            "user": "wJohnson01",
            "name": "Emma Johnson",
            "login": "2023-11-30 8:30am",
            "logout": "2023-11-304:30pm",
            "duration": "8 hrs",
            "role": "Admin"
        },
        {
            "user": "wJohnson01",
            "name": "Emma Johnson",
            "login": "2023-11-30 8:30am",
            "logout": "2023-11-304:30pm",
            "duration": "8 hrs",
            "role": "Admin"
        },
        {
            "user": "xJohnson01",
            "name": "Emma Johnson",
            "login": "2023-11-30 8:30am",
            "logout": "2023-11-304:30pm",
            "duration": "8 hrs",
            "role": "Admin"
        },
        {
            "user": "YJohnson01",
            "name": "Emma Johnson",
            "login": "2023-11-30 8:30am",
            "logout": "2023-11-304:30pm",
            "duration": "8 hrs",
            "role": "Admin"
        },
        {
            "user": "GJohnson01",
            "name": "Emma Johnson",
            "login": "2023-11-30 8:30am",
            "logout": "2023-11-304:30pm",
            "duration": "8 hrs",
            "role": "Admin"
        },
        {
            "user": "WJohnson01",
            "name": "Emma Johnson",
            "login": "2023-11-30 8:30am",
            "logout": "2023-11-304:30pm",
            "duration": "8 hrs",
            "role": "Admin"
        },
        {
            "user": "VJohnson01",
            "name": "Emma Johnson",
            "login": "2023-11-30 8:30am",
            "logout": "2023-11-304:30pm",
            "duration": "8 hrs",
            "role": "Admin"
        }
    ]
};