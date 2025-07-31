import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchIndustries } from "../Redux/features/industries/industriesSlice";

const IndustriesDynamicPage = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { industries, loading, error } = useSelector((state) => state.industries);

  useEffect(() => {
    if (!industries.length) {
      dispatch(fetchIndustries());
    }
  }, [dispatch, industries.length]);

  // Find the industry object by slug
  const matchedIndustry = industries.find(
    (industry) => industry.slug === slug
  );

  useEffect(() => {
    if (matchedIndustry) {
      console.log("Matched Industry:", matchedIndustry);
    }
  }, [matchedIndustry]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!matchedIndustry) return <div>Industry not found.</div>;

  // Render industry content (customize as needed)
  return (
    <div>
      <h1>{matchedIndustry.name}</h1>
      <p>{matchedIndustry.description}</p>
      {/* Add more rendering logic for hero, stats, etc. as needed */}
    </div>
  );
};

export default IndustriesDynamicPage;
