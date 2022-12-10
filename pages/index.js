import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Next.JS with Azure Cosmos DB</title>
        <meta name="title" content="Next.JS with Azure Cosmos DB" />
        <meta
          name="description"
          content="Next JS Application with Azure Cosmos DB Connection"
        />

        <meta property="og:title" content="Next.JS with Azure Cosmos DB" />
        <meta
          property="og:description"
          content="Next JS Application with Azure Cosmos DB Connection"
        />
      </Head>
      <div className="w-full text-center bg-blue-800 flex flex-wrap items-center">
        <div className="text-3xl w-1/2 text-white mx-2 md:mx-auto py-10">
          NextJS - Static Web App Sample
        </div>
        <div className="w-1/2"></div>
      </div>
      <div className="bg-gray-200 py-10">
        <div
          className="flex bg-white shadow-lg rounded-lg mx-2 md:mx-auto mb-10 max-w-2xl"
        >
          <div className="flex items-start px-4 py-6">
            <div className="">
              <div className="inline items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                </h2>
                <small className="text-sm text-gray-700 object-right">
                  Category
                </small>
                <small className="ml-3 text-gray-700 text-sm">
                  Status
                </small>
              </div>
              <p className="mt-3 text-gray-700 text-sm">
                Description
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
