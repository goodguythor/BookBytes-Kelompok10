const API_URL = "http://localhost:8000";

export const addBook = async (newBook) => {
  try {
    const response = await fetch(`${API_URL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });

    if (!response.ok) {
      throw new Error("Failed to add book");
    }

    const addedBook = await response.json();
    return addedBook;
  } catch (error) {
    console.error("Error adding book:", error);
    throw error;
  }
};
