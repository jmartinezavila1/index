$(document).ready(function () {

    var table = $('#reportTable').DataTable({
        "data": testdata.data,
        select: "single",
        language: {
            searchPlaceholder: 'Search by Company Name '},
        "columns": [
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": '',
                "render": function () {
                    return '<i class="fa fa-plus-square" aria-hidden="true"></i>';
                },
                width: "15px"
            },
            { "data": "name" },
            { "data": "warranties" },
            { "data": "duration" },
            { "data": "customers" },
            { "data": "cost" }
        ],
        
        "order": [[1, 'asc']]
    });

    // Add event listener for opening and closing details
    $('#reportTable tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var tdi = tr.find("i.fa");
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
            tdi.first().removeClass('fa-minus-square');
            tdi.first().addClass('fa-plus-square');
        }
        else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
            tdi.first().removeClass('fa-plus-square');
            tdi.first().addClass('fa-minus-square');
        }
    });

    table.on("user-select", function (e, dt, type, cell, originalEvent) {
        if ($(cell.node()).hasClass("details-control")) {
            e.preventDefault();
        }
    });
});

function format(d) {

    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Customer:</td>' +
        '<td>' + d.customer_name + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Repair number:</td>' +
        '<td>' + d.customer_name2 + '</td>' +
        '</tr>' +
        '</table>';
}

var testdata = {
    "data": [
        {
            "name": "Briggs & Stratton Corporation",
            "warranties": "2",
            "duration": "18 hrs",
            "customers": "2",
            "cost": "$800.00",
            "repair_number": "7621",
            "repair_duration": "6 hours",
            "customer_name": "Jamie Dorito",
            "customer_name2": "Jane Smith"
            
        },
        {
            "name": "Husqvarna Group",
            "warranties": "3",
            "duration": "28 hrs",
            "customers": "3",
            "cost": "$600.00",
            "repair_number": "8921",
            "repair_duration": "18 hours",
            "customer_name": "Jamie Dorito",
            "customer_name2": "Jane Smith"
        },
        {
            "name": "John Deere",
            "warranties": "5",
            "duration": "29 hrs",
            "customers": "5",
            "cost": "$700.00",
            "repair_number": "9021",
            "repair_duration": "13 hours",
            "customer_name": "Jamie Dorito",
            "customer_name2": "Jane Smith"
        },
        {
            "name": "Toro",
            "warranties": "3",
            "duration": "6 hrs",
            "customers": "3",
            "cost": "$100.00",
            "repair_number": "1022",
            "repair_duration": "2 hours",
            "customer_name": "Jamie Dorito",
            "customer_name2": "Jane Smith"
        },
        {
            "name": "Craftsman",
            "warranties": "2",
            "duration": "23 hrs",
            "customers": "2",
            "cost": "$30.00",
            "repair_number": "1025",
            "repair_duration": "15 hours",
            "customer_name": "Jamie Dorito",
            "customer_name2": "Jane Smith"
        },
        {
            "name": "Cub Cadet",
            "warranties": "5",
            "duration": "23 hrs",
            "customers": "2",
            "cost": "$38.00",
            "repair_number": "1025",
            "repair_duration": "15 hours",
            "customer_name": "Jamie Dorito",
            "customer_name2": "Jane Smith"
        },
        {
            "name": "Black & Decker",
            "warranties": "4",
            "duration": "2 hrs",
            "customers": "4",
            "cost": "$45.00",
            "repair_number": "1031",
            "repair_duration": "15 hours",
            "customer_name": "Jamie Dorito",
            "customer_name2": "Jane Smith"
        },
        {
            "name": "Greenworks",
            "warranties": "2",
            "duration": "23 hrs",
            "customers": "2",
            "cost": "$30.00",
            "repair_number": "1025",
            "repair_duration": "15 hours",
            "customer_name": "Jamie Dorito",
            "customer_name2": "Jane Smith"
        },
        {
            "name": "Worx",
            "warranties": "2",
            "duration": "23 hrs",
            "customers": "2",
            "cost": "$30.00",
            "repair_number": "1025",
            "repair_duration": "15 hours",
            "customer_name": "Jamie Dorito",
            "customer_name2": "Jane Smith"
        },
        {
            "name": "Ariens",
            "warranties": "6",
            "duration": "15 hrs",
            "customers": "6",
            "cost": "$300.00",
            "repair_number": "1029",
            "repair_duration": "15 hours",
            "customer_name": "Jamie Dorito",
            "customer_name2": "Jane Smith"
        },
        {
            "name": "Kubota",
            "warranties": "2",
            "duration": "23 hrs",
            "customers": "2",
            "cost": "$30.00",
            "repair_number": "1025",
            "repair_duration": "15 hours",
            "customer_name": "Jamie Dorito",
            "customer_name2": "Jane Smith"
        },
        {
            "name": "Ryobi",
            "warranties": "2",
            "duration": "23 hrs",
            "customers": "2",
            "cost": "$30.00",
            "repair_number": "1025",
            "repair_duration": "15 hours",
            "customer_name": "Jamie Dorito",
            "customer_name2": "Jane Smith"
        },
        {
            "name": "EGO",
            "warranties": "2",
            "duration": "23 hrs",
            "customers": "2",
            "cost": "$30.00",
            "repair_number": "1025",
            "repair_duration": "15 hours",
            "customer_name": "Jamie Dorito",
            "customer_name2": "Jane Smith"
        },
        {
            "name": "Scotts",
            "warranties": "2",
            "duration": "23 hrs",
            "customers": "2",
            "cost": "$30.00",
            "repair_number": "1025",
            "repair_duration": "15 hours",
            "customer_name": "Jamie Dorito",
            "customer_name2": "Jane Smith"
        }
    ]
};