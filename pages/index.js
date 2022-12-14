import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Next.JS Sample Static Web App</title>
        <meta name="title" content="Next.JS Sample Static Web App" />
        <meta
          name="description"
          content="Next JS Application"
        />

        <meta property="og:title" content="Next.JS Sample Static Web App" />
        <meta
          property="og:description"
          content="Next JS Application"
        />
      </Head>
      <div className="w-full text-center bg-blue-800 flex flex-wrap items-center">
        <div className="text-3xl w-1/2 text-white mx-2 md:mx-auto py-10">
          NextJS - Static Web App Sample
        </div>
        <div className="w-1"></div>
      </div>
      <div className="bg-gray-200 py-20 min-h-screen">
        <div className="flex bg-white shadow-lg rounded-lg mx-2 md:mx-auto mb-10 max-w-2xl">
          <div className="flex items-start px-4 py-6">
              <small className="text-md text-gray-700 object-right">
                Sample Web Application for Static Web App
              </small>
          </div>
        </div>
      </div>
    </div>
  );
}
