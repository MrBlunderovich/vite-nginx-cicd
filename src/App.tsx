import { useState } from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/another" element={<AnotherPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div className="flex min-h-screen flex-col text-slate-300">
      <header className="flex min-h-10 items-center justify-center gap-4 bg-zinc-900">
        header
      </header>
      <main className="flex grow flex-col items-center justify-center gap-4 bg-zinc-800">
        <Outlet />
      </main>
      <footer className="flex min-h-10 items-center justify-center gap-4 bg-zinc-900">
        footer
      </footer>
    </div>
  );
}

function MainPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Main Page</h1>
      <button
        className="flex min-w-40 items-center justify-center gap-4 rounded bg-zinc-400 px-4 py-2 text-slate-800"
        onClick={() => setCount((count) => count + 1)}
      >
        {count}
      </button>
      <Link className="underline" to="/another">
        Go to another page
      </Link>
    </>
  );
}

function AnotherPage() {
  return (
    <>
      <h1>Another Page</h1>
      <Link className="underline" to="/">
        Go to home page
      </Link>
    </>
  );
}
