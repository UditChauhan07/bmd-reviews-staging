import React, { useEffect, useState } from "react";

const GeoRedirect = ({ redirect }) => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    getUserIpAddr();
  }, []);
  if (!redirect) return null;
  function getUserIpAddr() {
    var defaultSite = "https://brunomd.com/";
    var euSite = "https://brunomd.eu/";
    var deSite = "https://brunomd.de/";

    fetch("https://ipapi.co/country/")
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("HTTP Error " + response.status);
        }
      })
      .then((country) => {
        window.location = defaultSite;
        // if (country != "US" && country != "IN" && country != "IT" && country != "GB") {
        //   if (country == "DE") {
        //     window.location = deSite;
        //   } else {
        //     window.location = defaultSite;
        //   }
        // }
        setLoad(true);
      })
      .catch(function (error) {
        console.error({ error });
      });
    // }
  }
  return <></>;
};

export default GeoRedirect;
