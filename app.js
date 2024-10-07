


//                                    ASSIGNMENT 18 
//                                   CHAPTER NO 31-34
//                                    DATE METHODS
//                                    QUESTION NO 1

// var date = new Date();
// console.log(date);

//                                    QUESTION NO 2

// var date = new Date();
// var monthArr = ["January" , "Februray" , "March" , "April" , "May" , "June" ,"July" , "August" , "September","October","November","December"]
//  console.log(monthArr[date.getMonth()])

//                                    QUESTION NO 3
//  var date = new Date ();
//  var dayArr = ["Sun" , "Mon" ,"Tues" ,"Wed" ,"Thrus" ,"Fri" ,"Sat"];
//  alert("Today is" +" "+ dayArr[date.getDay()]);

//                                    QUESTION NO 4
// var day = new Date ().getDay();
// if(day === 0 || day === 6){
//     alert("Its Fun day" )
// }
//                                    QUESTION NO 5


// var date = new Date ().getDate();
// if(date <= 15){
//    alert("First fifteen Days of the month" )
//  }else{
//     alert("Last Days of the month")
//  }
//                                    QUESTION NO 6
//  var date = new Date();
// var milliseconds= date.getTime();
// var mintues =date.getTime()
//  var min = (milliseconds / (1000 * 60));
// document.write("Current date:"+" "+new Date()+ "<br>" +"Elapsed milliseconds since January 1, 1970:"+" " +  milliseconds + "<br>"+ "Elapsed minutes since January 1, 1970:"+" " + min);
//                                    QUESTION NO 7
// var date= new Date();
// var currentHour = date.getHours();
// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }
//                                    QUESTION NO 8

// var laterDate = new Date(2020, 11, 31); 

// console.log("Later date:"+" "+laterDate);
//                                    QUESTION NO 9
// var firstRamdan = (2015 , 5,18);
// var currentDate = new Date();
// var diff = currentDate - firstRamdan
// var daysPassed = Math.floor(diff/ (1000 * 60 * 60 * 24 ))
// console.log(daysPassed + " "+ "have passed since 1 Ramdan 2015");

//                                    QUESTION NO 10
// var date = new Date(2015, 11, 5);
// var startDate = new Date(2015,0,1);
// var diff = date - startDate
// var result = (diff/1000);
// document.write("Our reference date"+" "+date+ " "+ result +" " +"had passed since beginning of 2015" )
//                                    QUESTION NO 11

// var currentDate = new Date();

// var currentHours = currentDate.getHours();
// document.write("Current Hours: " +currentDate+ currentHours);

// currentDate.setHours(currentHours - 1);

// document.write("1 hour ago: " + currentDate);
//                                    QUESTION NO 12

// var date = new Date();
// var currentDate = new Date();

// currentDate.setFullYear(currentDate.getFullYear() - 100);

// alert("current data:"+" "+ date +" " + "100 years back, it was" + currentDate);
//                                    QUESTION NO 13
// var userInput =prompt("Enter your age");
// var date =new Date();
// var currentYear =date.getFullYear();
// var result = currentYear - userInput
// document.write(  "Your age is"+" "+userInput+"Your birth year is" + " "+result)
//                                    QUESTION NO 14
// var userInput1 = ("Safa");
// var date = new Date();
// var monthArr = ["January" , "Februray" , "March" , "April" , "May" , "June" ,"July" , "August" , "September","October","November","December"]
//  var num = 410;
//  var charges = 16;
//  var ammout = num * 16;
//  var late = 350
//  var afterDue = ammout + late
// document.write("Customer Name:"+userInput1+ "<br>" +"Month:"+" "+ monthArr[date.getMonth()]+ "<br>"+ "Number of Units:"+ " "+ num
// + "<br>" + "Charges per unit:" + " "+ charges +"<br>"+ "<br>"+ "Net Ammount payable with in due date(within due date):"+" "+ ammout
// +"<br>" + "Late payment cahrges:" + " "+late + "<br>" + "Gross payment payable(After due date):" + " "+afterDue) ;


//                                               THE END