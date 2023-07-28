export const api = () => fetch('https://api.publicapis.org/entries').then(
    (response) => response.json(),
);
