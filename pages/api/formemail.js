import {
  SESv2Client,
  SendEmailCommand,
  SendEmailCommandInput,
  EmailContent,
} from "@aws-sdk/client-sesv2";

export default async function handler(request, response) {
  try {
    const client = new SESv2Client({});
    const content = {
      Destination: {
        ToAddresses: ["creston@barkerdev.ca"],
      },
      Content: {
        Simple: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: "this body contains <i>html</i> tags",
            },
            Text: {
              Charset: "UTF-8",
              Data: "this body is pure text",
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: `Test email without content`,
          },
        },
      },
      Source: "forms@kikapekiskwewin.ca" /* required */,
      ReplyToAddresses: ["creston@barkerdev.ca"],
    };

    const command = new SendEmailCommand(content);
    const result = await client.send(command);
    console.log("Success: ", result);
    response.status(200).send("Success");
  } catch (error) {
    console.log("Error: ", error);
    response.status(500).send(error);
  }
}
