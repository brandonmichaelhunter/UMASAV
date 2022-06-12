

var mydata = JSON.parse(data);
let htmlTable = '';
let questionAnswers = [];
let numberOfIncorrectAnswers = 0;
var timeleft = 10;
function ShowQuestion(QuestionID){
    $("#Answer").hide();
    $("#progressBar").hide();
    let question = "";
    let answer = "";
    let value = "";
    console.log("Question ID: " + QuestionID);
    numberOfIncorrectAnswers = 0;
    $("#QuestionID").val(QuestionID);
    for(let a = 0; a <= questionAnswers.length; a++){
        if(questionAnswers[a].ID == QuestionID){
            question = questionAnswers[a].Question;
            answer = questionAnswers[a].Answer;
            value = questionAnswers[a].Value;
            break;
        }
    }
    $( "#dialog" ).addClass("QuestionDialog")
    // questionAnswers.forEach(element => {
    //     if(element.ID == QuestionID){
            
    //     }
    // });
    $("#Question").text(question);
    $("#Answer").text(answer);
    $("#Value").text(value);
    //RunTimer();
}
function RunTimer(){
    $("#progressBar").show();
    
    var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
        $("#progressBar").removeClass("Started");
        $("#progressBar").removeClass("GettingCloseDone");
        $("#progressBar").removeClass("HalfWay");
        $("#progressBar").addClass("Done")
        clearInterval(downloadTimer);
    }
    else if (timeleft <= 7 && timeleft >= 5){
        $("#progressBar").removeClass("Started");
        $("#progressBar").removeClass("GettingCloseDone");
        $("#progressBar").addClass("HalfWay");
        $("#progressBar").removeClass("Done")
    }
    else if(timeleft <=5 ){
        
        $("#progressBar").removeClass("Started");
        $("#progressBar").addClass("GettingCloseDone");
        $("#progressBar").removeClass("HalfWay");
        $("#progressBar").removeClass("Done");
    }
    else if (timeleft == 10){
        $("#progressBar").addClass("Started");
        $("#progressBar").removeClass("AlmostDone");
        $("#progressBar").removeClass("GettingCloseDone");
        $("#progressBar").removeClass("Done");
    }

    document.getElementById("progressBar").value = 10 - timeleft;
    timeleft -= 1;
    }, 1000);
    //$("#progressBar").hide();
}
function showSection() {   
    fetch('/gamedatas')
    .then(response => response.text())
    .then(text => { console.log("Data"+text);  });
}



function LoadGame(){
    showSection()
    htmlTable += '<table class="table table-bordered"><tr>';//'
    for(let a = 0; a < mydata.length; a++){
        console.log(mydata[a].category)
        htmlTable+= '<td class="categoryHeader">'+mydata[a].category+'</td>'
    }
    htmlTable +='</tr>';
    let counter = 4;
    for(let a = 0; a < counter; a++){
        htmlTable +='<tr>'
        for(let b = 0; b < mydata.length; b++){
            const qa = new Object();
            qa.ID       = mydata[b].QuestionAnswer[a].ID;
            qa.Question = mydata[b].QuestionAnswer[a].Question;
            qa.Value    = mydata[b].QuestionAnswer[a].Value;
            qa.Answer   = mydata[b].QuestionAnswer[a].Answer;
            questionAnswers.push(qa);
            htmlTable+= '<td class="ValuesRows"><button type = "button" id="'+mydata[b].QuestionAnswer[a].ID+'"  onclick="ShowQuestion(this.id);" class = "btn btn-link ValueBtn">'+mydata[b].QuestionAnswer[a].Value+'</button></td>' 
        }
        htmlTable+='</tr>';
    }
    //collect all the question answers into a dictionary.
    htmlTable +='</table>'
    $("#GameTable").append(htmlTable)
}
function splash(param) {
    var time = param;
    setTimeout(function () {
      $('#splashscreen').hide();
    }, time);
   }
