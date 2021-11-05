// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint no-http-verbs-in-paths-error 1`] = `

Warning: invalid Redocly API key. Use "npx @redocly/openapi-cli login" to provide your API key
validating /openapi.yaml...
[1] openapi.yaml:18:3 at #/paths/~1pet~1findByPut

path \`/pet/findByPut\` should not contain http verb put

16 |
17 | paths:
18 |   /pet/findByPut:
   |   ^^^^^^^^^^^^^^
19 |     get:
20 |       operationId: example

Error was generated by the no-http-verbs-in-paths rule.


[2] openapi.yaml:25:3 at #/paths/~1getCustomers

path \`/getCustomers\` should not contain http verb get

23 |       '200':
24 |         description: example description
25 | /getCustomers:
   | ^^^^^^^^^^^^^
26 |   get:
27 |     operationId: customerId

Error was generated by the no-http-verbs-in-paths rule.


[3] openapi.yaml:32:3 at #/paths/~1PUTImages

path \`/PUTImages\` should not contain http verb put

30 |       '200':
31 |         description: example description
32 | /PUTImages:
   | ^^^^^^^^^^
33 |   get:
34 |     operationId: imageId

Error was generated by the no-http-verbs-in-paths rule.


[4] openapi.yaml:39:3 at #/paths/~1GET-customers

path \`/GET-customers\` should not contain http verb get

37 |       '200':
38 |         description: example description
39 | /GET-customers:
   | ^^^^^^^^^^^^^^
40 |   get:
41 |     operationId: geCustomerId

Error was generated by the no-http-verbs-in-paths rule.


[5] openapi.yaml:46:3 at #/paths/~1my_post

path \`/my_post\` should not contain http verb post

44 |       '200':
45 |         description: example description
46 | /my_post:
   | ^^^^^^^^
47 |   get:
48 |     operationId: postId

Error was generated by the no-http-verbs-in-paths rule.


[6] openapi.yaml:53:3 at #/paths/~1dispute

path \`/dispute\` should not contain http verb put

51 |       '200':
52 |         description: example description
53 | /dispute:
   | ^^^^^^^^
54 |   get:
55 |     operationId: disputeId

Error was generated by the no-http-verbs-in-paths rule.


[7] openapi.yaml:60:3 at #/paths/~1input

path \`/input\` should not contain http verb put

58 |       '200':
59 |         description: example description
60 | /input:
   | ^^^^^^
61 |   get:
62 |     operationId: inputId

Error was generated by the no-http-verbs-in-paths rule.


/openapi.yaml: validated in <test>ms

❌ Validation failed with 7 errors.
run \`openapi lint --generate-ignore-file\` to add all problems to the ignore file.


`;
