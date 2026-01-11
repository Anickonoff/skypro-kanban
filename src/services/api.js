import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function getTasks({ token }) {
  try {
    const data = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "text/html",
      },
    });
    return data.data.tasks;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function getTask({ token, id }) {
  try {
    const data = await axios.get(API_URL+"/"+id, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "text/html",
      },
    });
    return data.data.task;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function updateTask({ token, task }) {
  try {
    const data = await axios.put(`${API_URL}/${task._id}`, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "text/html",
      },
    });
    return data.data.tasks;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function createTask({ token, task }) {
  try {
    const data = await axios.post(API_URL, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "text/html",
      },
    });
    return data.data.tasks;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function deleteTask({ token, taskId }) {
  try {
    const data = await axios.delete(`${API_URL}/${taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "text/html",
      },
    });
    return data.data.tasks;
  } catch (e) {
    throw new Error(e.message);
  }
}
