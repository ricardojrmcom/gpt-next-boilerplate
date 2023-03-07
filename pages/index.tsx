import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GPT Next Boilerplate</title>
        <meta name="description" content="GPT Next Boilerplate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-blue-500">
          <p>Hello World</p>
        </div>
      </main>
    </>
  );
}
