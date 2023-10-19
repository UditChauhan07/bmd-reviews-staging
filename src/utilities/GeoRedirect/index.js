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

    if (redirect.status) {
      fetch("https://ipapi.co/country/")
        .then((response) => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error("HTTP Error " + response.status);
          }
        })
        .then((country) => {
          console.warn({ country });
          if (redirect.Version == "DE") {
            if (country != "US" && country != "IN") {
              if (country != "DE") {
                if (country == "IT") {
                  window.location = euSite;
                } else {
                  window.location = defaultSite;
                }
              }
            }
          }
          setLoad(true);
        })
        .catch(function (error) {
          console.log(error);
        });
      // }
    }
  }
  return <></>;
};

export default GeoRedirect;
