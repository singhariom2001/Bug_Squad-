npm install --save-dev nodemon
npm install express mongoose cors
npm install express mongoose body-parser cors nodemon

[
    {
        "id": 1,
        "BundleId": 1,
        "BundleName": "bc",
        "Books": [
            {
                "Bookid": 1,
                "BookName": "abab",
                "ispremium": false,
                "Concurrencylimit": "1/NA"
            }
        ]
    }
],
[
    {
        "id": 1,
        "LicenseId": 1,
        "LicenseName": "bc",
        "isPaid": 1,
        "Books": [
            {
                "Bookid": 1,
                "BookName": "abab",
                "ispremium": false,
                "Concurrency": 1
            }
        ]
    }
]



POST http://localhost:5000/api/bundles
GET http://localhost:5000/api/bundles
POST http://localhost:5000/api/licenses
GET http://localhost:5000/api/licenses


{
    "id": 1,
    "BundleId": 1,
    "BundleName": "bc",
    "Books": [
        {
            "Bookid": 1,
            "BookName": "abab",
            "ispremium": false,
            "Concurrencylimit": "1/NA"
        }
    ]
}

{
    "id": 1,
    "LicenseId": 1,
    "LicenseName": "bc",
    "isPaid": true,
    "Books": [
        {
            "Bookid": 1,
            "BookName": "abab",
            "ispremium": false,
            "Concurrency": 1
        }
    ]
}