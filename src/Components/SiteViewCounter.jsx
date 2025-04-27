import React, { useEffect, useState } from "react";

const SiteViewCounter = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch('https://api.countapi.xyz/hit/nikhiluday/portfolio');
        const data = await response.json();
        setViews(data.value);
      } catch (error) {
        console.error("Error fetching views:", error);
      }
    };

    fetchViews();
  }, []);

  return (
    <div >
      👀 Site Views: {views}
    </div>
  );
};

export default SiteViewCounter;
