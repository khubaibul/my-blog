import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { sanityClient, urlFor } from '../../sanity';
import { Post } from '../../typing';
import { GetStaticProps } from 'next';
import PortableText from 'react-portable-text';

interface Props{
    post: Post
}

const Post = ({post}: Props) => {
    // console.log(post);
    return (
        <div>
            <Header/>
            <img 
                src={urlFor(post.mainImage).url()!} 
                className='w-full h-[500px]'
                alt="main-blog-image" 
            />
            {/* Article */}
            <div className='max-w-3xl mx-auto mb-14'>
                <article className='w-full mx-auto p-5 pb-10 bg-secondaryColor/10'>
                    <h1 className='font-titleFont font-bold text-[36px] text-secondaryColor border-b-[1px] border-b-cyan-800 mt-10 mb-3'>
                        {post.title}
                    </h1>
                    <h2 className='font-bodyFont text-[18px] text-gray-500 mb-2'>{post.description}</h2>
                    <div className='flex items-center gap-x-2'>
                        <img 
                            src={urlFor(post.author.image).url()!} 
                            className="w-12 h-12 rounded-full object-cover"
                            alt="author-image" 
                        />
                        <p className='font-bodyFont text-base'>
                            Blog post by <span className='font-semibold text-secondaryColor'>{post.author.name}</span>
                            - Published at {new Date(post.publishedAt).toLocaleDateString()}
                        </p>
                    </div>
                    <div className='mt-10'>
                        <PortableText
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || "production"}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "d30n4l6w"}
                            content={post.body}
                            serializers={{
                                h1: (props: any)=>(
                                    <h2
                                        className='text-3xl font-bold font-titleFont text-secondaryColor mt-5 mb-2'
                                        {...props}
                                    />
                                ),
                                h2: (props: any)=>(
                                    <h2
                                        className='text-2xl font-bold font-titleFont text-secondaryColor mt-5 mb-2'
                                        {...props}
                                    />
                                ),
                                h3: (props: any)=>(
                                    <h2
                                        className='text-2xl font-bold font-titleFont text-secondaryColor mt-5 mb-2'
                                        {...props}
                                    />
                                ),
                                li: ({children}: any) =>(
                                    <li className='ml-4 list-disc'>{children}</li>
                                ),
                                link: ({href,children}: any) =>(
                                    <a href={href} className='text-cyan-500 hover:underline'>{children}</a>
                                )
                            }}
                        />
                    </div>
                </article>
                <hr className='max-w-lg my-5 mx-auto border-[1px] border-secondaryColor'/>

                {/* Comment Form */}
                <div>
                    <p className='text-xs text-secondaryColor uppercase font-titleFont font-bold'>Enjoyed this article?</p>
                    <h3 className='font-titleFont text-2xl font-bold'>Please leave a comment below.</h3>
                    <hr className='py-3 mt-2'/>
                    {/* Form Will Start From Here */}
                    <form className='mt-7 flex flex-col gap-6'>
                        <label className='flex flex-col'>
                            <span className='font-titleFont font-semibold text-base'>Name</span>
                            <input
                             type="text"
                             className='text-base  placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor'
                             placeholder='Enter your name...'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='font-titleFont font-semibold text-base'>Email</span>
                            <input
                             type="email"
                             className='text-base  placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor'
                             placeholder='Enter your email...'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='font-titleFont font-semibold text-base'>Comment</span>
                            <textarea
                             className='text-base  placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor'
                             placeholder='Enter your comments...'
                             rows={6}
                            />
                        </label>
                        <button 
                            type='submit'
                            className='w-full bg-bgColor text-white text-base font-titleFont font-semibold tracking-wider uppercase py-2 rounded-sm hover:bg-secondaryColor duration-300'
                            >Submit
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Post;


export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{
        _id,
            slug{
                current
            }
    }`;

    const posts = await sanityClient.fetch(query);
    const paths = posts.map((post: Post)=>({
        params:{
            slug: post.slug.current
        },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({params})=>{
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
            publishedAt,
            title,
            author ->{
                name,
                image,
            },
            description,
            mainImage,
            slug,
            body
    }`

    const post = await sanityClient.fetch(query,{
        slug:params?.slug,
    });

    if(!post){
        return {
            notFound: true
        }
    };

    return {
        props: {
            post,
        },
        revalidate: 60,
    };
};