$(document).ready(function(){
   document.getElementById("link_id").addEventListener("click", function () {
        document.getElementById("linkAudio").play();
      }); 
      
    LoadGame();
    console.log(questionAnswers);
    $( "#dialog" ).dialog({
        autoOpen: false,
        width: 800,
        height: 400,
        buttons: {
            "Team A - Correct": function(){
                var teamValue = parseInt($("#Team1Score").text())
                teamValue += parseInt($("#Value").text());
                $("#Team1Score").text(teamValue);
                if(teamValue > 0){
                    $("#Team1Score").addClass("PositiveValue");
                    $("#Team1Score").removeClass("NegativeValue");
                }
                else {
                    $("#Team1Score").addClass("NegativeValue");
                    $("#Team1Score").removeClass("PositiveValue");
                }
                $("#Answer").show();
                let controlID = $("#QuestionID").val();
                $("#"+controlID+"").hide();
                setTimeout(() => {  $( this ).dialog( "close" ); }, 2000);
            },
            "Team A - Incorrect": function(){
                var teamValue = parseInt($("#Team1Score").text())
                teamValue -= parseInt($("#Value").text());
                $("#Team1Score").text(teamValue);
                if(teamValue > 0){
                    $("#Team1Score").addClass("PositiveValue");
                    $("#Team1Score").removeClass("NegativeValue");
                }
                else {
                    $("#Team1Score").addClass("NegativeValue");
                    $("#Team1Score").removeClass("PositiveValue");
                }
                numberOfIncorrectAnswers = numberOfIncorrectAnswers +  1;
                if(numberOfIncorrectAnswers == 2){
                    timeleft = 0;
                    console.log("Incorrect Team A")
                    $("#Answer").show();
                    let controlID = $("#QuestionID").val();
                    $("#"+controlID+"").hide();
                    setTimeout(() => {  $( this ).dialog( "close" ); }, 5000)
                }
                else {
                    RunTimer();
                }
                
                console.log("Number of incorrect answers:" + numberOfIncorrectAnswers);
            },
            "Team B - Correct": function(){
                var teamValue = parseInt($("#Team2Score").text())
                teamValue += parseInt($("#Value").text());
                $("#Team2Score").text(teamValue);
                if(teamValue > 0){
                    $("#Team2Score").addClass("PositiveValue");
                    $("#Team2Score").removeClass("NegativeValue");
                }
                else {
                    $("#Team2Score").addClass("NegativeValue");
                    $("#Team2Score").removeClass("PositiveValue");
                }
                $("#Answer").show();
                let controlID = $("#QuestionID").val();
                $("#"+controlID+"").hide();
                setTimeout(() => {  $( this ).dialog( "close" ); }, 5000);
            },
            "Team Bt - Incorrect": function(){
                var teamValue = parseInt($("#Team2Score").text())
                teamValue -= parseInt($("#Value").text());
                $("#Team2Score").text(teamValue);
                if(teamValue > 0){
                    $("#Team2Score").addClass("PositiveValue");
                    $("#Team2Score").removeClass("NegativeValue");
                }
                else {
                    $("#Team2Score").addClass("NegativeValue");
                    $("#Team2Score").removeClass("PositiveValue");
                }
                numberOfIncorrectAnswers = numberOfIncorrectAnswers +  1;
                if(numberOfIncorrectAnswers == 2){
                    timeleft = 0;
                    console.log("Incorrect Team B")
                    $("#Answer").show();
                    let controlID = $("#QuestionID").val();
                    $("#"+controlID+"").hide();
                    setTimeout(() => {  $( this ).dialog( "close" ); }, 5000);
                }else {
                    RunTimer();
                }

                console.log("Number of incorrect answers:" + numberOfIncorrectAnswers);
            },
            "Team C - Correct": function(){
                var teamValue = parseInt($("#Team3Score").text())
                teamValue += parseInt($("#Value").text());
                $("#Team3Score").text(teamValue);
                if(teamValue > 0){
                    $("#Team3Score").addClass("PositiveValue");
                    $("#Team3Score").removeClass("NegativeValue");
                }
                else {
                    $("#Team3Score").addClass("NegativeValue");
                    $("#Team3Score").removeClass("PositiveValue");
                }
                $("#Answer").show();
                let controlID = $("#QuestionID").val();
                $("#"+controlID+"").hide();
                setTimeout(() => {  $( this ).dialog( "close" ); }, 5000);
            },
            "Team C - Incorrect": function(){
                var teamValue = parseInt($("#Team3Score").text())
                teamValue -= parseInt($("#Value").text());
                $("#Team3Score").text(teamValue);
                if(teamValue > 0){
                    $("#Team3Score").addClass("PositiveValue");
                    $("#Team3Score").removeClass("NegativeValue");
                }
                else {
                    $("#Team3Score").addClass("NegativeValue");
                    $("#Team3Score").removeClass("PositiveValue");
                }
                numberOfIncorrectAnswers = numberOfIncorrectAnswers +  1;
                if(numberOfIncorrectAnswers == 2){
                    timeleft = 0;
                    console.log("Incorrect Team C")
                    $("#Answer").show();
                    let controlID = $("#QuestionID").val();
                    $("#"+controlID+"").hide();
                    setTimeout(() => {  $( this ).dialog( "close" ); }, 5000);
                }else {
                    RunTimer();
                }

                console.log("Number of incorrect answers:" + numberOfIncorrectAnswers);
            },
            "Show Answer": function(){
                $("#Answer").show();
                let controlID = $("#QuestionID").val();
                $("#"+controlID+"").hide();
                setTimeout(() => {  $( this ).dialog( "close" ); }, 10000);
            },
            
        },
        show: { effect: "blind", duration: 1000 },
        hide: { effect: "blind", duration: 1000 }
      });
      $( ".ValueBtn" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
      });
})
