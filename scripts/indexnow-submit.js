import https from "node:https";

const payload = {
  host: "nikhilchandra.tech",
  key: "450b63ca1c5144e6829ebad8ec9aa165",
  keyLocation: "https://nikhilchandra.tech/450b63ca1c5144e6829ebad8ec9aa165.txt",
  urlList: [
    "https://nikhilchandra.tech/",
    "https://nikhilchandra.tech/resume.pdf",
  ],
};

const body = JSON.stringify(payload);

const request = https.request(
  "https://api.indexnow.org/indexnow",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // eslint-disable-next-line no-undef
      "Content-Length": Buffer.byteLength(body),
    },
  },
  (res) => {
    const status = res.statusCode ?? 0;
    let responseBody = "";

    res.on("data", (chunk) => {
      responseBody += chunk.toString();
    });

    res.on("end", () => {
      if (status < 200 || status >= 300) {
        console.error(`IndexNow error ${status}: ${responseBody || "<empty>"}`);
        // eslint-disable-next-line no-undef
        process.exitCode = 1;
        return;
      }

      console.log(`IndexNow submitted: ${status}`);
    });
  }
);

request.on("error", (error) => {
  console.error(`IndexNow request failed: ${error.message}`);
  // eslint-disable-next-line no-undef
  process.exitCode = 1;
});

request.write(body);
request.end();
