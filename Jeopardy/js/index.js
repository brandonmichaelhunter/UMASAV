
var mydata = JSON.parse(data);
let htmlTable = '';
htmlTable += '<table class="table table-bordered"><tr>';//'
for(let a = 0; a < mydata.length; a++){
    console.log(mydata[a].category)
    htmlTable+= '<td class="categoryHeader">'+mydata[a].category+'</td>'
    // let questionAnswer = mydata[a].QuestionAnswer; 
    // for(let b = 0; b < questionAnswer.length; b++){
    //     console.log(" " + questionAnswer[b].Question);
    //     console.log(" " + questionAnswer[b].Value);
    //     console.log(" " + questionAnswer[b].Answer)
    // }
}
htmlTable +='</tr>';
let counter = 0;
for(let a = 0; a < 3; a++){
    htmlTable +='<tr>'
    for(let b = 0; b < mydata.length; b++){
        
        //let questionAnswer = mydata[a].QuestionAnswer[a].Value; 
        //for(let b = 0; b < questionAnswer.length; b++){
            htmlTable+= '<td class="ValuesRows"><button type = "button" id="'+mydata[b].QuestionAnswer[a].ID+'" data="test" onclick="ShowQuestion(this.id);" class = "btn btn-link ValueBtn">'+mydata[b].QuestionAnswer[a].Value+'</button></td>' 
        //}
        
    }
    htmlTable+='</tr>';
}
//collect all the question answers into a dictionary.
htmlTable +='</table>'
$("#GameTable").append(htmlTable)
function ShowQuestion(control){
    alert('here')
    console.log(control)
}