import { useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button";

const App = () => {
  const nav = useNavigate();

  return (
    <div className="w-full min-h-screen bg-zinc-900 flex flex-col justify-center items-center space-y-10">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="text-white text-7xl font-bold">Hello World!</h1>
        <p className="text-white font-thin text-lg">This is the homepage</p>
      </div>
      <div className="flex flex-row items-center justify-center space-x-3">
        <Button
          className="bg-slate-300 text-zinc-900 hover:text-white hover:bg-transparent"
          onClick={() => nav("/posts")}
        >
          Go to Posts
        </Button>
        <Button
          className="bg-slate-300 text-zinc-900 hover:text-white hover:bg-transparent"
          onClick={() => nav("/about")}
        >
          Go to About
        </Button>
        <Button
          className="bg-slate-300 text-zinc-900 hover:text-white hover:bg-transparent"
          onClick={() => nav("/somewhere")}
        >
          Go to somewhere
        </Button>
      </div>
    </div>
  );
};

export default App;
