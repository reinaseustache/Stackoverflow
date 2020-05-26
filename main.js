var allData = [];
var currentQuestion = 0;

function headerSignIn() { 
    document.getElementById('popUp').style.display="block"
    var modal = document.getElementById('popUp');

window.onclick = function(event) {
    if (event.target == modal) 
        modal.style.display = "none";
    }
}

function processSignIn() {
    document.getElementById("popUp").style.display= "none";
    document.getElementById("mainPage").style.display = "none";

    document.body.className = "grid-container-profile";
    document.getElementById("profileBottom").style.display = "block";
    document.getElementById("profileHeader").style.display = "block";
    document.getElementById("empty").style.display = "block";

    document.getElementById("userName").innerHTML = "Hello" + " " + document.getElementById("username").value + " !!";
    document.getElementById("userName").style.fontSize("30px");

    document.getElementById("header").style.display = "block";
}

function askQuestion() {
    document.getElementById('popUpQuestion').style.display="block";

    var modal = document.getElementById('popUpQuestion');

    window.onclick = function(event) {
        if (event.target == modal) 
            modal.style.display = "none";
        }

}

function post() {
    document.getElementById("popUpQuestion").style.display= "none";

    var newQuest = new Object();
    newQuest.pos = allData.length;
    newQuest.username = document.getElementById('username').value;
     newQuest.title = document.getElementById('quesTitle').value;
     newQuest.description = document.getElementById('quesDescr').value;
     var date = new Date();
     var times = (date.getMonth() + 1) + "/" + date.getDate() +  "/" + date.getFullYear() + " @ " + date.getHours() + ":" + date.getMinutes();
     newQuest.timesStamp = times;
     newQuest.answers = [];

     allData.push(newQuest);

     document.getElementById('quesTitle').value = '';
     document.getElementById('quesDescr').value = '';

     var prof1 = document.getElementById('quesBottom');
     var prof = document.createElement('div');
     prof.setAttribute("id", "quesBottom2");
     
     prof1.appendChild(prof);

     var section = document.createElement('div');

     section.id = "newQues";
     section.addEventListener("click", (event) => {
        displayQuesAns(newQuest);
     });

     section.style.backgroundColor = '#ffffff';
     section.style.padding = '17px';
     section.style.borderRadius = '15px';
     section.style.marginTop = '20px';
     section.style.height = '200px';
     section.style.width = '1230px';
     section.style.marginLeft = '50px';

     var username = document.createElement('p');
     var title = document.createElement('h2');
     var description = document.createElement('p');
     var timeStamp = document.createElement('p');
     description.style.width = '1100px';
     timeStamp.style.marginLeft = '1100px';
     timeStamp.style.color = "#d60404";

     prof.appendChild(section);
     section.appendChild(username).innerHTML = "Posted by: " + allData[allData.length - 1].username;
     section.appendChild(title).innerHTML = allData[allData.length - 1].title;
     section.appendChild(description).innerHTML = allData[allData.length - 1].description;
     section.appendChild(timeStamp).innerHTML = allData[allData.length - 1].timesStamp;
}

