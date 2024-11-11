"use client"
import React, { useState } from "react"
import Container from "@/app/_components/container";
import "@/app/_components/styles.css"
import { Intro } from "@/app/_components/intro";
import { Selection } from "./selection";
import { About } from "./about";
import { Post } from "@/interfaces/post";
import { Blog } from "./blog";
import { getAllPosts } from "@/lib/api";
type Props = {
    posts: Post[];
  };

export default function PageSelector( {posts} : Props) {
  const [value, setValue] = useState('FEATURED');

  function updateState(newState : string) {
    setValue(newState);
  }
  const aboutPost = posts.filter(post =>  post.mediaType.toString().includes("about"))[0];

  const projectPosts = posts.filter((post : any)=> post.mediaType.toString().includes("art"));
  const featuredPosts = posts.filter((post : any)=> post.mediaType.toString().includes("featured"));
  const researchPosts = posts.filter((post : any)=> post.mediaType.toString().includes("research"));
  const blogPosts = posts.filter((post : any)=> post.mediaType.toString().includes("blog"));
  return (
    <Container>
    <Intro />
    <div className="selector">
      <button onClick={() => updateState('PROJECTS')} className={"hover:underline mr-2"}>Projects</button>|
      <button onClick={() => updateState('RESEARCH')} className={"hover:underline mr-2 ml-2"}> Research</button>|
      <button onClick={() => updateState('ABOUT')} className={"hover:underline mr-2 ml-2"}> About</button>|
      <button onClick={() => updateState('MUSINGS')} className={"hover:underline mr-2 ml-2"}> Musings</button>|
      <button onClick={() => updateState('FEATURED')} className={"hover:underline ml-2"}> ★</button>
    </div>
    {(value == 'FEATURED') && <Selection posts={featuredPosts} name="Featured Projects"/>}
    {(value == 'PROJECTS') && <Selection posts={projectPosts} name="Artwork"/>}
    {(value == 'RESEARCH') && <Selection posts={researchPosts} name="Research"/>}
    {(value == 'ABOUT') && <About post={aboutPost}/>}
    {(value == 'MUSINGS') && <Blog posts={blogPosts}/>}
    </Container>
  );
}