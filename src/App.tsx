import GetDetails from "./components/GetDetails";
import DataSection from "./components/DataSection";
import useAIForCheckingBP from "./hooks/useAIForCheckingBP";

function App() {
  const { sections, getBPDataFromAI } = useAIForCheckingBP();

  return (
    <section>
      <GetDetails onSuccess={getBPDataFromAI} />
      {sections.length > 0 &&
        sections.map((sec) => (
          <DataSection title={sec.title} content={sec.content} />
        ))}
    </section>
  );
}

export default App;
