import FunctionConfig from "./opentrace/types/FunctionConfig";
import Authenticator from "./opentrace/utils/Authenticator";
import PinGenerator from "./opentrace/utils/PinGenerator";

const config: FunctionConfig = {
  projectId: "koroonakontakt",
  regions: ["europe-west1"],
  utcOffset: -3,
  authenticator: new Authenticator(),
  encryption: {
    defaultAlgorithm: "aes-256-gcm",
    keyPath: "Koroonakaart",
    defaultVersion: 1,
  },
  tempID: {
    validityPeriod: 0.25, // in hours
    refreshInterval: 12,  // in hours
    batchSize: 100, // sufficient for 24h+
  },
  upload: {
    pinGenerator: new PinGenerator(),
    bucket: "koroonakontakt_upload", //
    recordsDir: "records",
    testsDir: "tests",
    tokenValidityPeriod: 2, // in hours
    bucketForArchive: "koroonakontakt_archive",
  },
};

export default config;
