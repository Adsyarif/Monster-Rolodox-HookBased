import { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList, SearchBox } from "./Components";

const App = () => {
  const [search, setSearch] = useState({
    monsters: [{ id: 2, name: "A", email: "ad" }],
    searchField: "",
  });

  const { monsters, searchField } = search;
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  const handleChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    setSearch((preVal) => {
      return {
        monsters: preVal.monsters,
        searchField: searchField,
      };
    });
  };
  console.log(search);

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        handleChange={handleChange}
        placeholder="Search Monsters"
        className="monster-text-box"
      />
      <CardList monsters={filteredMonsters} />;
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   handleChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { handleChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           handleChange={handleChange}
//           placeholder="Search Monsters"
//           className="monster-text-box"
//         />
//         <CardList monsters={filteredMonsters} />;
//       </div>
//     );
//   }
// }

export default App;
