"use client"
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css"
import axios from "axios";
import { useEffect, useState } from "react";
import Post from "@/components/Post";

export default function Home() {
  const [postUrl, setPostUrl] = useState("https://jsonplaceholder.typicode.com/posts")
  const [postArr, setPostArr] = useState([])
  useEffect(() => {
    axios.get(postUrl).then(response => setPostArr(response.data))
  }, [])
  useEffect(() => {
    console.log(postArr)
  }, postArr)
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Navbar</a>
        <form className="form-inline flex">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      {postArr.map((el, ind) => (
        <Post key={ind} id={ind} title={el.title} body={el.body} />

      ))}
    </div>
  );
}
