const config = {
  // Uses the PORT variable declared here, the path is defined in code
  port: 3000,
  redirectUri: "http://localhost:3000/auth/airtable-oauth",
  clientId: "4b13f510-958d-4e35-9091-0cf5d55b3f06",
  // If you're not using a client secret, set to the empty string: ""
  clientSecret:
    "3aca53822b8be3f4e736086dadd141494579edfbb6c5bfd606843f17d89be32d",
  airtableUrl: "https://www.airtable.com",
  // space delimited list of Airtable scopes, update to the list of scopes you want for your integration
  scope:
    "data.records:read data.records:write data.recordComments:read data.recordComments:write schema.bases:read schema.bases:write user.email:read webhook:manage",
};
module.exports = config;
