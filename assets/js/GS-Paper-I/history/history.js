
$(document).ready(function(){
    
   loadHistoryTable();
    

    $('#history_table').on('click', 'tbody tr', function() 
    {
        var rl = $('#history_table').DataTable();
        //console.log('API row values : ', rl.row(this).data());

        var selected_row =  rl.row(this).data();
     
        var name = selected_row[1];
        
        openContent(name);
        
    });

});

function openContent(name)
{
    //alert("This will open the full content for "+ name);

    $('#modalheader').text(name); 

    var pagename = name.replaceAll(" ","-");
    pagename = "/assets/js/GS-Paper-I/history/Peasant-Movements-1857-1947";

    //pagename = "Peasant-Movements-1857-1947";
    // $('#textbody').text(name)
    $('#textbody').load(pagename+".html")

    $('#exampleModal').modal('show');

    
}

function loadHistoryTable()
{
    var ht =  $('#history_table').DataTable({
        pageLength : 50
    });

    for (let i = 0; i < tablecontent.length; i++)
    {
        var inrobject = tablecontent[i];
        
        ht.row.add([
            i+1,
            inrobject.name,
            inrobject.subject,
            inrobject.comments,
            inrobject.created,
            inrobject.modified
        ]).draw(false);
    }
    
}

