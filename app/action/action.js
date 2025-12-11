"use server";

export const submitContact = async (prevState, formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const comment = formData.get("comment");

  if (!name || !email || !comment) {
    return { error: "All fields are required", name, email, comment };
  }

  const response = await fetch("http://localhost:4000/contact_messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message: comment,
      date: new Date().toISOString(),
    }),
  });

  return response.ok ? { success: true } : { error: "Failed to send message.", name, email, comment };
};

export const submitSubscription = async (prevState, formData) => {
  const email = formData.get("email");
  if (!email) {
    return { error: "Email is required" };
  }
  const response = await fetch("http://localhost:4000/newsletters", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  });

  return response.ok ? { success: true } : { error: "Failed to subscribe." };
};

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
