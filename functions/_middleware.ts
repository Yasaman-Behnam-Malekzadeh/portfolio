import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";
import { PagesFunction } from "@cloudflare/workers-types";

export const onRequest: PagesFunction = mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Some User - To", email: "yasaman.bmk@gmail.com" }],
    },
  ],
  from: {
    name: "ACME Support - From",
    // The domain of your `from` address must be the same as the domain you set up MailChannels Domain Lockdown for (detailed below)
    email: "support@mydomain.com",
  },
  respondWith: () => {
    return new Response(`yasi test`);
  },
});
