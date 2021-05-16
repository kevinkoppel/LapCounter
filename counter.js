//global variables
var listStopWatch = [];
var idCounter = 1;
var speed;
var totalLaps;
var lapDistance = 647;
var watchToChange;

//calls out updateClocks class every second
setInterval(updateClocks, 1000);

//updates watch objects
function updateClocks() {

    for (var i = 0; i < listStopWatch.length; i++) {
        if (listStopWatch[i].status !== 0) {

            listStopWatch[i].laps += speed / lapDistance;
            
            console.log("updateClocks class");
            if (listStopWatch[i].laps >= totalLaps) {
                listStopWatch[i].status = 0;
                listStopWatch[i].laps = 0
                changeBackgroundColor();
            }
            showLapsOnTimer(i);
            watchToChange = i;
            console.log("watch id: " + i)


        }

    }
  /*  if(listStopWatch.length > 1){
        document.getElementById("create_watches_btn").value("lalal");
        console.log("olen siin");
    }*/
}
//function to show laps on timers
function showLapsOnTimer(watchToChange) {
    //  console.log("laps: " + listStopWatch[0].laps)
    let lbl1 = document.getElementById("lapsLabel1");
    let lbl2 = document.getElementById("lapsLabel2");
    let lbl3 = document.getElementById("lapsLabel3");
    let lbl4 = document.getElementById("lapsLabel4");
    let lbl5 = document.getElementById("lapsLabel5");
    let lbl6 = document.getElementById("lapsLabel6");
    let lbl7 = document.getElementById("lapsLabel7");
    let lbl8 = document.getElementById("lapsLabel8");
    let creatWatchesButton = document.getElementById("create_watches_btn");




    lbl1.innerText = listStopWatch[0].laps.toFixed(1);
    lbl2.innerText = listStopWatch[1].laps.toFixed(1);
    lbl3.innerText = listStopWatch[2].laps.toFixed(1);
    lbl4.innerText = listStopWatch[3].laps.toFixed(1);
    lbl5.innerText = listStopWatch[4].laps.toFixed(1);
    lbl6.innerText = listStopWatch[5].laps.toFixed(1);
    lbl7.innerText = listStopWatch[6].laps.toFixed(1);
    lbl8.innerText = listStopWatch[7].laps.toFixed(1);

    changeBackgroundColor(watchToChange);

    

    

}


function CreateWatches() {
    listStopWatch = [];

    for (i = 0; i < 9; i++) {

        listStopWatch[i] = new Watch();
        idCounter = idCounter + 1;
        console.log("sstatus of added watch:" + listStopWatch[i].status)
        // console.log("speed: " + speed);
    }
    speed = document.getElementById("speed").value;
    totalLaps = document.getElementById("totalLaps").value;
    console.log("speed value: " + speed);
    console.log("total laps" +  totalLaps);
    console.log("items in list: " + listStopWatch.length)
}




// TODO: see klass peaks muutma kasta tausta vastavalt ringide arvule(võiks arvestada ka totalLaps)
function changeBackgroundColor(watchToChange){

    var backgroundColor = getBackgroundColor(watchToChange);
    var str1 = "box_";
    var boxToBeChanged = str1.concat(watchToChange);

   // console.log("box to be changed: " + boxToBeChanged);

   console.log("boxi id:" + boxToBeChanged);


    let box = document.getElementById(boxToBeChanged);
    console.log("boxx: " + box);


    switch(backgroundColor) {
        case "yellow":
  
            box.style.backgroundColor = "yellow";


          break;

        case "red":
            box.style.backgroundColor = "red";

 
            break;

        case "green":
            box.style.backgroundColor = "#A8FC61";

            break;
  
        default:
          
      }



}
function getBackgroundColor(watchToChange){
    var alertDistance1 = totalLaps - 1.18;
   

    for(var i = watchToChange; i < listStopWatch.length; i++) {
        watchToChange = i;
        if(listStopWatch[i].laps < alertDistance1 && listStopWatch[i].laps > 0){
            

            return "yellow" 

        }
        else if (listStopWatch[i].laps > alertDistance1){
           return "red"
        }
        else if(listStopWatch[i].laps == 0){
            return "green"
        }
    }


    


}




// Watch object
function Watch(
    status = 0,
    laps = 0,
    // speed = 10

) {
    this.laps = laps;
    this.id = idCounter;
    // idCounter = idCounter + 1;
    this.status = status; // 0 -> pause state 1 -> play state


}







function StartClock(watchNumber) {

    if (listStopWatch[watchNumber - 1].status == 0) {
        listStopWatch[watchNumber - 1].status = 1;
        console.log("watch status chenged to 1")
        return

    }
    


}
function ResetClock(watchNumber) {

    
    listStopWatch[watchNumber - 1].status = 0;
    listStopWatch[watchNumber - 1].laps = 0;
    updateClocks();
    showLapsOnTimer(watchNumber -1);
    event.stopPropagation();


}

function ShowList() {
    console.log(listStopWatch);
    for (var i = 0; i < listStopWatch.length; i++) {
        console.log("laps of watch: " + listStopWatch[i].laps);
        console.log("status of watch: " + listStopWatch[i].status);
        console.log("id of watch: " + listStopWatch[i].id);
    }
}

function changeSpeedValue() {

    console.log("new value of speed: " + speed);
}







var speedInput = document.getElementById("speed");
speedInput.addEventListener("click", changeSpeedValue);
//document.getElementById("speed").addEventListener("click", changeSpeedValue);




