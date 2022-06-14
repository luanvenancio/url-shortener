import axios from "axios";
import { useState } from "react";
import { GenerateLink } from "./GenerateLink";

const Input = () => {
    const [inputURL, setInputURL] = useState("");
    const [shortLink, setShortLink] = useState("");
    const [originLink, setOriginLink] = useState("");

    const url =  `${process.env.API_URL}/api`;

    async function handleNewURL() {
        try {
            axios
                .post(url, {
                    originURL: inputURL,
                })
                .then((res) => {
                    setOriginLink(res.data.originURL);
                    setShortLink(res.data.shortURL);
                })
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="flex items-center mb-6">
                <div className="relative w-full">
                    <input
                        type="text"
                        id="inputLink"
                        className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(event) => setInputURL(event.target.value)}
                        value={inputURL}
                        placeholder="Your Link"
                        required
                    />
                </div>
                <button
                    type="button"
                    className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleNewURL}
                >
                    Shorten
                </button>
            </div>
            <GenerateLink origin={originLink} short={shortLink} />
        </>
    );
};

export default Input;
