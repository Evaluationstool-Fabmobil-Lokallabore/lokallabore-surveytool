import { useRef, useState, useEffect } from "react";

function VerticalGrid({ children, style, className }) {
  const containerRef = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  console.log(hasOverflow);

  function checkOverflow() {
    const el = containerRef.current;
    setHasOverflow(el.scrollHeight > el.clientHeight);
  }

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <div className={className}>
      <div
        className="grid grid-cols-2 gap-y-5 overflow-y-scroll mx-auto max-w-2xl"
        ref={containerRef}
      >
        {children}
      </div>
    </div>
  );
}

export default VerticalGrid;
