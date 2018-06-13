function getNote(){
    if(localStorage.getItem('note')){
        var note = localStorage.getItem('note');
    }
    else{
        var note = 'Go Edit';
    }
    document.getElementById('note').innerHTML=note;
}
function saveNote(id){
    var note = document.getElementById('note').innerHTML;
    localStorage.setItem('note',note);
}
function getNote1(){
    if(localStorage.getItem('note1')){
        var note1 = localStorage.getItem('note1');
    }
    else{
        var note1 = 'Go Edit';
    }
    document.getElementById('note1').innerHTML=note1;
}
function saveNote1(id){
    var note = document.getElementById('note1').innerHTML;
    localStorage.setItem('note1',note);
}
function getNote2(){
    if(localStorage.getItem('note2')){
        var note1 = localStorage.getItem('note2');
    }
    else{
        var note1 = 'Go Edit';
    }
    document.getElementById('note2').innerHTML=note1;
}
function saveNote2(id){
    var note = document.getElementById('note2').innerHTML;
    localStorage.setItem('note2',note);
}
function getNote3(){
    if(localStorage.getItem('note3')){
        var note3 = localStorage.getItem('note3');
    }
    else{
        note3 = 'Go Edit';
    }
    document.getElementById('note3').innerHTML=note3;
}
function saveNote3(id){
    var note3 = document.getElementById('note3').innerHTML;
    localStorage.setItem('note3',note3);
}
function getNote4(){
    if(localStorage.getItem('note4')){
        var note4 = localStorage.getItem('note4');
    }
    else{
        var note4 = 'Go Edit';
    }
    document.getElementById('note4').innerHTML =note4;
}
function saveNote4(id){
    var note4 = document.getElementById('note4').innerHTML;
    localStorage.setItem('note4',note4);
}
