import {
  SESv2Client,
  SendEmailCommand,
  SendEmailCommandInput,
  EmailContent,
} from "@aws-sdk/client-sesv2";

import mimemessage from "mimemessage";
import { v1 as uuidv1, v4 as uuidv4 } from "uuid";

export default async function handler(request, response) {
  try {
    const input = request.body;
    const client = new SESv2Client({
      region: "us-east-2",
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID_KIKA,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_KIKA,
      },
    });
    const mime = mimemessage.factory({
      contentType: "multipart/mixed",
      body: [],
    });
    mime.header("Message-ID", `<kikapekiskwewin-${uuidv1()}-${uuidv4()}>`);
    mime.header(
      "Subject",
      `Kikapekiskwewin Abstract Submission - ${input.name}`
    );
    const altmsg = mimemessage.factory({
      contentType: "multipart/alternate",
      body: [],
    });
    const htmlmsg = mimemessage.factory({
      contentType: "text/html;charset=utf-8",
      body: `<h2>A submission has been made on the Kikapekiskwewin.ca site.</h2>
      <p><ul>
      <li><strong>Name:</strong> ${input.name}</li>
      <li><strong>Email:</strong> ${input.email}</li>
      <li><strong>Declared Identity:</strong>${input.identity}</li>
      </ul>
      The accompanying file is attached.
      </p>
      `,
    });
    const txtmsg = mimemessage.factory({
      body: `A submission has been made on the Kikapekiskwewin.ca site.
      \n Name: ${input.name}
      \n Email: ${input.email}
      \n Declared Identity: ${input.identity}
      \n The accompanying file is attached.
      `,
    });
    const filesplit = input.file.split(/([,:;])/);
    const attachment = mimemessage.factory({
      contentType: filesplit[2],
      contentTransferEncoding: filesplit[4],
      body: filesplit[6],
    });
    attachment.header(
      "Content-Disposition",
      `attachment ;filename="${input.filename}"`
    );

    altmsg.body.push(htmlmsg);
    altmsg.body.push(txtmsg);

    mime.body.push(altmsg);
    mime.body.push(attachment);
    console.log(mime.toString());
    const message = {
      Destination: {
        ToAddresses: ["creston@barkerdev.ca"],
      },
      Content: {
        Raw: {
          Data: Buffer.from(mime.toString(), "utf-8"),
        },
      },
      ReplyToAddresses: ["creston@barkerdev.ca"],
      FeedbackForwardingEmailAddress: "creston@barkerdev.ca",
      FromEmailAddress: "forms@kikapekiskwewin.ca",
    };
    const command = new SendEmailCommand(message);
    const result = await client.send(command);
    response.status(200).send(`Success, message id: ${result.MessageId}`);
  } catch (error) {
    console.log("Error: ", error);
    response.status(500).send(error);
  }
}
