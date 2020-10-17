import { h } from "preact";
import { v4 as uuid } from "uuid";

async function fetchData(path, method = "GET", data = null) {
  const response = await fetch(path, {
    method: method,
    body: !!data ? JSON.stringify(data) : null,
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => {
    return response.json();
  });

  return response;
}

export default () => ({
  getCount: async () => {
    let data = await fetchData(
      encodeURI(
        `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}?fields[]=id`
      )
    );
    return data.records.length;
  },
  create: (data) => {
    const id = uuid();

    return fetchData(
      encodeURI(
        `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`
      ),
      "POST",
      {
        fields: { id, ...data },
      }
    );
  },
});
