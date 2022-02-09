var questions = [
    { 
      idQuestion: "How many team members can I invite ?" , 
      response: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan." 
    },
    { 
      idQuestion: "What is the maximum file upload size ?", 
      response: "No more than 2GB. All files in your account must fit your allotted storage space." 
    },
    { 
      idQuestion: "How do I reset my password ?", 
      response: "Click “Forgot password” from the login page or “Change password” from your profile page A reset link will be emailed to you." 
    },
    {
      idQuestion: "Can I cancel my subscription?", 
      response: "Yes! Send us a message and we’ll process your request no questions asked."
    }, 
    {
      idQuestion: "Do you provide additional support?", 
      response: "Chat and email support is available 24/7. Phone lines are open during normal business hours." 
    }
];

// let responses = [
//     {
//       id: 1,
//       response:"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
//     },
//     {
//       id: 2,
//       response:"No more than 2GB. All files in your account must fit your allotted storage space.",
//     },
//     {
//       id: 3,
//       response:"Click “Forgot password” from the login page or “Change password” from your profile page A reset link will be emailed to you.",
//     },
//     {
//       id: 4,
//       response:"Yes! Send us a message and we’ll process your request no questions asked."
//     }, 
//     {
//       id: 5,
//       response:"Chat and email support is available 24/7. Phone lines are open during normal business hours."  
//     }
// ];

// let test = document.querySelector("#divQuestion");
// let test2 = document.getElementById("paragraphResponse").innerText
// console.log(test);
// document.getElementById("divQuestion").innerHTML = questions.idQuestion

questions.forEach(function(question){
 console.log(document.getElementById("divQuestion").innerText = question.idQuestion) 
})