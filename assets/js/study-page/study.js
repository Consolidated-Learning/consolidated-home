
$(document).ready(function(){
    
    
    loadmaindiv();
    
});

function loadmaindiv()
{
    var cardHeaders = ["GS Paper I", "GS Paper II", "GS Paper III", "Others", "Optional Paper I", "Optional Paper II"];

    var gspaper1 = ["History", "Geography", "Indian Society", "Master"];

    var gspaper2 = ["Indian Polity", "Welfare", "Governance", "International Relations", "Indian Polity"];

    var gspaper3 = ["Economy", "Science & Technology", "Environment & Disaster", "Internal Security"];

    var others = ["Ethics", "Current Affairs-Mains", "Current Affairs-Prelims", "Untitled", "India Year Book"];

    var optionalpaper1 = ["Ancient India", "Medieval India"];
    var optionalpaper2 = ["Modern India", "World History"];


    $("#maindiv").empty();
    
    for(let i = 0; i < cardHeaders.length; i++)// cardHeaders.forEach(function(cardHeader)
    {
        var cardHeader = cardHeaders[i];
       // console.log("cardHeader: " + cardHeader); // shadow
        $("#maindiv").append('  <div class="col-sm-12 col-md-3 col-xl-3 text-primary mb-5" > \
                                    <div class="card no-outline  h-100" > \
                                        <div class="card-header h6">'+cardHeader+'</div> \
                                        <div class="card-body">\
                                            <ul id="ulid'+i+'" class="list-group list-group-flush" >\
                                            </ul>\
                                        </div>\
                                        </div>\
                                    </div>\
                                </div>'
                            );

        var subheaders, foldername;                    
        if(cardHeader==="GS Paper I")
        {
            //foldername = "GS Paper I";
            subheaders = gspaper1;
        }
        else if(cardHeader==="GS Paper II")
        {
            //foldername = cardHeader;
            subheaders = gspaper2;
        }
        else if(cardHeader==="GS Paper III")
        {
            //foldername = "GS Paper III";
            subheaders = gspaper3;
        }
        else if(cardHeader==="Others")
        {
            //foldername = "Others";
            subheaders = others;
        }
        else if(cardHeader==="Optional Paper I")
        {
            //foldername = "Optional Paper I";
            subheaders = optionalpaper1;
        }
        else if(cardHeader==="Optional Paper II")
        {
            //foldername = "Optional Paper II";
            subheaders = optionalpaper2;
        }

        foldername = cardHeader.replaceAll(" ","-");
        console.log("subheaders: "+ subheaders.length);
        for(let j = 0; j<subheaders.length; j++)
        {
            //console.log("subheaders[j]: "+ subheaders[j]);
            $("#ulid"+i).append('<li class="list-group-item text-decoration-underline" onclick=\'(function(){opentopic(\"'+foldername+'","'+subheaders[j].toLowerCase()+'\")})()\'>\
                                    <a class="text-secondary  tz12" href="#" >'+subheaders[j]+'</a>\
                                </li>');
        }

    }
    
}

function opentopic(foldername,topicname)
{
    // var prefix = "https://github.com/Consolidated-Learning/consolidated-home/blob/d27bb2e7af9e2ee51b0e5de7661297751617374b";
    // var filepath = "/assets/js/"+foldername.replace(" ","-")+"/"+topicname+"/"+topicname+".html";

    var filepath = topicname+".html";
    
  //  window.location.pathname = filepath ;

  //  window.location.replace(filepath);
window.location.href = filepath;
}


// window.location.replace("/assets/history/history.html");
//window.location.href = "assets/js/history/history.html";
