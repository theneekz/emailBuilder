// multiple addresses must be separated by a semicolon and a space
let to = 'niko@test.com';
let subject = 'Test';
let bcc = 'niko@spy.com';
// use \n to start a new line
let body = 'Test body with spaces and punctuation. \nWhat a world!';

let httpResult = 'https://mail.google.com/mail/?view=cm&fs=1&';
let emailResult = 'mailto:';

if (to.length) {
  let toWithoutSpaces = to.split(' ').join('%20');
  httpResult += 'to=' + toWithoutSpaces + '&';
  emailResult += toWithoutSpaces + '?';
}

if (subject.length) {
  let subjectWithoutSpaces = subject.split(' ').join('%20');
  httpResult += 'su=' + subjectWithoutSpaces + '&';
  emailResult += 'subject=' + subjectWithoutSpaces + '&';
}

if (bcc.length) {
  let bccWithoutSpaces = bcc.split(' ').join('%20');
  httpResult += 'bcc=' + bccWithoutSpaces + '&';
  emailResult += 'bcc=' + bccWithoutSpaces + '&';
}

if (body.length) {
  let bodyWithoutSpaces = body.split(' ').join('%20').split('\n').join('%0A');
  httpResult += 'body=' + bodyWithoutSpaces + '&';
  emailResult += 'body=' + bodyWithoutSpaces;
}

console.log('-------------------');
console.log('HTTP Link: ' + httpResult);
console.log('-------------------');
console.log('Email Link: ' + emailResult);
console.log('-------------------');

return;
