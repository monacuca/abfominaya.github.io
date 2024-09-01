"use client"
import React, { useState } from "react"
import Container from "@/app/_components/container";
import "@/app/_components/styles.css"
import { Intro } from "@/app/_components/intro";
import { Projects } from "./projects";
import { Research } from "./research";
import { About } from "./about";
import { Post } from "@/interfaces/post";
import { Blog } from "./blog";
import { getAllPosts } from "@/lib/api";
type Props = {
    posts: Post[];
  };

export default function PageSelector( {posts} : Props) {
  const [value, setValue] = useState('PROJECTS');

  function updateState(newState : string) {
    setValue(newState);
  }
  const aboutPost = posts.filter(post =>  post.mediaType.toString().includes("about"))[0];

  const projectPosts = posts.filter((post : any)=> post.mediaType.toString().includes("art"));

  const researchPosts = posts.filter((post : any)=> post.mediaType.toString().includes("research"));
  const blogPosts = posts.filter((post : any)=> post.mediaType.toString().includes("blog"));
  return (
    <Container>
    <Intro />
    <div className="selector">
      <button onClick={() => updateState('PROJECTS')} className={"hover:underline mr-4"}>Projects </button>|
      <button onClick={() => updateState('RESEARCH')} className={"hover:underline mr-4  ml-4"}> Research </button>|
      <button onClick={() => updateState('ABOUT')} className={"hover:underline  mr-4 ml-4"}> About</button>|
      <button onClick={() => updateState('MUSINGS')} className={"hover:underline ml-4"}> Musings</button>
    </div>
    {(value == 'PROJECTS') && <Projects posts={projectPosts} />}
    {(value == 'RESEARCH') && <Research posts={researchPosts} />}
    {(value == 'ABOUT') && <About post={aboutPost}/>}
    {(value == 'MUSINGS') && <Blog posts={blogPosts}/>}
    </Container>
  );
}