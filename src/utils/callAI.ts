export default async function callAI(prompt: string) {
  try {
    const res = await fetch("https://bpmeaning-ewyftdk42a-uc.a.run.app", {
      method: "POST",
      body: JSON.stringify({ prompt }),
      headers: [["Content-Type", "application/json"]],
    });
    return await res.json();
  } catch (e) {
    console.error("Something went wrong", e);
  }
}
