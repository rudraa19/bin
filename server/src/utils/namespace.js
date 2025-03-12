import CloudflareKV from "remote-cloudflare-kv";

const NAMESPACE = new CloudflareKV({
  account_id: process.env.CF_ACCOUNT_ID,
  namespace_id: process.env.CF_NAMESPACE_ID,
  api_token: process.env.CF_API_TOKEN,
});

export default NAMESPACE;
