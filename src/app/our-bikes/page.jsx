import React from "react";
import { client } from "@/lib/sanity";
import BikeCategories from "@/components/BikeCategories";

// getData
const getData = async () => {
  const query = `*[_type == "product"] {
            _id,
            name,
            description,
            image,
            price,
            price_id,
            "slug": slug.current,
            "categories": categories[]-> {
              name
            }
        }`;
  const data = await client.fetch(query);

  return data;
};

const OurBikesPage = async () => {
  const bikes = await getData();
  
  return <div>
    <BikeCategories bikes={bikes} />
  </div>;
};

export default OurBikesPage;
