"use client";

const Error = ({ error, reset }) => {
  return (
    <main className="text-center">
      <h2 className="text-4xl">OH NOOO....</h2>
      <p>{error.message}</p>
      <button className="btn-primary mx-auto my-4" onClick={reset}>
        Try Again
      </button>
    </main>
  );
};

export default Error;
