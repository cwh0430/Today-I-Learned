import Fact from "./Fact";

function FactList({ facts, setfacts }) {
  if (facts.length === 0) {
    return (
      <p className="loads">
        No facts for this category yet! Create the first one ✌️
      </p>
    );
  }
  return (
    <section>
      <ul className="facts">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} setfacts={setfacts} />
        ))}
      </ul>

      <p className="message">
        There are {facts.length} facts in the database. Add your own!
      </p>
    </section>
  );
}

export default FactList;
