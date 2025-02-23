import { http, HttpResponse } from "msw";

export const checkoutHandler = [
   http.get("https://example.com/checkout", () => {
      return HttpResponse.json([
         {
            id: 1,
            name: "test checkout",
         },
      ]);
   }),
];
