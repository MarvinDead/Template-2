import React, { useContext } from "react";
import { GlobalDataContext } from "../../../../context/context";

const Form = (props) => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <div>
      <form-contact
        to={rpdata?.dbPrincipal?.emails?.[0].email}
        services={rpdata?.dbServices?.slice(0,6).map((item, service) => {
          return item.name;
        })}
        server="https://paginasserver.herokuapp.com/email"
        img={rpdata?.dbPrincipal?.logo}
        emailcolor="1"
      ></form-contact>
    </div>
  );
};

export default Form;