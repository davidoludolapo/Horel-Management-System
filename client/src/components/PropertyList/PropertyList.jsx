import React from "react";
import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

function PropertyList() {
  const { data, loading, error } = useFetch("/hotels/countByType");
  const images =[
      "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?cs=srgb&dl=pexels-pixabay-161758.jpg&fm=jpg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2659629/pexels-photo-2659629.jpeg?cs=srgb&dl=pexels-roberto-nickson-2659629.jpg&fm=jpg",
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
