const API_URL = "http://localhost:8000";

export const fetchEmployees = async () => {
  try {
    const employeeResponse = await fetch(`${API_URL}/employee`);
    if (!employeeResponse.ok) {
      throw new Error("Network response was not ok for employee");
    }
    const employeesData = (await employeeResponse.json()).data; // Perubahan disini

    return employeesData;
  } catch (error) {
    console.error("Error fetching employee:", error);
    throw error;
  }
};
