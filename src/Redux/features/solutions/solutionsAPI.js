// src/features/solutions/solutionsAPI.js
const API_BASE_URL = "http://localhost:5005/api/services?page=1&limit=10";
export const fetchSolutions = async () => {
  const response = await fetch(`${API_BASE_URL}`);
  if (!response.ok) {
    throw new Error("Failed to fetch solutions");
  }
  const data = await response.json();
  return Array.isArray(data) ? data : []; // Ensure we always return an array
};
export const fetchSolutionById = async (solutionId) => {
  const response = await fetch(`${API_BASE_URL}/${solutionId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch solution ${solutionId}`);
  }
  return await response.json();
};

export const fetchHrSolution = async () => {
  const response = await fetch(`${API_BASE_URL}/hr-management`);
  if (!response.ok) {
    throw new Error("Failed to fetch HR solution data");
  }
  return await response.json();
};

export const fetchPayrollSolution = async () => {
  const response = await fetch(`${API_BASE_URL}/payroll-system`);
  if (!response.ok) {
    throw new Error("Failed to fetch payroll solution data");
  }
  return await response.json();
};
