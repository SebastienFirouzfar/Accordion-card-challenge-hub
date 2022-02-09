let questions = [
    { 
      id: 1, 
      question: "How many team members can I invite ?" 
    },
    { 
      id: 2, 
      question: "What is the maximum file upload size ?" 
    },
    { 
      id: 3, 
      question: "How do I reset my password ?" 
    },
];

let responses = [
  {
    id: 1,
    response:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    id: 2,
    response:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: 3,
    response:
      "Click “Forgot password” from the login page or “Change password” from your profile page A reset link will be emailed to you.",
  },
];

question = questions.map((postQuestion) => {
  response = responses.map((postResponse) => {
    return postQuestion.id === postResponse.id
      ? console.log(postQuestion.question + " " + postResponse.response)
      : "null";
  });
});
