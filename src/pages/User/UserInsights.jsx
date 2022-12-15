import React, { lazy, Suspense, useEffect } from "react";
import { GET_STATS } from "../../api/api-data";
import Loading from "../../components/Feed/Loading";
import Error from "../../components/Geral/Errortext";
import Head from "../../components/Geral/Head";
import useFetch from "../../hooks/useFetch";
const UserGraphs = lazy(() => import("../../components/User/UserGraphs"));

const UserInsights = () => {
  const { data, errorMsg, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      const { response } = await request(url, options);
    }
    getData();
  }, []);

  if (loading) return <Loading />;
  if (errorMsg) return <Error error={errorMsg} />;
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Insights" />
        <UserGraphs data={data} />
      </Suspense>
    );
  else return null;
};

export default UserInsights;
