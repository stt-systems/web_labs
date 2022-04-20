# Fill inputs using URL parameters

Allows to receive parameters by URL and replace them in the inputs that have the same id.

Try it: 👉 [Online demo](https://raw.githack.com/stt-systems/web_labs/main/fill_using_url_parameters/demo.html)

## Quick example

Fill any desired input ID using the URL parameters:

[https://raw.githack.com/stt-systems/web_labs/main/fill_using_url_parameters/demo.html?name=RDCH106&dongle=H0000-L0000&email=my%40email.com&description=Lorem+ipsum+dolor+sit+amet%2C...](https://raw.githack.com/stt-systems/web_labs/main/fill_using_url_parameters/demo.html?name=RDCH106&dongle=H0000-L0000&email=my%40email.com&description=Lorem+ipsum+dolor+sit+amet%2C...)

The IDs used for the above example are:
- name
- dongle
- email
- description

👀 Take a look at RFC-17387 standard for the correct URL encoding: [https://github.com/RDCH106/Simple-RFC1738-Encoder](https://github.com/RDCH106/Simple-RFC1738-Encoder)
