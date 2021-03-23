import "./App.css";
import abi from "./abi";
import Web3 from "web3";
import Contract from "web3-eth-contract";
import React from "react";
import Modal from "react-modal";
import { Formik, Field, Form } from "formik";
import PacmanLoader from "react-spinners/ClipLoader";
import maths from './maths';

function App() {
  let web3 = new Web3(Web3.givenProvider);
  var contract = new web3.eth.Contract(
    abi,
    "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"
  );
  console.log(contract);

  const [card, useCard] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [isOpen, onOpen] = React.useState(false);
  let [color, setColor] = React.useState("#0");

  React.useEffect(() => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
    }

    contract.methods
      .getNftToken(3)
      .call({
        from: "0xA19b4E7945ED4b809129cAa0299Ba0c132005a06",
      })
      .then(async (el) => {
        console.log("a", el);
      });

    setTimeout(() => {
      setLoading(false);
    }, 1000 + Math.random() * 9000);
  }, []);

  const closeModal = () => {
    onOpen(false);
  };

  return (
    <div className="App">
      <div className="header">
        <div
          className="button-create"
          onClick={() => {
            onOpen(true);
          }}
        >
          Add NFT Token
        </div>
        <div className="button-create">Create bid</div>
      </div>
      <div className="grid">
        {loading ? (
          <PacmanLoader color={color} loading={loading} size={150} />
        ) : (
          maths.map((it) => (
            <Card
              img={it.img}
              id={it.id}
              owner={it.owner}
            />
          ))
        )}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <button onClick={closeModal}>close</button>

        <div>I am a modal</div>
        <Formik
          initialValues={{
            id: "",
            picture_url: "",
            owner: "0xA19b4E7945ED4b809129cAa0299Ba0c132005a06",
          }}
          onSubmit={async (values) => {
            contract.methods
              .addNftToken(values)
              .send({
                from: "0xA19b4E7945ED4b809129cAa0299Ba0c132005a06",
              })
              .then((val) => {
                console.log(val);
                closeModal();
              });
            // await new Promise((r) => setTimeout(r, 500));
            // alert(JSON.stringify(values, null, 2));
            console.log(values);
          }}
        >
          <Form>
            <label htmlFor="id">Id</label>
            <Field id="id" name="id" />

            <label htmlFor="picture_url">Picture URL</label>
            <Field id="picture_url" name="picture_url" />

            <label htmlFor="owner">Owner</label>
            <Field id="owner" name="owner" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}

function Card(props) {
  const { owner, id, img} = props;
  return (
    <a href={img} className="card">
      <img className="card-img" src={img} />
      <div
        className="card-desc"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <p>{id}</p>
        <p>{owner}</p>
      </div>
      {/* <div className="card-buttom">
        <p className="card-text">current bid: {current}</p>
        <p className="card-text">ending in: {time}</p>
      </div> */}
    </a>
  );
}

export default App;
