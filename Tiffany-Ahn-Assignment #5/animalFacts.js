//array of messages
var messages=["The word Koala is thought to originate from one of the Australian Aboriginal languages, Dharug, which roughly translates to ‘no drink’ or ‘no water’. And this might explain why. In the Australian bush, koalas rarely drink water as the majority of their water intake comes from eating fresh eucalyptus leaves. Koalas drinking water is uncommon in the wild, although they can do so if necessary, especially during heat waves, droughts or bushfires.",
"Koalas are folivore specialists, feeding mainly on Eucalyptus leaves, and occasional leaves of other plant species. The koala’s digestive system is particularly good at tolerating its toxic eucalyptus diet, which, even in small amounts, can often be poisonous and fatal to most animals when ingested.",
"70% of Australia is either arid or semi-arid land, since the continent receives so little rain. Hence, most of the country’s unique wildlife has had to adapt to living in dry environments, including koalas.",
"There is only one species of Koala in the world. It is the only extant member of the family Phascolarctidae, whose closest living relatives are the common wombats. Their wild numbers are estimated to be around 300,000 mature individuals, but showing a declining population trend. Koalas are currently listed as vulnerable by the IUCN."

];

//array of titles
var titles=["Koala means no drink", 
"Koala have a specialist diet comprising of poisonous leaves",
"Koala live in one of the driest continents in the world",
"A Koala is the only surviving member of its family"
];

//index for titles and message while rotating
var id = 0;

//function to generate random color
function getRandomColor(){
    let randomColor = "#";
    let chars = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    for(let i=0; i<6; i++ ){
        //Generate random color from six random hex value
        randomColor+= chars[Math.floor(Math.random()*chars.length)];
    }
    return randomColor;
}

//function to change message and the color of the div.
function changemessage(){
    //%4 to ensure the index is from 0 to 3.
    document.getElementById("rotatingTitle").innerHTML = titles[id%4];
    document.getElementById("rotatingMessage").innerHTML = messages[id%4];
    //color change at the same time as message and title
    document.getElementById("rotatingDiv").style.backgroundColor = getRandomColor();
    //increase id to change message next time
    id++
    
}

//initial message
changemessage();
//change the message every 5 seconds.
setInterval(changemessage,5000);