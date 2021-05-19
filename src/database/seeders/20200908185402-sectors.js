/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const { v4: uuid } = require('uuid');

module.exports = {
  up: async (queryInterface) => {

    await queryInterface.bulkInsert('Sectors', [
      {
        "id": "44677bd4-cdab-403f-a0e6-c7a11a761812",
        "name": "Agriculture",
        "createdAt": "2020-09-10T07:28:09.387Z"
      },
      {
        "id": "9f424d72-068d-4187-9f5f-b2bcc6e97038",
        "name": "Business",
        "createdAt": "2020-09-10T07:28:09.387Z"
      },
      {
        "id": "6ff7aad8-a44b-471d-bfd0-7f303b6e7aab",
        "name": "Technology",
        "createdAt": "2020-09-10T07:28:09.387Z"
      },
      {
        "id": "9b831107-122c-4566-9944-0804d47982a6",
        "name": "Music",
        "createdAt": "2020-09-10T07:28:09.387Z"
      },
      {
        "id": "87befbb2-5973-4529-86b7-cd256d65cecb",
        "name": "Finance",
        "createdAt": "2020-09-10T07:28:09.387Z"
      },
      {
        "id": "e66fcb59-1df0-45b6-9cdc-5cfb8cc6e5b8",
        "name": "Aerospace",
        "createdAt": "2020-10-27T11:47:24.455Z"
      },
      {
        "id": "4b52918a-d882-4b73-972b-14836aef6ec8",
        "name": "Biotechnology",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "414b4102-5b68-4df8-bf36-5e024d882dfb",
        "name": "Business Products",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "1cd7f46e-e36c-4407-a2a2-eebca9a47fd0",
        "name": "Business Services",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "52cec95b-96a0-450a-8943-228c855ac254",
        "name": "Chemicals and Chemical Products",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "4a0f97f3-6990-4be0-b075-fbab4a700df9",
        "name": "Clean Technology",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "c855cf19-2a6f-4025-9ac1-9e95d8333471",
        "name": "Computers and Peripherals",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "f6f198af-70a1-4b75-b104-4a055fed86be",
        "name": "Construction",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "7ca37d6a-f4c5-4e54-a0c8-fb5b6304d7d6",
        "name": "Consulting",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "bace9b38-f9e3-45f1-bc8b-547b8819c9cf",
        "name": "Consumer Products",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "42c37dce-a9bc-4ed7-929b-2fae16d2aa35",
        "name": "Consumer Services",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "61c53155-22a6-442b-b7e7-b85c987660cb",
        "name": "Digital Marketing",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "43227733-e3af-4d75-b477-0db37f892c7a",
        "name": "Education",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "44768975-53a6-4424-a3b0-220044dc0fe4",
        "name": "Electronics / Instrumentation",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "3a3b464c-3957-4034-9f2d-65b28f14b6df",
        "name": "Fashion",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "9f0549c7-ba95-467b-97a9-9383692f0b17",
        "name": "Financial Services",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "6c954871-8eba-4ad9-8424-41093fbfd72b",
        "name": "Fintech",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "be7e1403-228d-4da0-ab6c-17c68eab0be7",
        "name": "Food and Beverage",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "f8a6d110-7581-4a7e-a43c-ef7ee7a62c31",
        "name": "Gaming",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "e81680a3-3d3d-401e-9063-6a338d4bed4d",
        "name": "Healthcare Services",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "da177a5a-0b3d-474e-9a25-a167f5d2cc7c",
        "name": "Industrial/Energy",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "10ca27ca-99c7-41d0-b911-ba21d96ccd9e",
        "name": "Internet / Web Services",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "85525fb9-e743-4787-95c6-46e6751adad6",
        "name": "IT Services",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "147b2364-277d-4532-9a1d-1bccabbbdee9",
        "name": "Legal",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "e10fc1c4-4acf-4e06-8596-7a0d9415e33d",
        "name": "Lifestyle",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "40c50166-1a01-4b8e-a91b-eb395d83c086",
        "name": "Marine",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "651532e9-ae6d-42f7-8f89-e539718ad6bb",
        "name": "Maritime/Shipping",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "8da5a971-5002-4fba-adc9-8374fc898df7",
        "name": "Marketing / Advertising",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "dd2265c6-07e0-4081-9b4b-82a71415488b",
        "name": "Media and Entertainment",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "2e5ad27a-0edb-469b-a383-75ce87f79019",
        "name": "Medical Devices and Equipment",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "9f8e4fe5-54bc-4d87-ae57-7bbd65130426",
        "name": "Mining",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "e70154cb-361d-4860-9f57-79bf5fd9b568",
        "name": "Mobile",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "900dfc1e-d4e5-4811-9aa3-7cb28155aec5",
        "name": "Nanotechnology",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "bf213a0b-24a4-4010-b32b-3d1b660d5049",
        "name": "Networking and Equipment",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "f75eee90-11a3-4a16-9f2b-78849b82eeb7",
        "name": "Oil and Gas",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "16cc42ed-b935-4af2-83b0-35e8983179fb",
        "name": "Other",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "3a1cdf37-8fb7-4c1d-a936-32f05273fc7b",
        "name": "Real Estate",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "ca93eab3-d3e2-41fd-a921-19b5d3bbdf65",
        "name": "Retailing / Distribution",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "9a0fd290-bad9-4817-9557-b0a502ed3a6a",
        "name": "Robotics",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "3add31f4-bf90-4336-be09-c96b853bd05c",
        "name": "Security",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "921629d0-205f-4bb6-8839-336fd8a7e0f5",
        "name": "Semiconductors",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "01df1a13-b591-43f4-a9c3-14f97c12fe69",
        "name": "Software",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "d513f762-8ebf-4dac-bbd8-61581f5e9afa",
        "name": "Sports",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "931f49aa-006e-4d0f-82b2-52f1366d94d4",
        "name": "Telecommunications",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "60c4cc7e-a94a-4dcf-9ae1-1fc68c44a887",
        "name": "Transportation",
        "createdAt": "2020-10-27T11:47:24.456Z"
      },
      {
        "id": "e6ca7610-0203-40ea-a8a1-fdcb1ae0e8d0",
        "name": "Travel",
        "createdAt": "2020-10-27T11:47:24.456Z"
      }
    ], {
      ignoreDuplicates: true
    });
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Sectors', null, {});


  }
};
