import { useRef, useState, useEffect } from "react";

function VerticalGrid({ children = [], className }) {
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
        className="grid gap-5 md:gap-6 max-w-md flex-grow"
        ref={containerRef}
      >
        {children}
      </div>
    </div>
  );
}

export default VerticalGrid;
