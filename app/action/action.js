"use server";

export const submitComment = async (prevState, formData) => {
  const error = {};
  let success = null;
  const yourName = formData.get("yourName");
  const yourEmail = formData.get("yourEmail");
  const yourComment = formData.get("yourComment");
  const blogID = formData.get("blogId");

  const currentTime = new Date();

  if (!yourName) {
    error.yourName = "this field is required";
  }

  if (!yourEmail) {
    error.productPrice = "this field is required";
  }

  if (!yourComment) {
    error.yourComment = "this field is required";
  } else if (yourComment.length < 2) {
    error.yourComment = "Your comment has to be longer than 2 letters";
  }

  if (Object.keys(error).length > 0) {
    return { error, yourName, yourEmail, yourComment };
  }

  const response = await fetch("http://localhost:4000/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      blogpostId: Number(blogID),
      name: yourName,
      content: yourComment,
      date: currentTime,
    }),
  });

  console.log(response);

  success = response.ok;

  return { success, yourName, yourEmail, yourComment, currentTime };
};
