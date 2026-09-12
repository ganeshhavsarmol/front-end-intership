const url = (import.meta.env.VITE_SUPABASE_URL || "").replace(/\/$/, "");
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "";

export const isSupabaseConfigured = Boolean(url && key);

async function request(path, options = {}) {
  if (!isSupabaseConfigured) throw new Error("Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY.");
  const response = await fetch(`${url}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  const text = await response.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  if (!response.ok) {
    throw new Error(data?.message || data?.hint || data?.details || `Supabase error (${response.status})`);
  }
  return data;
}

export async function getStudents() {
  return request("students?select=*&order=created_at.desc");
}

export async function addStudent(student) {
  return request("students?select=*", {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify(student),
  });
}

export async function updateStudent(id, student) {
  return request(`students?id=eq.${encodeURIComponent(id)}&select=*`, {
    method: "PATCH",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify(student),
  });
}

export async function deleteStudent(id) {
  return request(`students?id=eq.${encodeURIComponent(id)}`, { method: "DELETE" });
}

export async function replaceWithDemo(students) {
  await request("students?id=not.is.null", { method: "DELETE" });
  return request("students?select=*", {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify(students),
  });
}