function displayQuesAns(question) {
    //currentQuestion = position;

    document.getElementById("profDetails").style.display = "none";
    document.getElementById("askQuestion").style.display = "none";
    document.getElementById("quesBottom").style.display = "none";

    document.getElementById("postAnswer").style.display = "block";
    document.getElementById("backbtn").style.display = "block";

    var prof1 = document.getElementById('ansParent');
    var prof = document.createElement('div');
    prof.setAttribute("id", "ansHeader");

    prof1.appendChild(prof);
    var section = document.createElement('div');

    section.style.color= '#ffffff';
    section.style.backgroundColor = '#003366';
    section.style.padding = '17px';
    section.style.borderRadius = '15px';
    section.style.marginTop = '20px';
    section.style.height = '200px';
    section.style.width = '1330px';
    section.style.marginLeft = '40px';

    var username = document.createElement('p');
    var title = document.createElement('h2');
    var description = document.createElement('p');
    var timeStamp = document.createElement('p');
    timeStamp.style.marginLeft = '1200px';
    timeStamp.style.color = "#d60404";

    prof.appendChild(section);
    section.appendChild(username).innerHTML = "Posted by: " + question.username;
    section.appendChild(title).innerHTML = question.title;
    section.appendChild(description).innerHTML = question.description;
    section.appendChild(timeStamp).innerHTML = question.timesStamp;

    //var i;
    for (let answer of question.answers){
        var prof1 = document.getElementById('ansBottom');
        var prof = document.createElement('div');
        prof.setAttribute("id", "ansBottom2");
    
        prof1.appendChild(prof);
    
        var section = document.createElement('div');
    
        section.style.backgroundColor = '#ffffff';
        section.style.padding = '17px';
        section.style.borderRadius = '15px';
        section.style.marginTop = '20px';
        section.style.height = '200px';
        section.style.width = '1230px';
        section.style.marginLeft = '85px';
    
        var username = document.createElement('p');
        var description = document.createElement('p');
        var timeStamp = document.createElement('p');s
        timeStamp.style.marginLeft = '1100px';
        timeStamp.style.color = "#d60404";
    
        prof.appendChild(section);
        section.appendChild(username).innerHTML = "Posted by: " + answer.username;
        section.appendChild(description).innerHTML = answer.description;
        section.appendChild(timeStamp).innerHTML = answer.timesStamp;
    }
}

function postAnswer() {
    document.getElementById('popUpAnswer').style.display="block";

    var modal = document.getElementById('popUpAnswer');

    window.onclick = function(event) {
        if (event.target == modal) 
            modal.style.display = "none";
        }

}

function submitAnswer() {
    document.getElementById("popUpAnswer").style.display= "none";
    
    var newAns = new Object();
    newAns.username = document.getElementById('username').value;
    newAns.description = document.getElementById('ansDesc').value;
    var date = new Date();
    var times = (date.getMonth() + 1) + "/" + date.getDate() +  "/" + date.getFullYear() + " @ " + date.getHours() + ":" + date.getMinutes();
    newAns.timesStamp = times;

    allData[currentQuestion].answers.push(newAns);
    
    document.getElementById('ansDesc').value = '';

    var prof1 = document.getElementById('ansBottom');
    var prof = document.createElement('div');
    prof.setAttribute("id", "ansBottom2");
    
    prof1.appendChild(prof);

    var section = document.createElement('div');

    section.style.backgroundColor = '#ffffff';
    section.style.padding = '17px';
    section.style.borderRadius = '15px';
    section.style.marginTop = '20px';
    section.style.height = '200px';
    section.style.width = '1230px';
    section.style.marginLeft = '85px';

    var username = document.createElement('p');
    var description = document.createElement('p');
    var timeStamp = document.createElement('p');
    timeStamp.style.marginLeft = '1100px';
    timeStamp.style.color = "#d60404";

    prof.appendChild(section);
    section.appendChild(username).innerHTML = "Posted by: " + allData[currentQuestion].answers[allData[currentQuestion].answers.length - 1].username;
    section.appendChild(description).innerHTML = allData[currentQuestion].answers[allData[currentQuestion].answers.length - 1].description;
    section.appendChild(timeStamp).innerHTML = allData[currentQuestion].answers[allData[currentQuestion].answers.length - 1].timesStamp;
}

function goBack(){
    document.getElementById("ansHeader").remove();

    var i;
    for(i = 0; i < allData[currentQuestion].answers.length; i++){
        document.getElementById("ansBottom2").remove();
    }

    document.getElementById("profDetails").style.display = "block";
    document.getElementById("askQuestion").style.display = "block";
    document.getElementById("quesBottom").style.display = "block";

    document.getElementById("postAnswer").style.display = "none";
    document.getElementById("backbtn").style.display = "none";
}