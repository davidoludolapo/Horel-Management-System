import React from "react";
import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

function PropertyList() {
  const { data, loading, error } = useFetch("/hotels/countByType");
  const images =[
      "https://images.pexels.com/photos/1738762/pexels-photo-1738762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1738762/pexels-photo-1738762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1738762/pexels-photo-1738762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1738762/pexels-photo-1738762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1738762/pexels-photo-1738762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   "https://images.pexels.com/photos/1738762/pexels-photo-1738762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]
  console.log(data);

  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
         { data && images.map((img, i )=>(
            <div className="pListItem" key={i}>
            <img
              className="pListImg"
              src={img}
              alt=""
            />
            <div className="pListTitles">
              <h1>{data[i]?.type}</h1>
              <h2>{data[i]?.count} {data[i]?.type} </h2>
            </div>
          </div>
         ))}
         
        </>
      )}
    </div>
  );
}

export default PropertyList;
