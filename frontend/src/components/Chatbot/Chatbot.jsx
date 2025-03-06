import React from "react";
import { useEffect, useState } from "react";
import "./Chatbot.css";
import send from "../../img/send.svg";
import header from "../../img/header.png";
import Markdown from "react-markdown";

// import { Link } from 'react-router-dom'

const Chatbot = () => {
    const [query, setQuery] = useState("");
    // this is the chat interface data display, we can delete the below list such that we dont have any thing
    const [data, setdata] = useState([
        // {
		// 	content: NaN,
		// 	isChatbot: false
		// },
		{
			content: "Hey there! How can I assist you with gardening?",
			isChatbot: true
		}
    ]);
    function changeValue(e) {
        setQuery(e.target.value);
    }

    // function to send the data to the server below is the local host address
    async function sendData() {
        const todo = query;
        console.log(query);
        setQuery("");
    
        try {
            const response = await fetch("http://127.0.0.1:8000/add_todo", {  // Change port to 8000
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ question: todo }),
            });
    
            if (!response.ok) {
                throw new Error("Failed to fetch response");
            }
    
            const responseData = await response.json();
            console.log(responseData);
    
            const question = {
                content: todo,
                isChatbot: false,
            };
            const answer = {
                content: responseData.message,  // Ensure correct response usage
                isChatbot: true,
            };
    
            setdata((messages) => [...messages, question, answer]);
        } catch (error) {
            console.error("Error:", error);
        }
    }
    

    // useEffect(()=>{
    //   sendData()
    // },[data])

    // function fetchData(){
    //     fetch("http://127.0.0.1:5000/add_todo").then((res) =>{
    //         console.log(res)
    //         res.json().then((data) => {
    //           console.log(data)
    //             // Setting a data from api
    //             // setdata({
    //             //     name: data.Name,
    //             //     age: data.Age,
    //             //     date: data.Date,
    //             //     programming: data.programming,
    //             // });
    //         })
    //       }
    //     );
    // }

    // const a = [
    //   {
    //     "question": "What is this",
    //     "answer" : "This this the answer"
    //   },
    //   {
    //     "question": "what is the second question",
    //     "answer": "Ths is the second answer"
    //   },
    //   {
    //     "question": "what is the second question",
    //     "answer": "Ths is the second answer"
    //   },
    //   {
    //     "question": "what is the second question",
    //     "answer": "Ths is the second answer"
    //   },
    //   {
    //     "question": "what is the second question",
    //     "answer": "Ths is the second answer"
    //   }
    // ]
    // console.log(a.map(()=>{

    // }))
    // const [answer,S]
    return (
        // <div className="App">
        //     <img id="one" src={header} alt="" />
        //     <div className="sidebar">
        //         <div className="upperSide">
        //             <div className="upperSideTop">
        //                 <span className="brand">Chatbot</span>
        //                 <button className="addBtn">New Chat</button>
        //                 <div className="upperSideBottom">
        //                     <button className="query">
        //                         <img src={send} alt="" />
        //                         What is the right season to grow apple?
        //                     </button>
        //                     <button className="query">
        //                         <img src={send} alt="" />
        //                         In which place carrot grows healthy?
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
            <div className="main">
				<h2>Smart Gardener Chatbot</h2>
                <div className="chats">
                    {data.map((e, ind) => {
                        return (
							<div className="chat-row" key={ind}>
								<div className={e.isChatbot ? "chat bot" :"chat"}>
									<Markdown>{e.content}</Markdown>
								</div>
							</div>
                        );
                    })}
                </div>
                <div className="chatFooter">
                    <div className="inp">
                        <input
                            type="text"
                            placeholder="Send a message"
                            value={query}
                            onChange={changeValue}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    sendData();
                                }
                            }}
                        />

                        <button className="send">
                            <img src={send} onClick={sendData} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default Chatbot;
