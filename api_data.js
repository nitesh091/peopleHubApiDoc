define({ "api": [
  {
    "type": "POST",
    "url": "/api/reseller/vendors",
    "title": "Add Vendor",
    "description": "<p>Add new vendor.</p>",
    "version": "1.1.0",
    "name": "AddVendor",
    "group": "Reseller_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Reseller Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"token\" => \"Bearer Reseller's Access Token\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Vendor's Organization Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "description": "<p>Vendor's Status: Enabled or Disabled, By Default Enabled.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "vendor_contacts",
            "description": "<p>contains vendor's contact info.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>contains vendor's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>contains vendor's phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_primary",
            "description": "<p>True or False, By Default false.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "vendor_reward_type",
            "description": "<p>contains vendor's allowed reward type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "reward_method_id",
            "description": "<p>contains reward_method_id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"nitesh\",\n    \"status\": 1,\n    \"vendor_contacts\": {\n        \"email\": \"snwites3h@gmail.com\",\n        \"phone\": \"99610403239\",\n        \"is_primary\": 1\n    },\n    \"vendor_reward_types\": [{\n        \"reward_method_id\": \"1\",\n        \"status\": 1\n    },\n    {\n        \"reward_method_id\": \"2\",\n        \"status\": 1\n    },\n    {\n        \"reward_method_id\": \"3\",\n        \"status\": 1\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>cotains vednor's id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"status\": true,\n   \"data\": {\n       \"id\": 7,\n       \"name\": \"niteesh3112\",\n       \"created\": \"2016-11-09T06:20:09+00:00\",\n       \"modified\": \"2016-11-09T06:20:09+00:00\",\n       \"status\": true,\n       \"deleted\": null,\n       \"reseller_vendors\": [\n           {\n               \"id\": 7,\n               \"reseller_id\": 1,\n               \"vendor_id\": 7,\n               \"status\": true,\n               \"created\": \"2016-11-09T06:20:09+00:00\",\n               \"modified\": \"2016-11-09T06:20:09+00:00\",\n               \"reseller\": {\n                   \"id\": 1,\n                   \"uuid\": \"d6057bd3-a5b0-401c-b0ee-ad9b277d1d9d\",\n                   \"org_name\": \"twinspark123\",\n                   \"client_identifier\": \"123456789\",\n                   \"client_secret\": \"123456789\",\n                   \"security_deposit\": 1500,\n                   \"status\": true,\n                   \"created\": \"2016-11-09T06:13:03+00:00\",\n                   \"modified\": \"2016-11-09T06:13:03+00:00\",\n                   \"deleted\": null\n               }\n           }\n       ],\n       \"vendor_contacts\": [\n           {\n               \"id\": 7,\n               \"vendor_id\": 7,\n               \"email\": \"snwites3h@gmail.com\",\n               \"phone\": \"99610403239\",\n               \"is_primary\": true,\n               \"created\": \"2016-11-09T06:20:09+00:00\",\n               \"modified\": \"2016-11-09T06:20:09+00:00\"\n           }\n       ],\n       \"vendor_reward_types\": [\n           {\n               \"id\": 7,\n               \"vendor_id\": 7,\n               \"reward_method_id\": 1,\n               \"created\": \"2016-11-09T06:20:09+00:00\",\n               \"modified\": \"2016-11-09T06:20:09+00:00\",\n               \"status\": true\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Reseller/VendorsController.php",
    "groupTitle": "Reseller_Apis"
  },
  {
    "type": "DELETE",
    "url": "/api/reseller/vendors/:id",
    "title": "Delete Vendor",
    "description": "<p>Delete a vendor.</p>",
    "version": "1.1.0",
    "name": "DeleteVendor",
    "group": "Reseller_Apis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vendor's Id.</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"token\"=> \"Bearer Reseller's Access Token\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"data\": {\n        \"message\": \"Vendor deleted successfully\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Reseller/VendorsController.php",
    "groupTitle": "Reseller_Apis"
  },
  {
    "type": "POST",
    "url": "/api/reseller/token/",
    "title": "Reseller Token",
    "description": "<p>This api is used to get reseller's token.</p>",
    "version": "1.1.0",
    "name": "GetResellerToken",
    "group": "Reseller_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Basic (Base_64encode(client_secret:client_id))</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"token\" => \"Basic (Base_64encode(client_secret:client_id)\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Access token of reseller.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "expires",
            "description": "<p>contains token expiry datetime.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"status\": true,\n      \"data\": {\n          \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6IjIwMTYtMTEtMDkgMDY6MjA6MjAifQ.IXicDh41IfkZJBSvnfrZMv9L9ARkdfInOHNb4NYSFDo\",\n          \"expires\": \"2016-11-09 06:20:20\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Reseller/ResellersController.php",
    "groupTitle": "Reseller_Apis"
  },
  {
    "type": "GET",
    "url": "/api/reseller/vendors",
    "title": "Vendor's List",
    "description": "<p>Get vendor's list of a reseller.</p>",
    "version": "1.1.0",
    "name": "GetVendors",
    "group": "Reseller_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Reseller's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"token\"=> \"Bearer Reseller's Access Token\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"data\": [\n      {\n          \"id\": 1,\n          \"reseller_id\": 1,\n          \"vendor_id\": 1,\n          \"status\": true,\n          \"created\": \"2016-10-20T11:15:26+00:00\",\n          \"modified\": \"2016-10-20T11:15:26+00:00\",\n          \"vendor\": {\n              \"id\": 1,\n              \"name\": \"Vendor1\",\n              \"created\": \"2016-10-20T11:15:26+00:00\",\n              \"modified\": \"2016-10-20T11:15:26+00:00\",\n              \"status\": true,\n              \"deleted\": null,\n              \"vendor_reward_types\": [\n                  {\n                      \"id\": 3,\n                      \"vendor_id\": 1,\n                      \"reward_method_id\": 6,\n                      \"created\": \"2016-11-01T02:03:43+00:00\",\n                      \"modified\": \"2016-11-01T02:03:43+00:00\",\n                      \"status\": true,\n                      \"reward_method\": {\n                          \"id\": 6,\n                          \"name\": \"instant_redeem\",\n                          \"label\": \"Instant Redeemption\",\n                          \"status\": true,\n                          \"created\": \"2016-11-04T08:06:10+00:00\",\n                          \"modified\": \"2016-11-04T08:06:10+00:00\"\n                      }\n                  }\n              ],\n              \"vendor_contacts\": [\n                  {\n                      \"id\": 1,\n                      \"vendor_id\": 1,\n                      \"email\": \"vendor1@gmail.com\",\n                      \"phone\": \"1234567890\",\n                      \"is_primary\": true,\n                      \"created\": \"2016-10-20T11:15:26+00:00\",\n                      \"modified\": \"2016-10-20T11:15:26+00:00\"\n                  }\n              ]\n          }\n      },\n      {\n          \"id\": 2,\n          \"reseller_id\": 1,\n          \"vendor_id\": 2,\n          \"status\": true,\n          \"created\": \"2016-10-20T11:15:26+00:00\",\n          \"modified\": \"2016-10-20T11:15:26+00:00\",\n          \"vendor\": {\n              \"id\": 2,\n              \"name\": \"Vendor2\",\n              \"created\": \"2016-10-20T11:15:26+00:00\",\n              \"modified\": \"2016-10-20T11:15:26+00:00\",\n              \"status\": true,\n              \"deleted\": null,\n              \"vendor_reward_types\": [],\n              \"vendor_contacts\": [\n                  {\n                      \"id\": 2,\n                      \"vendor_id\": 2,\n                      \"email\": \"vendor2@gmail.com\",\n                      \"phone\": \"1234567890\",\n                      \"is_primary\": true,\n                      \"created\": \"2016-10-20T11:15:26+00:00\",\n                      \"modified\": \"2016-10-20T11:15:26+00:00\"\n                  }\n              ]\n          }\n      }\n    ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Reseller/VendorsController.php",
    "groupTitle": "Reseller_Apis"
  },
  {
    "type": "put",
    "url": "/api/reseller/vendors/:id",
    "title": "Update vendor detail",
    "version": "1.1.0",
    "name": "Update_vendor_detail",
    "group": "Reseller_Apis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>Vendor's Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Vendor's organizarion name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "description": "<p>Vendor's status.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "vendor_contacts",
            "description": "<p>Contain vendor contact relacted data.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Vendor's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Vendor's Phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_primary",
            "description": "<p>is primary contact.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "vendor_reward_types",
            "description": "<p>Contain vendor reward type relacted data.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "reward_method_id",
            "description": "<p>reward method's id: 1-wallet credit, 2-store credit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"nitesh1\",\n    \"status\": 1,\n    \"vendor_contacts\": {\n        \"email\": \"snwites3h@gmail.com\",\n        \"phone\": \"99343403239\",\n        \"is_primary\": 1\n    },\n    \"vendor_reward_types\": [{\n        \"reward_method_id\": \"1\",\n        \"status\": 1\n    },\n    {\n        \"reward_method_id\": \"2\",\n        \"status\": 1\n    },\n    {\n        \"reward_method_id\": \"3\",\n        \"status\": 1\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"token\" => \"Bearer Reseller's Access Token\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"status\": true,\n     \"data\": {\n         \"id\": 3,\n         \"name\": \"nitesh1\",\n         \"created\": \"2016-11-09T18:31:28+00:00\",\n         \"modified\": \"2016-11-09T18:35:47+00:00\",\n         \"status\": true,\n         \"deleted\": null,\n         \"reseller_vendors\": [\n             {\n                 \"id\": 3,\n                 \"reseller_id\": 1,\n                 \"vendor_id\": 3,\n                 \"status\": true,\n                 \"created\": \"2016-11-09T18:31:28+00:00\",\n                 \"modified\": \"2016-11-09T18:31:28+00:00\",\n                 \"reseller\": {\n                     \"id\": 1,\n                     \"uuid\": \"0fbad06c-d980-42f3-8c63-d7c1dd049acb\",\n                     \"org_name\": \"twinspark123\",\n                     \"client_identifier\": \"123456789\",\n                     \"client_secret\": \"123456789\",\n                     \"security_deposit\": 1500,\n                     \"status\": true,\n                     \"created\": \"2016-11-09T18:16:40+00:00\",\n                     \"modified\": \"2016-11-09T18:16:40+00:00\",\n                     \"deleted\": null\n                 }\n             }\n         ],\n         \"vendor_contacts\": [\n             {\n                 \"id\": 3,\n                 \"vendor_id\": 3,\n               \"email\": \"snwites3h@gmail.com\",\n               \"phone\": \"99610403239\",\n                 \"is_primary\": true,\n                 \"created\": \"2016-11-09T18:31:28+00:00\",\n                 \"modified\": \"2016-11-09T18:31:28+00:00\"\n             }\n         ],\n         \"vendor_reward_types\": [\n             {\n                 \"id\": 7,\n                 \"vendor_id\": 3,\n              \"reward_method_id\": 1,\n                 \"created\": \"2016-11-09T18:35:47+00:00\",\n                 \"modified\": \"2016-11-09T18:35:47+00:00\",\n                 \"status\": true,\n                 \"reward_method\": {\n                     \"id\": 1,\n                     \"name\": \"wallet_credit\",\n                     \"label\": \"Wallet Credit\",\n                     \"status\": true,\n                     \"created\": \"2016-11-09T18:16:40+00:00\",\n                     \"modified\": \"2016-11-09T18:16:40+00:00\"\n                 }\n             },\n             {\n                 \"id\": 8,\n                 \"vendor_id\": 3,\n                 \"reward_method_id\": 2,\n                 \"created\": \"2016-11-09T18:35:47+00:00\",\n                 \"modified\": \"2016-11-09T18:35:47+00:00\",\n                 \"status\": true,\n                 \"reward_method\": {\n                     \"id\": 2,\n                     \"name\": \"store_credit\",\n                     \"label\": \"Store Credit\",\n                     \"status\": true,\n                     \"created\": \"2016-11-09T18:16:40+00:00\",\n                     \"modified\": \"2016-11-09T18:16:40+00:00\"\n                 }\n             },\n           {\n               \"id\": 9,\n                 \"vendor_id\": 3,\n                 \"reward_method_id\": 3,\n                 \"created\": \"2016-11-09T18:35:47+00:00\",\n                 \"modified\": \"2016-11-09T18:35:47+00:00\",\n                 \"status\": true,\n                 \"reward_method\": {\n                     \"id\": 3,\n                     \"name\": \"instant_redeem\",\n                     \"label\": \"Instant Redeemption\",\n                     \"status\": true,\n                     \"created\": \"2016-11-09T18:16:40+00:00\",\n                     \"modified\": \"2016-11-09T18:16:40+00:00\"\n                 }\n             }\n         ]\n   }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Reseller/VendorsController.php",
    "groupTitle": "Reseller_Apis"
  },
  {
    "type": "GET",
    "url": "/api/reseller/vendors/:id",
    "title": "View Vendor's Detail",
    "description": "<p>View Vendor's Detail.</p>",
    "version": "1.1.0",
    "name": "ViewVendorDetail",
    "group": "Reseller_Apis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vendor's Id.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Reseller's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"token\" => \"Bearer Reseller's Access Token\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"response\":\n    {\n        \"status\": true,\n        \"data\":\n        {\n            \"id\": 1,\n            \"name\": \"Vendor1\",\n            \"created\": \"2016-10-20T11:15:26+00:00\",\n            \"modified\": \"2016-10-20T11:15:26+00:00\",\n            \"status\": true,\n            \"deleted\": null,\n            \"vendor_reward_types\":\n            [\n                {\n                    \"id\": 3,\n                    \"vendor_id\": 1,\n                    \"reward_method_id\": 6,\n                    \"created\": \"2016-11-01T02:03:43+00:00\",\n                    \"modified\": \"2016-11-01T02:03:43+00:00\",\n                    \"status\": true,\n                    \"reward_method\":\n                    {\n                        \"id\": 6,\n                        \"name\": \"instant_redeem\",\n                        \"label\": \"Instant Redeemption\",\n                        \"status\": true,\n                        \"created\": \"2016-11-04T08:06:10+00:00\",\n                        \"modified\": \"2016-11-04T08:06:10+00:00\"\n                    }\n                }\n            ],\n            \"vendor_contacts\":\n            [\n                {\n                    \"id\": 1,\n                    \"vendor_id\": 1,\n                    \"email\": \"vendor1@gmail.com\",\n                    \"phone\": \"1234567890\",\n                    \"is_primary\": true,\n                    \"created\": \"2016-10-20T11:15:26+00:00\",\n                    \"modified\": \"2016-10-20T11:15:26+00:00\"\n                }\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Reseller/VendorsController.php",
    "groupTitle": "Reseller_Apis"
  },
  {
    "type": "POST",
    "url": "/api/user/register",
    "title": "Registrer new User",
    "description": "<p>Registrer new User.</p>",
    "version": "1.1.0",
    "name": "RegisterNewUser",
    "group": "User_Apis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>contains user's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>contains user's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>contains user's phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "description": "<p>Vendor's Status: Enabled or Disabled, By Default Enabled.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>cotains user's id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"response\": {\n        \"status\": true,\n        \"data\": {\n            \"id\": 11\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/User/UsersController.php",
    "groupTitle": "User_Apis"
  },
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "Login User",
    "version": "1.1.0",
    "name": "login",
    "group": "User_Apis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users Password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Auth Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"response\": {\n               \"status\": true,\n               \"data\": {\n                        \"id\": 7,\n                        \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjcsImV4cCI6MTQ3MDc0NDI5MX0.i1Jxt5__1oOlmltXoOVIC-17f4rM48nl4uzkahWmU1c\"\n                       }\n             }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/User/UsersController.php",
    "groupTitle": "User_Apis"
  },
  {
    "type": "post",
    "url": "/users/logout",
    "title": "Logout User",
    "version": "1.1.0",
    "name": "logout",
    "group": "User_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>users's Access Token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"response\": {\n\"status\": true,\n\"data\": {\n       \"message\": \"User Logged out Successfully\"\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/User/UsersController.php",
    "groupTitle": "User_Apis"
  },
  {
    "type": "POST",
    "url": "/api/vendor/token/",
    "title": "Vendor's Token",
    "description": "<p>This api is used to get vendor's token.</p>",
    "version": "1.1.0",
    "name": "GetVendorToken",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Basic (Base_64encode(client_secret:client_id))</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"token\" => \"Basic (Base_64encode(client_secret:client_id)\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Vendor's id to login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"vendor_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Access token of reseller.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "expires",
            "description": "<p>contains token expiry datetime.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": true,\n     \"data\": {\n         \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6IjIwMTYtMTEtMDkgMTk6Mjk6NTkifQ.H49zPcPJi1IREsLMnRQlLRkN0_olr9I2ccKWQXIdw4Y\",\n         \"expires\": \"2016-11-09 19:29:59\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/VendorsController.php",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "POST",
    "url": "/api/vendor/add-user",
    "title": "Registrer new User",
    "description": "<p>Registrer new User.</p>",
    "version": "1.1.0",
    "name": "RegisterNewUser",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"token\" => \"Bearer Vendor's Access Token\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>contains user's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>contains user's phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "description": "<p>Vendor's Status: Enabled or Disabled, By Default Enabled.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\" : \"nikhil\",\n  \"email\" : \"nikhil11@gmail.com\",\n  \"phone\" : \"7894562313\",\n  \"username\":\"asdfffe2\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>cotains user's id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"status\": true,\n    \"data\": {\n        \"name\": \"nikhil\",\n        \"email\": \"nikhil11@gmail.com\",\n        \"phone\": \"7894562313\",\n        \"username\": \"asdfffe2\",\n        \"uuid\": \"d9b7f23c-f19c-48c9-a101-081b93b62b2a\",\n        \"created\": \"2016-11-09T19:26:05+00:00\",\n        \"modified\": \"2016-11-09T19:26:05+00:00\",\n        \"id\": 6\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/VendorsController.php",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "GET",
    "url": "/api/vendor/user-search",
    "title": "Search User",
    "description": "<p>Search User.</p>",
    "version": "1.1.0",
    "name": "SearchUser",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"token\" => \"Bearer Vendor's Access Token\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attributeType",
            "description": "<p>can be email, username, phone, card</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>contains search key.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://peoplehub.twinspark.co/api/vendor/user-search?attributeType=username&value=test"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"response\": {\n        \"status\": true,\n        \"data\": {\n            \"users\": [\n                {\n                    \"id\": 2,\n                    \"uuid\": \"c5479454-ee9c-4761-81cf-ff09c09dd078\",\n                    \"name\": \"Test User 1\",\n                    \"email\": null,\n                    \"phone\": null,\n                    \"role_id\": 2,\n                    \"created\": \"2016-10-20T11:15:26+00:00\",\n                    \"modified\": \"2016-10-20T11:15:26+00:00\",\n                    \"status\": true,\n                    \"username\": \"testuser1\",\n                    \"isEmailVerified\": false,\n                    \"user_cards\": []\n                },\n                {\n                    \"id\": 3,\n                    \"uuid\": \"89bc68e9-44d4-4702-84b3-9e574563db64\",\n                    \"name\": \"Test User 2\",\n                    \"email\": null,\n                    \"phone\": null,\n                    \"role_id\": 2,\n                    \"created\": \"2016-10-20T11:15:26+00:00\",\n                    \"modified\": \"2016-10-20T11:15:26+00:00\",\n                    \"status\": true,\n                    \"username\": \"testuser2\",\n                    \"isEmailVerified\": false,\n                    \"user_cards\": []\n                },\n                {\n                    \"id\": 4,\n                    \"uuid\": \"5f815c0c-c4ca-4e89-82be-d889254b374e\",\n                    \"name\": \"Test User 3\",\n                    \"email\": null,\n                    \"phone\": null,\n                    \"role_id\": 2,\n                    \"created\": \"2016-10-20T11:15:26+00:00\",\n                    \"modified\": \"2016-10-20T11:15:26+00:00\",\n                    \"status\": true,\n                    \"username\": \"testuser3\",\n                    \"isEmailVerified\": false,\n                    \"user_cards\": []\n                },\n                {\n                    \"id\": 5,\n                    \"uuid\": \"3e5b110a-3565-4338-815e-268b853984b3\",\n                    \"name\": \"Test User 4\",\n                    \"email\": null,\n                    \"phone\": null,\n                    \"role_id\": 2,\n                    \"created\": \"2016-10-20T11:15:26+00:00\",\n                    \"modified\": \"2016-10-20T11:15:26+00:00\",\n                    \"status\": true,\n                    \"username\": \"testuser4\",\n                    \"isEmailVerified\": false,\n                    \"user_cards\": []\n                }\n            ],\n            \"unassociatedUsers\": []\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/VendorsController.php",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "put",
    "url": "/api/vendor/vendors/",
    "title": "Update vendor's detail",
    "version": "1.1.0",
    "name": "Update_Vendor_s_detail",
    "group": "Vendor_Apis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>Vendor's Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Vendor's organizarion name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "description": "<p>Vendor's status.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "vendor_contacts",
            "description": "<p>Contain vendor contact relacted data.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Vendor's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Vendor's Phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_primary",
            "description": "<p>is primary contact.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "vendor_reward_types",
            "description": "<p>Contain vendor reward type relacted data.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "reward_method_id",
            "description": "<p>reward method's id: 1-wallet credit, 2-store credit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"nitesh1\",\n    \"status\": 1,\n    \"vendor_contacts\": {\n        \"email\": \"snwites3h@gmail.com\",\n        \"phone\": \"99343403239\",\n        \"is_primary\": 1\n    },\n    \"vendor_reward_types\": [{\n        \"reward_method_id\": \"1\",\n        \"status\": 1\n    },\n    {\n        \"reward_method_id\": \"2\",\n        \"status\": 1\n    },\n    {\n        \"reward_method_id\": \"3\",\n        \"status\": 1\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"token\" => \"Bearer Vendor's Access Token\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": true,\n    \"data\": {\n        \"id\": 3,\n        \"name\": \"nitesh1\",\n        \"created\": \"2016-11-09T18:31:28+00:00\",\n        \"modified\": \"2016-11-09T18:35:47+00:00\",\n        \"status\": true,\n        \"deleted\": null,\n        \"reseller_vendors\": [\n            {\n                \"id\": 3,\n                \"reseller_id\": 1,\n                \"vendor_id\": 3,\n                \"status\": true,\n                \"created\": \"2016-11-09T18:31:28+00:00\",\n                \"modified\": \"2016-11-09T18:31:28+00:00\",\n                \"reseller\": {\n                    \"id\": 1,\n                    \"uuid\": \"0fbad06c-d980-42f3-8c63-d7c1dd049acb\",\n                    \"org_name\": \"twinspark123\",\n                    \"client_identifier\": \"123456789\",\n                    \"client_secret\": \"123456789\",\n                    \"security_deposit\": 1500,\n                    \"status\": true,\n                    \"created\": \"2016-11-09T18:16:40+00:00\",\n                    \"modified\": \"2016-11-09T18:16:40+00:00\",\n                    \"deleted\": null\n                }\n            }\n        ],\n        \"vendor_contacts\": [\n            {\n                \"id\": 3,\n                \"vendor_id\": 3,\n              \"email\": \"snwites3h@gmail.com\",\n              \"phone\": \"99610403239\",\n                \"is_primary\": true,\n                \"created\": \"2016-11-09T18:31:28+00:00\",\n                \"modified\": \"2016-11-09T18:31:28+00:00\"\n            }\n        ],\n        \"vendor_reward_types\": [\n            {\n                \"id\": 7,\n                \"vendor_id\": 3,\n             \"reward_method_id\": 1,\n                \"created\": \"2016-11-09T18:35:47+00:00\",\n                \"modified\": \"2016-11-09T18:35:47+00:00\",\n                \"status\": true,\n                \"reward_method\": {\n                    \"id\": 1,\n                    \"name\": \"wallet_credit\",\n                    \"label\": \"Wallet Credit\",\n                    \"status\": true,\n                    \"created\": \"2016-11-09T18:16:40+00:00\",\n                    \"modified\": \"2016-11-09T18:16:40+00:00\"\n                }\n            },\n            {\n                \"id\": 8,\n                \"vendor_id\": 3,\n                \"reward_method_id\": 2,\n                \"created\": \"2016-11-09T18:35:47+00:00\",\n                \"modified\": \"2016-11-09T18:35:47+00:00\",\n                \"status\": true,\n                \"reward_method\": {\n                    \"id\": 2,\n                    \"name\": \"store_credit\",\n                    \"label\": \"Store Credit\",\n                    \"status\": true,\n                    \"created\": \"2016-11-09T18:16:40+00:00\",\n                    \"modified\": \"2016-11-09T18:16:40+00:00\"\n                }\n            },\n          {\n              \"id\": 9,\n                \"vendor_id\": 3,\n                \"reward_method_id\": 3,\n                \"created\": \"2016-11-09T18:35:47+00:00\",\n                \"modified\": \"2016-11-09T18:35:47+00:00\",\n                \"status\": true,\n                \"reward_method\": {\n                    \"id\": 3,\n                    \"name\": \"instant_redeem\",\n                    \"label\": \"Instant Redeemption\",\n                    \"status\": true,\n                    \"created\": \"2016-11-09T18:16:40+00:00\",\n                    \"modified\": \"2016-11-09T18:16:40+00:00\"\n                }\n            }\n        ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/VendorsController.php",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "GET",
    "url": "/api/vendor/rewardCredits/",
    "title": "Get all available rewards and detail",
    "version": "1.1.0",
    "name": "get_all_reward_credits",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Vendor's Access Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n  \"response\": {\n      \"status\": true,\n     \"data\": {\n          \"id\": 2,\n          \"total_credits\": [\n              {\n                  \"name\": \"wallet_credit\",\n                  \"value\": 1100,\n                  \"label\": \"Wallet Credit\"\n              },\n              {\n                  \"name\": \"store_credit\",\n                  \"value\": 1100,\n                  \"label\": \"Store Credit\"\n              }\n          ],\n          \"user_credits\": [\n              {\n                  \"id\": 1,\n                  \"vendor_id\": 1,\n                  \"user_id\": 2,\n                  \"attribute\": \"78945613\",\n                  \"attribute_type\": \"phone\",\n                  \"points\": 500,\n                  \"vendor_reward_type_id\": 1,\n                  \"created\": \"2016-08-11T11:11:41+0000\",\n                  \"modified\": \"2016-08-11T11:11:45+0000\",\n                  \"vendor_reward_type\": {\n                      \"id\": 1,\n                      \"vendor_id\": 1,\n                      \"reward_method_id\": 1,\n                      \"created\": \"2016-08-11T11:04:43+0000\",\n                      \"modified\": \"2016-08-11T11:04:43+0000\",\n                      \"status\": true,\n                      \"reward_method\": {\n                          \"id\": 1,\n                          \"name\": \"wallet_credit\",\n                          \"label\": \"Wallet Credit\",\n                          \"status\": true,\n                          \"created\": \"2016-08-11T11:04:05+0000\",\n                          \"modified\": \"2016-08-11T11:04:05+0000\"\n                      }\n                  },\n                  \"vendor\": {\n                      \"id\": 1,\n                      \"name\": \"nitesh121\",\n                      \"created\": \"2016-08-11T11:04:43+0000\",\n                      \"modified\": \"2016-08-11T11:04:43+0000\",\n                      \"status\": true,\n                      \"deleted\": null\n                  }\n              },\n              {\n                  \"id\": 2,\n                  \"vendor_id\": 2,\n                  \"user_id\": 2,\n                \"attribute\": \"78945613\",\n                  \"attribute_type\": \"phone\",\n                  \"points\": 1100,\n                  \"vendor_reward_type_id\": 2,\n                  \"created\": \"2016-08-11T11:12:16+0000\",\n                  \"modified\": \"2016-08-11T11:12:20+0000\",\n                  \"vendor_reward_type\": {\n                      \"id\": 2,\n                      \"vendor_id\": 2,\n                      \"reward_method_id\": 1,\n                      \"created\": \"2016-08-11T11:12:07+0000\",\n                      \"modified\": \"2016-08-11T11:12:07+0000\",\n                      \"status\": true,\n                     \"reward_method\": {\n                          \"id\": 1,\n                          \"name\": \"wallet_credit\",\n                          \"label\": \"Wallet Credit\",\n                          \"status\": true,\n                          \"created\": \"2016-08-11T11:04:05+0000\",\n                          \"modified\": \"2016-08-11T11:04:05+0000\"\n                      }\n                  },\n                  \"vendor\": {\n                      \"id\": 2,\n                      \"name\": \"nitesh\",\n                      \"created\": \"2016-08-11T11:12:07+0000\",\n                      \"modified\": \"2016-08-11T11:12:07+0000\",\n                      \"status\": true,\n                      \"deleted\": null\n                  }\n            }\n         }\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/RewardCreditsController.php",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "POST",
    "url": "/api/vendor/UserInstantRedemptions/",
    "title": "instant redemption",
    "description": "<p>This api is used to redeem instantly.</p>",
    "version": "1.1.0",
    "name": "provideInstantRedemptions",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"token\" => \"Bearer Vendor's Access Token",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "amount",
            "optional": false,
            "field": "amount",
            "description": "<p>instant redeem amount.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>User's Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>service name amazon/tango/in_house to redeem reward</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description of redemtion, required if service is in_house else not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"amount\":\"100\",\n  \"user_id\":1,\n  \"description\":\"t-shirt\",\n  \"service\":\"in_house\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>redemption Id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": true,\n   \"data\": {\n       \"id\": 10,\n       \"message\": \"Reward offered successfully\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/UserInstantRedemptionsController.php",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "post",
    "url": "/api/vendor/rewardCredits/",
    "title": "Reward Credit to user",
    "version": "1.1.0",
    "name": "rewardCreditToUser",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Vendor's Access Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "attribute_type",
            "description": "<p>attribute type: can be email or phone or card.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "attribute",
            "description": "<p>value of attribute type.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "points",
            "description": "<p>reward to credit.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reward_type",
            "description": "<p>: can be wallet_credit or reward_credit.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n {\n     \"response\": {\n         \"status\": true,\n         \"message\": \"Reward offered successfully\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/RewardCreditsController.php",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "GET",
    "url": "/api/vendor/UserInstantRedemptions/",
    "title": "view all instant redemptions",
    "description": "<p>This api is used to view all instant redemptions.</p>",
    "version": "1.1.0",
    "name": "viewInstantRedemptions",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"token\" => \"Bearer Vendor's Access Token",
          "type": "php"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://peoplehub.twinspark.co/api/vendor/UserInstantRedemptions/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n\"response\": {\n    \"status\": true,\n    \"data\": [\n        {\n            \"id\": 1,\n            \"service_id\": 2,\n            \"description\": \"asadd\",\n            \"vendor_id\": 1,\n            \"user_id\": 1,\n            \"amount\": 100,\n            \"created\": \"2016-11-04T08:31:43+00:00\",\n            \"modified\": \"2016-11-04T08:31:43+00:00\",\n            \"deleted\": null,\n            \"status\": true,\n            \"service\": {\n                \"id\": 2,\n                \"name\": \"tango\",\n                \"label\": \"Tango Card\",\n                \"status\": true,\n                \"created\": \"2016-10-20T11:15:26+00:00\",\n                \"modified\": \"2016-10-20T11:15:26+00:00\"\n            },\n            \"user\": {\n                \"id\": 1,\n                \"uuid\": \"88e4bc36-a680-4a25-9b99-d125a82e3f22\",\n                \"name\": \"admin\",\n                \"email\": \"nitesh.srivastava@twinspark.co\",\n                \"phone\": null,\n                \"role_id\": 1,\n                \"created\": \"2016-10-20T11:15:25+00:00\",\n                \"modified\": \"2016-10-20T11:15:25+00:00\",\n                \"status\": true,\n                \"username\": \"admin\",\n                \"isEmailVerified\": false\n            }\n        }\n      ]\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/UserInstantRedemptionsController.php",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "get",
    "url": "/api/vendor/me",
    "title": "View Loggedin Vendor's Info",
    "version": "1.1.0",
    "name": "viewVendorDetail",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"token\" => \"Bearer Vendor's Access Token\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n\"response\": {\n           \"status\": true,\n           \"data\": {\n               \"id\": 10,\n               \"name\": \"nitesh\",\n               \"created\": \"2016-08-10T09:58:29+0000\",\n               \"modified\": \"2016-08-10T09:58:29+0000\",\n               \"status\": true,\n               \"vendor_reward_types\": [\n                   {\n                       \"id\": 4,\n                       \"vendor_id\": 10,\n                       \"reward_method_id\": 1,\n                       \"created\": \"2016-08-10T09:58:29+0000\",\n                       \"modified\": \"2016-08-10T09:58:29+0000\",\n                       \"status\": true,\n                       \"reward_method\": {\n                           \"id\": 1,\n                           \"name\": \"wallet_credit\",\n                           \"label\": \"Wallet Credit\",\n                           \"status\": true,\n                           \"created\": \"2016-08-10T06:11:13+0000\",\n                           \"modified\": \"2016-08-10T06:11:13+0000\"\n                       }\n                   }\n               ],\n               \"vendor_contacts\": [\n                   {\n                       \"id\": 4,\n                       \"vendor_id\": 10,\n                       \"email\": \"nitesh@gmail.com\",\n                       \"phone\": \"991110032449\",\n                       \"is_primary\": true,\n                       \"created\": \"2016-08-10T09:58:29+0000\",\n                       \"modified\": \"2016-08-10T09:58:29+0000\"\n                   }\n               ]\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/VendorsController.php",
    "groupTitle": "Vendor_Apis"
  }
] });
