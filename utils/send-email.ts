import { FormData } from "@/app/components/ContactForm";

export async function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";
  const response = await fetch(apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return response.json();
}

// export function sendEmail(data: FormData) {
//   const apiEndpoint = "/api/email";

//   fetch(apiEndpoint, {
//     method: "POST",
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       alert(response.message);
//     })
//     .catch((err) => {
//       alert(err);
//     });
// }
