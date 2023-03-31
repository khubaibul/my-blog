import Head from "next/head";
import "slick-carousel/slick/slick.css";
import Banner from "../components/Banner";
import BannerBottom from "../components/BannerBottom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {sanityClient, urlFor} from "../sanity";
import { Post } from "../typing";
import Image from "next/image";
import Link from "next/link";

interface Props{
  posts: [Post]
}

export default function Home({posts}: Props) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>My Blog | Explore the new horizon</title>
        <link rel="icon" href="/smallLogo.ico" />
      </Head>

      <main className="font-bodyFont">
        {/* ============ Header Start here ============ */}
        <Header />
        {/* ============ Header End here ============== */}
        {/* ============ Banner Start here ============ */}
        <Banner />
        {/* ============ Banner End here ============== */}
        <div className="max-w-7xl mx-auto h-60 relative">
          <BannerBottom />
        </div>
        {/* ============ Banner-Bottom End here ======= */}
        {/* ============ Post Part Start here ========= */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-6">
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
        {/* ============ Post Part End here =========== */}

        {/* ============ Footer Start here============= */}
        <Footer />
        {/* ============ Footer End here ============== */}

      </main>
    </div>
  );
}

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
