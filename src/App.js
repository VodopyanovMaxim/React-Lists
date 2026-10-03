import "./App.css";
import UserList from "./components/UserList/UserList.jsx";

function App() {
  const users = [
    {
      id: 1,
      fullname: "Alex",
      handle: "@alexuk",
      email: "alex.business@gmail.com",
      age: 21,
      gender: "Male",
      location: { country: "UK", city: "Birmingham" },
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7Q2-iOUXeta4efD3d8FAPLTOfSN1lKRhOGJInoa6mA&s=10",
    },
    {
      id: 2,
      fullname: "Andrew",
      handle: "@andr4k",
      email: "andrew@gmail.com",
      age: 19,
      gender: "Male",
      location: { country: "Ukraine", city: "Kyiv" },
      imgSrc:
        "https://blog.imago-images.com/hs-fs/hubfs/imago0058449704h.jpg?width=760&height=505&name=imago0058449704h.jpg",
    },
    {
      id: 3,
      fullname: "Tetyana",
      handle: "@tetyana",
      email: "tetyana@gmail.com",
      age: 27,
      gender: "Female",
      location: { country: "Ukraine", city: "Zhytomyr" },
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ73s4EDBPiyHM8zYSlQbHoyS2be5ZldONhUgkwlqvXQ&s=10",
    },
    {
      id: 4,
      fullname: "Philip",
      handle: "@emptyhandle",
      email: "emptyaddress@gmail.com",
      age: 22,
      gender: " Male",
      location: { country: "France", city: "Paris" },
      imgSrc:
        "https://media.istockphoto.com/id/157373207/photo/balanced-stones-on-a-pebble-beach-during-sunset.jpg?s=612x612&w=0&k=20&c=V4Lua2fcDJmGiTb_JQu2EP6XmFLuAo7e3eI3cUXPNec=",
    },
  ];
  return <UserList users={users}></UserList>;
}

export default App;
