// Immediately Ivoked Function Expression (IIFE):- we use iife because of globel scope polution 

(function chai() {
    console.log("DB connected");
})();                                   //+++++++++++ name iife +++++++++++++++++


((name)=> {
    console.log(`DB connected2 ${name}`);
})(`Abhinav`)                           //++++++++++ no name iife +++++++++++++
