import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {sanityClient, urlFor} from "../../sanity";
import { Post } from '../../typing';
import Image from "next/image";
import Link from "next/link";


interface Props{
    posts: [Post]
  }
const Posts = ({posts}: Props) => {
    return (
        <div>
            <Header/>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-6 px-4">
          {
            posts.map(post=> 
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className="border border-1px border-secondaryColor border-opacity-40 h-[350px] group">
                  <div className="h-3/5 w-full overflow-hidden">
                    <Image 
                    width={380} 
                    height={350} 
                    src={urlFor(post.mainImage).url()!}
                    className="w-full h-full object-cover brightness-95 group-hover:brightness-110 duration-300 group-hover:scale-110"
                    alt="blog-image"
                    />
                  </div>
                  <div className="h-2/5 w-full flex-col justify-center">
                    <div className="flex justify-between items-center px-4 py-1 border-b-[1px] border-b-gray-500">
                      <p className="font-semibold text-lg">{post.title}</p>
                      <img 
                        src={urlFor(post.author.image).url()!} 
                        className="w-8 rounded-full object-cover"
                        alt="author-image" 
                      />
                    </div>
                    <p className="py-2 px-4 text-base">
                      {post.description.substring(0,60)}... by - <span className="font-semibold">{post.author.name}</span>
                    </p>
                  </div>
                </div>
              </Link>
              )
          }
        </div>
            <Footer/>
        </div>
    );
};

export default Posts;

export const getServerSideProps = async () =>{
    const query = `*[_type == "post"]{
      _id,
        title,
        author -> {
          name,
          image
        },
        description,
        mainImage,
        slug
    }`
  
    const posts = await sanityClient.fetch(query);
    return {
      props: {
        posts,
      },
    }
  }