import axios from "axios";

//  ******* Get IP adress *******
export const IpAddress = async ({
  setLoading,
  setIpData,
  //   setIpDataCity,
  //   setIpDataRegion,
}) => {
  try {
    let res = await axios.get(
      // 👇 check out (.env) folder to see where I got this information
      `http://api.ipstack.com/check?access_key=${process.env.REACT_APP_IP_ADDRESS_API_KEY}`
    );
    if (res) {
      setLoading(false);
      setIpData(res.data.country_name);
      //   setIpDataCity(res.data.city);
    }
  } catch (error) {
    alert("IP address Error: &{error}");
    setLoading(false);
  }
};
