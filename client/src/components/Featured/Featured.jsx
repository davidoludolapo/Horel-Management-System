import React from "react";
import useFetch from "../../hooks/useFetch";
import Skeleton from "../Skeleton/Skeleton";
import "./featured.css";

function Featured() {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Abuja,Lagos,Uyo"
  );

  return (
    <div className="featured">
      {loading ? (
        <Skeleton type="featured" />
      ) : (
        <>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <div className="featuredTitles">
              <h1>Abuja</h1>
              <h2>({data[0]}) Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <div className="featuredTitles">
              <h1>Lagos</h1>
              <h2>({data[1]}) Properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <div className="featuredTitles">
              <h1>Uyo</h1>
              <h2>({data[2]}) Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Featured;
