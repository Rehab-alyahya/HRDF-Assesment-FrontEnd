const signInUrl = "http://localhost:3000/auth/login";

async function signIn(email, password) {
  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Sign-in failed");
    }
  } catch (error) {
    throw error;
  }
}


export { signIn };

const signUpUrl = "http://localhost:3000/user";
export const signUp = async (firstName, lastName, email, password) => {
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

  try {
    const response = await fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const responseText = await response.text(); // Get the raw response as text
    console.log("Raw response:", responseText); // Log the raw response

    if (!response.ok) {
      // If the response isn't OK, throw an error with the raw response
      throw new Error(responseText || "Something went wrong");
    }

    // Check if the response is JSON or plain text
    let data;
    try {
      data = JSON.parse(responseText); // Try parsing as JSON
    } catch (error) {
      // If parsing fails, assume it's a plain text message
      data = { message: responseText }; // Wrap it in an object
    }

    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};
