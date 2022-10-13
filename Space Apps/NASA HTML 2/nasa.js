var json = document.querySelector(".json");

const firebaseConfig = {
  apiKey: "AIzaSyDqEWjyDQcNx-ziBTl6-cYSEkD2XZUJrkE",
  authDomain: "nasa-73bb9.firebaseapp.com",
  projectId: "nasa-73bb9",
  storageBucket: "nasa-73bb9.appspot.com",
  messagingSenderId: "679287326779",
  appId: "1:679287326779:web:aba7b6c25c8dde8810b41e",
  measurementId: "G-H2W7VJDVMX",
};
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

console.log(json);
var json_file = "";
var json_link = "";
json.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    json_link = reader.result;
  });
  reader.readAsDataURL(this.files[0]);
  json_file = this.files[0];
  firebase
      .storage()
      .ref("nasa.json")
    .put(json_file);
  

});
firebase.storage().ref("nasa.json").getDownloadURL().then((url) => {
  // const myjson = url;
  console.log(url);
  // parsed=JSON.parse(myjson);
// console.log(parsed);
});