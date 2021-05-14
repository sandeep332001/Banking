import { useEffect } from "react";
import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./containers/Home/Home.jsx";
import Contact from "./containers/contact/Contact.jsx";
import CustomerList from "./containers/customer/CustomerList";
import about from "./containers/about/about";
import SendMoney from "./containers/customer/SendMoney";
function App() {
  const users = [
    {
      id: "1",
      name: "Divansh",
      email: "divansh23@gmail.com",
      currentBalance: 2400,
    },
    {
      id: "2",
      name: "Sandeep Maurya",
      email: "sandeep123@gmail.com",
      currentBalance: 2400,
    },
    {
      id: "3",
      name: "Aman Prateek",
      email: "aman123@gmail.com",
      currentBalance: 2400,
    },
    {
      id: "4",
      name: "Dikshit",
      email: "dikshit123@gmail.com",
      currentBalance: 2400,
    },
    {
      id: "5",
      name: "Rana",
      email: "rana123@gmail.com",
      currentBalance: 2400,
    },
  ];

  // useEffect(() => {
  //   fetch(
  //     "http://api.weatherstack.com/current?access_key=3cd2cf507b1b6321b0f41af7cc49a762&query=23,82&units=f",
  //     {
  //       method: "GET",
  //       body: JSON.stringify(users),
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contactUs" component={Contact} />
        <Route path="/customerList" component={CustomerList} />
        <Route path="/customer/:id" component={SendMoney} />

        <Route path="/about" component={about} exact />
      </Switch>
    </div>
  );
}

export default App;
