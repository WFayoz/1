import Navbar from "../src/components/Header";

const Career = () => {

  return (
    <div className="h-screen  ">
      <div className="top-0 left-0 backdrop-blur-lg right-0 absolute -z-50 ">
        <Navbar />
      </div>
      <iframe
        title="UIC Group About Page"
        src="https://uic.group/vacancy"
        width="100%"
        height="100%"
        style={{ border: "none", height: "115vh", marginTop: "-15vh" }}
      ></iframe>
    </div>
  );
};

export default Career;
