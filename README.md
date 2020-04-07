# publicwhip

## file desctiptions

- `finding_valid_session_urls.ipynb`
    - checks a range of URLs and export the list of URLs with available content to (`valid_session_urls.csv`)

- `scrape_and_export_urls_to_json.ipynb`
    - reads the list of URLs from `valid_session_urls.csv` and scrapes them and finaly exports them to a json file in `exports` directory.

- `scraping_MP_names_and_electoral_districts.ipynb`
    - scraped MP names and their respective electoral districs and exports the data to `MP_names_and_electoral_districts_10.csv`