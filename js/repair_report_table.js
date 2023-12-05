$(document).ready(function () {

    var table = $('#reportTable').DataTable({
        "data": testdata.data,
        select: "single",
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
            { "data": "date" },
            { "data": "number" },
            { "data": "customer" },
            { "data": "equipment" },
            { "data": "time" },
            { "data": "part_cost" },
            { "data": "labor_cost" },
            { "data": "total_cost" }
           
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
        '<td>Status:</td>' +
        '<td>' + d.repair_status + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Technician:</td>' +
        '<td>' + d.technician + '</td>' +
        '</tr>' +
        '</table>';
}

var testdata = {
    "data": [
        {
            "date": "2023-11-01",
            "number": "1023",
            "customer": "Jamie Dorito",
            "equipment": "Deck Parts",
            "time": "3 hrs",
            "part_cost": "$50.00",
            "labor_cost": "$100.00",
            "total_cost": "$150.00",
            "repair_status": "Finished",
            "technician": "Julian Martinez"
        },
        {
            "date": "2023-11-01",
            "number": "1023",
            "customer": "Jamie Dorito",
            "equipment": "Deck Parts",
            "time": "3 hrs",
            "part_cost": "$50.00",
            "labor_cost": "$100.00",
            "total_cost": "$150.00",
            "repair_status": "Finished",
            "technician": "Julian Martinez"
        },
        {
            "date": "2023-11-01",
            "number": "1023",
            "customer": "Jamie Dorito",
            "equipment": "Deck Parts",
            "time": "3 hrs",
            "part_cost": "$50.00",
            "labor_cost": "$100.00",
            "total_cost": "$150.00",
            "repair_status": "Finished",
            "technician": "Julian Martinez"
        },
        {
            "date": "2023-11-01",
            "number": "1023",
            "customer": "Jamie Dorito",
            "equipment": "Deck Parts",
            "time": "3 hrs",
            "part_cost": "$50.00",
            "labor_cost": "$100.00",
            "total_cost": "$150.00",
            "repair_status": "Finished",
            "technician": "Julian Martinez"
        },
        {
            "date": "2023-11-01",
            "number": "1023",
            "customer": "Jamie Dorito",
            "equipment": "Deck Parts",
            "time": "3 hrs",
            "part_cost": "$50.00",
            "labor_cost": "$100.00",
            "total_cost": "$150.00",
            "repair_status": "Finished",
            "technician": "Julian Martinez"
        },
        {
            "date": "2023-11-01",
            "number": "1023",
            "customer": "Jamie Dorito",
            "equipment": "Deck Parts",
            "time": "3 hrs",
            "part_cost": "$50.00",
            "labor_cost": "$100.00",
            "total_cost": "$150.00",
            "repair_status": "Finished",
            "technician": "Julian Martinez"
        },
        {
            "date": "2023-11-01",
            "number": "1023",
            "customer": "Jamie Dorito",
            "equipment": "Deck Parts",
            "time": "3 hrs",
            "part_cost": "$50.00",
            "labor_cost": "$100.00",
            "total_cost": "$150.00",
            "repair_status": "Finished",
            "technician": "Julian Martinez"
        },
        {
            "date": "2023-11-01",
            "number": "1023",
            "customer": "Jamie Dorito",
            "equipment": "Deck Parts",
            "time": "3 hrs",
            "part_cost": "$50.00",
            "labor_cost": "$100.00",
            "total_cost": "$150.00",
            "repair_status": "Finished",
            "technician": "Julian Martinez"
        },
        {"date": "2023-11-01",
        "number": "1023",
        "customer": "Jamie Dorito",
        "equipment": "Deck Parts",
        "time": "3 hrs",
        "part_cost": "$50.00",
        "labor_cost": "$100.00",
        "total_cost": "$150.00",
        "repair_status": "Finished",
        "technician": "Julian Martinez"
        },
        {
            "date": "2023-11-01",
            "number": "1023",
            "customer": "Jamie Dorito",
            "equipment": "Deck Parts",
            "time": "3 hrs",
            "part_cost": "$50.00",
            "labor_cost": "$100.00",
            "total_cost": "$150.00",
            "repair_status": "Finished",
            "technician": "Julian Martinez"
        },
        {
            "date": "2023-11-01",
            "number": "1023",
            "customer": "Jamie Dorito",
            "equipment": "Deck Parts",
            "time": "3 hrs",
            "part_cost": "$50.00",
            "labor_cost": "$100.00",
            "total_cost": "$150.00",
            "repair_status": "Finished",
            "technician": "Julian Martinez"
        },
        {
            "date": "2023-11-01",
            "number": "1023",
            "customer": "Jamie Dorito",
            "equipment": "Deck Parts",
            "time": "3 hrs",
            "part_cost": "$50.00",
            "labor_cost": "$100.00",
            "total_cost": "$150.00",
            "repair_status": "Finished",
            "technician": "Julian Martinez"
        },
        {
            "date": "2023-11-01",
            "number": "1023",
            "customer": "Jamie Dorito",
            "equipment": "Deck Parts",
            "time": "3 hrs",
            "part_cost": "$50.00",
            "labor_cost": "$100.00",
            "total_cost": "$150.00",
            "repair_status": "Finished",
            "technician": "Julian Martinez"
        },
        {
            "date": "2023-11-01",
            "number": "1023",
            "customer": "Jamie Dorito",
            "equipment": "Deck Parts",
            "time": "3 hrs",
            "part_cost": "$50.00",
            "labor_cost": "$100.00",
            "total_cost": "$150.00",
            "repair_status": "Finished",
            "technician": "Julian Martinez"
        },
        {
            "date": "2023-11-01",
            "number": "1023",
            "customer": "Jamie Dorito",
            "equipment": "Deck Parts",
            "time": "3 hrs",
            "part_cost": "$50.00",
            "labor_cost": "$100.00",
            "total_cost": "$150.00",
            "repair_status": "Finished",
            "technician": "Julian Martinez"
        }
    ]
};