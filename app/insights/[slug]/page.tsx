import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page












// 'use client'

// import { client } from '@/sanity/lib/client'
// import { getDetailPost, getPosts, Post } from '@/sanity/queries/posts'
// import { PortableText } from '@portabletext/react'
// import imageUrlBuilder from '@sanity/image-url'
// import { format } from 'date-fns'
// import { ChevronLeft, Clock, User } from 'lucide-react'
// import { GetStaticPropsContext } from 'next'
// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useEffect } from 'react'
// import ShareButtons from './share-blog'

// import { PortableText, PortableTextReactComponents } from '@portabletext/react'


// const builder = imageUrlBuilder(client)

// function urlFor(source: any) {
//   return builder.image(source)
// }

// const componentsTest: Partial<PortableTextReactComponents> = {
//   block: {
//     normal: ({ children }: PortableTextComponentProps) => (
//       <p className="mb-3 text-sm sm:text-base leading-relaxed text-gray-300">
//         {children}
//       </p>
//     ),
//     h1: ({ children }: PortableTextComponentProps) => (
//       <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 mt-6 text-white">
//         {children}
//       </h1>
//     ),
//     h2: ({ children }: PortableTextComponentProps) => (
//       <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 mt-4 text-white">
//         {children}
//       </h2>
//     ),
//     h3: ({ children }: PortableTextComponentProps) => (
//       <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 mt-3 text-white">
//         {children}
//       </h3>
//     ),
//     blockquote: ({ children }: PortableTextComponentProps) => (
//       <blockquote className="border-l-4 border-blue-500 pl-3 py-2 mb-3 italic text-gray-400 text-sm">
//         {children}
//       </blockquote>
//     ),
//   },
//   marks: {
//     strong: ({ children }: PortableTextComponentProps) => (
//       <strong className="font-semibold text-white">{children}</strong>
//     ),
//     em: ({ children }: PortableTextComponentProps) => (
//       <em className="italic text-gray-400">{children}</em>
//     ),
//     code: ({ children }: PortableTextComponentProps) => (
//       <code className="bg-gray-700 rounded px-1 py-0.5 text-xs text-gray-300">
//         {children}
//       </code>
//     ),
//     link: ({
//       children,
//       value,
//     }: PortableTextComponentProps & { value?: { href: string } }) => (
//       <a href={value?.href || '#'} className="text-blue-400 hover:underline">
//         {children}
//       </a>
//     ),
//   },
// }


// const BlogDetailPage = async ({ params }: GetStaticPropsContext) => {
//   if (!params || !params.slug || typeof params.slug !== 'string') {
//     return <div>Error: Invalid slug</div>
//   }

//   const slug = params.slug
//   const data = await getDetailPost(slug)
//   let postsData: Post[] = await getPosts()
//   postsData = postsData.filter((post) => post.slug?.current !== slug)

//   const shareUrl = `https://nexus-labs.tech/insights/${slug}`
//   const shareTitle = data.title

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       // Client-side only code
//     }
//   }, [])

//   return (
//     <div className="min-h-screen font-sans text-gray-100">
//       <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh]">
//         <Image
//           src={data.imageUrl}
//           alt={data.slug.current || ''}
//           layout="fill"
//           objectFit="cover"
//           className="brightness-50"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90" />
//         <div className="absolute bottom-0 left-0 p-3 sm:p-4 md:p-6 text-white z-10 w-full">
//           <Link
//             href="/insights"
//             className="inline-flex items-center text-xs sm:text-sm font-medium mb-2 hover:text-blue-400 transition-colors duration-200"
//           >
//             <ChevronLeft className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
//             Back to Insights
//           </Link>
//           <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
//             {data.title}
//           </h1>
//           <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-300 space-x-3">
//             <span className="flex items-center">
//               <User className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
//               {data.author}
//             </span>
//             <span className="flex items-center">
//               <Clock className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
//               {format(new Date(data.publishedAt), 'MMM dd, yyyy')}
//             </span>
//           </div>
//           <div className="flex flex-wrap mt-2">
//             {data.categories?.map((category: string, index: number) => (
//               <span
//                 key={index}
//                 className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs mr-2 mb-2 transition-colors duration-200 hover:bg-blue-500"
//               >
//                 {category}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 md:py-8">
//         <div className="lg:flex lg:gap-8">
//           <main className="w-full lg:w-2/3">
//             <article className="rounded-lg shadow-2xl p-3 sm:p-4 md:p-6 mb-6 sm:mb-8 transform hover:scale-[1.01] transition-transform duration-300">
//               <div className="prose prose-sm sm:prose-base lg:prose-lg prose-invert max-w-none">
//                 <PortableText value={data.body} components={componentsTest} />
//               </div>
//             </article>

//             <ShareButtons shareUrl={shareUrl} shareTitle={shareTitle} />
//           </main>

//           <aside className="mt-6 lg:mt-0 lg:w-1/3">
//             <div className="lg:sticky lg:top-8">
//               <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//                 More Insights
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
//                 {postsData.slice(0, 4).map((post, index) => (
//                   <Link
//                     key={index}
//                     href={`/insights/${post.slug?.current}`}
//                     className="group block"
//                   >
//                     <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300">
//                       <div className="relative h-28 sm:h-32">
//                         <Image
//                           src={post.imageUrl}
//                           alt={post.title || ''}
//                           layout="fill"
//                           objectFit="cover"
//                         />
//                       </div>
//                       <div className="p-2 sm:p-3">
//                         <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
//                           {post.title}
//                         </h3>
//                         <p className="text-xs text-gray-400 mt-1">
//                           {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
//                         </p>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BlogDetailPage
