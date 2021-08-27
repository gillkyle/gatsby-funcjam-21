import axios from "axios";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(404).json({ message: "This endpoint requires a POST" });
    }
    console.log("-----");
    console.log(req.body);
    console.log("-----");
    let error;
    const data = req.body;
    const date = data.date;
    const baseName = data.baseName;
    const status = data.status;
    const password = data.password;
    if (!password) {
      return res
        .status(404)
        .json({ message: "This endpoint requires a password" });
    }
    if (password !== process.env.PASSWORD) {
      return res
        .status(404)
        .json({ message: "You did not provide a valid passphrase" });
    }
    console.log(date);
    console.log(baseName);
    console.log(status);
    // if no baseName, error
    if (!baseName) {
      error = "No baseName specified";
    }

    const Airtable = require("airtable");
    const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
      process.env.AIRTABLE_BASE
    );

    console.log(`Found baseName: ${baseName}`);

    // create records in Airtable
    if (date && status) {
      console.log(
        `Attempting to create at Day ${date} and Status ${status}...`
      );
      const baseResult = await base(baseName).create([
        {
          fields: {
            Day: date,
            Status: status,
          },
        },
      ]);

      // hit Gatsby Cloud webhook to rebuild the site
      await axios({
        method: "post",
        url: "https://webhook.gatsbyjs.com/hooks/data_source/publish/a0896012-0c72-4770-8d1c-210185e74535",
      });
    } else {
      error = "Date or status not specified";
    }

    console.log("Completed processes and assembling return payload");

    if (error) {
      res.json({
        message: "Airtable function failed",
        error: error.message,
      });
    } else {
      res.json({ message: `Airtable function completed` });
    }
  } catch (err) {
    console.log(err);
    res.json({ message: "There has been a big error.", error: err });
  }
}
