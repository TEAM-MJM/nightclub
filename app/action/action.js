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

export const submitForm = async (prevState, formData) => {
  const error = {};
  let success = null;
  const yourName = formData.get("yourName");
  const yourEmail = formData.get("yourEmail");
  const yourComment = formData.get("yourComment");
  const blogID = formData.get("blogId");
  const tableId = formData.get("tableId");
  const yourDate = formData.get("yourDate");
  const numberGuests = formData.get("numberGuests");
  const yourTel = formData.get("yourTel");

  const currentTime = new Date();

  const isBooking = tableId !== null && (numberGuests !== null || yourDate !== null || yourTel !== null);

  const fetchType = isBooking ? "reservations" : "comments";

  if (fetchType === "comments") {
    if (!yourName) {
      error.yourName = "this field is required";
    }

    if (!yourEmail) {
      error.yourEmail = "this field is required";
    }

    if (!yourComment) {
      error.yourComment = "this field is required";
    } else if (yourComment.length < 2) {
      error.yourComment = "Your comment has to be longer than 2 letters";
    } else if (yourComment.length > 500) {
      error.yourComment = "Your comment can't be longer than 500 letters";
    }

    if (Object.keys(error).length > 0) {
      return { error, yourName, yourEmail, yourComment };
    }
  } else if (fetchType === "reservations") {
    const compareDate = await fetch(`http://localhost:4000/reservations?date=${yourDate}&table=${tableId}`);
    const dateSame = await compareDate.json();

    if (dateSame.length > 0) {
      error.yourDate = "This table is already booked for the selected date.";
    }

    if (!yourName) {
      error.yourName = "this field is required";
    }

    if (!yourEmail) {
      error.yourEmail = "this field is required";
    }

    if (!tableId) {
      error.tableId = "You have to select a table";
    }
    if (!numberGuests || numberGuests <= 0) {
      error.numberGuests = "Please enter a valid number of guests";
    }
    if (!yourDate) {
      error.yourDate = "Please select a date";
    } else if (new Date(yourDate) < currentTime) {
      error.yourDate = "Please select a future date";
    }

    if (!yourTel) {
      error.yourTel = "this field is required";
    }
    if (Object.keys(error).length > 0) {
      return { error, yourName, yourEmail, tableId, yourDate, numberGuests, yourTel };
    }
  }

  const response = await fetch(
    `http://localhost:4000/${fetchType}`,
    fetchType === "comments"
      ? {
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
        }
      : {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: yourName,
            email: yourEmail,
            table: tableId,
            guests: numberGuests,
            date: yourDate,
            phone: yourTel,
            comment: yourComment,
          }),
        }
  );

  console.log(response);

  success = response.ok;

  return { success, yourName, yourEmail, yourComment, currentTime, tableId, yourDate, numberGuests, yourTel };
};
