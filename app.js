var express = require("express");
var app =  express();

app.get("/",function(req,res){
    res.send("hii welcome to assis");
})
app.get("/speak/:animal",function(req,res){
    var animal = req.params.animal;
    var sounds={
        pig: "o o o ",
        cow: "c c c ",
        dog: "d d d",
        cat: "ca ca ca",
    }
    var sound = sounds[animal];
    res.send("The "+animal+"says'"+sound+"'");
});


app.listen(5000,function(){
    console.log("started MOther fucker");
});