import AllSections from "./components/AllSections";
import GetDetails from "./components/GetDetails";
import Loader from "./components/Loader";
import useAIForCheckingBP from "./hooks/useAIForCheckingBP";

function App() {
  const { sections, getBPDataFromAI, loading } = useAIForCheckingBP();
  return (
    <section className=" flex flex-col gap-8 p-8 items-center bg-black min-h-screen">
      <header className=" flex flex-col items-center">
        <h1 className="text-3xl text-green-200">What your BP means</h1>
        <span className="text-green-50">
          Enter your details and AI will tell you what it means.
        </span>
      </header>
      <GetDetails onSuccess={getBPDataFromAI} />
      {loading && <Loader />}
      {sections.length > 0 && <AllSections sections={sections} />}
    </section>
  );
}

export default App;
