import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  CircularProgress,
  Grid,
} from "@material-ui/core";
import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const data = api.app.getData.useQuery(undefined, {
    refetchInterval: 60 * 1000,
  });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="h-screen w-screen p-6">
          <h1 className="mb-8 text-4xl font-bold">Carpark Info</h1>
          {data.isLoading && (
            <div className="mt-10 flex w-full justify-center">
              <CircularProgress
                size={100}
                className="mx-auto"
              ></CircularProgress>
            </div>
          )}
          {!data.isLoading && data.data && (
            <Grid container spacing={4} className="">
              <Grid item xs={12} md={6}>
                <Card className="h-auto md:h-[62vh]">
                  <CardHeader title={"Small"} />
                  <CardContent className="h-[90%]">
                    <div className="h-auto">
                      <h2 className="text-xl font-semibold">
                        Highest{" "}
                        <span className="text-lg text-gray-600">
                          {" "}
                          ({data.data.small.highest.availableLot} lots
                          available)
                        </span>
                      </h2>
                      <div className="flex w-full gap-4">
                        {data.data.small.highest.carparkIds.map((val) => (
                          <Chip
                            variant="outlined"
                            label={val}
                            className="w-16"
                            key={val}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="h-auto w-full">
                      <h2 className="text-xl font-semibold">
                        Lowest{" "}
                        <span className="text-lg text-gray-600">
                          {" "}
                          ({data.data.small.lowest.availableLot} lots available)
                        </span>
                      </h2>
                      <div className="flex w-full flex-wrap gap-2 overflow-y-scroll">
                        {data.data.small.lowest.carparkIds.map((val) => (
                          <Chip
                            variant="outlined"
                            label={val}
                            key={val}
                            className="w-16"
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card className="h-auto md:h-[62vh] ">
                  <CardHeader title={"Medium"} />
                  <CardContent className="h-[90%]">
                    <div className="h-auto">
                      <h2 className="text-xl font-semibold">
                        Highest{" "}
                        <span className="text-lg text-gray-600">
                          {" "}
                          ({data.data.medium.highest.availableLot} lots
                          available)
                        </span>
                      </h2>
                      <div className="flex w-full gap-4">
                        {data.data.medium.highest.carparkIds.map((val) => (
                          <Chip
                            variant="outlined"
                            label={val}
                            key={val}
                            className="w-16"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="h-auto w-full">
                      <h2 className="text-xl font-semibold">
                        Lowest{" "}
                        <span className="text-lg text-gray-600">
                          {" "}
                          ({data.data.medium.lowest.availableLot} lots
                          available)
                        </span>
                      </h2>
                      <div className="grid grid h-auto grid-cols-8 gap-2 overflow-y-scroll">
                        {data.data.medium.lowest.carparkIds.map((val) => (
                          <Chip
                            variant="outlined"
                            label={val}
                            key={val}
                            className="col-span-1"
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card className="h-auto md:h-[62vh]">
                  <CardHeader title={"Big"} />
                  <CardContent className="h-[90%]">
                    <div className="h-auto">
                      <h2 className="text-xl font-semibold">
                        Highest{" "}
                        <span className="text-lg text-gray-600">
                          {" "}
                          ({data.data.big.highest.availableLot} lots available)
                        </span>
                      </h2>
                      <div className="flex w-full gap-4">
                        {data.data.big.highest.carparkIds.map((val) => (
                          <Chip
                            variant="outlined"
                            label={val}
                            key={val}
                            className="w-16"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="h-auto w-full">
                      <h2 className="text-xl font-semibold">
                        Lowest{" "}
                        <span className="text-lg text-gray-600">
                          {" "}
                          ({data.data.big.lowest.availableLot} lots available)
                        </span>
                      </h2>
                      <div className="grid grid h-auto grid-cols-8 gap-2 overflow-y-scroll">
                        {data.data.big.lowest.carparkIds.map((val) => (
                          <Chip
                            variant="outlined"
                            label={val}
                            key={val}
                            className="col-span-1"
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card className="h-auto md:h-[62vh]">
                  <CardHeader title={"Large"} />
                  <CardContent className="h-[90%]">
                    <div className="h-auto">
                      <h2 className="text-xl font-semibold">
                        Highest{" "}
                        <span className="text-lg text-gray-600">
                          {" "}
                          ({data.data.large.highest.availableLot} lots
                          available)
                        </span>
                      </h2>
                      <div className="flex w-full gap-4">
                        {data.data.large.highest.carparkIds.map((val) => (
                          <Chip
                            variant="outlined"
                            label={val}
                            key={val}
                            className="w-16"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="h-auto w-full">
                      <h2 className="text-xl font-semibold">
                        Lowest{" "}
                        <span className="text-lg text-gray-600">
                          {" "}
                          ({data.data.large.lowest.availableLot} lots available)
                        </span>
                      </h2>
                      <div className="grid grid h-auto grid-cols-8 gap-2 overflow-y-scroll">
                        {data.data.large.lowest.carparkIds.map((val) => (
                          <Chip
                            variant="outlined"
                            label={val}
                            key={val}
                            className="col-span-1"
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
