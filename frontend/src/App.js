import { useEffect, useState } from "react";
import API_URL from "./api";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.text())
            .then((data) => setMessage(data));
    }, []);

    return <h1>{message}</h1>;
}

export default App;
