// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint request-response-mime-type-oas3.1-error 1`] = `

Warning: invalid Redocly API key. Use "npx @redocly/openapi-cli login" to provide your API key
validating /openapi.yaml...
[1] openapi.yaml:25:11 at #/paths/~1store~1subscribe/post/requestBody/content/application~1xml

Mime type "application/xml" is not allowed

23 | requestBody:
24 |   content:
25 |     application/xml:
   |     ^^^^^^^^^^^^^^^
26 |       schema:
27 |         type: object

Error was generated by the request-mime-type rule.


[2] openapi.yaml:51:11 at #/webhooks/newPet/post/requestBody/content/application~1xml

Mime type "application/xml" is not allowed

49 | description: request body description
50 | content:
51 |   application/xml:
   |   ^^^^^^^^^^^^^^^
52 |     schema:
53 |       type: object

Error was generated by the response-mime-type rule.


[3] openapi.yaml:63:13 at #/webhooks/newPet/post/responses/200/content/application~1xml

Mime type "application/xml" is not allowed

61 | description: response description
62 | content:
63 |   application/xml:
   |   ^^^^^^^^^^^^^^^
64 |     schema:
65 |       type: object

Error was generated by the request-mime-type rule.


/openapi.yaml: validated in <test>ms

❌ Validation failed with 3 errors.
run \`openapi lint --generate-ignore-file\` to add all problems to the ignore file.


`;
