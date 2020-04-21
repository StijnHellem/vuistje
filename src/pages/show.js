import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Vuist from "../components/vuist";
import Content from "../components/content";

import { StringParam, useQueryParam} from "use-query-params";

const ShowPage = () => {
    const [vuistje, setVuistje] = useState(null); 

    const [id] = useQueryParam("id", StringParam);

    //const vuistje = {from: "from", to: "to", message: "message" }

    useEffect(() => {
        const getData = async () => {
          const r = await fetch(`/.netlify/functions/show?id=${id}`);
          const data = await r.json();
          setVuistje(data);
        }
        getData()
      }, [id])

    return (
<Layout>
    <SEO title="Create"/>
    {vuistje ? (
   <> 
   <Vuist/>
   <Content {...vuistje} /> 
   </>
    ): (
        <p>Vuistje aan het ballen ...</p>
    )}

</Layout>
)}
export default ShowPage;