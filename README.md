# Email http and mailto Link Builder

## Creates an email draft out of a clicked link

To start run:
`git clone https://github.com/theneekz/emailBuilder.git`

Enter the directory by running:
`cd emailBuilder`

Open the file emailMaker.js with your preferred command. I use:
`code emailMaker.js`

Change the "To", "Subject", "Bcc", or "Body" fields using the corresponding variables.

```javascript
let to = "customerservice@mycompany.com; shipping@mycompany.com"
let subject = "Failed Delivery"
let bcc = "marketing@mycompany.com"
let body = "Dear MyCompany, \nMy order failed to ship! /nSincerely,\nUser
```

### to

`email` addresses must be one string separated by semicolons and a space.

### subject

`subject` must be a string.

### bcc

`bcc` email addresses must be one string separated by semicolons and a space.

### body

`body` must be one string that can use \n where a new line is needed.

Most special characters probably will not be supported in the body.

Save your changes and run:
`node emailMaker.js`
and you will receive an http link as well as a mailto link in your console.
Feel free to return one or the other instead in your own code.
