const handleSubmit = (event) => {
  event.preventDefault(); // Prevent the form from submitting in the default way

  const form = document.getElementById("studentForm");
  const formData = new FormData(form);

  const courseScores = {
    dsaFinalScore: formData.get("courseScores.dsaFinalScore"),
    webDFinalScore: formData.get("courseScores.webDFinalScore"),
    reactFinalScore: formData.get("courseScores.reactFinalScore"),
  };

  const studentData = {
    name: formData.get("name"),
    email: formData.get("email"),
    college: formData.get("college"),
    batch: formData.get("batch"),
    placement_status: formData.get("placement_status"),
    courseScores: courseScores,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentData),
  };

  fetch("/students/create", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log(data.student);
      }
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.error(error);
    });
};
