import "datatables.net-bs4";
import "datatables.net-buttons-bs4";
import "datatables.net-responsive-bs4";
import "datatables.net-select-bs4";

let jQuery = $(document).on('turbolinks:load', function(){
    $('#advisorsTable').DataTable({ });
});