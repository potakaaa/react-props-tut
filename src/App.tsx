import { useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/mode-toggle";

const App = () => {
  const nav = useNavigate();

  return (
    <div className="w-full min-h-screen bg-background flex flex-col justify-center items-center space-y-10">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="text-7xl font-bold">Hello World!</h1>
        <p className="font-thin text-lg">This is the homepage</p>
      </div>
      <div className="flex flex-row items-center justify-center space-x-3">
        <Button className="" onClick={() => nav("/posts")}>
          Go to Posts
        </Button>
        <Button onClick={() => nav("/about")}>Go to About</Button>
        <Button onClick={() => nav("/somewhere")}>Go to somewhere</Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default App;
