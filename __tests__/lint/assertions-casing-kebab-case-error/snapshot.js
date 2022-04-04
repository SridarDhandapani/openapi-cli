// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint assertions-casing-kebab-case-error 1`] = `

validating /openapi.yaml...
[1] openapi.yaml:19:20 at #/paths/~1pet~1findByStatus/get/operationId

Operation id should be kebab-case

17 | /pet/findByStatus:
18 |   get:
19 |     operationId: GetExampleId
   |                  ^^^^^^^^^^^^
20 |     summary: summary example
21 |     tags:

Error was generated by the assertion #1 rule.


[2] openapi.yaml:19:20 at #/paths/~1pet~1findByStatus/get/operationId

Operation id should be camelCase

17 | /pet/findByStatus:
18 |   get:
19 |     operationId: GetExampleId
   |                  ^^^^^^^^^^^^
20 |     summary: summary example
21 |     tags:

Error was generated by the assertion #2 rule.


[3] openapi.yaml:31:20 at #/paths/~1pet~1findByStatus/post/operationId

Operation id should be camelCase

29 |       description: example description
30 | post:
31 |   operationId: PostExampleId
   |                ^^^^^^^^^^^^^
32 |   summary: summary example
33 |   responses:

Error was generated by the assertion #2 rule.


/openapi.yaml: validated in <test>ms

❌ Validation failed with 3 errors.
run \`openapi lint --generate-ignore-file\` to add all problems to the ignore file.


`;
