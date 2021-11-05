// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint path-not-include-query-error 1`] = `

Warning: invalid Redocly API key. Use "npx @redocly/openapi-cli login" to provide your API key
validating /openapi.yaml...
[1] openapi.yaml:14:3 at #/paths/~1ping~1items?id=###

Don't put query string items in the path, they belong in parameters with \`in: query\`.

12 |
13 | paths:
14 |   '/ping/items?id=###':
   |   ^^^^^^^^^^^^^^^^^^^^
15 |     get:
16 |       operationId: getUserProfileById

Error was generated by the path-not-include-query rule.


/openapi.yaml: validated in <test>ms

❌ Validation failed with 1 error.
run \`openapi lint --generate-ignore-file\` to add all problems to the ignore file.


`;
