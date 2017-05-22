export default function photoSearch(callback) {
  fetch("./src/api/store_items.json")
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    callback(data);
  }).catch(function(err) {
    console.log('Error ', err);
  });
}
