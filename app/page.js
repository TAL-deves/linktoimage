"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("https://placehold.co/600x400");
  const [currentDateandtime, seturrentDateandtime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/todos/1") //TODO: Change the URL here
      .then((res) => {
        seturrentDateandtime(`${new Date()}`);
        // setImageUrl(res.data.image); //TODO: Depends on API response
      })
      .catch((err) => {
        alert("Got an error" + err.message);
      });
  };

  return (
    <main
      style={{
        marginTop: "5rem",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", margin: "0 5rem" }}>
        <div style={{ flex: "1 1 50%" }}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              style={{
                background: "#fff",
                color: "#000",
                padding: "10px",
                borderRadius: "7px",
                marginBottom: "1rem",
              }}
              type="text"
              name="link"
              placeholder="Amount"
            />
            <div>
              <button className="button-3" type="submit">
                Generate
              </button>
              <button
                className="button-4"
                style={{ margin: "1rem 1rem " }}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.reload();
                }}
              >
                Refresh
              </button>
            </div>
          </form>
        </div>
        <div
          style={{
            flex: "1 1 50%",
            border: "2px solid black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={imageUrl}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
            alt="Image"
          />
          <p style={{ color: "#000" }}>{currentDateandtime}</p>
        </div>
      </div>
    </main>
  );
}
