import "./App.css";

function App() {
  const items = [
    {
      img:
        "https://f8n-ipfs-production.imgix.net/QmVvtBxPyp6hxtnpToFemkggCvvT4UQ2KhsYRNWfu9wpGU/nft.png?fm=png&h=640&q=80",
      name: "Useful Bath Duck",
      user: "@melvin_sur_la_table",
      current: "0.25 ETH",
      time: "600",
      link: "https://foundation.app//intothenewworld/take-me-with-you-11388",
    },
    {
      img:
        "https://f8n-ipfs-production.imgix.net/QmVvtBxPyp6hxtnpToFemkggCvvT4UQ2KhsYRNWfu9wpGU/nft.png?fm=png&h=640&q=80",
      name: "Useful Bath Duck",
      user: "@melvin_sur_la_table",
      current: "0.25 ETH",
      time: "600",
      link: "https://foundation.app//intothenewworld/take-me-with-you-11388",
    },
    {
      img:
        "https://f8n-ipfs-production.imgix.net/QmVvtBxPyp6hxtnpToFemkggCvvT4UQ2KhsYRNWfu9wpGU/nft.png?fm=png&h=640&q=80",
      name: "Useful Bath Duck",
      user: "@melvin_sur_la_table",
      current: "0.25 ETH",
      time: "600",
      link: "https://foundation.app//intothenewworld/take-me-with-you-11388",
    },
    {
      img:
        "https://f8n-ipfs-production.imgix.net/QmVvtBxPyp6hxtnpToFemkggCvvT4UQ2KhsYRNWfu9wpGU/nft.png?fm=png&h=640&q=80",
      name: "Useful Bath Duck",
      user: "@melvin_sur_la_table",
      current: "0.25 ETH",
      time: "600",
      link: "https://foundation.app//intothenewworld/take-me-with-you-11388",
    },
    {
      img:
        "https://f8n-ipfs-production.imgix.net/QmVvtBxPyp6hxtnpToFemkggCvvT4UQ2KhsYRNWfu9wpGU/nft.png?fm=png&h=640&q=80",
      name: "Useful Bath Duck",
      user: "@melvin_sur_la_table",
      current: "0.25 ETH",
      time: "600",
      link: "https://foundation.app//intothenewworld/take-me-with-you-11388",
    },
  ];

  return (
    <div className="App">
      <div className="header">
        <div className="button-create">Connect Wallet</div>
        <div className="button-create">Create bid</div>
      </div>
      <div className="grid">
        {items.map((it) => (
          <Card
            img={it.img}
            name={it.name}
            user={it.user}
            current={it.current}
            time={it.time}
            link={it.link}
          />
        ))}
      </div>
    </div>
  );
}

function Card(props) {
  const { img, name, user, current, time, link } = props;
  return (
    <a href={link} className="card">
      <img className="card-img" src={img} />
      <div
        className="card-desc"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <p>{name}</p>
        <p>{user}</p>
      </div>
      <div className="card-buttom">
        <p className="card-text">current bid: {current}</p>
        <p className="card-text">ending in: {time}</p>
      </div>
    </a>
  );
}

export default App;
