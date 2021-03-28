const settings = {
  "name": "rizfront",
  "state": {
    "frontity": {
      "url": "https://www.rizqifahma.com",
      "title": "Rizqi Fahma",
      "description": "Online Presence"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Travelling",
              "/category/travelling/"
            ],
            [
              "About Me",
              "/about-me/"
            ],
            [
              "Kerja Di Telkom",
              "/category/kerja-di-telkom/"
            ],
            [
              "Kuliah di Belanda",
              "/category/kuliah-di-belanda/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.rizqifahma.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
