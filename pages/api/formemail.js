import {
  SESv2Client,
  SendEmailCommand,
  SendEmailCommandInput,
  EmailContent,
} from "@aws-sdk/client-sesv2";

export default async function handler(request, response) {
  try {

    const client = new SESv2Client({ region: "us-east-2" });
    console.log("creds: ", (await client.config.credentials()).accessKeyId);
    const content = {
      Destination: {
        ToAddresses: ["creston@barkerdev.ca"],
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Charset: "UTF-8",
            Data: "HTML_FORMAT_BODY",
          },
          Text: {
            Charset: "UTF-8",
            Data: "TEXT_FORMAT_BODY",
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: `Test email, ${request.body}`,
        },
      },
      Source: "forms.noreply@kikapekiskwewin.ca" /* required */,
      ReplyToAddresses: ["creston@barkerdev.ca"],
    };

    const command = new SendEmailCommand(content);

    const res = await client.send(command);
    console.log("Success: ", res);
    response.status(200).send("Success");
  } catch (error) {
    console.log("Error: ", error);
    response.status(500).send(error);
  }
}
