export default function() {
  return fetch(
    "https://byqid7cw8h.execute-api.us-east-2.amazonaws.com/dev/players"
  ).then(
    (response) => response.json()
  ).then((data) => {
    return data.body;
  });
}
