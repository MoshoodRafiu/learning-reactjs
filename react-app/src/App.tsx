import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import './App.css';

function App() {
	const items = ["Lagos", "Ibadan", "Ogun", "Kaduna", "Benin"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  const [alertStatus, setAlertStatus] = useState(false);

	return (
		<div>
      <Button onClick={() => setAlertStatus(true)}>
        Click me
      </Button>
      {alertStatus && <Alert onHide={() => setAlertStatus(false)}>
        Hello World <b>Moshood</b>
      </Alert>}
			<ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
		</div>
	);
}

export default App;
