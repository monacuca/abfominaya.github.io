"use client"
import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { useState } from 'react'
import "./styles.css";

type Props = {
  name: string,
  posts: Post[];
};

export function Selection({ name, posts }: Props) {
  const [query, setQuery] = useState('');
  
    // set the value of our useState query anytime the user types on our input
    const handleChange = (e : any) => {
      setQuery(e.target.value)
    }

    //Our search filter function
    const searchFilter = (entries :any) => {
      return entries.filter(
        (entry : any) => entry.tags.toString().includes(query.toLowerCase())
      )
    }
  
  //Applying our search filter function to our array of countries recieved from the API
    const filtered = searchFilter(posts) as Post[]

  return (
    <section>
      <h2 className="heading">
        {name}
      </h2>
      <div className='search'>
      <input onChange={handleChange} type='text' placeholder='Filter by tags...'/>
      </div>
      <div className="tag-suggestions">
        <b>Related Tags: </b> 
        {filtered.map((post) => post.tags).reduce(
          (accumulator, tags) => 
            {for (const i in tags) {
              if(accumulator.indexOf(tags[i]) === -1) {
                accumulator.push(tags[i]);
              }
            }
            return accumulator;
            }, []).sort((a,b)=> a.localeCompare(b)).join(", ")}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-10 lg:gap-x-16 gap-y-10 md:gap-y-32 mb-20">
        {filtered.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            tags={post.tags}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
