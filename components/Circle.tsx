import CircleAnimation from "../animations/CircleAnimation";

interface CircleProps {
  onHelloPage: boolean;
  pageClickedOnce: boolean;
}

const Circle: React.FC<CircleProps> = ({ onHelloPage, pageClickedOnce }) => {
  return (
    <>
      <CircleAnimation
        onHelloPage={onHelloPage}
        pageClickedOnce={pageClickedOnce}
      >
        <div className={`circle ${onHelloPage ? "red" : "blue"}`}></div>
      </CircleAnimation>
      <style jsx>{`
        .circle {
          position: relative;
          display: block;
          height: 100%;
          width: 100%;
          margin: 0 auto;
          border-radius: 50%;
          transition: all 0.3s;
        }

        .blue {
          background-color: #3bc9d1;
        }

        .red {
          background-color: #d13b40;
        }
      `}</style>
    </>
  );
};

export default Circle;
