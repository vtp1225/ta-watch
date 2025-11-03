export default function StrapSelector() {
  const straps = ["Leather", "Metal", "Rubber"];

  return (
    <div className="strap-selector">
      <h4>Strap Material</h4>
      {straps.map((s, i) => (
        <button key={i} className="strap-btn">{s}</button>
      ))}
    </div>
  );
}
