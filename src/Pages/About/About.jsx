// import React from "react";
// import { useProductContext } from "../../Context/ProductContext";
// import HeroSection from "../../components/HeroSection";
// import { AppContext } from "../../Context/ProductContext";

// const About = () => {
//   const myName = useProductContext();

//   const data = {
//     name: "Priyanka - Ecommerce",
//   };
//   return (
//     <>
//       {myName}
//       <HeroSection myData={data} />;
//     </>
//   );
// };

// export default About;
import React from "react";
import { useProductContext } from "../../Context/ProductContext";
import HeroSection from "../../components/HeroSection";

const About = () => {
  // ✅ Destructure the values you need from context
  const { isLoading, isError, products, featureProducts } = useProductContext();

  const data = {
    name: "Priyanka - Ecommerce",
  };

  return (
    <>
      {/* ✅ Optionally display loading or error messages */}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong!</p>}

      {/* ✅ This is fine since you're passing only needed data */}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
