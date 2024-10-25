// import { Link } from "@/i18n/routing";
// import React from "react";

// const NotFound = () => {
//   return (
//     <div className="min-h-screen">
//       <h2 className="text-5xl">This Page does not Exist</h2>
//       <Link href={"/"}>Go Back Home Page</Link>
//     </div>
//   );
// };

// export default NotFound;

"use client";

import Error from "next/error";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
