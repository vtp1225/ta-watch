export default function ColorPicker() {
  const colors = ["#000", "#D2D3D5", "#C39B00"];

  return (
    <div className="color-picker">
      <h4>Color:</h4>
      <div className="color-options">
        {colors.map((c, i) => (
          <div
            key={i}
            className="color-dot"
            style={{ background: c }}
          ></div>
        ))}
      </div>
    </div>
  );
}
