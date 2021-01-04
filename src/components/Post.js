import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import sanityClient from "../client"
import groq from "groq"
import axios from "axios"

const Post = () => {
  const [postData, setPostData] = useState(null)

  const endPoint = `https://${sanityClient.projectId}.api.sanity.io/v1/data/query/${sanityClient.dataset}?query=*[_type == "post"]`
  const endPointURI = `https://fa76lq47.api.sanity.io/v1/data/query/production?query=*[_type == "post"]`

  useEffect(() => {
    // * = all the data
    sanityClient
      .fetch(
        groq`*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          imagesGallery[]{
            asset->{
              _id,
              url
            }
          }
        }`
      )
      .then(data => setPostData(data))
      .catch(console.error)
  }, [])

  useEffect(() => {
    const getData = async () => {
      const data = await axios(endPointURI)
      // console.log(data.data.result)
      // setPostData(data.data.result)
    }
    getData()
  }, [endPointURI])

  return (
    <main className="bg-green-100 min-h-screen p-12">
      {console.log("le post", postData)}
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">Blog Post Page</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Lik eens aan de ballen van een gnoe
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index, a) => (
              <article key={post.slug.current}>
                <Link to={`/post/${post.slug.current}`}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    {post.imagesGallery &&
                      post.imagesGallery.map((galImg, i, a) =>
                        console.log(galImg.asset.url)
                      )}
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  )
}

export default Post
