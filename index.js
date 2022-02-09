let questions = [
    { id: 1, question: "How many team members can I invite ?" },
    { id: 2, question: " What is the maximum file upload size ?."},
    { id: 3, question: "How do I reset my password ?"},
    { id: 4, question: "Can I cancel my subscription?"}, 
    { id: 5, question: "Do you provide additional support?"}
];

let responses = [
    { id: 1, response:"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."},
    { id: 2, response:"No more than 2GB. All files in your account must fit your allotted storage space."},
    { id: 3, response:"Click “Forgot password” from the login page or “Change password” from your profile page A reset link will be emailed to you."},
    { id: 4, response:"Yes! Send us a message and we’ll process your request no questions asked."}, 
    { id: 5, response:"Chat and email support is available 24/7. Phone lines are open during normal business hours."}
];

let test = document.querySelector("#divQuestion");
 
questions.forEach(function(question){
  responses.forEach(function(response){
    test.innerHTML += question.question + " " + response.response
  })
})

